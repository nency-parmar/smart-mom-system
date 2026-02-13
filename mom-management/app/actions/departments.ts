'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getDepartments() {
    try {
        const departments = await prisma.departments.findMany({
            orderBy: {
                department_name: 'asc',
            },
        });
        return departments;
    } catch (error) {
        console.error('Error fetching departments:', error);
        throw new Error('Failed to fetch departments');
    }
}

export async function createDepartment(data: {
    department_name: string;
    remarks?: string;
}) {
    try {
        await prisma.departments.create({
            data: {
                ...data,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });
        revalidatePath('/master/departments');
        return { success: true };
    } catch (error) {
        console.error('Error creating department:', error);
        throw new Error('Failed to create department');
    }
}

export async function updateDepartment(departmentId: number, data: {
    department_name: string;
    remarks?: string;
}) {
    try {
        await prisma.departments.update({
            where: { department_id: departmentId },
            data: {
                ...data,
                updated_at: new Date(),
            },
        });
        revalidatePath('/master/departments');
        return { success: true };
    } catch (error) {
        console.error('Error updating department:', error);
        throw new Error('Failed to update department');
    }
}

export async function deleteDepartment(departmentId: number) {
    try {
        await prisma.departments.delete({
            where: { department_id: departmentId },
        });
        revalidatePath('/master/departments');
        return { success: true };
    } catch (error) {
        console.error('Error deleting department:', error);
        throw new Error('Failed to delete department');
    }
}
