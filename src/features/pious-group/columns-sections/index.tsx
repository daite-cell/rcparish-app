import type {
	AnbiamCouncilDataProps,
	AnbiamInchargeDataProps,
	AssociationCouncilMemberProps,
	MembersInParishFamilyProps,
	ParishAssociationClubProps,
	ParishCouncilMemberDetailsProps,
	ParishSonsAndDaughtersProps,
	ReligiousPersonProps,
} from '@/types';

export const getParishCouncilSectionData = (row: ParishCouncilMemberDetailsProps) => [
	{
		col: 1,
		sections: [
			{
				heading: 'Parish Council',
				data: {
					main_station: row.sub_station_name,
					general_election_conducted_on: row.election_conducted,
					periods_ends_on: row.period_end_on,
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'Parish Council Member',
				data: {
					position: row.position,
					elected_status: row.elected_status,
					elected_date: row.elected_date,
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'Parish Council Member',
				data: {
					elected_from: row.elected_from,
					respective_name: row.elected_category_name,
					member_position: row.position,
					mobile_number: row.mobile_no,
				},
			},
		],
	},
];

export const getAnbiamSectionData = (row: AnbiamCouncilDataProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					main_station: row.sub_station_name,
					parish_name: row.parish_content,
					anbiam_id: row.anbiam_id,
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
					elected_on: row.elected_on,
					period_of: row.period_of,
					if_the_period_extended: row.extend_period,
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
					period_ends_on: row.period_end_on,
				},
			},
		],
	},
];

export const getAnbiamInchargeSectionData = (row: AnbiamInchargeDataProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					position: row.position,
					'main_station_/_sub_station': row.sub_station_name,
					anbiam: row.anbiam_name,
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
					mobile_number: row.mobile_no,
					general_election_conducted_data: row.elected_date,
					elected_status: row.elected_status,
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
					elected_date: row.elected_date,
					period_end_on: row.period_end_on,
				},
			},
		],
	},
];

export const getAssociationClubSectionData = (row: ParishAssociationClubProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					'main_station_/_sub_station': row.sub_station_name,
					parish_name: row.parish_content,
					association_id: row.association_id,
					organized_by: row.organised_by,
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
					elected_on: row.elected_on,
					period_of: row.period_of,
					if_the_period_extended: 'Yes',
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
					period_ends_on: row.period_end_on,
				},
			},
		],
	},
];

export const getAssociationInchargeSectionData = (row: AssociationCouncilMemberProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					position: row.position,

					'main_station_/_sub_station': row.sub_station_name,
					association: row.association_name,
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
					mobile_number: row.mobile_no,
					general_election_conducted_data: row.elected_date,
					elected_status: row.elected_status,
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
					elected_date: row.elected_date,
					period_end_on: '',
				},
			},
		],
	},
];

export const getFamilesSectionData = (row: MembersInParishFamilyProps) => [
	{
		col: 1,
		sections: [
			{
				data: {
					activeness: 'Active',
					unique_membership_number: row.unique_member_id,
				},
			},
			{
				heading: 'Contact Details',
				data: {
					mobile_number: row.mobile_no,
					adhaar_number: row.adhaar_no,
					living_with: row.living_with,
					living_status: row.living_status,
					email_id: '',
					temporary_address: row.temporary_address,
					permanent_address: row.permanent_address,
				},
			},
			{
				heading: 'Occupation',
				data: {
					occupation: row.occupation,
					occupation_sector: row.occupation,
					monthly_income: row.monthly_income,
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'Personal Details',
				data: {
					birth_date: row.birth_date,
					gender: row.gender,
					blood_group: row.blood_group_content,
					physically_challenged: row.physically_challenged,
					community: row.community_category,
					sub_caste: row.sub_caste,
					relation: row.relation,
					father_name: row.father_name,
					mother_name: row.mother_name,
					religion: row.religion,
					marriage_status: row.marriage_status,
					marriage_date: row.individual_marriage_date,
					vocation_status: row.vocation_status,
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'Family Details',
				data: {
					family_name: row.family_name,
					unique_anbiam_family_number: row.unique_family_id,
					anbiam: row.anbiam_name,
					main_station: row.sub_station_name,
				},
			},
			{
				heading: 'SACRAMENTS DETAILS',
				data: {
					god_father_name: '',
					god_mother_name: '',
					bapstim_date: row.baptism_date,
					holy_communion_date: row.holy_communion_date,
					confirmation_date: row.confirmation_date,
				},
			},
			{
				heading: 'QUALIFICATION & PROF.QUALIFICATION',
				data: {
					qualification_status: row.q_status,
					qualification: '',
					category_of_qualification: "Entry didn't make",
					prof_qualification_status: '',
					prof_qualification: "Entry didn't make",
				},
			},
		],
	},
];

export const getSonsAndDaughtersSectionData = (row: ParishSonsAndDaughtersProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					members_from_familes: 'Member from family',
					mobile_number: row.mobile_no,
					email_id: row.email_id,
					gender: row.gender,
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
					family_name: row.family_name,
					unique_anbiam_family_number: row.unique_family_id,
					main_station: row.sub_station_name,
					anbiam: row.anbiam_name,
					relation_to_family: row.relation,
					family_head: row.father_name,
					father_name: row.father_name,
					mother_name: row.mother_name,
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
					category: row.vs_data_1,
					diocese_name: row.vs_data_2,
					current_status: row.vs_data_3,
					position: row.vs_data_4,
					place: row.vs_data_5,
					permanent_address: row.permanent_address,
					temporary_address: row.temporary_address || '',
				},
			},
		],
	},
];

export const getReligiousPeopleSectionData = (row: ReligiousPersonProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					person_id: row.convent_id,
					gender: row.gender,
					position: row.position,
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
					'institution_/_convert': row.name,
					in_charge_for: row.in_charge,
					mobile_number: row.mobile_no,
				},
			},
		],
	},
];
