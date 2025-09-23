import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { HolyCommunionEditForm } from '../../forms';
import { GenericCouncilMemberDetails } from '@/components';
import { extractUserName } from '@/utils/extractUserName';
import { getConfirmationsData } from '../../columns-section';
import type { ConfirmationRegisteredMemberType } from '@/types';

const RenderRegisterConfirmationsOverview = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow, routeParams } = useStore();
	const activeRow =
		(editAccountingNameRow as ConfirmationRegisteredMemberType | null) ??
		(selectRow as ConfirmationRegisteredMemberType | null) ??
		(selectAccountingNameRow as ConfirmationRegisteredMemberType | null);
	const userName = extractUserName((activeRow as unknown as Record<string, unknown>) || {});

	const componentMap = {
		confirmations: {
			view: (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getConfirmationsData(
						(activeRow ?? ({} as ConfirmationRegisteredMemberType)) as ConfirmationRegisteredMemberType
					)}
				/>
			),
			form: <HolyCommunionEditForm />,
		},
	};
	return (
		<OverviewTabsLayout
			pathName={'confirmations'}
			componentMap={componentMap}
			defaultTabLabel={routeParams || editAccountingNameRow || editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterConfirmationsOverview;
