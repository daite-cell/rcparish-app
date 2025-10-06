import type {
	BaptismMemberType,
	ChronicleMemberProps,
	ConfirmationRegisteredMemberType,
	DeathRegisterMemberAsParishType,
	HolyCommunionMemberType,
	MarriageProposalMemberType,
	MarriageProposalTableTwoRecordProps,
	MarriageRegisterMemberAsParishType,
	MarriageRegisterMemberType,
	MarriageRegisterRecordProps,
	MarriageRegistrationInDetails,
} from '@/types';

export const getHolyCommunionData = (row: HolyCommunionMemberType) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { active_ness: 'Active' } },
			{
				heading: 'Family details',
				data: {
					family_name: row.family_name || '',
					unique_anbiam_family_number: row.anbiam_id || '',
					main_station: row.sub_station_name || '',
					anbiam: row.anbiam_name || '',
					name_of_head: row.family_head || '',
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
					gender: row.gender || '',
					date_of_baptism: row.baptism_date || '',
					father_name: row.father_name || '',
					mother_name: row.mother_name || '',
					god_father_name: row.god_father_name || '',
					god_mother_name: row.god_mother_name || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'First holy communion details',
				data: {
					fhc_date: row.holy_communion_date || '',
					fhc_at: row.holy_communion_at || '',
					fhc_in: row.holy_communion_in || '',
					minister: row.minister || '',
					registration_number: '',
					remarks: row.remarks || '',
				},
			},
		],
	},
];

export const getBaptismSectionData = (row: BaptismMemberType) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { active_ness: 'Active' } },
			{
				heading: 'Family details',
				data: {
					family_name: row.family_name || '',
					unique_anbiam_family_number: row.unique_family_id || '',
					main_station: row.sub_station_name || '',
					anbiam: row.anbiam_name || '',
					name_of_head: row.member_name || '',
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
					gender: row.gender || '',
					date_of_baptism: row.birth_date || '',
					father_name: row.father_name || '',
					mother_name: row.mother_name || '',
					god_father_name: row.god_father_name || '',
					god_mother_name: row.god_mother_name || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'BAPTISM DETAILS',
				data: {
					bapitism_date: row.baptism_date || '',

					bapitism_at: row.baptism_at || '',
					bapitism_in: row.baptism_in || '',
					minister: row.minister || '',
					registration_number: '',
					remarks: row.remarks || '',
				},
			},
		],
	},
];

export const getConfirmationsData = (row: ConfirmationRegisteredMemberType) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { active_ness: 'Active' } },
			{
				heading: 'Family details',
				data: {
					family_name: row.family_name || '',
					unique_anbiam_family_number: row.anbiam_id || '',
					main_station: row.sub_station_name || '',
					anbiam: row.anbiam_name || '',
					name_of_head: row.family_head || '',
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
					gender: row.gender || '',
					date_of_baptism: row.baptism_date || '',
					father_name: row.father_name || '',
					mother_name: row.mother_name || '',
					god_father_name: row.god_father_name || '',
					god_mother_name: row.god_mother_name || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'CONFIRMATION DETAILS',
				data: {
					confirmation_date: row.holy_communion_date || '',
					confirmation_at: row.holy_communion_at || '',
					confirmation_in: row.holy_communion_in || '',
					minister: row.minister || '',
					registration_number: '',
					remarks: row.remarks || '',
				},
			},
		],
	},
];

export const getChroniclesSectionData = (row: ChronicleMemberProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					parish_name: row.parish_content || '',
					event_number: row.event_no || '',
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
					event_date: row.chronicles_date || '',
					descriptions: row.descriptions || '',
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
					availability_of_document: row.document_availability || '',
					document: 'view',
				},
			},
		],
	},
];

export const getMarriageRegistrationSectionData = (row: MarriageRegisterRecordProps | MarriageRegisterMemberType) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { activeness: 'Active', registration_number: row.register_no || '' } },
			{
				heading: 'Family details',
				data: {
					family_name: (row as MarriageRegisterMemberType).family_name || '',
					main_station: (row as MarriageRegisterMemberType).sub_station_name || '',
					anbiam: (row as MarriageRegisterMemberType).anbiam_name || '',
					unique_anbiam_family_number: row.unique_family_id || '',
				},
			},
			{
				heading: 'MARRIAGE DETAILS',
				data: {
					'banns_/_rectification': row.marriage_type || '',
					marriage_date: row.marriage_date || '',
					marriage_at: row.marriage_at || '',
					marriage_in: row.marriage_in || '',
					minister: row.minister || '',
				},
			},
			{
				heading: 'ANNOUNCEMENT DATES',
				data: {
					'1st_announcement_on': (row as MarriageRegisterRecordProps).a_date_1 || '',
					'2nd_announcement_on': (row as MarriageRegisterRecordProps).a_date_2 || '',
					'3rd_announcement_on': (row as MarriageRegisterRecordProps).a_date_3 || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'BRIDEGROOM / HUSBAND DETAILS',
				data: {
					marital_status: (row as MarriageRegisterRecordProps).b_marital_status_content || '',
					marriage_preparation_class: (row as MarriageRegisterRecordProps).bg_marriage_class_content || '',
					attended_date: `${(row as MarriageRegisterRecordProps).bg_mc_data_1 || ''} - ${(row as MarriageRegisterRecordProps).bg_mc_data_2 || ''}`,
					which_parish: (row as MarriageRegisterRecordProps).bg_parish_name || '',
					which_diocese: (row as MarriageRegisterRecordProps).bg_mc_data_4 || '',
					'bridegroom_father_& _mother_name': `${(row as MarriageRegisterRecordProps).bg_father_name || ''} & ${(row as MarriageRegisterRecordProps).bg_mother_name || ''}`,
					bridegroom_parish_name: (row as MarriageRegisterRecordProps).bg_parish_name || '',
					religion_of_bridegroom: (row as MarriageRegisterRecordProps).bg_religion || '',
					whether_received_necessary_sacraments: (row as MarriageRegisterRecordProps).bg_received || '',
				},
			},
			{
				heading: 'BRIDEGROOM WITNESSES',
				data: {
					witness_for_bridegroom: (row as MarriageRegisterRecordProps).bg_witness_1 || '',
				},
			},
			{
				heading: 'BRIDEGROOM ADDRESS',
				data: {
					address_of_bridegroom: (row as MarriageRegisterRecordProps).bg_address || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'BRIDE / WIFE DETAILS',
				data: {
					marital_status: (row as MarriageRegisterRecordProps).bg_marital_status_content || '',
					marriage_preparation_class: (row as MarriageRegisterRecordProps).b_marriage_class_content || '',
					attended_date: `${(row as MarriageRegisterRecordProps).b_mc_data_1 || ''} - ${(row as MarriageRegisterRecordProps).b_mc_data_2 || ''}`,
					which_parish: (row as MarriageRegisterRecordProps).b_parish_name || '',
					which_diocese: (row as MarriageRegisterRecordProps).b_mc_data_4 || '',
					'bride_father_& _mother_name': `${(row as MarriageRegisterRecordProps).b_father_name || ''} & ${(row as MarriageRegisterRecordProps).b_mother_name || ''}`,
					bride_parish_name: (row as MarriageRegisterRecordProps).b_parish_name || '',
					religion_of_bride: (row as MarriageRegisterRecordProps).b_religion || '',
					whether_received_necessary_sacraments: (row as MarriageRegisterRecordProps).b_received || '',
				},
			},
			{
				heading: 'BRIDE WITNESSES',
				data: {
					witness_for_bride: (row as MarriageRegisterRecordProps).b_witness_1 || '',
				},
			},
			{
				heading: 'BRIDE ADDRESS',
				data: {
					address_of_bride: (row as MarriageRegisterRecordProps).b_address || '',
					remarks: (row as MarriageRegisterRecordProps).remarks || '',
				},
			},
		],
	},
];
export const getMarriageRegistrationInDetailsSectionData = (
	row: MarriageRegisterMemberAsParishType | MarriageRegistrationInDetails
) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { activeness: 'InActive', registration_number: row.register_no || '' } },

			{
				heading: 'MARRIAGE DETAILS',
				data: {
					'banns_/_rectification': row.marriage_type || '',
					marriage_date: row.marriage_date || '',
					marriage_at: row.marriage_at || '',
					marriage_in: row.marriage_in || '',
					minister: row.minister || '',
					name_of_the_priest: (row as MarriageRegisterMemberAsParishType).priest_name || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'BRIDEGROOM / HUSBAND DETAILS',
				data: {
					marital_status: (row as MarriageRegistrationInDetails).bg_marital_status_content || '',
					reason_for_second_marriage: (row as MarriageRegistrationInDetails).bg_ms_data_1 || '',
					approved_by: (row as MarriageRegistrationInDetails).bg_ms_data_2 || '',
					'bridegroom_father_& _mother_name': `${(row as MarriageRegistrationInDetails).bg_father_name || ''} & ${(row as MarriageRegistrationInDetails).bg_mother_name || ''}`,
				},
			},
			{
				heading: 'BRIDEGROOM WITNESSES',
				data: {
					witness_for_bridegroom: (row as MarriageRegistrationInDetails).bg_witness_1 || '',
				},
			},
			{
				heading: 'BRIDEGROOM ADDRESS',
				data: {
					address_of_bridegroom: (row as MarriageRegistrationInDetails).bg_address || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'BRIDE / WIFE DETAILS',
				data: {
					marital_status: (row as MarriageRegistrationInDetails).bg_marital_status_content || '',
				},
			},
			{
				heading: 'BRIDE WITNESSES',
				data: {
					witness_for_bridegroom: (row as MarriageRegistrationInDetails).b_witness_1 || '',
					divorce_received_from: (row as MarriageRegistrationInDetails).b_ms_data_2 || '',
					'bride_father_& _mother_name': `${(row as MarriageRegistrationInDetails).b_father_name || ''} & ${(row as MarriageRegistrationInDetails).b_mother_name || ''}`,
				},
			},
			{
				heading: 'BRIDE ADDRESS',
				data: {
					address_of_bridegroom: (row as MarriageRegistrationInDetails).b_address || '',
					remarks: (row as MarriageRegistrationInDetails).remarks || '',
				},
			},
		],
	},
];
export const getMarriageProposalTableTwoSectionData = (
	row: MarriageProposalMemberType | MarriageProposalTableTwoRecordProps
) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { activeness: 'Active', registration_number: row.register_no || '' } },
			{
				heading: 'BRIDEGROOM / BRIDE DETAILS',
				data: {
					gender: (row as MarriageProposalTableTwoRecordProps).gender || '',
					marital_status: (row as MarriageProposalTableTwoRecordProps).marital_status || '',
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
					marriage_preparation_class: (row as MarriageProposalTableTwoRecordProps).marriage_class_content || '',
					attended_date: `${(row as MarriageProposalTableTwoRecordProps).mc_data_1 || ''} - ${(row as MarriageProposalTableTwoRecordProps).mc_data_2 || ''}`,
					which_parish: (row as MarriageProposalTableTwoRecordProps).parish_name || '',
					which_diocese: (row as MarriageProposalTableTwoRecordProps).mc_data_4 || '',
					'bridegroom_father_& _mother_name': `${(row as MarriageProposalTableTwoRecordProps).father_name || ''} & ${(row as MarriageProposalTableTwoRecordProps).mother_name || ''}`,
					bridegroom_parish_name: (row as MarriageProposalTableTwoRecordProps).parish_name || '',
					religion_of_bridegroom: (row as MarriageProposalTableTwoRecordProps).religion || '',
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
					whether_received_necessary_sacraments: (row as MarriageProposalTableTwoRecordProps).received || '',
				},
			},
		],
	},
];

export const getDeathRegisterInParishSectionData = (row: DeathRegisterMemberAsParishType) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					active_ness: 'In-Active',
					unique_member_id: row.unique_member_id || '',
					parents_name: `${row.father_name || ''} & ${row.mother_name || ''}`,
					place: row.birth_place || '',
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
					birth_date: row.birth_date || '',
					birth_place: row.birth_place || '',
					died_on: row.died_on || '',
					died_at: row.died_at || '',
					funeral_on: row.funeral_date || '',
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
					buried_at: row.cemetery || '',
					minister: row.minister || '',
					remarks: row.remarks || '',
				},
			},
		],
	},
];
