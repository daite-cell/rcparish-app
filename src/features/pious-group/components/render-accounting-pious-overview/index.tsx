import { GenericFamilesDetailsOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import get_families_details from '../../data/get_families_details.json';
import { getAccountingFamilesMembersSectionData, getFamilesMembersSectionData } from '../../columns-sections';
import type { FamilyDataProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';
import { FamiliesForm } from '../../forms';

const RenderAccountingPiousOverView = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow } = useStore();
	console.warn(selectAccountingNameRow);
	const userName = extractUserName(selectRow as Record<string, unknown>);

	const componentMap = {
		families: {
			view: selectAccountingNameRow ? (
				<GenericFamilesDetailsOverview
					sectionData={getAccountingFamilesMembersSectionData(get_families_details.families)}
				/>
			) : (
				<GenericFamilesDetailsOverview
					userName={userName}
					sectionData={getFamilesMembersSectionData(selectRow as FamilyDataProps)}
				/>
			),
			form: <FamiliesForm />,
		},
	};

	return (
		<OverviewTabsLayout
			pathName={'families'}
			componentMap={componentMap}
			defaultTabLabel={editAccountingNameRow || editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderAccountingPiousOverView;
