import { DynamicDataTable } from '@/components';
import { TabsLayout } from '@/layouts';
import { useEffect, useState } from 'react';
import { useFamilyOverviewColumns } from '../../columns';
import get_families from '../../data/get_families.json';
import { RenderAccountingPiousOverView } from '../../components';
import { useStore } from '@/store/store';
import { FamiliesForm } from '../../forms';
import { useParams } from 'react-router-dom';

const AccountingPiousGroupPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const {
		selectRow,
		editRow,
		selectFamilyCardRow,
		selectAccountingNameRow,
		handleSetRouteParams,
		handleClearRouteParams,
		routeParams,
	} = useStore();

	const tabs = [{ label: 'view' }, { label: 'add' }];

	const activeLabel = tabs[activeIndex].label.toLowerCase();
	const columns = useFamilyOverviewColumns();
	const { subStationId, anbiamId, uniqueFamilyId } = useParams();

	useEffect(() => {
		if (subStationId || anbiamId || uniqueFamilyId) {
			handleSetRouteParams({ subStationId, anbiamId, uniqueFamilyId });
		} else {
			handleClearRouteParams();
		}
	}, [subStationId, anbiamId, uniqueFamilyId, handleSetRouteParams, handleClearRouteParams]);

	if (selectRow || selectAccountingNameRow || editRow || selectFamilyCardRow || routeParams) {
		return <RenderAccountingPiousOverView />;
	}

	return (
		<TabsLayout tabs={tabs} onTabChange={setActiveIndex} activeTabId={activeIndex}>
			{activeLabel === 'view' ? (
				<DynamicDataTable data={get_families.families_list} wrapText={false} customColumns={columns} />
			) : (
				<FamiliesForm />
			)}
		</TabsLayout>
	);
};

export default AccountingPiousGroupPage;
