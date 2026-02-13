'use client';

import { updateMeeting } from '@/app/actions/meetings';
import { useState } from 'react';

interface MeetingType {
    MeetingTypeID: number;
    MeetingTypeName: string;
}

interface Meeting {
    MeetingID: number;
    MeetingDate: Date;
    MeetingTypeID: number;
    MeetingDescription: string | null;
    DocumentPath: string | null;
}

export default function EditMeetingForm({ meeting, meetingTypes }: { meeting: Meeting, meetingTypes: MeetingType[] }) {
    const headerBlue = {
        backgroundColor: '#0f172a',
        color: '#e5e7eb'
    };

    const primaryBlue = '#1d4ed8';

    // Format date and time for inputs
    const dateObj = new Date(meeting.MeetingDate);
    const dateStr = dateObj.toISOString().split('T')[0];
    const timeStr = dateObj.toTimeString().slice(0, 5);

    const updateMeetingWithId = updateMeeting.bind(null, meeting.MeetingID);

    return (
        <form action={updateMeetingWithId} className="py-3 py-md-4">
            <div className="container-fluid" style={{ maxWidth: "1100px" }}>
                <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                        <a href="/meetings" className="btn btn-sm btn-outline-secondary mb-2">
                            ← Back to Meetings
                        </a>
                        <h1 className="h4 fw-bold mb-1">Edit Meeting #{meeting.MeetingID}</h1>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header" style={headerBlue}>
                                <h6 className="mb-0 fw-semibold">Meeting Details</h6>
                            </div>
                            <div className="card-body p-4">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold small">Meeting Type</label>
                                        <select name="meetingTypeId" className="form-select" defaultValue={meeting.MeetingTypeID} required>
                                            {meetingTypes.map(type => (
                                                <option key={type.MeetingTypeID} value={type.MeetingTypeID}>{type.MeetingTypeName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold small">Date</label>
                                        <input type="date" name="date" className="form-control" defaultValue={dateStr} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold small">Time</label>
                                        <input type="time" name="time" className="form-control" defaultValue={timeStr} required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-semibold small">Description</label>
                                        <textarea
                                            name="description"
                                            className="form-control"
                                            rows={4}
                                            defaultValue={meeting.MeetingDescription || ''}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end gap-3 mt-4 pt-4 border-top">
                    <a href="/meetings" className="btn btn-outline-secondary px-4">Cancel</a>
                    <button type="submit" className="btn px-5 fw-semibold" style={{ backgroundColor: primaryBlue, color: "#fff" }}>
                        Update Meeting
                    </button>
                </div>
            </div>
        </form>
    );
}
