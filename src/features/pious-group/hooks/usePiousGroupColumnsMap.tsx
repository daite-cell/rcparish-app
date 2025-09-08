import {
	useFamilyOverviewColumns,
	useParishCouncilColumns,
	useMembersInParishFamilyColumns,
	useParishSonsAndDaughtersFamilyMembersColumns,
	useReligiousPeopleColumns,
	useAnbiamsColumns,
	useAnbiamsInchargeColumns,
	useAssociationCouncilMemberPropsColumns,
	useAssociationClubColumns,
	useSchoolStudentsColumns,
	useCollegeStudentsColumns,
	useParishSonsAndDaughtersOtherMembersColumns,
} from '../columns';
import type { ColumnDef } from '@tanstack/react-table';

const usePiousGroupColumnsMap = (): Record<string, Record<string, ColumnDef<object>[]>> => ({
	parish_council_members: { main: useParishCouncilColumns() as ColumnDef<object>[] },
	religious_people_parish: { main: useReligiousPeopleColumns() as ColumnDef<object>[] },
	school_students: { main: useSchoolStudentsColumns() as ColumnDef<object>[] },
	college_students: { main: useCollegeStudentsColumns() as ColumnDef<object>[] },
	priest_nun_parish: {
		table_1: useParishSonsAndDaughtersFamilyMembersColumns() as ColumnDef<object>[],
		table_2: useParishSonsAndDaughtersOtherMembersColumns() as ColumnDef<object>[],
	},
	family_members: {
		table_1: useMembersInParishFamilyColumns() as ColumnDef<object>[],
		table_2: useMembersInParishFamilyColumns() as ColumnDef<object>[],
	},
	families: {
		table_1: useFamilyOverviewColumns() as ColumnDef<object>[],
		table_2: useFamilyOverviewColumns() as ColumnDef<object>[],
	},
	anbiams: {
		main: useAnbiamsColumns() as ColumnDef<object>[],
	},
	associations_club: {
		main: useAssociationClubColumns() as ColumnDef<object>[],
	},
	anbiam_incharge: {
		main: useAnbiamsInchargeColumns() as ColumnDef<object>[],
	},
	associations_incharge: {
		main: useAssociationCouncilMemberPropsColumns() as ColumnDef<object>[],
	},
});

export default usePiousGroupColumnsMap;
