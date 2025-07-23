import { z } from 'zod';

export const institutionsFormSchema = z.object({
	category: z.string().min(1, 'Category is required'),
	schoolType: z.string().min(1, 'School Type is required'),
	diocesanCategory: z.string().min(1, 'Diocesan Category is required'),
	schoolName: z.string().min(1, 'School Name is required'),
	placeName: z.string().min(1, 'Place Name is required'),
	landOwnership: z.string().min(1, 'Land Ownership is required'),

	establishedYear: z
		.string()
		.optional()
		.refine((val) => !val || /^\d{4}$/.test(val), 'Established Year must be a 4-digit year'),

	s_recognition_date: z
		.string()
		.optional()
		.refine((val) => !val || /^\d{4}-\d{2}-\d{2}$/.test(val), 'Recognition Date must be in YYYY-MM-DD format'),

	s_recognition_no: z.string().optional(),

	class_from: z.string().min(1, 'Please select a class'),
	gender: z.string().min(1, 'Please select gender'),
	classUpto: z.string().min(1, 'Please select a class'),

	runBy: z.string().min(1, 'Please specify who runs the institution'),
	dioceseName: z.string().min(1, 'Diocese Name is required'),
	medium: z.string().min(1, 'Please select a medium'),
	management: z.string().min(1, 'Please select management'),

	optionalContactNumber: z
		.string()
		.optional()
		.refine((val) => !val || /^[6-9]\d{9}$/.test(val), 'Invalid mobile number'),

	optionalContactMail: z
		.string()
		.optional()
		.refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), 'Invalid email address'),
});

export type InstitutionsFormData = z.infer<typeof institutionsFormSchema>;
export const noviciateFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	place: z.string().min(1, 'Place is required'),
	landOwnerShip: z.string().min(1, 'Land Ownership is required'),
	belongsTo: z.string().optional(),

	congregationName: z.string().min(1, 'Congregation Name is required'),
	seminary: z.string().min(1, 'Seminary is required'),

	mobile_no: z
		.string()
		.optional()
		.refine((val) => !val || /^[6-9]\d{9}$/.test(val), 'Invalid mobile number'),

	mail_id: z
		.string()
		.optional()
		.refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), 'Invalid email address'),

	address: z.string().optional(),
});

export type NoviciateFormData = z.infer<typeof noviciateFormSchema>;

export const communitiesFormSchema = z.object({
	subStationName: z.string().min(1, 'Sub Station is required'),
	conventType: z.string().min(1, 'Please select the type of convent'),
	name: z.string().min(1, 'Name is required'),
	place: z.string().min(1, 'Place is required'),

	belongsTo: z.enum(['diocese', 'congregation'], {
		required_error: 'Please select an option',
	}),

	congregation: z.string().min(1, 'Please select a congregation'),
	abbreviation: z.string().min(1, 'Please select an abbreviation'),

	establishedDate: z
		.string()
		.optional()
		.refine((val) => !val || /^\d{4}-\d{2}-\d{2}$/.test(val), 'Established Date must be in YYYY-MM-DD format'),

	establishedBy: z.string().optional(),
	landOwnership: z.string().min(1, 'Land Ownership is required'),
	address: z.string().optional(),

	mobile_no: z
		.string()
		.optional()
		.refine((val) => !val || /^[6-9]\d{9}$/.test(val), 'Invalid mobile number'),

	mail_id: z
		.string()
		.optional()
		.refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), 'Invalid email address'),
});

export type CommunitiesFormData = z.infer<typeof communitiesFormSchema>;
