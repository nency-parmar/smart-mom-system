export default function PrivacyPolicyPage() {
    return (
        <div className="container py-5">
            {/* Header */}
            <section className="mb-5">
                <h1 className="fw-bold mb-2">
                    Privacy <span style={{ color: "#1d4ed8" }}>Po</span>
                    <span style={{ color: "#facc15" }}>licy</span>
                </h1>

                <p className="text-uppercase small text-muted mb-3">
                    Your Data · Our Responsibility · Transparent Practices
                </p>

                <p className="text-secondary col-lg-9">
                    At MoMenta, your privacy is our priority. This Privacy Policy explains how we collect,
                    use, and protect your personal information when you use our platform. We are committed
                    to ensuring that your data remains secure and used only for the purposes of providing
                    a seamless meeting management experience.
                </p>
            </section>

            {/* Info Cards */}
            <section className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Data Collection
                            </h6>
                            <p className="small text-secondary mb-0">
                                We collect only the information necessary to manage meetings, track attendance,
                                and generate reports. This includes your name, email, and meeting-related data.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Data Usage
                            </h6>
                            <p className="small text-secondary mb-0">
                                Your data is used solely to provide, improve, and maintain our meeting management
                                services. We do not sell or share personal information with third parties for marketing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Data Security
                            </h6>
                            <p className="small text-secondary mb-0">
                                We implement robust security measures to protect your information from unauthorized
                                access, alteration, or disclosure. All sensitive data is stored securely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Information */}
            <section
                className="card border-0 text-secondary mb-5 shadow-sm"
                style={{
                    background: "linear-gradient(135deg, #0f172a, #1d4ed8)"
                }}
            >
                <div className="card-body p-5">
                    <h2 className="h5 fw-semibold mb-3">
                        Your Rights
                    </h2>
                    <p className="small mb-0 text-secondary col-lg-8">
                        You have the right to access, update, or delete your personal data stored in MoMenta.
                        For any privacy-related inquiries or requests, please contact our support team at
                        <span style={{ color: "#facc15" }}> support@momenta.com</span>.
                    </p>
                </div>
            </section>

            {/* Terms & Conditions */}
            <section className="mb-4">
                <h2 className="fw-bold mb-2">
                    Terms <span style={{ color: "#1d4ed8" }}>&</span>
                    <span style={{ color: "#facc15" }}> Conditions</span>
                </h2>

                <p className="text-uppercase small text-muted mb-3">
                    Use of Service · Responsibilities · Legal Terms
                </p>

                <p className="text-secondary col-lg-9">
                    These Terms & Conditions govern your use of the MoMenta platform. By accessing or using
                    the system, you agree to comply with these terms and any applicable policies referenced here.
                </p>
            </section>

            <section className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Acceptable use
                            </h6>
                            <p className="small text-secondary mb-0">
                                You agree to use MoMenta only for lawful organizational purposes, and to avoid any
                                misuse such as unauthorized access, data scraping, or disrupting the service for others.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Accounts & access
                            </h6>
                            <p className="small text-secondary mb-0">
                                You are responsible for maintaining the confidentiality of your login credentials and
                                for all activities that occur under your account within the MoMenta platform.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="text-uppercase text-muted fw-semibold mb-2">
                                Liability & changes
                            </h6>
                            <p className="small text-secondary mb-0">
                                MoMenta is provided &quot;as is&quot; without guarantees of uninterrupted availability.
                                We may update these Terms & Conditions periodically, and continued use of the platform
                                indicates your acceptance of the latest version.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
