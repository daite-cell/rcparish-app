import { PriestFullInfo } from '@/components';
import { convertKeysToCamelCase } from '@/utils/convertKeysToCamelCase';
import { religious_people_pages } from '../../data';
import OverviewTabsLayout from '@/layouts/overview-tabs-layout';

const RenderReligiousPeopleOverviewContainer = ({ pathName }: { pathName: string | number | undefined }) => {
	const dummy_priest_info = convertKeysToCamelCase({
		id: 1,
		name: 'John Doe',
		priest_from: 'Diocese',
		ordination_date: 30,
		birth_date: '1982-05-05',
		living_status: 'New York',
		native_place: '',
		adhaar_number: '3747337t426347',
		phone_number: '1234567890',
		email: '',
		address: '',
	});
	const tabs = [{ label: 'profile' }, { label: 'back' }];

	const componentMap = {
		...Object.fromEntries(
			religious_people_pages.map((p) => [
				p,
				{
					view: <PriestFullInfo {...dummy_priest_info} />,
				},
			])
		),
	};

	return <OverviewTabsLayout tabs={tabs} pathName={pathName} componentMap={componentMap} />;
};

export default RenderReligiousPeopleOverviewContainer;
