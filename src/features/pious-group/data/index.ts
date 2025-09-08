const member_dummy_data = {
	user_name: 'Anthony Muthu',
	council_details: {
		parish_council: {
			main_station: 'Perumanam Parish',
			general_election_conducted_on: '2023-07-20',
			periods_ends_on: '2026-07-20',
		},
		parish_council_member__: {
			position: 'Member',
			elected_status: 'Regular',
			elected_date: '2023-07-20',
		},
		parish_council_member_: {
			elected_from: 'Anbiam Incharge',
			respective_name: 'St Arulanandar Anbiam',
			member_position: 'President',
			mobile_number: '9000000000',
		},
	},
};

const parish_council_pages = ['associations_incharge', 'anbiam_incharge', 'associations_club', 'anbiams'];

const family_member_table_data = [
	{
		member_id: 'TH022M01',
		activeness: 'Active',
		member_name: 'Israel',
		relation: 'Father/Husband',
		gender: 'Male',
	},
	{
		member_id: 'TH022M02',
		activeness: 'Active',
		member_name: 'Carolin Mary',
		relation: 'Mother/Wife',
		gender: 'Female',
	},
];

export { member_dummy_data, parish_council_pages, family_member_table_data };
