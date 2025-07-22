import { z } from 'zod';

export const institutionsFormSchema = z.object({
	category: z.string().nonempty('Category is required'),
	schoolType: z.string().nonempty('School Type is required'),
	diocesanCategory: z.string().nonempty('Diocesan Category is required'),
	schoolName: z.string().nonempty('School Name is required'),
	placeName: z.string().nonempty('Place Name is required'),
	landOwnership: z.string().nonempty('Land Ownership is required'),
	establishedYear: z.string().optional(),
	s_recognition_date: z.string().optional(),
	s_recognition_no: z.string().optional(),
	class_from: z.string().min(1, 'Please select a class'),
	gender: z.string().min(1, 'Please select gender'),
	classUpto: z.string().min(1, 'Please select a class'),
	runBy: z.string(),
	dioceseName: z.string().nonempty('Diocese Name is required'),
	medium: z.string().min(1, 'Please select a medium'),
	management: z.string().min(1),
	optionalContactNumber: z.string().optional(),
	optionalContactMail: z.string().optional(),
});

export type InstitutionsFormData = z.infer<typeof institutionsFormSchema>;

export const noviciateFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	place: z.string().min(1, 'Place is required'),
	landOwnerShip: z.string().nonempty('Land Ownership is required'),
	belongsTo: z.string().optional(),
	congregationName: z.string().min(1, 'CongregationName is required'),
	seminary: z.string().nonempty('Seminary is required'),
	mobile_no: z.string().optional(),
	mail_id: z.string().optional(),
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
	congregation: z.string().min(1, { message: 'Please select a congregation' }),
	abbreviation: z.string().min(1, { message: 'Please select an abbreviation' }),
	establishedDate: z.string().optional(),
	establishedBy: z.string().optional(),
	landOwnership: z.string().nonempty('Land Ownership is required'),
	address: z.string().optional(),
	mobile_no: z.string().optional(),
	mail_id: z.string().optional(),
});

export type CommunitiesFormData = z.infer<typeof communitiesFormSchema>;
