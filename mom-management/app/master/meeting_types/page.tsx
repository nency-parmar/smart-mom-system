'use client';

import { useState } from "react";

export default function MeetingTypes() {
    const [showModal, setShowModal] = useState(false);

    const meetingTypes = [
        { id: "MT-001", name: "Team Meeting", remarks: "Internal team discussions" },
        { id: "MT-002", name: "Client Meeting", remarks: "Client interactions & demos" },
        { id: "MT-003", name: "Management Review", remarks: "Management-level review" },
    ];

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
                    <h1 className="h4 fw-bold mb-0">Meeting Types</h1>
                    <p className="text-muted small mb-0">
                        Define and manage different types of meetings.
                    </p>
                </div>

                <button
                    className="btn btn-sm fw-semibold"
                    style={{
                        backgroundColor: accentYellow,
                        color: "#1f2937",
                        borderRadius: "8px"
                    }}
                    onClick={() => setShowModal(true)}
                >
                    + New Type
                </button>
            </div>

            {/* Meeting Types Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-header" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">Meeting Type List</h2>
                </div>

                <div className="card-body p-0">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th style={{ width: "12%" }}>Type ID</th>
                                <th style={{ width: "35%" }}>Meeting Type</th>
                                <th>Remarks</th>
                                <th style={{ width: "18%" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meetingTypes.map((type) => (
                                <tr key={type.id}>
                                    <td className="fw-semibold small">{type.id}</td>
                                    <td className="fw-semibold small">{type.name}</td>
                                    <td className="small text-muted">{type.remarks}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm me-2"
                                            style={{
                                                borderColor: primaryBlue,
                                                color: primaryBlue,
                                                borderRadius: "6px"
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm"
                                            style={{
                                                borderColor: "#dc2626",
                                                color: "#dc2626",
                                                borderRadius: "6px"
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {meetingTypes.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="text-center text-muted py-4">
                                        No meeting types found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Meeting Type Modal */}
            {showModal && (
                <>
                    <div className="modal fade show d-block" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0 shadow">
                                <div className="modal-header" style={headerBlue}>
                                    <h5 className="modal-title">Add Meeting Type</h5>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>

                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">
                                            Meeting Type Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter meeting type name"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">
                                            Remarks
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="Optional remarks"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn btn-sm fw-semibold"
                                        style={{
                                            backgroundColor: accentYellow,
                                            color: "#1f2937"
                                        }}
                                    >
                                        Save Type
                                    </button>
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
