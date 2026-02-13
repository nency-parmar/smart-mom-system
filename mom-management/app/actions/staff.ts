'use server';

import { prisma } from '@/lib/prisma';

export async function getStaffWithActivity() {
    return await prisma.staff.findMany({
        include: {
            _count: {
                select: { UserActivity: true }
            }
        },
        orderBy: { StaffName: 'asc' }
    });
}

export async function getStaffActivityLogs(staffId: number) {
    return await prisma.userActivity.findMany({
        where: { StaffID: staffId },
        orderBy: { Timestamp: 'desc' },
        take: 50
    });
}
