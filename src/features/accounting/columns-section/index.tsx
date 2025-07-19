import type { WorkerProps } from '@/types';

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
