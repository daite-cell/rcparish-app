import { DynamicDataTable } from '@/components';
import { family_overview_dummy_data, parish_council_members_dummy_data } from '../../data';
import { useFamilyOverviewColumns, useParishCouncilColumns } from '../../columns';
import { useRouteName } from '@/utils/getRouteName';

const RenderPiousGroupTables = () => {
	const type = useRouteName('type');
	const familyOverviewColumns = useFamilyOverviewColumns();
	const parishCouncilColumns = useParishCouncilColumns();

	return type === 'families' ? (
		<DynamicDataTable wrapText={false} data={family_overview_dummy_data} customColumns={familyOverviewColumns} />
	) : (
		<DynamicDataTable wrapText={false} data={parish_council_members_dummy_data} customColumns={parishCouncilColumns} />
	);
};

export default RenderPiousGroupTables;
