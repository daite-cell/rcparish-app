import { aadhaarValidation, enumFromArray, mobileValidation, requiredDate, requiredString } from '@/validations';
import { z } from 'zod';

export const donationSchema = z.object({
	activeness: enumFromArray(['Active', 'Inactive'], 'Activeness is required'),
	familyName: requiredString('Family Name is required'),
	subStationName: enumFromArray(['Main Station', 'Sub Station'], 'Main/Sub Station is required'),
	anbiam: enumFromArray(['Anbiam 1', 'Anbiam 2', 'Anbiam 3'], 'Anbiam is required'),
	memberName: requiredString('Member Name is required'),
	donationFor: enumFromArray(
		[
			'Festival Fund',
			'Church Fund',
			'Construction',
			'Education',
			'Church Development',
			'Mass Indention',
			'Charity work',
			'Other',
		],
		'Donation for is required'
	),
	amount: requiredString('Amount is required'),
	donationDate: requiredDate('Donation Date is required'),
	voucherNumber: requiredString('Voucher Number is required'),
});

export type donationFormType = z.infer<typeof donationSchema>;

export const workersSchema = z.object({
	activeness: enumFromArray(
		['Cook', 'Driver', 'Watchman', 'Sweeper', 'Catist', 'Accountant', 'Office Assistant', 'Other'],
		'Please select the working role'
	),
	workerName: requiredString('Name of the worker is required'),
	joiningDate: requiredDate('Date of joining is required'),
	monthlySalary: requiredString('Monthly salary is required'),
	salaryFixedFrom: requiredDate('Salary fixed from date is required'),
	religion: enumFromArray(['RC Christian', 'CSI', 'Hindu', 'Muslim', 'Others'], 'Please select a religion'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	aadhaarNumber: aadhaarValidation('Enter valid Aadhaar number'),
	permanentAddress: requiredString('Permanent address is required'),
	temporaryAddress: requiredString('Temporary address is required'),
	isSameAsPermanentAddress: z.boolean().optional(),
});
export type WorkersType = z.infer<typeof workersSchema>;

export const subscriptionSchema = z.object({
	familyName: requiredString('Family name is required'),
	familyNumber: requiredString('Old family number is required'),
	familyHeadName: requiredString('Family head name is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	subStationName: requiredString('Sub-Station selection is required'),
	selectedAnbiam: requiredString('Anbiam selection is required'),
	monthlyIncome: requiredString('Monthly income is required'),
	fixedAmount: requiredString('Fixed amount is required'),
	fixedFrom: requiredDate('Start date is required'),
	grandPaidAmount: requiredString('Grand paid amount is required'),
	paidUpto: requiredDate('Paid up to date is required'),
	subscriptionFor: requiredDate('Now subscription for date is required'),
	nowPayingAmount: requiredString('Now paying amount is required'),
	hasPriorBalance: requiredString('Please select if prior balance exists'),
	nowPayingDate: requiredDate('Now paying date is required'),
	voucherNumber: requiredString('Voucher number is required'),
	lastPaidAmount: requiredString('Last paid amount is required'),
	lastPaidDate: requiredDate('Last paid date is required'),
	lastPaidVoucherNumber: requiredString('Last paid voucher number is required'),
});

export type SubscriptionType = z.infer<typeof subscriptionSchema>;

export const employersSalarySchema = z.object({
	familyName: requiredString('Working role is required'),
	familyNumber: requiredString('Worker name is required'),
	familyHeadName: requiredString('Mobile number is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	fixedAmount: requiredString('Fixed salary amount is required'),
	fixedFrom: requiredDate('Fixed salary from date is required'),
	paidUpto: requiredDate('Salary paid upto date is required'),
	subscriptionFor: requiredDate('Date is required'),
	nowPayingAmount: requiredString('Voucher number is required'),
	hasPriorBalance: z.enum(['yes', 'no'], {
		required_error: 'Please select if advance is being received',
	}),
	grandPaidAmount: requiredString('Now paying amount is required'),
	lastPaidAmount: requiredString('Last paid amount is required'),
	lastPaidDate: requiredDate('Last paid date is required'),
	lastPaidVoucherNumber: requiredString('Last paid voucher number is required'),
});

export type EmployersSalaryType = z.infer<typeof employersSalarySchema>;

export const dayBookSchema = z.object({
	donationDate: requiredDate('Date is required'),
	name: requiredString('Name of the person is required'),
	voucherId: requiredString('Voucher number or ID is required'),
	entryType: enumFromArray(['donation', 'category'], 'Please select a valid entry type'),
	categoryName: requiredString('Category name is required'),
	description: requiredString('Description is required'),
	details: requiredString('Details are required'),
	amount: requiredString('Amount is required'),
	donationFor: enumFromArray(['income', 'expense'], 'Please select a donation type'),
	hasMoreDetails: enumFromArray(['yes', 'no'], 'Please select an option'),
	incomeSource: enumFromArray(['cash', 'bank', 'cheque'], 'Please select an income source'),
});

export type DayBookType = z.infer<typeof dayBookSchema>;
