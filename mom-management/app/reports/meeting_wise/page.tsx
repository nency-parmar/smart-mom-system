'use client';

export default function MeetingWiseReport() {

    const headerBlue = {
        backgroundColor: '#0f172a',
        color: '#e5e7eb'
    };

    const accentYellow = '#eab308';

    const reports = [
        {
            id: "MOM-2041",
            title: "Sprint Planning – Module 3",
            type: "Team Meeting",
            date: "07 Jan 2026",
            totalMembers: 8,
            present: 7
        },
        {
            id: "MOM-2039",
            title: "Client Demo – Release 1.2",
            type: "Client Meeting",
            date: "06 Jan 2026",
            totalMembers: 5,
            present: 5
        },
        {
            id: "MOM-2037",
            title: "Department Budget Review",
            type: "Management",
            date: "05 Jan 2026",
            totalMembers: 10,
            present: 9
        }
    ];

    return (
        <div className="py-3 py-md-4">
            {/* Page Header */}
            <div className="mb-4">
                <p className="text-uppercase small text-muted mb-1">
                    Reports & Analytics
                </p>
                <h1 className="h4 fw-bold mb-0">Meeting-wise Report</h1>
                <p className="text-muted small mb-0">
                    View attendance and summary details for each meeting.
                </p>
            </div>

            {/* Report Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-header" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">Meeting Report List</h2>
                </div>

                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-sm align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Meeting ID</th>
                                    <th>Meeting Title</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Total Members</th>
                                    <th>Present</th>
                                    <th>Attendance %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.map((r) => {
                                    const percent = Math.round((r.present / r.totalMembers) * 100);
                                    return (
                                        <tr key={r.id}>
                                            <td className="fw-semibold small">{r.id}</td>
                                            <td className="fw-semibold small">{r.title}</td>
                                            <td className="small">{r.type}</td>
                                            <td className="small">{r.date}</td>
                                            <td className="small">{r.totalMembers}</td>
                                            <td className="small">{r.present}</td>
                                            <td className="small fw-semibold">
                                                <span
                                                    className="badge rounded-pill px-3 py-2"
                                                    style={{
                                                        backgroundColor: accentYellow,
                                                        color: "#1f2937"
                                                    }}
                                                >
                                                    {percent}%
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
