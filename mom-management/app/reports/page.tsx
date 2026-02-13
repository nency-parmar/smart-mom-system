import Link from 'next/link';

export default function ReportsDashboard() {
    const accentYellow = '#eab308';
    const primaryBlue = '#1d4ed8';

    const reportItems = [
        { title: "Meeting Summary", icon: "bi-file-earmark-text-fill", href: "/reports/summary", description: "General overview and status of all organizational meetings." },
        { title: "Meeting Wise", icon: "bi-file-earmark-bar-graph-fill", href: "/reports/meeting_wise", description: "Detailed analytical insights for individual meeting sessions." },
    ];

    return (
        <div className="container py-4">
            <header className="mb-5">
                <p className="text-uppercase small text-muted mb-1">Data Insights</p>
                <h1 className="h3 fw-bold text-dark mb-1">Reports Dashboard</h1>
                <p className="text-secondary small">Access detailed analytics and summaries of meeting activities.</p>
            </header>

            <div className="grid-reports row g-4">
                {reportItems.map((item, index) => (
                    <div className="col-md-6" key={index}>
                        <Link href={item.href} className="text-decoration-none">
                            <div className="card h-100 border-0 shadow-sm p-4 d-flex flex-row align-items-start gap-4 btn-smooth" style={{ borderRadius: '20px' }}>
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0"
                                    style={{ width: '70px', height: '70px', borderRadius: '18px', background: 'linear-gradient(135deg, #0f172a, #1d4ed8)', color: '#fff' }}>
                                    <i className={`bi ${item.icon}`} style={{ fontSize: '2rem' }}></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                                    <p className="small text-muted mb-0">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
