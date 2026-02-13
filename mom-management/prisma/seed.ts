import { PrismaClient } from '../lib/generated/prisma/client'
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nency@0707",
    database: "mom",
    connectionLimit: 5
})
const prisma = new PrismaClient({ adapter });

async function main() {
    // Clear existing data
    await prisma.meetingMember.deleteMany();
    await prisma.meetings.deleteMany();
    await prisma.staff.deleteMany();
    await prisma.meetingType.deleteMany();

    await prisma.meetingType.createMany({
        data: [
            { MeetingTypeName: 'Team Meeting', Remarks: 'Internal team discussion' },
            { MeetingTypeName: 'Client Meeting', Remarks: 'Meeting with client' },
            { MeetingTypeName: 'Management', Remarks: 'Management level meeting' },
        ],
    });

    const meetingTypes = await prisma.meetingType.findMany();
    const mtTeam = meetingTypes.find(mt => mt.MeetingTypeName === 'Team Meeting');
    const mtClient = meetingTypes.find(mt => mt.MeetingTypeName === 'Client Meeting');
    const mtMgmt = meetingTypes.find(mt => mt.MeetingTypeName === 'Management');

    await prisma.staff.createMany({
        data: [
            { StaffName: 'Admin User', MobileNo: '0000000000', EmailAddress: 'admin@mom.com', Password: 'admin', Role: 'ADMIN', Remarks: 'System Admin' },
            { StaffName: 'John Doe', MobileNo: '9876543210', EmailAddress: 'john@mom.com', Password: 'user', Role: 'USER', Remarks: 'Project Manager' },
            { StaffName: 'Jane Smith', MobileNo: '9876501234', EmailAddress: 'jane@mom.com', Password: 'user', Role: 'USER', Remarks: 'Client Coordinator' },
            { StaffName: 'Rahul Patel', MobileNo: '9898989898', EmailAddress: 'rahul@mom.com', Password: 'user', Role: 'USER', Remarks: 'Developer' },
            { StaffName: 'Neha Shah', MobileNo: '9797979797', EmailAddress: 'neha@mom.com', Password: 'user', Role: 'USER', Remarks: 'Tester' },
        ],
    });

    const staffMembers = await prisma.staff.findMany();
    const admin = staffMembers.find(s => s.EmailAddress === 'admin@mom.com');
    const john = staffMembers.find(s => s.EmailAddress === 'john@mom.com');
    const jane = staffMembers.find(s => s.EmailAddress === 'jane@mom.com');
    const rahul = staffMembers.find(s => s.EmailAddress === 'rahul@mom.com');
    const neha = staffMembers.find(s => s.EmailAddress === 'neha@mom.com');

    if (mtTeam && john && rahul && neha) {
        await prisma.meetings.create({
            data: {
                MeetingDate: new Date('2026-01-07T10:00:00'),
                MeetingTypeID: mtTeam.MeetingTypeID,
                MeetingDescription: 'Sprint Planning – Module 3',
                DocumentPath: '/docs/sprint_planning_m3.pdf',
                IsCancelled: false,
                MeetingMember: {
                    create: [
                        { StaffID: john.StaffID, IsPresent: true, Remarks: 'Meeting Owner' },
                        { StaffID: rahul.StaffID, IsPresent: true, Remarks: 'Participated actively' },
                        { StaffID: neha.StaffID, IsPresent: false, Remarks: 'On leave' },
                    ]
                }
            }
        });
    }

    if (mtClient && jane && john && rahul) {
        await prisma.meetings.create({
            data: {
                MeetingDate: new Date('2026-01-06T16:00:00'),
                MeetingTypeID: mtClient.MeetingTypeID,
                MeetingDescription: 'Client Demo – Release 1.2',
                DocumentPath: '/docs/client_demo_r1_2.pdf',
                IsCancelled: false,
                MeetingMember: {
                    create: [
                        { StaffID: jane.StaffID, IsPresent: true, Remarks: 'Presented demo' },
                        { StaffID: john.StaffID, IsPresent: true, Remarks: 'Client representative' },
                        { StaffID: rahul.StaffID, IsPresent: true, Remarks: 'Handled technical queries' },
                    ]
                }
            }
        });
    }

    if (mtMgmt && john && jane && neha) {
        await prisma.meetings.create({
            data: {
                MeetingDate: new Date('2026-01-05T11:30:00'),
                MeetingTypeID: mtMgmt.MeetingTypeID,
                MeetingDescription: 'Department Budget Review',
                DocumentPath: '/docs/budget_review.pdf',
                IsCancelled: false,
                MeetingMember: {
                    create: [
                        { StaffID: john.StaffID, IsPresent: true, Remarks: 'Presented budget' },
                        { StaffID: jane.StaffID, IsPresent: true, Remarks: 'Notes taken' },
                        { StaffID: neha.StaffID, IsPresent: true, Remarks: 'Reviewed expenses' },
                    ]
                }
            }
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
