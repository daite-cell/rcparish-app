import { GenericFamilesDetailsOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { getAccountingFamilesMembersSectionData, getFamilesMembersSectionData } from '../../columns-sections';
import type { FamilyDataProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';
import { FamiliesForm } from '../../forms';
import get_members_link_details from '../../data/get_members_link_details.json';

const RenderAccountingPiousOverView = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow, routeParams } = useStore();

	const baseRow = (selectAccountingNameRow as Record<string, unknown>) || (selectRow as Record<string, unknown>) || {};

	const userName = extractUserName(baseRow);

	const componentMap = {
		families: {
			view: selectAccountingNameRow ? (
				<GenericFamilesDetailsOverview
					userName={userName}
					sectionData={getAccountingFamilesMembersSectionData(get_members_link_details)}
				/>
			) : (
				<GenericFamilesDetailsOverview
					userName={extractUserName(selectRow as Record<string, unknown>)}
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
			defaultTabLabel={editAccountingNameRow || editRow || routeParams ? 'edit' : 'profile'}
		/>
	);
};

export default RenderAccountingPiousOverView;
