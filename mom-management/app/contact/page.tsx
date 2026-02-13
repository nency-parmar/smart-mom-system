export default function ContactPage() {
    return (
        <div className="container py-5">

            {/* Page header */}
            <div className="mb-5 text-center text-md-start">
                <h1 className="fw-bold mb-2">
                    Contact <span style={{ color: "#1d4ed8" }}>MoM</span>
                    <span style={{ color: "#facc15" }}>enta</span>
                </h1>
                <p className="text-muted col-md-8">
                    Have questions about meetings, attendance, or reports?
                    Reach out to the MoMenta team and we’ll help you move forward.
                </p>
            </div>

            <div className="row g-4 align-items-start">

                {/* Contact Form */}
                <section className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">

                            <h2 className="h5 fw-semibold mb-3">
                                Send us a message
                            </h2>

                            <form>
                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label small fw-semibold">
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label small fw-semibold">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control form-control-sm"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-semibold">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Eg. Feedback about meeting reports"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label small fw-semibold">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="form-control form-control-sm"
                                        placeholder="Describe your question or issue in detail..."
                                    />
                                </div>

                                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                                    <p className="text-muted small mb-0">
                                        This form is frontend-only. You can later connect it to
                                        an API or email service.
                                    </p>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm px-4"
                                    >
                                        Send message
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="col-lg-4 d-flex flex-column gap-4">

                    {/* About Project */}
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="text-uppercase small fw-semibold text-muted mb-2">
                                About this project
                            </h3>
                            <p className="small text-secondary mb-0">
                                MoMenta is an academic project designed to demonstrate
                                meeting scheduling, minutes recording, attendance tracking,
                                and reporting workflows in a structured system.
                            </p>
                        </div>
                    </div>

                    {/* Help Tips */}
                    <div
                        className="card border-0 text-white"
                        style={{
                            background: "linear-gradient(135deg, #0f172a, #1d4ed8)"
                        }}
                    >
                        <div className="card-body p-4">
                            <h4 className="small fw-semibold mb-2">
                                Need quick help?
                            </h4>
                            <p className="small mb-3 text-light">
                                If something doesn’t work as expected, check these first:
                            </p>
                            <ul className="small mb-0 ps-3">
                                <li>App Router structure inside <code>app/</code></li>
                                <li>Bootstrap imported once in root layout</li>
                                <li>Shared layout wrapping all pages</li>
                            </ul>
                        </div>
                    </div>

                </aside>
            </div>
        </div>
    );
}
