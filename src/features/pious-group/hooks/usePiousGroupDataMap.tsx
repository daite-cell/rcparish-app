import {
	anbiam_council_dummy_data,
	anbiam_incharge_dummy_data,
	association_council_member_dummy_data,
	family_overview_dummy_data,
	parish_associations_dummy_data,
	parish_council_family_members_dummy_data,
	parish_council_members_dummy_data,
	parish_sons_and_daughters_dummy_data,
	religious_person_dummy_data,
} from '../data';

const usePiousGroupDataMap = (): Record<string, object[]> => ({
	families: family_overview_dummy_data,
	parish_council_members: parish_council_members_dummy_data,
	family_members: parish_council_family_members_dummy_data,
	priest_nun_parish: parish_sons_and_daughters_dummy_data,
	religious_people_parish: religious_person_dummy_data,
	anbiams: anbiam_council_dummy_data,
	anbiam_incharge: anbiam_incharge_dummy_data,
	associations_incharge: association_council_member_dummy_data,
	associations_club: parish_associations_dummy_data,
});

export default usePiousGroupDataMap;
