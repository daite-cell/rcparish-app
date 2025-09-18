import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { HolyCommunionEditForm } from '../../forms';
import { GenericCouncilMemberDetails } from '@/components';
import { extractUserName } from '@/utils/extractUserName';
import { getHolyCommunionData } from '../../columns-section';
import type { HolyCommunionMemberType } from '@/types';

const RenderRegisterHolyCommunionOverview = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow } = useStore();
	console.warn(editAccountingNameRow, 'edit');
	const baseRow = (selectAccountingNameRow as Record<string, unknown>) || (selectRow as Record<string, unknown>) || {};
	const userName = extractUserName(baseRow);

	const componentMap = {
		holy_communion: {
			view: editAccountingNameRow ? (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getHolyCommunionData(editAccountingNameRow as HolyCommunionMemberType)}
				/>
			) : (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getHolyCommunionData(selectRow as HolyCommunionMemberType)}
				/>
			),
			form: <HolyCommunionEditForm />,
		},
	};
	return (
		<OverviewTabsLayout
			pathName={'holy_communion'}
			componentMap={componentMap}
			defaultTabLabel={editAccountingNameRow || editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterHolyCommunionOverview;
