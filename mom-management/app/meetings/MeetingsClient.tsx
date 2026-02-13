'use client';

import { useState } from 'react';
import ClientDate from '@/components/ClientDate';
import { cancelMeeting } from '@/app/actions/meetings';

// Define the shape of the data we expect from the server
// You might want to import this from a shared type file or infer it from Prisma
interface MeetingWithDetails {
    MeetingID: number;
    MeetingDate: Date;
    MeetingTypeID: number;
    MeetingDescription: string | null;
    DocumentPath: string | null;
    IsCancelled: boolean;
    CancellationReason: string | null;
    CancellationDateTime: Date | null;
    MeetingType: {
        MeetingTypeName: string;
    };
    MeetingMember: {
        StaffID: number;
        IsPresent: boolean;
        Staff: {
            StaffName: string;
        };
    }[];
}

export default function MeetingsClient({ initialMeetings, userRole }: { initialMeetings: MeetingWithDetails[], userRole: string }) {
    const today = new Date().toDateString(); // Simplified for now
    const isAdmin = userRole === 'ADMIN';

    const cardBlue = {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #020617 100%)',
        color: '#e5e7eb'
    };
    const headerBlue = {
        backgroundColor: '#0f172a',
        color: '#e5e7eb'
    };
    const accentYellow = '#eab308';
    const primaryBlue = '#1d4ed8';

    const [meetings, setMeetings] = useState(initialMeetings);

    const handleCancel = async (id: number) => {
        if (!isAdmin) return;
        if (confirm("Are you sure you want to cancel this meeting?")) {
            const reason = prompt("Please enter a cancellation reason:");
            if (reason) {
                try {
                    await cancelMeeting(id, reason);
                    // Optimistic update or refresh
                    window.location.reload();
                } catch (error) {
                    alert("Failed to cancel meeting");
                }
            }
        }
    };

    return (
        <div className="py-3 py-md-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                <div>
                    <h1 className="h4 fw-bold text-dark mb-1">Meetings Management</h1>
                    <p className="text-muted mb-0">
                        {isAdmin
                            ? "Create, schedule, track attendance, and manage MOM documents for all meetings."
                            : "View scheduled meetings and track meeting details."}
                    </p>
                </div>

                <div className="d-flex flex-column align-items-md-end mt-3 mt-md-0">
                    <span className="small text-muted">Today</span>
                    <span className="fw-semibold">{today}</span>
                    <div className="mt-2 d-flex gap-2">
                        {isAdmin && (
                            <a href="/meetings/new" className="btn btn-sm" style={{
                                backgroundColor: primaryBlue,
                                borderColor: primaryBlue,
                                color: "#fff",
                            }}>
                                + New Meeting
                            </a>
                        )}
                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button">
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Search & Filters */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3 align-items-end">
                        <div className="col-md-4">
                            <label className="form-label small text-muted">Search Meetings</label>
                            <input type="text" className="form-control form-control-sm" placeholder="Search..." />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted">Meeting Type</label>
                            <select className="form-select form-select-sm">
                                <option>All Types</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label className="form-label small text-muted">Status</label>
                            <select className="form-select form-select-sm">
                                <option>All</option>
                                <option>Upcoming</option>
                                <option>Completed</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <div className="d-grid">
                                <button className="btn btn-sm" style={{ backgroundColor: accentYellow, color: '#1f2933' }}>
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meetings Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center" style={headerBlue}>
                    <h2 className="h6 fw-semibold mb-0">All Meetings ({meetings.length})</h2>
                    <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-light active">List</button>
                        <button className="btn btn-outline-light">Calendar</button>
                        {isAdmin && <button className="btn btn-outline-light">Export</button>}
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-sm mb-0 align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th>Meeting ID</th>
                                    <th>Description</th>
                                    <th>Date & Time</th>
                                    <th>Type</th>
                                    <th>Staff</th>
                                    <th>Attendance</th>
                                    <th>Document</th>
                                    <th>Status</th>
                                    <th className="text-end pe-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {meetings.map((meeting) => {
                                    const staffCount = meeting.MeetingMember.length;
                                    const presentCount = meeting.MeetingMember.filter(m => m.IsPresent).length;
                                    const ownerName = meeting.MeetingMember[0]?.Staff?.StaffName || "Unknown";

                                    return (
                                        <tr key={meeting.MeetingID}>
                                            <td className="fw-semibold small">{meeting.MeetingID}</td>
                                            <td>
                                                <div className="small">{meeting.MeetingDescription}</div>
                                                <small className="text-muted">Owner: {ownerName}</small>
                                            </td>
                                            <td className="small"><ClientDate dateString={meeting.MeetingDate} /></td>
                                            <td className="small">
                                                <span className="badge bg-light text-dark fs-2xs">{meeting.MeetingType.MeetingTypeName}</span>
                                            </td>
                                            <td className="small">{staffCount}</td>
                                            <td className="small">
                                                <span className="badge bg-success fs-2xs">
                                                    {presentCount}/{staffCount}
                                                </span>
                                            </td>
                                            <td className="small">
                                                {meeting.DocumentPath ? (
                                                    <a href={meeting.DocumentPath} className="text-primary">MOM</a>
                                                ) : (
                                                    <span className="text-muted">-</span>
                                                )}
                                            </td>
                                            <td>
                                                {meeting.IsCancelled ? (
                                                    <>
                                                        <span className="badge bg-danger text-white fs-2xs">Cancelled</span>
                                                        <div className="small text-muted">{meeting.CancellationReason}</div>
                                                    </>
                                                ) : (
                                                    <span className="badge bg-primary text-white fs-2xs">Active</span>
                                                )}
                                            </td>
                                            <td className="text-end pe-4">
                                                <div className="btn-group btn-group-sm" role="group">
                                                    <a href={`/meetings/${meeting.MeetingID}`} className="btn btn-outline-primary btn-sm">View</a>
                                                    {isAdmin && (
                                                        <>
                                                            <a href={`/meetings/edit/${meeting.MeetingID}`} className="btn btn-outline-secondary btn-sm">Edit</a>
                                                            {!meeting.IsCancelled && (
                                                                <button
                                                                    className="btn btn-outline-danger btn-sm"
                                                                    onClick={() => handleCancel(meeting.MeetingID)}
                                                                >
                                                                    Cancel
                                                                </button>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer bg-light border-0 py-2">
                    <small className="text-muted">
                        Showing {meetings.length} meetings.
                    </small>
                </div>
            </div>

            {/* Quick Actions Sidebar - Only for Admin */}
            {isAdmin && (
                <div className="card border-0 shadow-sm mt-4">
                    <div className="card-body">
                        <h2 className="h6 fw-semibold mb-3">Quick Links</h2>
                        <div className="d-grid gap-2">
                            <a href="/meetings/new" className="btn btn-sm" style={{ backgroundColor: primaryBlue, borderColor: primaryBlue, color: "#fff" }}>
                                + Create New Meeting
                            </a>
                            <a href="/master/meeting-type" className="btn btn-sm btn-outline-primary">
                                Manage Meeting Types
                            </a>
                            <a href="/master/staff" className="btn btn-sm btn-outline-primary">
                                Staff Directory
                            </a>
                            <a href="/attendance" className="btn btn-sm btn-outline-secondary">
                                Mark Attendance
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

