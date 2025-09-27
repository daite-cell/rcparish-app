import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import { memo } from 'react';
import { useStore } from '@/store/store';
import GenericParishPeopleDetailsContainer from '../generic-parish-people-detail-container';
import { FormerParishPriestForm } from '../../form';

const RenderParishMemberOverviewContainer = memo(() => {
	const type = useRouteName('type');
	const editRow = useStore((state) => state.editRow);

	const havingProfileTab =
		type === 'commissions' || type === 'committees'
			? [{ label: 'edit' }, { label: 'back' }]
			: [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

	const componentMap = {
		former_parish_priest: {
			view: <GenericParishPeopleDetailsContainer />,
			form: <FormerParishPriestForm />,
		},
		sub_stations: {
			view: <GenericParishPeopleDetailsContainer />,
			form: <h1>forms will be added</h1>,
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

export default RenderParishMemberOverviewContainer;
