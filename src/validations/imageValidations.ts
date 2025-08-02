import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/constants';
import { z } from 'zod';

export const imageValidation = z
	.custom<File>()
	.refine((file) => file instanceof File && file.size > 0 && file.size <= 1024 * 1024, {
		message: 'Image is required and must be less than 1MB',
	});

export const requiredImageSchema = z
	.custom<File>()
	.refine((file) => file instanceof File && file.size > 0, {
		message: 'File is required',
	})
	.refine((file) => file.size <= MAX_FILE_SIZE, {
		message: 'Max file size is 1MB',
	})
	.refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
		message: 'Only .jpg, .jpeg, .png, and .webp formats are supported',
	});

export const optionalImageSchema = z
	.custom<File>()
	.refine((file) => file instanceof File && file.size > 0, {
		message: 'File must be valid',
	})
	.refine((file) => file.size <= MAX_FILE_SIZE, {
		message: 'Max file size is 1MB',
	})
	.refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
		message: 'Only .jpg, .jpeg, .png, and .webp formats are supported',
	})
	.optional();
