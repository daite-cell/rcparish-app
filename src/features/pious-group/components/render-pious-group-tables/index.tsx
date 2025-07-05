import { DynamicDataTable } from '@/components';
import { family_overview_dummy_data, parish_council_members_dummy_data } from '../../data';
import { familyOverviewColumns, parishCouncilColumns } from '../../columns';
import { useRouteName } from '@/utils/getRouteName';
import type { ColumnDef } from '@tanstack/react-table';
import type { FamilyDataProps, ParishCouncilMemberDetailsProps } from '@/types';

const RenderPiousGroupTables = () => {
	const type = useRouteName('type');

	return type === 'families' ? (
		<DynamicDataTable
			wrapText={false}
			data={family_overview_dummy_data}
			customColumns={familyOverviewColumns() as ColumnDef<FamilyDataProps>[]}
		/>
	) : (
		<DynamicDataTable
			wrapText={false}
			data={parish_council_members_dummy_data}
			customColumns={parishCouncilColumns() as ColumnDef<ParishCouncilMemberDetailsProps>[]}
		/>
	);
};

export default RenderPiousGroupTables;
