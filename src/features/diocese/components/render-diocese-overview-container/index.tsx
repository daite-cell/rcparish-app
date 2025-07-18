import { GenericMembersInFamilesOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import { memo } from 'react';
import { getPriestsSectionData } from '../../columns-section';
import { useStore } from '@/store/store';
import type { PriestDetailsProps } from '@/types';
import { member_over_view_pages, people_over_view_pages } from '../../data';
import GenericDiocesePeopleDetailsContainer from '../generic-diocese-people-details-container';
import RenderDiocesePeopleDetailsContainer from '../render-people-overview-container';

const RenderDioceseOverviewContainer = memo(() => {
	const type = useRouteName('type');
	const selectRow = useStore((state) => state.selectRow);
	console.warn('selectRow', selectRow);

	const priestsSectionData = getPriestsSectionData(selectRow as PriestDetailsProps);
	const componentMap = {
		priests: {
			view: (
				<GenericMembersInFamilesOverview
					isFamilyType={false}
					showImage={true}
					userName={(selectRow as { name?: string })?.name || ''}
					sectionData={priestsSectionData}
				/>
			),
			form: <h1>Priests Form</h1>,
		},

		...Object.fromEntries(
			member_over_view_pages.map((p) => [
				p,
				{
					view: <GenericDiocesePeopleDetailsContainer />,
					form: <h1 className="text-red-600">Parish Council Forms will be added soon .........</h1>,
				},
			])
		),
		...Object.fromEntries(
			people_over_view_pages.map((p) => [
				p,
				{
					view: <RenderDiocesePeopleDetailsContainer />,
					form: <h1 className="text-red-600">Parish Council Forms will be added soon .........</h1>,
				},
			])
		),
	};

	return <OverviewTabsLayout pathName={type} componentMap={componentMap} />;
});

export default RenderDioceseOverviewContainer;
