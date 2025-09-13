const alphabet = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

const months = [
	{ name: 'All', value: '' },
	{ name: 'Jan', value: 1 },
	{ name: 'Feb', value: 2 },
	{ name: 'Mar', value: 3 },
	{ name: 'Apr', value: 4 },
	{ name: 'May', value: 5 },
	{ name: 'June', value: 6 },
	{ name: 'July', value: 7 },
	{ name: 'Aug', value: 8 },
	{ name: 'Sep', value: 9 },
	{ name: 'Oct', value: 10 },
	{ name: 'Nov', value: 11 },
	{ name: 'Dec', value: 12 },
];

const dateOptions: Record<string, { value: string; label: string }[]> = {
	calender_dates: [
		{ value: '', label: 'Select Date Type' },
		{ value: 'firstProfessionDate', label: 'Date of First Profession' },
		{ value: 'ordinationDate', label: 'Date of Priestly Ordination' },
		{ value: 'birthDate', label: 'Date of Birth' },
	],
	family_members: [
		{ value: '', label: 'Select Date Type' },
		{ value: 'birth_date', label: 'Date of Birth' },
		{ value: 'baptism_date', label: 'Baptism Date' },
		{ value: 'holy_communion_date', label: 'Holy Communion Date' },
		{ value: 'confirmation_date', label: 'Confirmation Date' },
	],
	families: [
		{ value: '', label: 'Select Date Type' },
		{ value: 'marriage_date', label: 'Marriage Date' },
	],
};

export { alphabet, months, dateOptions };
