use mom

CREATE TABLE MeetingType (
    MeetingTypeID     INT AUTO_INCREMENT PRIMARY KEY,
    MeetingTypeName   VARCHAR(100) NOT NULL,
    Remarks           VARCHAR(255),
    Created           DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Modified          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                      ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE Meetings (
    MeetingID             INT AUTO_INCREMENT PRIMARY KEY,
    MeetingDate           DATETIME NOT NULL,
    MeetingTypeID         INT NOT NULL,
    MeetingDescription    VARCHAR(255),
    DocumentPath          VARCHAR(255),
    Created               DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Modified              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                          ON UPDATE CURRENT_TIMESTAMP,
    IsCancelled           TINYINT(1) NOT NULL DEFAULT 0,
    CancellationDateTime  DATETIME NULL,
    CancellationReason    VARCHAR(255),

    CONSTRAINT fk_meetings_meetingtype
      FOREIGN KEY (MeetingTypeID)
      REFERENCES MeetingType(MeetingTypeID)
      ON UPDATE CASCADE
      ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE Staff (
    StaffID        INT AUTO_INCREMENT PRIMARY KEY,
    StaffName      VARCHAR(150) NOT NULL,
    MobileNo       VARCHAR(20),
    EmailAddress   VARCHAR(150),
    Remarks        VARCHAR(255),
    Created        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Modified       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                   ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE MeetingMember (
    MeetingMemberID  INT AUTO_INCREMENT PRIMARY KEY,
    MeetingID        INT NOT NULL,
    StaffID          INT NOT NULL,
    IsPresent        TINYINT(1) NOT NULL DEFAULT 0,
    Remarks          VARCHAR(255),
    Created          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Modified         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                     ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_meetingmember_meeting
      FOREIGN KEY (MeetingID)
      REFERENCES Meetings(MeetingID)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

    CONSTRAINT fk_meetingmember_staff
      FOREIGN KEY (StaffID)
      REFERENCES Staff(StaffID)
      ON UPDATE CASCADE
      ON DELETE RESTRICT
) ENGINE=InnoDB;

INSERT INTO MeetingType (MeetingTypeName, Remarks) VALUES
('Team Meeting', 'Internal team discussion'),
('Client Meeting', 'Meeting with client'),
('Management', 'Management level meeting');

INSERT INTO Staff (StaffName, MobileNo, EmailAddress, Remarks) VALUES
('John Doe', '9876543210', 'john.doe@company.com', 'Project Manager'),
('Jane Smith', '9876501234', 'jane.smith@company.com', 'Client Coordinator'),
('ABC Corp', '02233445566', 'contact@abccorp.com', 'External Client'),
('Rahul Patel', '9898989898', 'rahul.patel@company.com', 'Developer'),
('Neha Shah', '9797979797', 'neha.shah@company.com', 'Tester');


INSERT INTO Meetings 
(MeetingDate, MeetingTypeID, MeetingDescription, DocumentPath, IsCancelled)
VALUES
('2026-01-07 10:00:00', 1, 'Sprint Planning – Module 3', '/docs/sprint_planning_m3.pdf', 0),

('2026-01-06 16:00:00', 2, 'Client Demo – Release 1.2', '/docs/client_demo_r1_2.pdf', 0),

('2026-01-05 11:30:00', 3, 'Department Budget Review', '/docs/budget_review.pdf', 0);


INSERT INTO MeetingMember (MeetingID, StaffID, IsPresent, Remarks) VALUES
-- Sprint Planning – Module 3
(1, 1, 1, 'Meeting Owner'),
(1, 4, 1, 'Participated actively'),
(1, 5, 0, 'On leave'),

-- Client Demo – Release 1.2
(2, 2, 1, 'Presented demo'),
(2, 3, 1, 'Client representative'),
(2, 4, 1, 'Handled technical queries'),

-- Department Budget Review
(3, 1, 1, 'Presented budget'),
(3, 2, 1, 'Notes taken'),
(3, 5, 1, 'Reviewed expenses');
