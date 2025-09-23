import { useRouteName } from '@/utils/getRouteName';
import { OverviewTabsLayout } from '@/layouts';
import RenderHouseOverview from '../render-house-overview';
import { CommunitiesForm, InstitutionsForm, VocationalInstitutionsForm } from '../../forms';
import { useStore } from '@/store/store';

const RenderHouseMemberOverviewContainer = () => {
	const { editRow } = useStore();
	const pathName = useRouteName('type');
	const componentMap = {
		institutions: {
			view: <RenderHouseOverview />,
			form: <InstitutionsForm />,
		},
		vocational_institutions: {
			view: <RenderHouseOverview />,
			form: <VocationalInstitutionsForm />,
		},
		communities: {
			view: <RenderHouseOverview />,
			form: <CommunitiesForm />,
		},
	};
	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];
	return (
		<OverviewTabsLayout
			tabs={tabs}
			pathName={pathName}
			componentMap={componentMap}
			defaultTabLabel={editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderHouseMemberOverviewContainer;
