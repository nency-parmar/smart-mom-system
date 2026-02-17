'use client';

import { useState, useEffect } from "react";
import { getVenues, createVenue, updateVenue, deleteVenue } from "@/app/actions/venues";

export default function Venues() {
    const [venues, setVenues] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentVenue, setCurrentVenue] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        venue_id: '',
        venue_name: '',
        capacity: 0,
        location: '',
        remarks: ''
    });

    useEffect(() => {
        fetchVenues();
    }, []);

    async function fetchVenues() {
        try {
            const data = await getVenues();
            setVenues(data);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch venues");
        } finally {
            setLoading(false);
        }
    }

    const handleOpenModal = (venue: any = null) => {
        if (venue) {
            setIsEditing(true);
            setCurrentVenue(venue);
            setFormData({
                venue_id: venue.venue_id,
                venue_name: venue.venue_name,
                capacity: venue.capacity,
                location: venue.location || '',
                remarks: venue.remarks || ''
            });
        } else {
            setIsEditing(false);
            setCurrentVenue(null);
            setFormData({
                venue_id: '',
                venue_name: '',
                capacity: 0,
                location: '',
                remarks: ''
            });
        }
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            if (isEditing) {
                await updateVenue(currentVenue.venue_id, {
                    venue_name: formData.venue_name,
                    capacity: Number(formData.capacity),
                    location: formData.location,
                    remarks: formData.remarks
                });
            } else {
                await createVenue({
                    venue_id: formData.venue_id,
                    venue_name: formData.venue_name,
                    capacity: Number(formData.capacity),
                    location: formData.location,
                    remarks: formData.remarks
                });
            }
            setShowModal(false);
            fetchVenues();
        } catch (error) {
            console.error(error);
            alert("Failed to save venue");
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this venue?")) {
            try {
                await deleteVenue(id);
                fetchVenues();
            } catch (error) {
                console.error(error);
                alert("Failed to delete venue");
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
                    <h1 className="h4 fw-bold mb-0">Venues</h1>
                    <p className="text-muted small mb-0">
                        Manage meeting rooms and venue capacity.
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
                    + New Venue
                </button>
            </div>

            {/* Venue Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-header" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">Venue List</h2>
                </div>

                <div className="card-body p-0">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th style={{ width: "10%" }}>Venue ID</th>
                                <th style={{ width: "25%" }}>Venue Name</th>
                                <th style={{ width: "12%" }}>Capacity</th>
                                <th style={{ width: "23%" }}>Location</th>
                                <th>Remarks</th>
                                <th style={{ width: "15%" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-4">Loading venues...</td>
                                </tr>
                            ) : venues.map((venue) => (
                                <tr key={venue.venue_id}>
                                    <td className="fw-bold small">{venue.venue_id}</td>
                                    <td className="fw-semibold small">{venue.venue_name}</td>
                                    <td className="small">{venue.capacity}</td>
                                    <td className="small text-muted">{venue.location}</td>
                                    <td className="small text-muted">{venue.remarks}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm me-2"
                                            style={{
                                                borderColor: primaryBlue,
                                                color: primaryBlue,
                                                borderRadius: "6px"
                                            }}
                                            onClick={() => handleOpenModal(venue)}
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
                                            onClick={() => handleDelete(venue.venue_id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {!loading && venues.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center text-muted py-4">
                                        No venues found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Venue Modal */}
            {showModal && (
                <>
                    <div className="modal fade show d-block" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content border-0 shadow">
                                <div className="modal-header" style={headerBlue}>
                                    <h5 className="modal-title">{isEditing ? "Edit Venue" : "Add Venue"}</h5>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>

                                <div className="modal-body">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Venue ID
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. VN-001"
                                                value={formData.venue_id}
                                                onChange={(e) => setFormData({ ...formData, venue_id: e.target.value })}
                                                disabled={isEditing}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Venue Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter venue name"
                                                value={formData.venue_name}
                                                onChange={(e) => setFormData({ ...formData, venue_name: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Capacity
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter seating capacity"
                                                value={formData.capacity}
                                                onChange={(e) => setFormData({ ...formData, capacity: Number(e.target.value) })}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label fw-semibold">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Building / Floor / Wing"
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label fw-semibold">
                                                Remarks
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                placeholder="Optional facilities or notes"
                                                value={formData.remarks}
                                                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                                            ></textarea>
                                        </div>
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
                                        {isEditing ? "Update Venue" : "Save Venue"}
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
