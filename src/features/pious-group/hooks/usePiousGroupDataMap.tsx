import get_present_parish_council_members from '../data/get_present_parish_council_members.json';
import get_religious_people_parish_list from '../data/get_religious_people_parish_list.json';
import parish_sons_and_daughters_members from '../data/parish_sons_and_daughters_members.json';
import get_anbiams_list from '../data/get_anbiams_list.json';
import get_associations_club_list from '../data/get_associations_club_list.json';
import get_present_anbiam_incharge from '../data/get_present_anbiam_incharge.json';
import get_present_association_incharge from '../data/get_present_association_incharge.json';
import get_families from '../data/get_families.json';
import get_members from '../data/get_members.json';

const usePiousGroupDataMap = (): Record<
	string,
	Record<
		string,
		{
			heading?: string;
			data: object[];
			enable_date_sorting?: boolean;
			enable_footer?: boolean;
			enable_month_filter?: boolean;
		}
	>
> => ({
	parish_council_members: {
		main: { data: get_present_parish_council_members.member_list },
	},
	religious_people_parish: {
		main: { data: get_religious_people_parish_list.religious_people_parish_list },
	},
	priest_nun_parish: {
		table_1: { heading: 'MEMBERS FROM FAMILY', data: parish_sons_and_daughters_members.priest_nun_list },
		table_2: { heading: 'OTHER MEMBERS', data: [] },
	},
	school_students: { main: { data: [] } },
	college_students: { main: { data: [] } },
	anbiams: { main: { data: get_anbiams_list.anbiams_list } },
	associations_club: { main: { data: get_associations_club_list.associations_club_list } },
	anbiam_incharge: { main: { data: get_present_anbiam_incharge.president_list } },
	associations_incharge: { main: { data: get_present_association_incharge.president_list } },
	family_members: {
		table_1: { heading: 'ACTIVE MEMBERS', data: get_members.members_list, enable_month_filter: true },
		table_2: { heading: 'INACTIVE MEMBERS', data: [], enable_month_filter: true },
	},
	families: {
		table_1: { heading: 'ACTIVE MEMBERS', data: get_families.families_list, enable_month_filter: true },
		table_2: { heading: 'INACTIVE MEMBERS', data: [], enable_month_filter: true },
	},
});

export default usePiousGroupDataMap;
