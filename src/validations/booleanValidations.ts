import { z } from 'zod';

export const requiredBoolean = (msg = 'This field is required') => z.boolean({ required_error: msg });

export const optionalBoolean = () => z.boolean().optional();
