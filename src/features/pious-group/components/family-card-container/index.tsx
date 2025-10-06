import { YearSelectionForm } from '@/components';
import { lazy, Suspense, useState } from 'react';
const FamilyCard = lazy(() => import('../family-card'));

const FamilyCardContainer = () => {
	const [yearType, setYearType] = useState<string>('current_year');

	return (
		<>
			<YearSelectionForm value={yearType} onChange={setYearType} />
			<Suspense fallback={<div>Loading...</div>}>
				<FamilyCard year={yearType} />
			</Suspense>
		</>
	);
};

export default FamilyCardContainer;
