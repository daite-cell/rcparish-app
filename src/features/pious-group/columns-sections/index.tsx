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
					main_station: row.mainStation,
					general_election_conducted_on: row.electedDate,
					periods_ends_on: row.electedDate,
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
					position: row.positionInDiscipline,
					elected_status: row.electedStatus,
					elected_date: row.electedDate,
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
					elected_from: row.electedFrom,
					respective_name: row.nameOfRespectives,
					member_position: row.position,
					mobile_number: row.mobile,
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
					main_station: row.mainStationOrSubStation,
					parish_name: row.parishName,
					anbiam_id: row.anbiamId,
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
					elected_on: row.electedOn,
					period_of: row.periodOfYears,
					if_the_period_extended: row.ifExtended,
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
					period_ends_on: row.periodEndsOn,
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
					'main_station_/_sub_station': row.mainStation,
					anbiam: row.anbiam,
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
					mobile_number: row.mobile1,
					general_election_conducted_data: row.electedDate,
					elected_status: row.electedStatus,
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
					elected_date: row.electedDate,
					period_end_on: row.electedDate,
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
					'main_station_/_sub_station': row.mainStation,
					parish_name: row.parishName,
					association_id: row.associationsId,
					organized_by: row.organisedBy,
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
					elected_on: row.electedOn,
					period_of: row.periodOfYears,
					if_the_period_extended: row.ifExtended,
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
					period_ends_on: row.periodEndsOn,
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
					memb_from: row.memberFrom,
					'main_station_/_sub_station': row.mainStation,
					association: row.association,
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
					mobile_number: row.mobile,
					general_election_conducted_data: row.electedDate,
					elected_status: row.electedStatus,
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
					elected_date: row.electedDate,
					period_end_on: row.electedDate,
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
					unique_membership_number: row.uniqueMembershipNumber,
				},
			},
			{
				heading: 'Contact Details',
				data: {
					mobile_number: row.mobileNumber,
					adhaar_number: row.adhaarNumber,
				},
			},
			{
				heading: 'Occupation',
				data: {
					occupation: 'None',
					occupation_sector: 'None',
					monthly_income: row.monthlyIncome,
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
					birth_date: row.birthDate,
					gender: row.gender,
					blood_group: row.bloodGroup,
					physically_challenged: row.physicallyChallenged,
					community: row.communityCaste,
					sub_caste: row.subCaste,
					relation: row.relationshipToFamily,
					father_name: row.fatherName,
					mother_name: row.motherName,
					religion: row.religion,
					marriage_status: row.marriageStatus,
					marriage_date: row.marriageDate,
					vocation_status: row.vocationStatus,
					congregation_name: '',
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
					family_name: row.familyName,
					unique_anbiam_family_number: row.uniqueAnbiamFamilyNumber,
					anbiam: row.anbiam,
					main_station: row.mainStationSubStation,
				},
			},
			{
				heading: 'SACRAMENTS DETAILS',
				data: {
					god_father_name: '',
					god_mother_name: '',
					bapstim_date: row.baptismDate,
					holy_communion_date: row.holyCommunionDate,
					confirmation_date: row.confirmationDate,
				},
			},
			{
				heading: 'QUALIFICATION & PROF.QUALIFICATION',
				data: {
					qualification_status: row.qualification,
					qualification: '',
					category_of_qualification: "Entry didn't make",
					prof_qualification_status: row.qualification,
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
					mobile_number: row.mobileNumber,
					email_id: '',
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
					family_name: row.familyName,
					unique_anbiam_family_number: row.uniqueFamilyId,
					main_station: row.station,
					anbiam: row.anbiam,
					relation_to_family: row.relationshipToFamily,
					family_head: row.familyHead,
					father_name: row.fatherName,
					mother_name: row.motherName,
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
					category: row.category,
					diocese_name: row.nameOfRespective,
					current_status: row.presentStatus,
					position: row.studyingOrPosition,
					place: row.place,
					permanent_address: row.permanentAddress,
					temporary_address: row.temporaryAddress || '',
				},
			},
		],
	},
];

export const getReligiousPeopleSectionData = (row: ReligiousPersonProps) => [
	{
		col: 1,
		sections: [{ data: { person_id: row.personId, gender: row.gender, position: row.position } }],
	},
	{
		col: 2,
		sections: [
			{
				data: {
					'Institution_/_convent': row.institution,
					in_charge_for: row.inChargeFor,
					mobile_number: row.contactMobileNumber || '',
				},
			},
		],
	},
];
