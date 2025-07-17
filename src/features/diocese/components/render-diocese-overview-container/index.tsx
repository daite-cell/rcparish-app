import { GenericMembersInFamilesOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import { memo } from 'react';
import { getPriestsSectionData } from '../../columns-section';
import { useStore } from '@/store/store';
import type { PriestDetailsProps } from '@/types';

// GenericMembersInFamilesOverview;

const RenderDioceseOverviewContainer = memo(() => {
	const type = useRouteName('type');
	const selectRow = useStore((state) => state.selectRow);
	console.warn('selectRow', selectRow);

	const priestsSectionData = getPriestsSectionData(selectRow as PriestDetailsProps);
	const componentMap = {
		priests: {
			view: (
				<GenericMembersInFamilesOverview
					isFamilyType={false}
					showImage={true}
					userName={(selectRow as { name?: string })?.name || ''}
					sectionData={priestsSectionData}
				/>
			),
			form: <h1>Priests Form</h1>,
		},
		vsss: {
			view: <h1>VSSS View will be added</h1>,
			form: <h1>VSSS Form will be added</h1>,
		},
		vf: {
			view: <h1>VF View will be added</h1>,
			form: <h1>VF Form will be added</h1>,
		},
		parishes: {
			view: <h1>Parishes View will be added</h1>,
			form: <h1>Parishes Form will be added</h1>,
		},
		properties: {
			view: <h1>Properties View will be added</h1>,
			form: <h1>Properties Form will be added</h1>,
		},
	};

	return <OverviewTabsLayout pathName={type} componentMap={componentMap} />;
});

export default RenderDioceseOverviewContainer;
