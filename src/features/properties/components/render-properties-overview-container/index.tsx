import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import GenericPropertiesDetailsContainer from '../generic-properties-details-container';
import { CemeteryForm, ChurchInventoryForm, OtherInventoryForm, RentDetailsForm } from '../../forms';

const RenderPropertiesOverviewContainer = () => {
	const { editRow } = useStore();
	console.warn(editRow);
	const pathName = useRouteName('type');
	const componentMap = {
		rent_details: {
			view: <GenericPropertiesDetailsContainer />,
			form: <RentDetailsForm />,
		},
		land_properties: {
			view: <GenericPropertiesDetailsContainer />,
		},
		cemetery: {
			view: <GenericPropertiesDetailsContainer />,
			form: <CemeteryForm />,
		},
		church_inventory: {
			view: <GenericPropertiesDetailsContainer />,
			form: <ChurchInventoryForm />,
		},
		other_inventory: {
			view: <GenericPropertiesDetailsContainer />,
			form: <OtherInventoryForm />,
		},
	};

	const isLandProperties =
		pathName === 'land_properties'
			? [{ label: 'profile' }, { label: 'back' }]
			: [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

	return (
		<OverviewTabsLayout
			tabs={isLandProperties}
			pathName={pathName}
			componentMap={componentMap}
			defaultTabLabel={editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderPropertiesOverviewContainer;
