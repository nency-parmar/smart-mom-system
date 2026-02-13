import { getMeeting, getMeetingTypes } from '@/app/actions/meetings';
import EditMeetingForm from './EditMeetingForm';
import { notFound } from 'next/navigation';

export default async function EditMeetingPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = parseInt(params.id);

    const [meeting, meetingTypes] = await Promise.all([
        getMeeting(id),
        getMeetingTypes()
    ]);

    if (!meeting) {
        notFound();
    }

    return <EditMeetingForm meeting={meeting} meetingTypes={meetingTypes} />;
}
