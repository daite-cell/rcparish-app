import type { EmployersSalaryProps, SubscriptionProps, WorkerProps } from '@/types';

export const getWorkersSectionData = (row: WorkerProps) => [
	{
		col: 1,
		sections: [
			{
				heading: 'WORKER STATUS',
				data: {
					worker_id: row.worker_id || '',
					working_as: row.working_as || '',
					salary: row.salary || '',
					salary_from_on: row.salary_from || '',
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
					joining_date: row.joining_date || '',
					mobile_number: row.mobile_no || '',
					adhaar_number: row.adhaar_no || '',
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
					temporary_address: row.temporary_address || '',
					permanent_address: row.permanent_address || '',
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
					family_number: row.unique_family_id || '',
					family_head_name: row.family_name || '',
					mobile_number_of_head: row.mobile_no || '',
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
					main_station: row.sub_station_name || '',
					anbiam: row.anbiam_name || '',
					family_monthly_income: row.family_income || '',
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
					subscribed_amount: row.monthly_subscription || '',
					subscribed_from: row.subscription_from || '',
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
					working_as: row.working_as_content || '',
					worker_id: row.worker_id || '',
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
					mobile_number: row.mobile_no || '',
					fixed_salary_amount: row.salary || '',
					fixed_salary_from: row.salary_from || '',
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
					last_paid_amount: '-',
					last_paid_date: '-',
					last_paid_receipt_no: '-',
				},
			},
		],
	},
];
