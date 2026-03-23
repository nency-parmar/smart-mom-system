'use client';

import { cancelMeeting, deleteMeeting } from '@/app/actions/meetings';
import { useRouter } from 'next/navigation';

export default function MeetingRowActions({ 
    meetingId, 
    isCancelled, 
    showAdminActions = true 
}: { 
    meetingId: number, 
    isCancelled: boolean,
    showAdminActions?: boolean
}) {
    const router = useRouter();

    const handleCancel = async () => {
        if (confirm("Are you sure you want to cancel this meeting?")) {
            const reason = prompt("Please enter a cancellation reason:");
            if (reason) {
                try {
                    await cancelMeeting(meetingId, reason);
                    router.refresh();
                } catch (error) {
                    alert("Failed to cancel meeting");
                }
            }
        }
    };

    const handleDelete = async () => {
        if (confirm("Are you sure you want to PERMANENTLY DELETE this meeting? This cannot be undone.")) {
            try {
                await deleteMeeting(meetingId);
                router.refresh();
            } catch (error) {
                alert("Failed to delete meeting");
            }
        }
    };

    return (
        <div className="btn-group btn-group-sm">
            <a href={`/meetings/${meetingId}`} className="btn btn-outline-primary" title="View">View</a>
            {showAdminActions && (
                <>
                    <a href={`/meetings/edit/${meetingId}`} className="btn btn-outline-secondary" title="Edit">Edit</a>
                    {!isCancelled && (
                        <button
                            className="btn btn-outline-warning"
                            onClick={handleCancel}
                            title="Cancel"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        className="btn btn-outline-danger"
                        onClick={handleDelete}
                        title="Delete Permanently"
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}
