'use client';

import { createMeeting } from '@/app/actions/meetings';

interface MeetingType {
    MeetingTypeID: number;
    MeetingTypeName: string;
}

export default function NewMeetingForm({ meetingTypes }: { meetingTypes: MeetingType[] }) {
    const headerBlue = {
        backgroundColor: '#0f172a',
        color: '#e5e7eb'
    };

    const primaryBlue = '#1d4ed8';
    const accentYellow = '#eab308';

    return (
        <form action={createMeeting} className="py-3 py-md-4">
            <div className="container-fluid" style={{ maxWidth: "1100px" }}>

                {/* Top Header */}
                <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                        <a href="/meetings" className="btn btn-sm btn-outline-secondary mb-2">
                            ← Back to Meetings
                        </a>
                        <h1 className="h4 fw-bold mb-1">Schedule New Meeting</h1>
                        <p className="text-muted small mb-0">
                            Meeting ID will be generated automatically
                        </p>
                    </div>
                    <span
                        className="badge rounded-pill px-3 py-2 fw-semibold"
                        style={{ backgroundColor: accentYellow, color: "#1f2937" }}
                    >
                        Required fields *
                    </span>
                </div>

                <div className="row g-4">
                    {/* LEFT – Meeting Details */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header" style={headerBlue}>
                                <h6 className="mb-0 fw-semibold">
                                    <i className="bi bi-calendar-event me-2"></i>
                                    Meeting Details
                                </h6>
                            </div>

                            <div className="card-body p-4">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold small">
                                            Meeting Type *
                                        </label>
                                        <select name="meetingTypeId" className="form-select" required>
                                            <option value="">Select meeting type</option>
                                            {meetingTypes.map(type => (
                                                <option key={type.MeetingTypeID} value={type.MeetingTypeID}>{type.MeetingTypeName}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold small">
                                            Venue
                                        </label>
                                        <select className="form-select">
                                            <option value="">Select venue</option>
                                            <option>Conference Room A (12 seats)</option>
                                            <option>Board Room (20 seats)</option>
                                            <option>Online (Zoom)</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold small">
                                            Date *
                                        </label>
                                        <input type="date" name="date" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold small">
                                            Time *
                                        </label>
                                        <input type="time" name="time" className="form-control" required />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold small">
                                            Description / Agenda *
                                        </label>
                                        <textarea
                                            name="description"
                                            className="form-control"
                                            rows={4}
                                            placeholder="Agenda, discussion points, expected outcomes..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT – Attachments */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-header" style={headerBlue}>
                                <h6 className="mb-0 fw-semibold">
                                    <i className="bi bi-paperclip me-2"></i>
                                    Attachments
                                </h6>
                            </div>

                            <div className="card-body p-4 text-center">
                                <div
                                    className="rounded-3 p-4 mb-3"
                                    style={{
                                        border: `2px dashed ${primaryBlue}`,
                                        cursor: "pointer",
                                        backgroundColor: "#f8fafc"
                                    }}
                                >
                                    <i className="bi bi-cloud-upload fs-2 text-primary mb-2 d-block"></i>
                                    <p className="fw-semibold mb-1">Upload Agenda / MOM</p>
                                    <small className="text-muted">
                                        PDF or DOCX (optional)
                                    </small>
                                    <input type="file" name="documentPath" className="d-none" />
                                </div>

                                <small className="text-muted">
                                    You can upload documents after the meeting as well.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-end gap-3 mt-4 pt-4 border-top">
                    <a href="/meetings" className="btn btn-outline-secondary px-4">
                        Cancel
                    </a>
                    <button
                        type="submit"
                        className="btn px-5 fw-semibold"
                        style={{
                            backgroundColor: primaryBlue,
                            color: "#fff"
                        }}
                    >
                        Create Meeting
                    </button>
                </div>

            </div>
        </form>
    );
}
