import { z } from 'zod';

export const rentFormSchema = z.object({
	rentType: z.string().min(1, 'Select Rent Type'),
	shopType: z.string().min(1, 'Please select an option type'),
	shopName: z.string().min(1, 'Property name is required').max(100, 'Property name too long'),

	propertyOwner: z.enum(['Parish', 'Association', 'Diocese', 'Other'], {
		required_error: 'Property owner is required',
	}),

	maintainedBy: z.enum(['0', '1', '2', '3'], {
		required_error: 'Maintained by is required',
	}),

	ownershipBy: z.enum(['0', '1', '2', '3'], {
		required_error: 'Ownership selection is required',
	}),

	renderName: z.string().min(1, 'Renter name is required'),

	renderMobile: z.string().regex(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),

	adhaarNumber: z.string().regex(/^\d{12}$/, 'Aadhaar number must be exactly 12 digits'),

	address: z.string().min(1, 'Address is required'),

	agreementType: z.enum(['rent', 'lease']),

	advanceAmount: z
		.number({
			invalid_type_error: 'Advance amount must be a number',
		})
		.min(0, 'Advance amount cannot be negative'),

	fixedMonthlyAmount: z
		.number({
			invalid_type_error: 'Fixed monthly amount must be a number',
		})
		.min(0, 'Fixed monthly amount cannot be negative'),

	leaseAmount: z
		.number({
			invalid_type_error: 'Lease amount must be a number',
		})
		.min(0, 'Lease amount cannot be negative')
		.optional(),

	fixedAmountFrom: z
		.number({
			invalid_type_error: 'Fixed amount from must be a number',
		})
		.min(0, 'Fixed amount from cannot be negative')
		.optional(),

	agreementDocument: z.enum(['yes', 'no'], {
		required_error: 'Agreement document written is required',
	}),

	agreementFrom: z.coerce.date().refine((date) => date <= new Date(), {
		message: 'Agreement from date cannot be in the future',
	}),

	agreementPeriod: z.string().min(1, 'Agreement period is required'),

	agreementEnd: z.coerce.date().refine((date) => date >= new Date(), {
		message: 'Agreement end date cannot be in the past',
	}),

	priestName: z.string().optional(),
});
export type RentFormType = z.infer<typeof rentFormSchema>;

export const cemeteryFormSchema = z.object({
	from: z.enum(['same_parish', 'different_parish'], {
		required_error: 'From is required',
	}),
	parishName: z.string().min(1, 'Parish name is required'),
	familyName: z.string().min(1, 'Family name is required'),
	cemeteryNumber: z.string().min(1, 'Cemetery number is required'),
	maintainedBy: z.string().min(1, 'Maintained by is required'),

	mobile_no: z.string().regex(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),

	nameOfParish: z.string().min(1, 'Name of parish is required'),
	cemeteryAt: z.string().min(1, 'Cemetery at is required'),
	address: z.string().min(1, 'Address at is required'),
	dug_on: z.coerce.date().refine((date) => date <= new Date(), {
		message: 'Dug on date cannot be in the future',
	}),
});

export type CemeteryFormType = z.infer<typeof cemeteryFormSchema>;

export const churchInventoryFormSchema = z.object({
	subStationName: z.string().min(1, 'Sub Station is required'),
	thingsName: z.string().min(1, 'Things name is required'),
	category: z.enum(
		[
			'Garments and Vestments',
			'Electric Appliances',
			'Audio Systems',
			'Furniture - Wood Material Based',
			'Furniture - Steel and Iron Based',
			'Statue',
			'Instruments',
			'Glass Items',
			'Decoration Things',
			'Others',
		],
		{
			required_error: 'Please select a category',
		}
	),
	ratePerItem: z.string().min(1, 'Rate per item is required'),
	quantity: z.string().min(1, 'Quantity is required'),
	price: z.string(),
	buyerType: z.enum(['Purchased', 'Sponsored'], {
		required_error: 'Please select a buyer type',
	}),
	purchasedName: z.string().min(1, 'Purchased name is required'),
	dateOn: z.coerce.date().refine((date) => date <= new Date(), {
		message: 'Date on cannot be in the future',
	}),
	propertyOwnFor: z.enum(['Parish', 'Parish Priest', 'Diocese'], {
		required_error: 'Property own for is required',
	}),
});

export type ChurchInventoryFormType = z.infer<typeof churchInventoryFormSchema>;

export const otherInventoryFormSchema = z.object({
	thingsName: z.string().min(1, 'Things name is required'),
	otherInventoryCategory: z.enum(['0', '1', '2', '3', '4', '5', '6', '7', '8'], {
		required_error: 'Please select a category',
	}),
	category: z.enum(
		[
			'Garments and Vestments',
			'Electric Appliances',
			'Audio Systems',
			'Furniture - Wood Material Based',
			'Furniture - Steel and Iron Based',
			'Statue',
			'Instruments',
			'Glass Items',
			'Decoration Things',
			'Others',
		],
		{
			required_error: 'Please select a category',
		}
	),
	ratePerItem: z.string().min(1, 'Rate per item is required'),
	quantity: z.string().min(1, 'Quantity is required'),
	price: z.string(),
	buyerType: z.enum(['Purchased', 'Sponsored'], {
		required_error: 'Please select a buyer type',
	}),
	purchasedName: z.string().min(1, 'Purchased name is required'),
	dateOn: z.coerce.date().refine((date) => date <= new Date(), {
		message: 'Date on cannot be in the future',
	}),
	propertyOwnFor: z.enum(['Parish', 'Parish Priest', 'Diocese'], {
		required_error: 'Property own for is required',
	}),
});

export type OtherInventoryFormType = z.infer<typeof otherInventoryFormSchema>;
