import { GenericFamilesDetailsOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { getAccountingFamilesMembersSectionData, getFamilesMembersSectionData } from '../../columns-sections';
import type { FamilyDataProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';
import { FamiliesForm } from '../../forms';
import get_members_link_details from '../../data/get_members_link_details.json';
import type { JSX } from 'react';

const RenderAccountingPiousOverView = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow, routeParams } = useStore();
	console.warn(selectRow, 'row');

	const hasRouteParams =
		Boolean(routeParams?.subStationId) || Boolean(routeParams?.anbiamId) || Boolean(routeParams?.uniqueFamilyId);
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
			componentMap={componentMap as Record<string, { view: JSX.Element; form: JSX.Element }>}
			defaultTabLabel={editAccountingNameRow || editRow || hasRouteParams ? 'edit' : 'profile'}
		/>
	);
};

export default RenderAccountingPiousOverView;
