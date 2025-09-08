import { OverviewTabsLayout } from '@/layouts';
import GenericRegisterPeopleDetailsContainer from '../generic-register-people-details-container';
import { useStore } from '@/store/store';
import { BaptismEditForm, ConfirmationsEditForm, HolyCommunionEditForm } from '../../forms';

const RenderRegisterPeopleOverview = ({ pathName }: { pathName: string | number | undefined }) => {
	const { editRow } = useStore();
	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

	const componentMap = {
		baptism: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <BaptismEditForm />,
		},
		holy_communion: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <HolyCommunionEditForm />,
		},
		confirmations: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <ConfirmationsEditForm />,
		},
		chronicles: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <h1 className="text-red-600">Edit Chronicles Form will be added soon .........</h1>,
		},
		marriage_registration: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <h1 className="text-red-600">Edit Marriage Registration Form will be added soon .........</h1>,
		},
		marriage_proposal: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <h1 className="text-red-600">Edit Marriage Proposal Form will be added soon .........</h1>,
		},
		death_register: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <h1 className="text-red-600">Edit Death Register Form will be added soon .........</h1>,
		},
	};
	return (
		<OverviewTabsLayout
			tabs={tabs}
			pathName={pathName}
			componentMap={componentMap}
			defaultTabLabel={editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterPeopleOverview;
