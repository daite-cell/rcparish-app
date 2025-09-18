import { DynamicDataTable } from '@/components';
import { TabsLayout } from '@/layouts';
import { useEffect, useState } from 'react';
import { useBaptismMemberColumns, useConfirmationRegisterColumns } from '../../columns';
import get_baptism_list from '../../data/get_baptism_list.json';
import { useStore } from '@/store/store';
import { RenderRegisterPeopleFamilyMemberOverview } from '../../components';
import { BaptismForm } from '../../forms';
import { useParams } from 'react-router-dom';

const FamilyMembersRegisterGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const tabs = [{ label: 'view' }, { label: 'add' }];
	const activeLabel = tabs[activeIndex].label.toLowerCase();
	const member_from_families = useBaptismMemberColumns();
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
		return <RenderRegisterPeopleFamilyMemberOverview />;
	}

	return (
		<TabsLayout tabs={tabs} onTabChange={setActiveIndex} activeTabId={activeIndex}>
			{activeLabel === 'view' ? (
				<>
					<DynamicDataTable
						data={get_baptism_list.baptism_list}
						wrapText={false}
						customColumns={member_from_families}
						enableDateSorting={true}
					/>
					<DynamicDataTable data={[]} wrapText={false} customColumns={baptism_register} enableDateSorting={true} />
				</>
			) : (
				<BaptismForm />
			)}
		</TabsLayout>
	);
};

export default FamilyMembersRegisterGenericPage;
