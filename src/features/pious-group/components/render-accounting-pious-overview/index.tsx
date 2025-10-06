import { GenericFamilesDetailsOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { getFamilesMembersSectionData } from '../../columns-sections';
import type { FamilyDataProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';
import { FamiliesForm } from '../../forms';
import { Suspense, type JSX } from 'react';
import FamilyCardContainer from '../family-card-container';

const RenderAccountingPiousOverView = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow, routeParams, selectFamilyCardRow } =
		useStore();

	console.warn('Edit Row Data in RenderAccountingPiousOverView:', selectFamilyCardRow);

	const hasRouteParams =
		Boolean(routeParams?.subStationId) || Boolean(routeParams?.anbiamId) || Boolean(routeParams?.uniqueFamilyId);

	const baseRow = (selectAccountingNameRow as Record<string, unknown>) || (selectRow as Record<string, unknown>) || {};

	const userName = extractUserName(baseRow);

	const componentMap = {
		families: {
			view: selectFamilyCardRow ? (
				<Suspense fallback={<div>Loading...</div>}>
					<FamilyCardContainer />
				</Suspense>
			) : (
				selectAccountingNameRow && (
					<GenericFamilesDetailsOverview
						userName={userName}
						sectionData={getFamilesMembersSectionData(
							selectAccountingNameRow ? (selectAccountingNameRow as FamilyDataProps) : (selectRow as FamilyDataProps)
						)}
					/>
				)
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
