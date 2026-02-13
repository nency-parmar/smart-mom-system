'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getVenues() {
    try {
        const venues = await prisma.venues.findMany({
            orderBy: {
                venue_name: 'asc',
            },
        });
        return venues;
    } catch (error) {
        console.error('Error fetching venues:', error);
        throw new Error('Failed to fetch venues');
    }
}

export async function createVenue(data: {
    venue_id: string;
    venue_name: string;
    capacity: number;
    location?: string;
    remarks?: string;
}) {
    try {
        await prisma.venues.create({
            data: {
                ...data,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });
        revalidatePath('/master/venues');
        return { success: true };
    } catch (error) {
        console.error('Error creating venue:', error);
        throw new Error('Failed to create venue');
    }
}

export async function updateVenue(venueId: string, data: {
    venue_name: string;
    capacity: number;
    location?: string;
    remarks?: string;
}) {
    try {
        await prisma.venues.update({
            where: { venue_id: venueId },
            data: {
                ...data,
                updated_at: new Date(),
            },
        });
        revalidatePath('/master/venues');
        return { success: true };
    } catch (error) {
        console.error('Error updating venue:', error);
        throw new Error('Failed to update venue');
    }
}

export async function deleteVenue(venueId: string) {
    try {
        await prisma.venues.delete({
            where: { venue_id: venueId },
        });
        revalidatePath('/master/venues');
        return { success: true };
    } catch (error) {
        console.error('Error deleting venue:', error);
        throw new Error('Failed to delete venue');
    }
}
