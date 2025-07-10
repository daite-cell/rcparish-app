import {
	useFamilyOverviewColumns,
	useParishCouncilColumns,
	useMembersInParishFamilyColumns,
	useParishSonsAndDaughtersColumns,
	useReligiousPeopleColumns,
	useAnbiamsColumns,
	useAnbiamsInchargeColumns,
	useAssociationCouncilMemberPropsColumns,
} from '../columns';
import type { ColumnDef } from '@tanstack/react-table';

const usePiousGroupColumnsMap = (): Record<string, ColumnDef<object>[]> => ({
	families: useFamilyOverviewColumns() as ColumnDef<object>[],
	parish_council_members: useParishCouncilColumns() as ColumnDef<object>[],
	family_members: useMembersInParishFamilyColumns() as ColumnDef<object>[],
	priest_nun_parish: useParishSonsAndDaughtersColumns() as ColumnDef<object>[],
	religious_people_parish: useReligiousPeopleColumns() as ColumnDef<object>[],
	anbiams: useAnbiamsColumns() as ColumnDef<object>[],
	anbiam_incharge: useAnbiamsInchargeColumns() as ColumnDef<object>[],
	associations_incharge: useAssociationCouncilMemberPropsColumns() as ColumnDef<object>[],
});

export default usePiousGroupColumnsMap;
