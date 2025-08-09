import get_present_parish_council_members from '../data/get_present_parish_council_members.json';
import get_religious_people_parish_list from '../data/get_religious_people_parish_list.json';
import parish_sons_and_daughters_members from '../data/parish_sons_and_daughters_members.json';
import parish_council_family_members from '../data/parish_council_family_members.json';
import get_family_members from '../data/get_family_members.json';
import get_anbiams_list from '../data/get_anbiams_list.json';
import get_associations_club_list from '../data/get_associations_club_list.json';
import get_present_anbiam_incharge from '../data/get_present_anbiam_incharge.json';
import get_present_association_incharge from '../data/get_present_association_incharge.json';

const usePiousGroupDataMap = (): Record<string, object[]> => ({
	families: get_family_members.families_list,
	parish_council_members: get_present_parish_council_members.member_list,
	family_members: parish_council_family_members.members_list,
	priest_nun_parish: parish_sons_and_daughters_members.priest_nun_list,
	religious_people_parish: get_religious_people_parish_list.religious_people_parish_list,
	anbiams: get_anbiams_list.anbiams_list,
	anbiam_incharge: get_present_anbiam_incharge.president_list,
	associations_incharge: get_present_association_incharge.president_list,
	associations_club: get_associations_club_list.associations_club_list,
});

export default usePiousGroupDataMap;
