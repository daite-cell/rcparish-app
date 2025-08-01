import { z } from 'zod';

export const requiredString = (msg = 'This field is required') => z.string({ required_error: msg }).min(1, msg);

export const optionalNonEmptyString = (msg = 'Empty string not allowed') =>
	z
		.string()
		.optional()
		.refine((val) => !val || val.trim().length > 0, {
			message: msg,
		});

export const mobileValidation = (msg = 'Enter a valid 10-digit mobile number') =>
	z.string({ required_error: 'Mobile number is required' }).regex(/^[6-9]\d{9}$/, msg);

export const emailValidation = (msg = 'Enter a valid email address') =>
	z.string({ required_error: 'Email is required' }).email(msg);

export const aadhaarValidation = (msg = 'Enter a valid 12-digit Aadhaar number') =>
	z.string({ required_error: 'Aadhaar number is required' }).regex(/^\d{12}$/, msg);

export const pincodeValidation = (msg = 'Enter a valid 6-digit pincode') =>
	z.string({ required_error: 'Pincode is required' }).regex(/^\d{6}$/, msg);

export const panValidation = (msg = 'Enter a valid 10-digit PAN number') =>
	z.string({ required_error: 'PAN number is required' }).regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, msg);

export const optionalEmailValidation = z.union([z.string().email('Invalid email'), z.literal('')]).optional();

export const optionalMobileValidation = (msg = 'Enter a valid mobile number') =>
	z
		.string()
		.optional()
		.refine((val) => !val || /^[6-9]\d{9}$/.test(val), { message: msg });

export const optionalString = () => z.string().optional();

export const requiredDateWithMessage = (message: string) => z.string().min(1, message); // use for required date fields

export const optionalDateWithFormat = (message: string) =>
	z
		.string()
		.optional()
		.refine((val) => !val || /^\d{4}-\d{2}-\d{2}$/.test(val), { message });

export const optionalYear = (message: string) =>
	z
		.string()
		.optional()
		.refine((val) => !val || /^\d{4}$/.test(val), { message });

export const optionalMobile = () =>
	z
		.string()
		.optional()
		.refine((val) => !val || /^[6-9]\d{9}$/.test(val), {
			message: 'Invalid mobile number',
		});

export const optionalEmail = () =>
	z
		.string()
		.optional()
		.refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
			message: 'Invalid email address',
		});

export const longText = (min: number, message: string) => z.string().min(min, message);

export const numericString = (requiredMsg: string, numberMsg: string) =>
	z
		.string()
		.min(1, requiredMsg)
		.refine((val) => /^[0-9]+$/.test(val), { message: numberMsg });

export const maxLengthString = (len: number, msg: string) => z.string().max(len, msg);

export const indianMobileValidation = z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid Indian mobile number');
