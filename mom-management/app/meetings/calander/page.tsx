'use client';

export default function Calendar() {
    // FIXED: Static data - no hydration mismatch
    const cardBlue = {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #020617 100%)',
        color: '#e5e7eb'
    };
    const headerBlue = { backgroundColor: '#0f172a', color: '#e5e7eb' };
    const accentYellow = '#eab308';
    const primaryBlue = '#1d4ed8';

    // STATIC DATE - FIXED Hydration
    const STATIC_DATE = "Sunday, January 11, 2026";

    // STATIC EVENTS DATA - No random/math
    const staticEvents: { [key: number]: number } = {
        5: 1, 18: 2, 22: 3, 25: 2, 28: 1, 32: 2, 35: 1
    };
    const eventTitles = ['Sprint Plan', 'Client Call', 'Team Sync', 'Budget Review'];
    const eventColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

    const upcomingMeetings = [
        {
            id: "MOM-2045", title: "Sprint Review Module 4", time: "Tomorrow 10:00 AM",
            date: "12 Jan 2026", type: "Team Meeting", attendees: 12, color: "#3b82f6"
        },
        {
            id: "MOM-2044", title: "Client Feedback UI/UX", time: "Today 2:30 PM",
            date: "11 Jan 2026", type: "Client Meeting", attendees: 6, color: "#10b981"
        }
    ];

    const todayMeetings = upcomingMeetings.filter(m => m.date === "11 Jan 2026");

    return (
        <div className="py-4 py-md-5">
            {/* Header */}
            <div className="row g-4 mb-5">
                <div className="col-lg-8">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                        <div style={{ height: 'auto' }}>
                            <h1 className="h4 fw-bold text-dark">
                                <i className="bi bi-calendar3-week text-primary me-2"></i>Meeting Calendar
                            </h1>
                            <p className="text-muted">Professional scheduling overview</p>
                        </div>
                        <div className="mt-md-0">
                            <div className="btn-group shadow-sm" role="group" style={{ borderRadius: '10px' }}>
                                <button className="btn btn-outline-primary btn-sm border-0">
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <button className="btn btn-primary btn-sm fw-bold px-4 shadow-sm">
                                    January 2026
                                </button>
                                <button className="btn btn-outline-primary btn-sm border-0">
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg h-100">
                        <div className="card-body p-4">
                            <div className="text-center mb-4">
                                <div className="h5 fw-bold text-primary mb-1">{STATIC_DATE}</div>
                                <div className="h6 fw-semibold text-success mb-1">{todayMeetings.length} meetings</div>
                                <small className="text-muted d-block">
                                    Next: {todayMeetings[0]?.title?.slice(0, 20) || "No meetings"}
                                </small>
                            </div>
                            <div className="d-grid gap-2">
                                <a href="/meetings/new" className="btn btn-primary fw-semibold shadow-sm" style={{
                                    background: `linear-gradient(135deg, ${primaryBlue}, #2563eb)`,
                                    borderRadius: '12px'
                                }}>
                                    <i className="bi bi-plus-circle me-2"></i>New Meeting
                                </a>
                                <a href="#" className="btn btn-outline-secondary shadow-sm" style={{ borderRadius: '12px' }}>
                                    <i className="bi bi-download me-2"></i>Export Calendar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {/* PERFECT CALENDAR GRID */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-xl h-100" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                        <div className="card-header py-4 px-4" style={headerBlue}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-calendar4-week text-xl text-accent" style={{ color: accentYellow }}></i>
                                    <span className="h6 mb-0 fw-bold">Calendar View</span>
                                </div>
                                <div className="btn-group btn-group-sm shadow" role="group" style={{ borderRadius: '8px' }}>
                                    <button className="btn active shadow-sm px-3 py-1" style={{ background: '#475569', borderColor: '#475569' }}>
                                        Month
                                    </button>
                                    <button className="btn px-3 py-1" style={{ background: 'transparent' }}>Week</button>
                                    <button className="btn px-2 py-1" style={{ background: 'transparent' }}>Day</button>
                                </div>
                            </div>
                        </div>

                        <div className="p-0" style={{ height: '580px', overflow: 'hidden' }}>
                            {/* Week Headers */}
                            <div className="row g-0 bg-light border-bottom" style={{ fontSize: '0.875rem' }}>
                                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                                    <div key={day} className="col text-center py-3 fw-bold text-muted border-end" style={{ fontSize: '0.75rem' }}>
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* FIXED 42 STATIC DAYS */}
                            <div className="row g-0 calendar-container" style={{ height: 'calc(100% - 50px)', overflowY: 'auto' }}>
                                {Array.from({ length: 42 }, (_, index) => {
                                    const dayNum = ((index % 7) + 1) % 30 + 1;
                                    const dayEvents = staticEvents[index] || 0;
                                    const isToday = index === 11;

                                    return (
                                        <div
                                            key={index}
                                            className="col border-end border-bottom calendar-day"
                                            style={{
                                                height: '86px',
                                                backgroundColor: isToday ? '#eff6ff' : '#fcfcfc',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                borderColor: '#eef2f6 !important'
                                            }}
                                            title={`Day ${dayNum} - ${dayEvents} events`}
                                        >
                                            {/* Day Header */}
                                            <div className="px-2 py-1.5 border-b border-slate-100" style={{
                                                height: '28px',
                                                backgroundColor: isToday ? '#dbeafe' : '#f8fafc'
                                            }}>
                                                <span className={`fw-bold text-xs ${isToday ? 'text-primary' : 'text-slate-700'}`}>
                                                    {dayNum}
                                                </span>
                                                {isToday && (
                                                    <span className="ms-1 px-1.5 py-0.5 bg-blue-500 text-white text-xs fw-bold rounded-pill">
                                                        TODAY
                                                    </span>
                                                )}
                                            </div>

                                            {/* Events - STATIC */}
                                            <div className="px-2 py-1" style={{ height: '58px', overflow: 'hidden' }}>
                                                {Array.from({ length: dayEvents }, (_, i) => {
                                                    const color = eventColors[i % eventColors.length];
                                                    return (
                                                        <div
                                                            key={`${index}-${i}`}
                                                            className="event-tag mb-1 text-truncate"
                                                            style={{
                                                                backgroundColor: color + '25',
                                                                color: color,
                                                                borderLeft: `3px solid ${color}`,
                                                                padding: '2px 6px',
                                                                borderRadius: '4px',
                                                                fontSize: '0.6875rem',
                                                                lineHeight: 1.3,
                                                                fontWeight: 500
                                                            }}
                                                        >
                                                            {eventTitles[i % eventTitles.length]}
                                                        </div>
                                                    );
                                                })}
                                                {dayEvents > 3 && (
                                                    <small className="text-slate-500 text-xs">+{dayEvents - 3} more</small>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="col-lg-4">
                    {/* Today Agenda */}
                    <div className="card border-0 shadow-lg mb-4" style={{ borderRadius: '16px' }}>
                        <div className="card-header py-3 px-4" style={headerBlue}>
                            <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                                <i className="bi bi-clock-fill text-warning"></i>Today's Agenda
                            </h6>
                        </div>
                        <div className="card-body p-0" style={{ maxHeight: '320px', overflowY: 'auto' }}>
                            {todayMeetings.length ? (
                                todayMeetings.map((meeting, idx) => (
                                    <a key={meeting.id} href={`/meetings/${meeting.id}`}
                                        className="meeting-item px-4 py-3 border-bottom hover-effect">
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="time-badge bg-primary bg-opacity-10 text-primary fw-bold px-2 py-1 rounded-pill small fs-6">
                                                {meeting.time.split(' ')[1]}
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-2 lh-tight fw-semibold">{meeting.title}</h6>
                                                <div className="d-flex gap-2 flex-wrap mb-2">
                                                    <span className="badge bg-light text-dark px-2 py-1 small">{meeting.type}</span>
                                                    <small className="text-muted">{meeting.time}</small>
                                                </div>
                                                <div className="text-success small fw-medium">
                                                    <i className="bi bi-people me-1"></i>{meeting.attendees} attendees
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <div className="text-center py-5 opacity-75">
                                    <i className="bi bi-calendar-check display-4 text-muted mb-3"></i>
                                    <h6 className="text-muted mb-2">Clear schedule</h6>
                                    <p className="text-muted small mb-3">No meetings today</p>
                                    <a href="/meetings/new" className="btn btn-outline-primary btn-sm px-4">
                                        <i className="bi bi-plus me-1"></i>Create Meeting
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                        <div className="card-header py-3 px-4" style={headerBlue}>
                            <h6 className="mb-0 fw-bold">
                                <i className="bi bi-circle-half me-2"></i>Legend
                            </h6>
                        </div>
                        <div className="card-body p-4">
                            <div className="row g-3">
                                {[
                                    { color: '#3b82f6', icon: 'bi-people-fill', type: 'Team Meeting', desc: 'Internal syncs' },
                                    { color: '#10b981', icon: 'bi-person-check-fill', type: 'Client Meeting', desc: 'External calls' },
                                    { color: '#f59e0b', icon: 'bi-briefcase-fill', type: 'Management', desc: 'Leadership meetings' },
                                    { color: '#ef4444', icon: 'bi-x-circle-fill', type: 'Cancelled', desc: 'Rescheduled events' }
                                ].map((item, idx) => (
                                    <div key={idx} className="col-12 d-flex align-items-center gap-3 p-2 rounded bg-light">
                                        <div className="p-2 rounded-circle shadow-sm" style={{
                                            backgroundColor: item.color + '20',
                                            color: item.color,
                                            width: '36px', height: '36px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            <i className={`bi ${item.icon} small`}></i>
                                        </div>
                                        <div>
                                            <div className="fw-semibold small text-truncate">{item.type}</div>
                                            <div className="text-muted small">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .calendar-container {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }
        .calendar-container::-webkit-scrollbar {
          width: 4px;
        }
        .calendar-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .calendar-container::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
        .calendar-day {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border-color: #e2e8f0 !important;
        }
        .calendar-day:hover {
          background-color: #f0f9ff !important;
          transform: translateY(-0.5px) !important;
          box-shadow: inset 4px 0 0 ${primaryBlue}20 !important;
        }
        .meeting-item {
          transition: all 0.2s ease;
        }
        .meeting-item:hover {
          background-color: #f8fafc !important;
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .time-badge {
          min-width: 36px;
          text-align: center;
        }
        .event-tag {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .event-tag:hover {
          transform: translateX(2px);
          opacity: 0.9;
        }
        @media (max-width: 992px) {
          .calendar-day { height: 78px !important; }
        }
        @media (max-width: 768px) {
          .calendar-day { height: 72px !important; }
        }
      `}</style>
        </div>
    );
}
