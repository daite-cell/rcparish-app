import { z } from 'zod';

export const requiredNumber = (msg = 'Enter a number greater than 0') =>
	z.union([z.string(), z.number()]).refine((val) => !isNaN(Number(val)) && Number(val) > 0, { message: msg });

export const optionalNumber = (msg = 'Enter a valid number') =>
	z
		.union([z.string(), z.number()])
		.optional()
		.refine((val) => val === undefined || (!isNaN(Number(val)) && Number(val) >= 0), { message: msg });

export const numberField = (field = 'This field') =>
	z.number({ invalid_type_error: `${field} must be a number` }).min(0, `${field} cannot be negative`);

export const optionalNumberField = (field = 'This field') =>
	z
		.number({ invalid_type_error: `${field} must be a number` })
		.min(0, `${field} cannot be negative`)
		.optional();
