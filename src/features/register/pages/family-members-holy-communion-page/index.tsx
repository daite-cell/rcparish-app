import { DynamicDataTable } from '@/components';
import { TabsLayout } from '@/layouts';
import { useEffect, useState } from 'react';
import { useConfirmationRegisterColumns, useHolyCommunionMemberColumns } from '../../columns';
import get_holy_communion_list from '../../data/get_holy_communion_list.json';
import { useStore } from '@/store/store';
import { RenderRegisterHolyCommunionOverview } from '../../components';
import { HolyCommunionForm } from '../../forms';
import { useParams } from 'react-router-dom';

const FamilyMembersHolyCommunionPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const tabs = [{ label: 'view' }, { label: 'add' }];
	const activeLabel = tabs[activeIndex].label.toLowerCase();
	const holy_communion_families = useHolyCommunionMemberColumns();
	const baptism_register = useConfirmationRegisterColumns();

	const { subStationId, anbiamId, uniqueFamilyId } = useParams<{
		subStationId: string;
		anbiamId: string;
		uniqueFamilyId: string;
		uniqueMemberId: string;
	}>();
	const { selectRow, editRow, routeParams, handleSetRouteParams } = useStore();

	useEffect(() => {
		handleSetRouteParams({
			subStationId,
			anbiamId,
			uniqueFamilyId,
		});
	}, [subStationId, anbiamId, uniqueFamilyId, handleSetRouteParams]);

	if (routeParams || editRow || selectRow) {
		return <RenderRegisterHolyCommunionOverview />;
	}
	return (
		<TabsLayout tabs={tabs} onTabChange={setActiveIndex} activeTabId={activeIndex}>
			{activeLabel === 'view' ? (
				<>
					<DynamicDataTable
						data={get_holy_communion_list.holy_communion_list}
						wrapText={false}
						customColumns={holy_communion_families}
						enableDateSorting={true}
					/>
					<DynamicDataTable
						data={get_holy_communion_list.in_active_list}
						wrapText={false}
						customColumns={baptism_register}
						enableDateSorting={true}
					/>
				</>
			) : (
				<HolyCommunionForm />
			)}
		</TabsLayout>
	);
};

export default FamilyMembersHolyCommunionPage;
