'use client';

import { useState, useEffect } from 'react';
import { getSession } from "@/app/actions/auth";

export default function Footer() {
    const [user, setUser] = useState<{ name: string; role: string } | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const session = await getSession();
            if (session) {
                setUser({
                    name: session.name,
                    role: session.role || 'USER'
                });
            }
        };
        fetchUser();
    }, []);

    const isAdmin = user?.role === 'ADMIN';

    return (
        <footer className="border-top bg-white mt-5">
            <div className="container py-5">

                <div className="row g-4">

                    {/* Brand */}
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-2">
                            <span style={{ color: "#1d4ed8" }}>MoM</span>
                            <span style={{ color: "#facc15" }}>enta</span>
                        </h5>
                        <p className="small text-muted">
                            Turning meetings into momentum with structured
                            minutes, attendance, and actionable insights.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="col-md-3">
                        <h6 className="fw-semibold mb-3">Product</h6>
                        <ul className="list-unstyled small">
                            <li><a href="/meetings" className="text-decoration-none text-muted">Meetings</a></li>
                            {isAdmin && (
                                <>
                                    <li><a href="/attendance" className="text-decoration-none text-muted">Attendance</a></li>
                                    <li><a href="/reports/summary" className="text-decoration-none text-muted">Reports</a></li>
                                    <li><a href="/meetings/calander" className="text-decoration-none text-muted">Calendar View</a></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Organization (Admin Only) */}
                    {isAdmin && (
                        <div className="col-md-3">
                            <h6 className="fw-semibold mb-3">Organization</h6>
                            <ul className="list-unstyled small">
                                <li><a href="/master/departments" className="text-decoration-none text-muted">Departments</a></li>
                                <li><a href="/master/staff" className="text-decoration-none text-muted">Staff</a></li>
                                <li><a href="/master/venues" className="text-decoration-none text-muted">Venues</a></li>
                                <li><a href="/master/meeting_types" className="text-decoration-none text-muted">Meeting Types</a></li>
                            </ul>
                        </div>
                    )}

                    {/* Company */}
                    <div className={isAdmin ? "col-md-3" : "col-md-6"}>
                        <h6 className="fw-semibold mb-3">Company</h6>
                        <ul className="list-unstyled small">
                            <li><a href="/about" className="text-decoration-none text-muted">About</a></li>
                            <li><a href="/contact" className="text-decoration-none text-muted">Contact</a></li>
                            <li><a href="/privacy" className="text-decoration-none text-muted">Privacy Policy</a></li>
                            <li><a href="/services" className="text-decoration-none text-muted">Services</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3 mt-4 small text-muted">
                    <span>
                        © {new Date().getFullYear()} MoMenta. All rights reserved.
                    </span>
                    <span>
                        Meetings into Momentum
                    </span>
                </div>

            </div>
        </footer>
    );
}
