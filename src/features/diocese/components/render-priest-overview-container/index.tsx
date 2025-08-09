import { GenericMembersInFamilesOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { memo } from 'react';
import { getPriestsSectionData, getPriestsReligiousSectionData } from '../../columns-section';
import { useStore } from '@/store/store';
import type { PriestDetailsProps, PriestReligiousProps } from '@/types';

import { PriestsForm } from '../../forms';
import { extractUserName } from '@/utils/extractUserName';

const RenderPriestOverviewContainer = memo(() => {
	const { selectPriestsRow, editPriestsRow, editRow, selectRow } = useStore();

	const userNameReligious = extractUserName(selectPriestsRow as Record<string, unknown>);
	const userName = extractUserName(selectRow as Record<string, unknown>);

	const priestsSectionData = getPriestsSectionData(selectRow as PriestDetailsProps);
	const priestsReligiousSectionData = getPriestsReligiousSectionData(selectPriestsRow as PriestReligiousProps);
	console.warn(selectPriestsRow);
	const componentMap = {
		priests: {
			view: (
				<GenericMembersInFamilesOverview
					isFamilyType={false}
					showImage={true}
					userName={selectPriestsRow ? userNameReligious : userName}
					sectionData={selectPriestsRow ? priestsReligiousSectionData : priestsSectionData}
				/>
			),
			form: <PriestsForm />,
		},
	};

	return (
		<OverviewTabsLayout
			pathName={'priests'}
			componentMap={componentMap}
			defaultTabLabel={editPriestsRow || editRow ? 'edit' : 'profile'}
		/>
	);
});

export default RenderPriestOverviewContainer;
