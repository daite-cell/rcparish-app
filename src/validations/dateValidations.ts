import { z } from 'zod';

export const requiredDate = (msg = 'Date is required') => z.string({ required_error: msg }).min(1, msg);

export const validDate = (msg = 'Date must be in dd-mm-yyyy format') => z.string().regex(/^\d{2}-\d{2}-\d{4}$/, msg);
export const optionalDate = (msg = 'Date must be in dd-mm-yyyy format') =>
	z
		.string()
		.regex(/^\d{2}-\d{2}-\d{4}$/, msg)
		.optional();

export const pastDate = (msg = 'Date cannot be in the future') =>
	z.coerce.date().refine(
		(date) => {
			const today = new Date();
			today.setHours(23, 59, 59, 999);
			return date <= today;
		},
		{ message: msg }
	);

export const futureDate = (msg = 'Date cannot be in the past') =>
	z.coerce.date().refine(
		(date) => {
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			return date >= today;
		},
		{ message: msg }
	);
