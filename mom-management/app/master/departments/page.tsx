'use client';

import { useState, useEffect } from "react";
import { getDepartments, createDepartment, updateDepartment, deleteDepartment } from "@/app/actions/departments";

export default function Departments() {
    const [departments, setDepartments] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentDept, setCurrentDept] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        department_name: '',
        remarks: ''
    });

    useEffect(() => {
        fetchDepartments();
    }, []);

    async function fetchDepartments() {
        try {
            const data = await getDepartments();
            setDepartments(data);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch departments");
        } finally {
            setLoading(false);
        }
    }

    const handleOpenModal = (dept: any = null) => {
        if (dept) {
            setIsEditing(true);
            setCurrentDept(dept);
            setFormData({
                department_name: dept.department_name,
                remarks: dept.remarks || ''
            });
        } else {
            setIsEditing(false);
            setCurrentDept(null);
            setFormData({
                department_name: '',
                remarks: ''
            });
        }
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            if (isEditing) {
                await updateDepartment(currentDept.department_id, {
                    department_name: formData.department_name,
                    remarks: formData.remarks
                });
            } else {
                await createDepartment({
                    department_name: formData.department_name,
                    remarks: formData.remarks
                });
            }
            setShowModal(false);
            fetchDepartments();
        } catch (error) {
            console.error(error);
            alert("Failed to save department");
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this department?")) {
            try {
                await deleteDepartment(id);
                fetchDepartments();
            } catch (error) {
                console.error(error);
                alert("Failed to delete department");
            }
        }
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
                    <h1 className="h4 fw-bold mb-0">Departments</h1>
                    <p className="text-muted small mb-0">
                        Manage organizational departments for meetings and staff mapping.
                    </p>
                </div>

                <button
                    className="btn btn-sm fw-semibold"
                    style={{
                        backgroundColor: accentYellow,
                        color: "#1f2937",
                        borderRadius: "8px"
                    }}
                    onClick={() => handleOpenModal()}
                >
                    + New Department
                </button>
            </div>

            {/* Table Card */}
            <div className="card border-0 shadow-sm">
                <div className="card-header" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">Department List</h2>
                </div>

                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-sm align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: "8%" }}>#</th>
                                    <th style={{ width: "35%" }}>Department Name</th>
                                    <th>Remarks</th>
                                    <th style={{ width: "18%" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={4} className="text-center py-4">Loading departments...</td>
                                    </tr>
                                ) : departments.map((dept, index) => (
                                    <tr key={dept.department_id}>
                                        <td className="fw-semibold">{index + 1}</td>
                                        <td className="fw-semibold small">{dept.department_name}</td>
                                        <td className="text-muted small">{dept.remarks}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm me-2"
                                                style={{
                                                    borderColor: primaryBlue,
                                                    color: primaryBlue,
                                                    borderRadius: "6px"
                                                }}
                                                onClick={() => handleOpenModal(dept)}
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
                                                onClick={() => handleDelete(dept.department_id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {!loading && departments.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center text-muted py-4">
                                            No departments found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add/Edit Department Modal */}
            {showModal && (
                <>
                    <div className="modal fade show d-block" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0 shadow">
                                <div className="modal-header" style={headerBlue}>
                                    <h5 className="modal-title">{isEditing ? "Edit Department" : "Add Department"}</h5>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>

                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">
                                            Department Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter department name"
                                            value={formData.department_name}
                                            onChange={(e) => setFormData({ ...formData, department_name: e.target.value })}
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
                                            value={formData.remarks}
                                            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
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
                                        onClick={handleSave}
                                    >
                                        {isEditing ? "Update Department" : "Save Department"}
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
