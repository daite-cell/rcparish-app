import { DynamicDataTable } from '@/components';
import {
	family_overview_dummy_data,
	parish_council_family_members_dummy_data,
	parish_council_members_dummy_data,
	Parish_sons_and_daughters_dummy_data,
} from '../../data';
import {
	useFamilyOverviewColumns,
	useParishCouncilColumns,
	useMembersInParishFamilyColumns,
	useParishSonsAndDaughtersColumns,
} from '../../columns';
import { useRouteName } from '@/utils/getRouteName';

const RenderPiousGroupTables = () => {
	const type = useRouteName('type');
	const familyOverviewColumns = useFamilyOverviewColumns();
	const parishCouncilColumns = useParishCouncilColumns();
	const familyMemberColumns = useMembersInParishFamilyColumns();
	const parishSonsAndDaughtersColumns = useParishSonsAndDaughtersColumns();

	return (
		<>
			{type === 'families' && (
				<DynamicDataTable wrapText={false} data={family_overview_dummy_data} customColumns={familyOverviewColumns} />
			)}
			{type === 'parish_council_members' && (
				<DynamicDataTable
					wrapText={false}
					data={parish_council_members_dummy_data}
					customColumns={parishCouncilColumns}
				/>
			)}
			{type === 'family_members' && (
				<DynamicDataTable
					wrapText={false}
					data={parish_council_family_members_dummy_data}
					customColumns={familyMemberColumns}
				/>
			)}
			{type === 'priest_nun_parish' && (
				<DynamicDataTable
					wrapText={false}
					data={Parish_sons_and_daughters_dummy_data}
					customColumns={parishSonsAndDaughtersColumns}
				/>
			)}
		</>
	);
};

export default RenderPiousGroupTables;
