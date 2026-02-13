import Link from 'next/link';

export default function MasterDashboard() {
    const primaryBlue = '#1d4ed8';

    const masterItems = [
        { title: "Meeting Types", icon: "bi-tag-fill", href: "/master/meeting_types", description: "Manage categories for different types of meetings." },
        { title: "Staff", icon: "bi-people-fill", href: "/master/staff", description: "Register and manage organization staff members." },
        { title: "Departments", icon: "bi-building-fill", href: "/master/departments", description: "Define and organize organizational departments." },
        { title: "Venues", icon: "bi-geo-alt-fill", href: "/master/venues", description: "Manage meeting locations and room details." },
    ];

    return (
        <div className="container py-4">
            <header className="mb-5">
                <p className="text-uppercase small text-muted mb-1">Configuration Control</p>
                <h1 className="h3 fw-bold text-dark mb-1">Master Dashboard</h1>
                <p className="text-secondary small">Manage core organizational data and system configurations.</p>
            </header>

            <div className="row g-4">
                {masterItems.map((item, index) => (
                    <div className="col-md-6 col-lg-3" key={index}>
                        <Link href={item.href} className="text-decoration-none">
                            <div className="card h-100 border-0 shadow-sm p-4 text-center btn-smooth" style={{ borderRadius: '20px', transition: 'all 0.3s ease' }}>
                                <div className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                    style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(29, 78, 216, 0.1)', color: primaryBlue }}>
                                    <i className={`bi ${item.icon}`} style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                                <p className="small text-muted mb-0">{item.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
