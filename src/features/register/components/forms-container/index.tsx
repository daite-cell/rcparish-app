import { useRouteName } from '@/utils/getRouteName';
import { ChroniclesForm } from '../../forms';

const RenderFormsContainer = () => {
	const type = useRouteName('type');

	const renderForms = [{ pageName: 'chronicles', component: <ChroniclesForm /> }];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;
