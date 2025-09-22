import type {
	ActiveDonationTableProps,
	ChurchCollectionsProps,
	DayBookEntry,
	EmployersSalaryProps,
	InActiveDonationTableProps,
	RentShopInfoProps,
	SubscriptionProps,
	WorkerProps,
} from '@/types';
import get_rent_shop_info from '../data/get_rent_shop_info.json';

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

export const getActiveDonationsSectionData = (row: ActiveDonationTableProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					family_number: row.unique_family_id || '',
					total_donation_amount: row.amount || '',
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
					anbiam: row.anbiam_name || '',
				},
			},
		],
	},
];

export const getInActiveDonationsSectionData = (row: InActiveDonationTableProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					Place: row.place || '',
					donation_for: row.donation_for_content || '',
					amount: row.amount || '',
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
					date: row.date || '',
					voucher_number: row.receipt_no || '',
					mobile_number: row.mobile_no || '',
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
					address: row.address || '',
				},
			},
		],
	},
];

export const getChurchCollectionsSectionData = (row: ChurchCollectionsProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					month: row.month || '',
					total_amount: row.monthly_total || '',
				},
			},
		],
	},
];

export const getRentSectionData = (row?: RentShopInfoProps) => {
	const data = row ?? get_rent_shop_info.rent_shop_info[0];

	return [
		{
			col: 1,
			sections: [
				{
					heading: 'PROPERTY DETAILS',
					data: {
						Type: data.property_type_content || '',
						Fixed_Monthly_Amount: data.type_data_2 || '',
						Fixed_From_On: data.type_data_3 || '',
					},
				},
			],
		},
		{
			col: 2,
			sections: [
				{
					heading: 'RENDER DETAILS',
					data: {
						Render_Name: data.render_name || '',
						Mobile_Number_Of_The_Head: data.mobile_no || '',
					},
				},
			],
		},
		{
			col: 3,
			sections: [
				{
					heading: 'AGREEMENT DETAILS',
					data: {
						Agreement_From: data.ag_from || '',
						Agreement_Period: data.ag_period || '',
						Agreement_End_On: data.ag_end_on || '',
					},
				},
			],
		},
	];
};

export const getDayBookSectionData = (row: DayBookEntry) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					date: row.date || '',
					receipt_no: row.unique_id || '',
					type: row.type || '',
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
					type_description: row.t_data_2 || '',
					type_details: row.t_data_3 || '',
					'income_/_expense': row.t_data_1 || '',
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
					amount: row.amount || '',
					income_source: row.source_content || '',
				},
			},
		],
	},
];
