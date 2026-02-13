export default function Services() {
    const accentYellow = "#eab308";
    const primaryBlue = "#1d4ed8";

    const services = [
        {
            title: "Meeting Scheduling",
            description: "Schedule team, client, and management meetings with calendar integration, venue booking, and automated reminders.",
            icon: "📅",
            stats: "156+ meetings scheduled",
            link: "/meetings/new"
        },
        {
            title: "Attendance Tracking",
            description: "Mark staff attendance (IsPresent flag), track participation, and generate attendance summaries per meeting.",
            icon: "👥",
            stats: "95% attendance rate",
            link: "/attendance"
        },
        {
            title: "MOM Documentation",
            description: "Upload and manage meeting documents, action items, decisions, and follow-up tasks with document versioning.",
            icon: "📄",
            stats: "124 MOMs stored",
            link: "/meetings"
        },
        {
            title: "Master Data Management",
            description: "Configure meeting types, staff directory, departments, and venues from centralized master tables.",
            icon: "⚙️",
            stats: "28 staff + 12 venues",
            link: "/master/meeting_types"
        },
        {
            title: "Reports & Analytics",
            description: "Generate meeting-wise reports, attendance summaries, and export to Excel/PDF for management review.",
            icon: "📊",
            stats: "45 reports generated",
            link: "/reports/summary"
        },
        {
            title: "Role-Based Access",
            description: "Admin, Convener, and Staff roles with secure authentication and permission-based access control.",
            icon: "🔐",
            stats: "3 user roles",
            link: "/profile"
        }
    ];

    return (
        <div className="container py-5">

            {/* Header */}
            <section className="mb-5 text-center">
                <h1 className="fw-bold mb-2">
                    MoM <span style={{ color: primaryBlue }}>Management</span>
                    <span style={{ color: accentYellow }}> Services</span>
                </h1>

                <p className="text-uppercase small text-muted mb-3">
                    Schedule · Track · Document · Analyze
                </p>

                <p className="text-secondary col-lg-8 mx-auto">
                    Streamline the entire meeting lifecycle — from scheduling and attendance to
                    documentation and analytics — in one centralized platform designed for
                    productivity and accountability.
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
                    <a
                        href="/meetings/new"
                        className="btn btn-lg text-white"
                        style={{
                            backgroundColor: primaryBlue,
                            borderColor: primaryBlue
                        }}
                    >
                        Start Scheduling
                    </a>
                    <a href="/login" className="btn btn-lg btn-outline-secondary">
                        Get Started Free
                    </a>
                </div>
            </section>

            {/* Services Grid */}
            <section className="mb-5">
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div
                                className="card h-100 border-0 shadow-sm"
                                style={{
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                                }}
                            >
                                <div className="card-body p-4 d-flex flex-column">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                                        style={{
                                            width: "52px",
                                            height: "52px",
                                            fontSize: "1.6rem",
                                            backgroundColor: "rgba(37, 99, 235, 0.08)"
                                        }}
                                    >
                                        {service.icon}
                                    </div>

                                    <h3 className="h5 fw-bold mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="small text-secondary flex-grow-1 mb-3">
                                        {service.description}
                                    </p>

                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-2">
                                        <span className="small fw-semibold text-success">
                                            {service.stats}
                                        </span>
                                        <a
                                            href={service.link}
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Go to {service.icon === "📅" ? "Schedule" : "Service"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="card border-0 shadow-sm mb-5"
                style={{
                    background: "linear-gradient(135deg, #0f172a, #1d4ed8)"
                }}
            >
                <div className="card-body py-4 px-4 px-md-5">
                    <div className="row text-center text-white gy-4">
                        <div className="col-6 col-md-3">
                            <div className="fw-bold fs-3" style={{ color: accentYellow }}>500+</div>
                            <p className="small mb-0 text-secondary">Meetings Managed</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="fw-bold fs-3" style={{ color: "#22c55e" }}>98%</div>
                            <p className="small mb-0 text-secondary">Attendance Accuracy</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="fw-bold fs-3" style={{ color: "#bfdbfe" }}>150+</div>
                            <p className="small mb-0 text-secondary">Active Users</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="fw-bold fs-3" style={{ color: "#f97316" }}>24/7</div>
                            <p className="small mb-0 text-secondary">Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-5">
                <h2 className="h3 fw-bold mb-2">
                    Ready to streamline your meetings?
                </h2>
                <p className="text-secondary mb-4">
                    Join 150+ teams using MoMenta to keep meetings structured, trackable, and outcome-focused.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a
                        href="/meetings/new"
                        className="btn btn-lg text-white"
                        style={{
                            backgroundColor: primaryBlue,
                            borderColor: primaryBlue
                        }}
                    >
                        Schedule First Meeting
                    </a>
                    <a href="/login" className="btn btn-lg btn-outline-primary">
                        Login to Dashboard
                    </a>
                </div>
            </section>
        </div>
    );
}
