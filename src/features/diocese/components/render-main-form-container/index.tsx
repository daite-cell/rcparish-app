import { useRouteName } from '@/utils/getRouteName';
import { BishopForm, CuriaMembersForm } from '../../forms';

const RenderMainFormContainer = () => {
	const type = useRouteName('type');
	const renderForms = [
		{
			pageName: 'bishop',
			component: <BishopForm />,
		},
		{
			pageName: 'curia_members',
			component: <CuriaMembersForm />,
		},
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderMainFormContainer;
