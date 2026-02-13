export default function AboutPage() {
    return (
        <div className="container py-5">

            {/* Header */}
            <section className="mb-5">
                <h1 className="fw-bold mb-2">
                    About <span style={{ color: "#1d4ed8" }}>MoM</span>
                    <span style={{ color: "#facc15" }}>enta</span>
                </h1>

                <p className="text-uppercase small text-muted mb-3">
                    Minutes · Meetings · Momentum
                </p>

                <p className="text-secondary col-lg-9">
                    MoMenta is a modern Minutes of Meeting (MoM) management system that
                    helps organizations schedule meetings, capture key decisions, track
                    attendance, and manage follow-up action items in one centralized
                    platform — making meetings more productive and accountable.
                </p>
            </section>

            {/* Info Cards */}
            <section className="row g-4 mb-5">

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Why MoMenta
                            </h6>
                            <p className="small text-secondary mb-0">
                                Important meeting outcomes often get lost in chats or paper
                                notes. MoMenta ensures every decision, discussion, and
                                responsibility is recorded, searchable, and easy to follow.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Core features
                            </h6>
                            <ul className="small text-secondary mb-0 ps-3">
                                <li>Schedule team, client, and management meetings</li>
                                <li>Record discussions, decisions, and action items</li>
                                <li>Track participant attendance accurately</li>
                                <li>Generate structured meeting reports</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Project scope
                            </h6>
                            <p className="small text-secondary mb-0">
                                The system includes master configuration, meeting workflows,
                                attendance tracking, and analytical reports such as meeting
                                summaries and meeting-wise insights.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/* Technology Stack */}
            <section
                className="card border-0 text-secondary mb-5 shadow-sm"
                style={{
                    background: "linear-gradient(135deg, #0f172a, #1d4ed8)"
                }}
            >
                <div className="card-body p-5">
                    <h2 className="h5 fw-semibold mb-3">
                        Technology stack
                    </h2>
                    <p className="small mb-0 text-secondary col-lg-8">
                        MoMenta is built using Next.js with the App Router and Bootstrap 5,
                        providing a clean, responsive, and scalable interface for managing
                        meetings, attendance, and reports efficiently.
                    </p>
                </div>
            </section>

        </div>
    );
}
