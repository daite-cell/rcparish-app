import { z } from 'zod';

export const fileValidation = (msg = 'File is required') =>
	z.custom<File>().refine((file) => file instanceof File && file.size > 0, {
		message: msg,
	});

export const optionalFileValidation = (msg = 'File cannot be empty') =>
	z
		.custom<File>()
		.optional()
		.refine((file) => !file || (file instanceof File && file.size > 0), {
			message: msg,
		});

export const optionalFile = () =>
	z
		.any()
		.optional()
		.refine((file) => !file || file instanceof File, { message: 'Uploaded file must be a valid file' });
