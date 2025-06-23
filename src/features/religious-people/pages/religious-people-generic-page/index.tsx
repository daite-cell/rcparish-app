import { DynamicDataTable, TabsLayout, PriestFullInfo } from '@/components';
import { useState } from 'react';
import { convertKeysToCamelCase } from '@/utils/convertKeysToCamelCase';

const ReligiousPeopleGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [id, setId] = useState<number | null>(1);

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
		if (index === 1) {
			setId(null);
		}
	};

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

	return (
		<>
			<TabsLayout
				onTabChange={handleToggleTab}
				activeTabId={activeIndex}
				tabs={id ? [{ label: 'Profile' }, { label: 'Back' }] : [{ label: 'View' }]}
			>
				{!id ? <DynamicDataTable enableDateAndLetterSorting={true} /> : <PriestFullInfo {...dummy_priest_info} />}
			</TabsLayout>
		</>
	);
};

export default ReligiousPeopleGenericPage;
