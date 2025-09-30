import { GenericMembersInFamilesOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { memo } from 'react';
import { getPriestsSectionData, getPriestsReligiousSectionData } from '../../columns-section';
import { useStore } from '@/store/store';
import type { PriestDetailsProps, PriestReligiousProps } from '@/types';

import { PriestsForm } from '../../forms';
import { extractUserName } from '@/utils/extractUserName';
import get_priest_list from '../../data/get_priest_list.json';

const RenderPriestOverviewContainer = memo(() => {
	const { selectPriestsRow, selectRow, selectPathId, editPriestsRow, editRow } = useStore();

	const userNameReligious = extractUserName(selectPriestsRow as Record<string, unknown>);
	const userName = extractUserName(selectRow as Record<string, unknown>);

	const priestsSectionData = getPriestsSectionData(selectRow as PriestDetailsProps);
	const priestsReligiousSectionData = getPriestsReligiousSectionData(selectPriestsRow as PriestReligiousProps);

	const componentMap = {
		priests: {
			view: (
				<GenericMembersInFamilesOverview
					isFamilyType={false}
					showImage={true}
					userName={selectPriestsRow ? userNameReligious : userName}
					sectionData={selectPriestsRow ? priestsReligiousSectionData : priestsSectionData}
					enableRecordTable={true}
					recordsData={get_priest_list}
				/>
			),
			form: <PriestsForm />,
		},
	};

	return (
		<OverviewTabsLayout
			pathName={'priests'}
			componentMap={componentMap}
			defaultTabLabel={editPriestsRow || editRow || selectPathId ? 'edit' : 'profile'}
		/>
	);
});

export default RenderPriestOverviewContainer;
