import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/constants';
import { z } from 'zod';

const validMobile = z
	.string()
	.trim()
	.regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number');

const validDate = z
	.string()
	.trim()
	.regex(/^\d{2}-\d{2}-\d{4}$/, 'Date must be in dd-mm-yyyy format');

const imageValidation = z
	.custom<File>()
	.refine((file) => file instanceof File && file.size > 0 && file.size <= 1024 * 1024, {
		message: 'Image is required and must be less than 1MB',
	});

export const yearSelectionSchema = z.object({
	year_type: z.enum(['current_year', 'next_year'], {
		required_error: 'Please select a year type',
	}),
});

const requiredImageSchema = z
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

const optionalImageSchema = z
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

export type YearSelectionFormValues = z.infer<typeof yearSelectionSchema>;

export const uploadSchema = z.object({
	document: z
		.instanceof(FileList)
		.refine((files) => files.length > 0, {
			message: 'File is required',
		})
		.refine((files) => files[0]?.size <= 5 * 1024 * 1024, {
			message: 'Max file size is 5MB',
		})
		.refine(
			(files) => {
				const allowedTypes = [
					'application/pdf',
					'application/vnd.ms-excel',
					'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				];
				return allowedTypes.includes(files[0]?.type);
			},
			{
				message: 'Only PDF and Excel files are allowed',
			}
		),
});

export type UploadSchema = z.infer<typeof uploadSchema>;

export { validMobile, validDate, imageValidation, requiredImageSchema, optionalImageSchema };
