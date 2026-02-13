import { prisma } from "../../../lib/prisma";

export default async function Summary() {

    const headerBlue = {
        backgroundColor: '#0f172a',
        color: '#e5e7eb'
    };

    const cardBlue = {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #020617 100%)',
        color: '#e5e7eb'
    };

    const accentYellow = '#eab308';

    const totalMeetings = await prisma.meetings.count();
    const completed = await prisma.meetings.count({
        where: {
            MeetingDate: { lt: new Date() },
            IsCancelled: false
        }
    });
    const upcoming = await prisma.meetings.count({
        where: {
            MeetingDate: { gte: new Date() },
            IsCancelled: false
        }
    });
    const cancelled = await prisma.meetings.count({
        where: { IsCancelled: true }
    });
    const totalStaff = await prisma.staff.count();

    const summary = {
        totalMeetings,
        completed,
        upcoming,
        cancelled,
        totalStaff
    };

    return (
        <div className="py-3 py-md-4">
            {/* Page Header */}
            <div className="mb-4">
                <p className="text-uppercase small text-muted mb-1">
                    Reports & Analytics
                </p>
                <h1 className="h4 fw-bold mb-0">Meeting Summary</h1>
                <p className="text-muted small mb-0">
                    Overall snapshot of meetings and participation.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="row g-3 mb-4">
                <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body">
                            <p className="small text-uppercase mb-1 text-muted">Total Meetings</p>
                            <h2 className="fw-bold mb-0">{summary.totalMeetings}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body">
                            <p className="small text-uppercase mb-1 text-muted">Completed</p>
                            <h2 className="fw-bold mb-0 text-success">{summary.completed}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body">
                            <p className="small text-uppercase mb-1 text-muted">Upcoming</p>
                            <h2 className="fw-bold mb-0 text-primary">{summary.upcoming}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100" style={cardBlue}>
                        <div className="card-body">
                            <p className="small text-uppercase mb-1 text-muted">Cancelled</p>
                            <h2 className="fw-bold mb-0 text-danger">{summary.cancelled}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="card border-0 shadow-sm">
                <div className="card-header" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">Participation Overview</h2>
                </div>
                <div className="card-body">
                    <p className="mb-2">
                        <strong>Total Staff Involved:</strong>{" "}
                        <span
                            className="badge rounded-pill px-3 py-2"
                            style={{
                                backgroundColor: accentYellow,
                                color: "#1f2937"
                            }}
                        >
                            {summary.totalStaff}
                        </span>
                    </p>
                    <p className="text-muted small mb-0">
                        This summary helps management quickly understand meeting load,
                        completion ratio, and staff participation.
                    </p>
                </div>
            </div>
        </div>
    );
}
