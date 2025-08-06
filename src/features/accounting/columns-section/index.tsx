import type { EmployersSalaryProps, SubscriptionProps, WorkerProps } from '@/types';

export const getWorkersSectionData = (row: WorkerProps) => [
	{
		col: 1,
		sections: [
			{
				heading: 'WORKER STATUS',
				data: {
					worker_id: row.workerId || '',
					working_as: row.workingAs || '',
					salary: row.salaryPerMonth || '',
					salary_from_on: row.salaryFixedFromOn || '',
				},
			},
		],
	},

	{
		col: 2,
		sections: [
			{
				heading: 'WORKER DETAILS',
				data: {
					joining_date: row.dateOfJoining || '',
					mobile_number: row.mobileNumber || '',
					adhaar_number: row.aadhaarNumber || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					religion: row.religion || '',
					temporary_address: row.temporaryAddress || '',
					permanent_address: row.permanentAddress || '',
				},
			},
		],
	},
];

export const getSubscriptionSectionData = (row: SubscriptionProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					family_number: row.uniqueFamilyNumber || '',
					family_head_name: row.familyHeadName || '',
					mobile_number_of_head: row.familyHeadMobileNumber || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					main_station: row.mainStation || '',
					anbiam: row.anbiam || '',
					family_monthly_income: row.familyMonthlyIncome || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					subscribed_amount: row.fixedAmount || '',
					subscribed_from: row.fixedFrom || '',
				},
			},
		],
	},
];

export const getEmployersSalarySectionData = (row: EmployersSalaryProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					working_as: row.workingStatus || '',
					worker_id: row.workerId || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					mobile_number: row.mobileNumber || '',
					fixed_salary_amount: row.fixedSalaryAmount || '',
					fixed_salary_from: row.fixedSalaryFrom || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					last_paid_amount: row.grandPaidAmount || '',
					last_paid_date: row.lastPaidDate || '',
					last_paid_receipt_no: row.voucherNumber || '',
				},
			},
		],
	},
];
