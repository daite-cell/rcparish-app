import { GenericMembersInFamilesOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import { memo } from 'react';
import { getPriestsSectionData } from '../../columns-section';
import { useStore } from '@/store/store';
import type { PriestDetailsProps } from '@/types';
import { people_over_view_pages } from '../../data';
import GenericDiocesePeopleDetailsContainer from '../generic-diocese-people-details-container';
import RenderDiocesePeopleDetailsContainer from '../render-people-overview-container';
import { InstitutionsListForm, PriestsForm, PropertiesForm, VocationalListForm } from '../../forms';

const RenderDioceseOverviewContainer = memo(() => {
	const type = useRouteName('type');
	const selectRow = useStore((state) => state.selectRow);
	const editRow = useStore((state) => state.editRow);

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
			form: <PriestsForm />,
		},
		vocational_list: {
			view: <GenericDiocesePeopleDetailsContainer />,
			form: <VocationalListForm />,
		},
		institutions_list: {
			view: <GenericDiocesePeopleDetailsContainer />,
			form: <InstitutionsListForm />,
		},
		properties: {
			view: <GenericDiocesePeopleDetailsContainer />,
			form: <PropertiesForm />,
		},

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

	return (
		<OverviewTabsLayout pathName={type} componentMap={componentMap} defaultTabLabel={editRow ? 'edit' : 'profile'} />
	);
});

export default RenderDioceseOverviewContainer;
