import { z } from 'zod';

export const requiredNumber = (msg = 'Enter a valid number') =>
	z.coerce.number({ invalid_type_error: msg }).min(0, msg);

export const optionalNumber = (msg = 'Enter a number greater than 0') =>
	z.coerce.number({ invalid_type_error: msg }).min(1, msg).optional();

export const numberField = (field = 'This field') =>
	z.coerce.number({ invalid_type_error: `${field} must be a number` }).min(0, `${field} cannot be negative`);

export const optionalNumberField = (field = 'This field') =>
	z.coerce
		.number({ invalid_type_error: `${field} must be a number` })
		.min(0, `${field} cannot be negative`)
		.optional();
