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

const parish_council_pages = [
	'parish_council_members',
	'associations_incharge',
	'anbiam_incharge',
	'associations_club',
	'anbiams',
];

const dummy_religious_info = {
	id: 1,
	name: 'Sr Helen Rose',
	person_id: 'RP001',
	gender: 'Female',
	position: 'Sir',
	institution: 'Arokia Illam',
	in_charge_for: 'Choir',
	phone_number: '1234567890',
};

const family_members_dummy_data = {
	user_name: 'Anthony Muthu',

	activeness_details: {
		activeness: 'Active',
		unique_membership_number: 'TH049M03',
	},

	contact_details: {
		mobile_number: '9731153385',
		adhaar_number: '',
		living_with: 'Family',
		living_status: 'In Parish',
		parish_name: '',
		diocese_name: '',
		country_name: '',
		email_id: '',
		temporary_address: '723, Madha Koil Street, Perumanam',
		permanent_address: '723, Madha Koil Street, Perumanam',
	},

	occupation_details: {
		occupation: 'None',
		occupation_sector: 'None',
		monthly_income: '0',
	},

	personal_details: {
		birth_date: '2005-04-20',
		gender: 'Female',
		blood_group: 'unknown',
		physically_challenged: 'no',
		type_percentage: '',
		community: 'SC',
		sub_caste: 'Adi Dravidar',
		relation: 'Daughter',
		father_name: 'Christhuraj',
		mother_name: 'Rabecca',
		religion: 'RC',
		religion_details: 'Native Parish - Perumanam Parish',
		migrated_reason: '',
		migrated_previous_parish_diocese: '',
		migrated_previous_state_country_rite: '',
		migrated_date: '',
		converted_from: '',
		conversion_date: '',
		conversion_minister: '',
		remarks: '',
		marriage_status: 'no',
		marriage_date: '',
		marriage_remark: '',
		vocation_status: 'no',
		congregation_name: '',
		congregation_position: '',
		congregation_joining_date: '',
		congregation_place: '',
		congregation_remarks: '',
	},

	family_details: {
		family_name: 'Christuraj-Rabecca',
		unique_anbiam_family_number: 'TH049',
		anbiam: 'St Thomaiyar Anbiam',
		main_station: 'Perumanam Parish',
	},

	sacraments_details: {
		god_father_name: '',
		god_mother_name: '',
		baptism_date: '2005-05-05',
		holy_communion_date: '1999-05-13',
		confirmation_date: '2000-06-01',
	},

	qualification_and_professional: {
		qualification_status: 'completed',
		qualification: '',
		qualification_category: "Entry didn't make",
		qualification_studying_in: '',
		qualification_studying_institute_name: '',
		qualification_studying_institute_place: '',
		qualification_studying_institute_management: '',
		prof_qualification_status: 'completed',
		prof_qualification: "Entry didn't make",
		prof_studying_course: '',
		prof_studying_institute_name: '',
		prof_studying_institute_place: '',
		prof_studying_institute_management: '',
	},
};

const priest_family_dummy_data = {
	parish: {
		church_name: 'Christ the King Church',
		parish_name: 'Perumanam Parish',
		diocese_name: 'Thiruvannamalai',
	},

	profile: {
		member_from: 'Members from Family',
		mobile_number: '8056281135',
		email: '',
		gender: 'Male',
		member_name: 'Maria Anthony alias AR Anthonysamy',
	},

	family_info: {
		family_name: 'Rayappan-Josephine Lourdurani',
		unique_family_number: 'TH041',
		sub_station: 'Perumanam Parish',
		anbiam: 'St Thomaiyar Anbiam',
		relation: 'Brother',
		family_head: 'Rayappan',
		father_name: 'Rayappan',
		mother_name: '',
	},

	religious_details: {
		category: 'Diocese',
		diocese_name: 'Vellore',
		current_status: 'Priesthood',
		position: 'Parish Priest',
		place: 'Gandhi Nagar',
		permanent_address: '708, Madha Koil Street, Perumanam',
		temporary_address: '708, Madha Koil Street, Perumanam',
	},
};

const family_full_overview_data = {
	family_name: 'Israel-Carolin Mary',
	activeness: {
		active_ness: 'active',
	},
	family_details: {
		family_head_name: 'Israel',
		unique_anbiam_family_number: 'TH022',
		old_family_number: '',
		sub_station: 'Perumanam Parish',
		anbiam: 'St Thomaiyar Anbiam',
		father_or_husband_name: 'Israel',
		mother_or_wife_name: 'Carolin Mary',
		marriage_date: 'unknown',
	},
	social_status_details: {
		house_type: 'Concrete Roof',
		house_ownership: 'Own',
	},
	income_and_subscription_details: {
		family_monthly_income: '0',
		subscription_from: 'Jan-2024',
		family_card_valid_upto: 'Dec-2027',
		monthly_subscription: '50',
		cemetery_number: '',
	},
	community_details: {
		community: 'SC',
		sub_caste: 'Adi Dravidar',
	},
	contact_details: {
		living_status: 'In Parish',
		parish_name: '--',
		diocese_name: '--',
		country_name: '--',
		settled_as: 'Permanent',
		mobile_number: '0000000135',
		email_id: '--',
		temporary_address: '702, Madha Koil Street, perumanam',
		permanent_address: '702, Madha Koil Street, perumanam',
	},
};

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

export {
	member_dummy_data,
	parish_council_pages,
	dummy_religious_info,
	family_members_dummy_data,
	priest_family_dummy_data,
	family_full_overview_data,
	family_member_table_data,
};
