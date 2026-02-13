import { getMeetingTypes } from '@/app/actions/meetings';
import NewMeetingForm from './NewMeetingForm';

export default async function NewMeetingPage() {
    const meetingTypes = await getMeetingTypes();

    return <NewMeetingForm meetingTypes={meetingTypes} />;
}
