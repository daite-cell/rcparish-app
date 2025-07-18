const member_overview_pages_with_tables = [
	'confirmations',
	'baptism',
	'holy_communion',
	'chronicles',
	'marriage_registration',
	'marriage_proposal',
	'death_register',
];
const holy_communion_dummy_members_data = [
	{
		memberName: 'Abilasha',
		memberId: 'AT020M02',
		familyName: 'Dinesh Kumar-Abilasha',
		familyId: 'AT020',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Annai Theresa Anbiam',
		anbiamId: 'S01A05',
		gender: 'Female',
		familyHead: 'Dinesh Kumar',
		fatherName: '',
		motherName: '',
		godFatherName: '',
		godMotherName: '',
		baptismDate: '1990-02-04',
		fhcDate: '1999-05-13',
		fhcReceived: 'yes',
		fhcAt: 'Christ the King Church',
		fhcIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abina Susaimary',
		memberId: 'AN002M03',
		familyName: 'Christuraj-Margaret',
		familyId: 'AN002',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Anthoniyar Anbiam',
		anbiamId: 'S01A04',
		gender: 'Female',
		familyHead: 'Christuraj',
		fatherName: 'Christhuraj',
		motherName: 'Margrate',
		godFatherName: '',
		godMotherName: '',
		baptismDate: '',
		fhcDate: '',
		fhcReceived: 'unknown',
		fhcAt: 'Christ the King Church',
		fhcIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
];

const baptism_member_dummy_data = [
	{
		memberName: 'Abilasha',
		memberId: 'AT020M02',
		familyName: 'Dinesh Kumar-Abilasha',
		familyId: 'AT020',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Annai Theresa Anbiam',
		anbiamId: 'S01A05',
		gender: 'Female',
		familyHead: 'Dinesh Kumar',
		fatherName: '',
		motherName: '',
		godFatherName: '',
		godMotherName: '',
		dateOfBirth: '1989-12-31',
		baptistDate: '1990-02-04',
		baptistAt: 'Christ the King Church',
		baptistIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abina Susaimary',
		memberId: 'AN002M03',
		familyName: 'Christuraj-Margaret',
		familyId: 'AN002',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Anthoniyar Anbiam',
		anbiamId: 'S01A04',
		gender: 'Female',
		familyHead: 'Christuraj',
		fatherName: 'Christhuraj',
		motherName: 'Margrate',
		godFatherName: '',
		godMotherName: '',
		dateOfBirth: '',
		baptistDate: '',
		baptistAt: 'Christ the King Church',
		baptistIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abinaya Mary',
		memberId: 'VE010M04',
		familyName: 'Velankanni-Magimairani',
		familyId: 'VE010',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Velankanni Madha Anbiam',
		anbiamId: 'S01A10',
		gender: 'Female',
		familyHead: 'Velankanni',
		fatherName: 'Velankanni',
		motherName: 'Magimairani',
		godFatherName: '',
		godMotherName: '',
		dateOfBirth: '2016-10-16',
		baptistDate: '2016-12-11',
		baptistAt: 'Christ the King Church',
		baptistIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abinesh',
		memberId: 'VE010M03',
		familyName: 'Velankanni-Magimairani',
		familyId: 'VE010',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Velankanni Madha Anbiam',
		anbiamId: 'S01A10',
		gender: 'Male',
		familyHead: 'Velankanni',
		fatherName: 'Velankanni',
		motherName: 'Magimairani',
		godFatherName: '',
		godMotherName: '',
		dateOfBirth: '2015-01-01',
		baptistDate: '2015-04-26',
		baptistAt: 'Christ the King Church',
		baptistIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abishek',
		memberId: 'SU038M04',
		familyName: 'Sagayaraj-Fathima',
		familyId: 'SU038',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Susaiyappar Anbiam',
		anbiamId: 'S01A03',
		gender: 'Male',
		familyHead: 'Sagayaraj',
		fatherName: 'Sagayaraj',
		motherName: 'Fathima',
		godFatherName: '',
		godMotherName: '',
		dateOfBirth: '',
		baptistDate: '',
		baptistAt: 'Christ the King Church',
		baptistIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abragam',
		memberId: 'VE007M01',
		familyName: 'Abragam-Maria Ranjini',
		familyId: 'VE007',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Velankanni Madha Anbiam',
		anbiamId: 'S01A10',
		gender: 'Male',
		familyHead: 'Abragam',
		fatherName: 'Abragam',
		motherName: '',
		godFatherName: '',
		godMotherName: '',
		dateOfBirth: '1992-06-19',
		baptistDate: '2005-12-10',
		baptistAt: 'Christ the King Church',
		baptistIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
];
const confirmation_dummy_data = [
	{
		memberName: 'Abilasha',
		memberId: 'AT020M02',
		familyName: 'Dinesh Kumar-Abilasha',
		familyId: 'AT020',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Annai Theresa Anbiam',
		anbiamId: 'S01A05',
		gender: 'Female',
		familyHead: 'Dinesh Kumar',
		fatherName: '',
		motherName: '',
		godFatherName: '',
		godMotherName: '',
		baptismDate: '1990-02-04',
		confirmationDate: '2000-06-01',
		confirmationReceived: 'yes',
		confirmationAt: 'Christ the King Church',
		confirmationIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abina Susaimary',
		memberId: 'AN002M03',
		familyName: 'Christuraj-Margaret',
		familyId: 'AN002',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Anthoniyar Anbiam',
		anbiamId: 'S01A04',
		gender: 'Female',
		familyHead: 'Christuraj',
		fatherName: 'Christhuraj',
		motherName: 'Margrate',
		godFatherName: '',
		godMotherName: '',
		baptismDate: '',
		confirmationDate: '',
		confirmationReceived: 'unknown',
		confirmationAt: 'Christ the King Church',
		confirmationIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abinaya Mary',
		memberId: 'VE010M04',
		familyName: 'Velankanni-Magimairani',
		familyId: 'VE010',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Velankanni Madha Anbiam',
		anbiamId: 'S01A10',
		gender: 'Female',
		familyHead: 'Velankanni',
		fatherName: 'Velankanni',
		motherName: 'Magimairani',
		godFatherName: '',
		godMotherName: '',
		baptismDate: '2016-12-11',
		confirmationDate: '',
		confirmationReceived: 'unknown',
		confirmationAt: 'Christ the King Church',
		confirmationIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abinesh',
		memberId: 'VE010M03',
		familyName: 'Velankanni-Magimairani',
		familyId: 'VE010',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Velankanni Madha Anbiam',
		anbiamId: 'S01A10',
		gender: 'Male',
		familyHead: 'Velankanni',
		fatherName: 'Velankanni',
		motherName: 'Magimairani',
		godFatherName: '',
		godMotherName: '',
		baptismDate: '2015-04-26',
		confirmationDate: '',
		confirmationReceived: 'unknown',
		confirmationAt: 'Christ the King Church',
		confirmationIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
	{
		memberName: 'Abishek',
		memberId: 'SU038M04',
		familyName: 'Sagayaraj-Fathima',
		familyId: 'SU038',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Susaiyappar Anbiam',
		anbiamId: 'S01A03',
		gender: 'Male',
		familyHead: 'Sagayaraj',
		fatherName: 'Sagayaraj',
		motherName: 'Fathima',
		godFatherName: '',
		godMotherName: '',
		baptismDate: '',
		confirmationDate: '',
		confirmationReceived: 'unknown',
		confirmationAt: 'Christ the King Church',
		confirmationIn: 'Perumanam Parish',
		minister: '',
		registrationNumber: '',
		remarks: '',
	},
];

const confirmation_register_dummy_data = [
	{
		memberName: 'Abilasha',
		memberId: 'AT020M02',
		familyName: 'Dinesh Kumar-Abilasha',
		familyId: 'AT020',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Annai Theresa Anbiam',
		anbiamId: 'S01A05',
		gender: 'Female',
		familyHead: 'Dinesh Kumar',
		fatherName: 'Dinesh Kumar',
		motherName: '',
		godFatherName: '',
		godMotherName: '',
		baptismDate: '1990-02-04',
		confirmationDate: '2000-06-01',
		confirmationReceived: 'yes',
		confirmationAt: 'Christ the King Church',
		confirmationIn: 'Perumanam Parish',
		minister: 'Fr. Joseph',
		registrationNumber: 'CONF-2024-001',
		remarks: 'Confirmed in home parish',
	},
	{
		memberName: 'Abina Susaimary',
		memberId: 'AN002M03',
		familyName: 'Christuraj-Margaret',
		familyId: 'AN002',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Anthoniyar Anbiam',
		anbiamId: 'S01A04',
		gender: 'Female',
		familyHead: 'Christuraj',
		fatherName: 'Christuraj',
		motherName: 'Margaret',
		godFatherName: 'Anthony',
		godMotherName: 'Maria',
		baptismDate: '1988-11-10',
		confirmationDate: '2001-07-15',
		confirmationReceived: 'yes',
		confirmationAt: 'Christ the King Church',
		confirmationIn: 'Perumanam Parish',
		minister: 'Fr. John',
		registrationNumber: 'CONF-2024-002',
		remarks: '',
	},
	{
		memberName: 'Abinesh',
		memberId: 'VE010M03',
		familyName: 'Velankanni-Magimairani',
		familyId: 'VE010',
		mainStation: 'Perumanam Parish',
		subStationId: 'S01',
		anbiam: 'St Velankanni Madha Anbiam',
		anbiamId: 'S01A10',
		gender: 'Male',
		familyHead: 'Velankanni',
		fatherName: 'Velankanni',
		motherName: 'Magimairani',
		godFatherName: 'John Bosco',
		godMotherName: 'Anita',
		baptismDate: '2015-04-26',
		confirmationDate: '2023-08-12',
		confirmationReceived: 'yes',
		confirmationAt: 'Christ the King Church',
		confirmationIn: 'Perumanam Parish',
		minister: 'Fr. Xavier',
		registrationNumber: 'CONF-2024-003',
		remarks: '',
	},
];

export {
	member_overview_pages_with_tables,
	holy_communion_dummy_members_data,
	baptism_member_dummy_data,
	confirmation_dummy_data,
	confirmation_register_dummy_data,
};
