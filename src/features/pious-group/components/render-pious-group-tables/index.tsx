import { DynamicDataTable } from '@/components';
import {
	anbiam_council_dummy_data,
	anbiam_incharge_dummy_data,
	association_council_member_dummy_data,
	family_overview_dummy_data,
	parish_council_family_members_dummy_data,
	parish_council_members_dummy_data,
	parish_sons_and_daughters_dummy_data,
	religious_person_dummy_data,
} from '../../data';
import {
	useFamilyOverviewColumns,
	useParishCouncilColumns,
	useMembersInParishFamilyColumns,
	useParishSonsAndDaughtersColumns,
	useReligiousPeopleColumns,
	useAnbiamsColumns,
	useAnbiamsInchargeColumns,
	useAssociationCouncilMemberPropsColumns,
} from '../../columns';
import { useRouteName } from '@/utils/getRouteName';
import type { ColumnDef } from '@tanstack/react-table';

const RenderPiousGroupTables = () => {
	const type = useRouteName('type');
	const columnsMap: Record<string, ColumnDef<object>[]> = {
		families: useFamilyOverviewColumns() as ColumnDef<object>[],
		parish_council_members: useParishCouncilColumns() as ColumnDef<object>[],
		family_members: useMembersInParishFamilyColumns() as ColumnDef<object>[],
		priest_nun_parish: useParishSonsAndDaughtersColumns() as ColumnDef<object>[],
		religious_people_parish: useReligiousPeopleColumns() as ColumnDef<object>[],
		anbiams: useAnbiamsColumns() as ColumnDef<object>[],
		anbiam_incharge: useAnbiamsInchargeColumns() as ColumnDef<object>[],
		associations_incharge: useAssociationCouncilMemberPropsColumns() as ColumnDef<object>[],
	};
	const dataMap: Record<string, object[]> = {
		families: family_overview_dummy_data,
		parish_council_members: parish_council_members_dummy_data,
		family_members: parish_council_family_members_dummy_data,
		priest_nun_parish: parish_sons_and_daughters_dummy_data,
		religious_people_parish: religious_person_dummy_data,
		anbiams: anbiam_council_dummy_data,
		anbiam_incharge: anbiam_incharge_dummy_data,
		associations_incharge: association_council_member_dummy_data,
	};

	return <>{type && <DynamicDataTable wrapText={false} data={dataMap[type]} customColumns={columnsMap[type]} />}</>;
};

export default RenderPiousGroupTables;
