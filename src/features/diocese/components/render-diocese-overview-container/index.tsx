import { GenericMembersInFamilesOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import { memo } from 'react';
import { getPriestsSectionData } from '../../columns-section';
import { useStore } from '@/store/store';
import type { PriestDetailsProps } from '@/types';
import GenericDiocesePeopleDetailsContainer from '../generic-diocese-people-details-container';
import RenderDiocesePeopleDetailsContainer from '../render-people-overview-container';
import {
	CommissionsEditForm,
	CommitteesEditForm,
	InstitutionsListForm,
	ParishesForm,
	PriestsForm,
	PropertiesForm,
	VocationalListForm,
	VsssEditForm,
} from '../../forms';
import get_priest_list from '../../data/get_priest_list.json';

const RenderDioceseOverviewContainer = memo(() => {
	const type = useRouteName('type');
	const selectRow = useStore((state) => state.selectRow);
	const editRow = useStore((state) => state.editRow);

	const havingProfileTab =
		type === 'commissions' || type === 'committees'
			? [{ label: 'edit' }, { label: 'back' }]
			: [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

	const priestsSectionData = getPriestsSectionData(selectRow as PriestDetailsProps);
	const componentMap = {
		priests: {
			view: (
				<GenericMembersInFamilesOverview
					isFamilyType={false}
					showImage={true}
					userName={(selectRow as { name?: string })?.name || ''}
					sectionData={priestsSectionData}
					enableRecordTable={true}
					recordsData={get_priest_list}
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
		commissions: {
			form: <CommissionsEditForm />,
		},
		committees: {
			form: <CommitteesEditForm />,
		},
		vsss: {
			view: <RenderDiocesePeopleDetailsContainer />,
			form: <VsssEditForm />,
		},
		senate_members: {
			view: <RenderDiocesePeopleDetailsContainer />,
			form: <VsssEditForm />,
		},
		vf: {
			view: <RenderDiocesePeopleDetailsContainer />,
			form: <VsssEditForm />,
		},
		parishes: {
			view: <RenderDiocesePeopleDetailsContainer />,
			form: <ParishesForm />,
		},
	};

	return (
		<OverviewTabsLayout
			tabs={havingProfileTab}
			pathName={type}
			componentMap={componentMap}
			defaultTabLabel={editRow ? 'edit' : 'profile'}
		/>
	);
});

export default RenderDioceseOverviewContainer;
