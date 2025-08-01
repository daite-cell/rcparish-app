import {
	aadhaarValidation,
	enumFromArray,
	futureDate,
	indianMobileValidation,
	maxLengthString,
	numberField,
	pastDate,
	requiredString,
} from '@/validations';
import { z } from 'zod';

export const rentFormSchema = z.object({
	rentType: requiredString('Select Rent Type'),
	shopType: requiredString('Please select an option type'),
	shopName: maxLengthString(100, 'Property name too long').min(1, 'Property name is required'),

	propertyOwner: enumFromArray(['Parish', 'Association', 'Diocese', 'Other'], 'Property owner is required'),
	maintainedBy: enumFromArray(['0', '1', '2', '3'], 'Maintained by is required'),
	ownershipBy: enumFromArray(['0', '1', '2', '3'], 'Ownership selection is required'),

	renderName: requiredString('Renter name is required'),
	renderMobile: indianMobileValidation,
	adhaarNumber: aadhaarValidation(),

	address: requiredString('Address is required'),

	agreementType: enumFromArray(['rent', 'lease'], 'Agreement type is required'),
	advanceAmount: numberField('Advance amount'),
	fixedMonthlyAmount: numberField('Fixed monthly amount'),
	leaseAmount: numberField('Lease amount').optional(),
	fixedAmountFrom: numberField('Fixed amount from').optional(),

	agreementDocument: enumFromArray(['yes', 'no'], 'Agreement document written is required'),

	agreementFrom: pastDate('Agreement from date cannot be in the future'),
	agreementPeriod: requiredString('Agreement period is required'),
	agreementEnd: futureDate('Agreement end date cannot be in the past'),

	priestName: z.string().optional(),
});

export type RentFormType = z.infer<typeof rentFormSchema>;

export const cemeteryFormSchema = z.object({
	from: enumFromArray(['same_parish', 'different_parish'], 'From is required'),
	parishName: requiredString('Parish name is required'),
	familyName: requiredString('Family name is required'),
	cemeteryNumber: requiredString('Cemetery number is required'),
	maintainedBy: requiredString('Maintained by is required'),
	mobile_no: indianMobileValidation,
	nameOfParish: requiredString('Name of parish is required'),
	cemeteryAt: requiredString('Cemetery at is required'),
	address: requiredString('Address at is required'),
	dug_on: pastDate('Dug on date cannot be in the future'),
});

export type CemeteryFormType = z.infer<typeof cemeteryFormSchema>;

export const churchInventoryFormSchema = z.object({
	subStationName: requiredString('Sub Station is required'),
	thingsName: requiredString('Things name is required'),
	category: enumFromArray(
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
		'Please select a category'
	),
	ratePerItem: requiredString('Rate per item is required'),
	quantity: requiredString('Quantity is required'),
	price: z.string(),
	buyerType: enumFromArray(['Purchased', 'Sponsored'], 'Please select a buyer type'),
	purchasedName: requiredString('Purchased name is required'),
	dateOn: pastDate(),
	propertyOwnFor: enumFromArray(['Parish', 'Parish Priest', 'Diocese'], 'Property own for is required'),
});

export type ChurchInventoryFormType = z.infer<typeof churchInventoryFormSchema>;

export const otherInventoryFormSchema = z.object({
	thingsName: requiredString('Things name is required'),
	otherInventoryCategory: enumFromArray(['0', '1', '2', '3', '4', '5', '6', '7', '8'], 'Please select a category'),
	category: enumFromArray(
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
		'Please select a category'
	),
	ratePerItem: requiredString('Rate per item is required'),
	quantity: requiredString('Quantity is required'),
	price: z.string(),
	buyerType: enumFromArray(['Purchased', 'Sponsored'], 'Please select a buyer type'),
	purchasedName: requiredString('Purchased name is required'),
	dateOn: pastDate(),
	propertyOwnFor: enumFromArray(['Parish', 'Parish Priest', 'Diocese'], 'Property own for is required'),
});

export type OtherInventoryFormType = z.infer<typeof otherInventoryFormSchema>;
