'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getAttendanceData() {
    try {
        const meetings = await prisma.meetings.findMany({
            where: {
                IsCancelled: false,
            },
            include: {
                MeetingType: true,
                MeetingMember: {
                    include: {
                        Staff: true,
                    },
                },
            },
            orderBy: {
                MeetingDate: 'desc',
            },
        });

        // Transform data to match the UI expectations if needed
        return meetings;
    } catch (error) {
        console.error('Error fetching attendance data:', error);
        throw new Error('Failed to fetch attendance data');
    }
}

export async function updateAttendanceStatus(meetingMemberId: number, isPresent: boolean) {
    try {
        await prisma.meetingMember.update({
            where: {
                MeetingMemberID: meetingMemberId,
            },
            data: {
                IsPresent: isPresent,
            },
        });

        revalidatePath('/attendance');
        return { success: true };
    } catch (error) {
        console.error('Error updating attendance status:', error);
        throw new Error('Failed to update attendance status');
    }
}

export async function updateAttendanceRemarks(meetingMemberId: number, remarks: string) {
    try {
        await prisma.meetingMember.update({
            where: {
                MeetingMemberID: meetingMemberId,
            },
            data: {
                Remarks: remarks,
            },
        });

        revalidatePath('/attendance');
        return { success: true };
    } catch (error) {
        console.error('Error updating attendance remarks:', error);
        throw new Error('Failed to update attendance remarks');
    }
}
