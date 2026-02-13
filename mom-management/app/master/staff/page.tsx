'use client';

import { useState, useEffect } from "react";
import { getStaffWithActivity, getStaffActivityLogs } from "@/app/actions/staff";
import ClientDate from "@/components/ClientDate";

export default function Staff() {
    const [staffList, setStaffList] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showLogsModal, setShowLogsModal] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState<any>(null);
    const [logs, setLogs] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await getStaffWithActivity();
        setStaffList(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleViewLogs = async (staff: any) => {
        setSelectedStaff(staff);
        const activityLogs = await getStaffActivityLogs(staff.StaffID);
        setLogs(activityLogs);
        setShowLogsModal(true);
    };

    const headerBlue = {
        backgroundColor: '#0f172a',
        color: '#e5e7eb'
    };

    const accentYellow = '#eab308';
    const primaryBlue = '#1d4ed8';

    return (
        <div className="py-3 py-md-4">
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <p className="text-uppercase small text-muted mb-1">
                        Master Configuration
                    </p>
                    <h1 className="h4 fw-bold mb-0">Staff Directory & Activity</h1>
                    <p className="text-muted small mb-0">
                        Track system access and manage staff members.
                    </p>
                </div>

                <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-secondary" onClick={fetchData}>
                        <i className="bi bi-arrow-clockwise me-1"></i> Refresh
                    </button>
                    <button
                        className="btn btn-sm fw-semibold"
                        style={{
                            backgroundColor: accentYellow,
                            color: "#1f2937",
                            borderRadius: "8px"
                        }}
                        onClick={() => setShowModal(true)}
                    >
                        + Add Staff
                    </button>
                </div>
            </div>

            {/* Staff Table */}
            <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
                <div className="card-header border-0" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">User Access Control</h2>
                </div>

                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-3">ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th className="text-center">Logins</th>
                                    <th>Last Login</th>
                                    <th className="text-end pe-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={6} className="text-center py-5">
                                            <div className="spinner-border spinner-border-sm text-primary me-2"></div>
                                            Loading staff data...
                                        </td>
                                    </tr>
                                ) : staffList.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="text-center text-muted py-5">
                                            No staff members found
                                        </td>
                                    </tr>
                                ) : staffList.map((staff) => (
                                    <tr key={staff.StaffID}>
                                        <td className="ps-3"><span className="badge bg-light text-dark border">STF-{staff.StaffID}</span></td>
                                        <td>
                                            <div className="fw-bold text-dark">{staff.StaffName}</div>
                                            <div className="small text-muted">{staff.Role}</div>
                                        </td>
                                        <td className="small">{staff.EmailAddress}</td>
                                        <td className="text-center">
                                            <span className="badge rounded-pill bg-blue-subtle text-primary px-3">
                                                {staff._count.UserActivity}
                                            </span>
                                        </td>
                                        <td className="small">
                                            {staff.LastLogin ? (
                                                <div className="d-flex flex-column">
                                                    <ClientDate dateString={staff.LastLogin} />
                                                </div>
                                            ) : (
                                                <span className="text-muted italic">Never</span>
                                            )}
                                        </td>
                                        <td className="text-end pe-3">
                                            <button
                                                className="btn btn-sm btn-outline-primary me-2 border-0"
                                                onClick={() => handleViewLogs(staff)}
                                            >
                                                <i className="bi bi-clock-history me-1"></i> Logs
                                            </button>
                                            <button className="btn btn-sm border-0 text-muted">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* View Logs Modal */}
            {showLogsModal && (
                <>
                    <div className="modal fade show d-block" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                                <div className="modal-header border-0 pb-0">
                                    <h5 className="fw-bold">Activity History: {selectedStaff?.StaffName}</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowLogsModal(false)}></button>
                                </div>
                                <div className="modal-body p-4">
                                    <div className="activity-timeline">
                                        {logs.length === 0 ? (
                                            <p className="text-center text-muted">No activity recorded yet.</p>
                                        ) : (
                                            <ul className="list-unstyled mb-0">
                                                {logs.map((log, i) => (
                                                    <li key={log.ActivityID} className="mb-3 d-flex gap-3">
                                                        <div className="flex-shrink-0 mt-1">
                                                            <div className={`p-2 rounded-circle ${log.ActivityType === 'SIGNUP' ? 'bg-success' : 'bg-primary'}`} style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                                                                <i className={`bi ${log.ActivityType === 'SIGNUP' ? 'bi-person-plus' : 'bi-shield-lock'} text-white`}></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="fw-bold small">{log.ActivityType}</div>
                                                            <div className="text-muted" style={{ fontSize: '11px' }}>
                                                                <ClientDate dateString={log.Timestamp} />
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className="modal-footer border-0 pt-0">
                                    <button className="btn btn-light w-100 py-2 fw-bold" style={{ borderRadius: '12px' }} onClick={() => setShowLogsModal(false)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </>
            )}

            {/* Add Staff Modal (Minimal placeholder as requested to "don't changed" too much but make functional) */}
            {showModal && (
                <>
                    <div className="modal fade show d-block" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0 shadow">
                                <div className="modal-header" style={headerBlue}>
                                    <h5 className="modal-title">Add New Staff</h5>
                                    <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body p-4">
                                    <p className="text-center text-muted">Use the regular Signup page to register new staff members to ensure proper auth tracking.</p>
                                    <div className="d-grid">
                                        <a href="/signup" className="btn btn-primary fw-bold" style={{ borderRadius: '10px' }}>Go to Signup Page</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </>
            )}
        </div>
    );
}
