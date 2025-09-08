import { z } from 'zod';

export const enumFromArray = <T extends [string, ...string[]]>(arr: T, msg = 'Please select an option') =>
	z.enum(arr, {
		required_error: msg,
		invalid_type_error: 'Invalid selection',
	});
