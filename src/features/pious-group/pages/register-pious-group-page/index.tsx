import { DynamicDataTable } from '@/components';
import { TabsLayout } from '@/layouts';
import { useEffect, useState } from 'react';
import { useMembersInParishFamilyColumns } from '../../columns';
import { RenderRegisterPiousOverView } from '../../components';
import { useStore } from '@/store/store';
import parish_council_family_members from '../../data/parish_council_family_members.json';
import { useParams } from 'react-router-dom';
const RegisterPiousGroupPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow, editRow, selectAccountingNameRow, handleSetRouteParams, routeParams, handleClearRouteParams } =
		useStore();
	const tabs = [{ label: 'view' }, { label: 'add' }];
	const activeLabel = tabs[activeIndex].label.toLowerCase();
	const columns = useMembersInParishFamilyColumns();
	const { subStationId, anbiamId, uniqueFamilyId } = useParams();

	useEffect(() => {
		if (subStationId || anbiamId || uniqueFamilyId) {
			handleSetRouteParams({ subStationId, anbiamId, uniqueFamilyId });
		} else {
			handleClearRouteParams();
		}
	}, [subStationId, anbiamId, uniqueFamilyId, handleSetRouteParams, handleClearRouteParams]);

	if (selectAccountingNameRow || editRow || selectRow || routeParams) {
		return <RenderRegisterPiousOverView />;
	}

	return (
		<TabsLayout tabs={tabs} onTabChange={setActiveIndex} activeTabId={activeIndex}>
			{activeLabel === 'view' ? (
				<DynamicDataTable data={parish_council_family_members.members_list} wrapText={false} customColumns={columns} />
			) : (
				<h1>form will be added...</h1>
			)}
		</TabsLayout>
	);
};

export default RegisterPiousGroupPage;
