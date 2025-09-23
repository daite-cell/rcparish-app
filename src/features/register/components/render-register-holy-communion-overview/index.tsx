import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { HolyCommunionEditForm } from '../../forms';
import { GenericCouncilMemberDetails } from '@/components';
import { extractUserName } from '@/utils/extractUserName';
import { getHolyCommunionData } from '../../columns-section';
import type { HolyCommunionMemberType } from '@/types';

const RenderRegisterHolyCommunionOverview = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow, routeParams } = useStore();

	const activeRow =
		(editAccountingNameRow as HolyCommunionMemberType | null) ??
		(selectRow as HolyCommunionMemberType | null) ??
		(selectAccountingNameRow as HolyCommunionMemberType | null);
	const userName = extractUserName((activeRow as unknown as Record<string, unknown>) || {});

	const componentMap = {
		holy_communion: {
			view: (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getHolyCommunionData((activeRow ?? ({} as HolyCommunionMemberType)) as HolyCommunionMemberType)}
				/>
			),
			form: <HolyCommunionEditForm />,
		},
	};
	return (
		<OverviewTabsLayout
			pathName={'holy_communion'}
			componentMap={componentMap}
			defaultTabLabel={routeParams || editAccountingNameRow || editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterHolyCommunionOverview;
