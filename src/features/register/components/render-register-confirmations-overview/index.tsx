import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { HolyCommunionEditForm } from '../../forms';
import { GenericCouncilMemberDetails } from '@/components';
import { extractUserName } from '@/utils/extractUserName';
import { getConfirmationsData } from '../../columns-section';
import type { ConfirmationRegisteredMemberType } from '@/types';

const RenderRegisterConfirmationsOverview = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow } = useStore();
	console.warn(editAccountingNameRow, 'edit');
	const baseRow = (selectAccountingNameRow as Record<string, unknown>) || (selectRow as Record<string, unknown>) || {};
	const userName = extractUserName(baseRow);

	const componentMap = {
		confirmations: {
			view: editAccountingNameRow ? (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getConfirmationsData(editAccountingNameRow as ConfirmationRegisteredMemberType)}
				/>
			) : (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getConfirmationsData(selectRow as ConfirmationRegisteredMemberType)}
				/>
			),
			form: <HolyCommunionEditForm />,
		},
	};
	return (
		<OverviewTabsLayout
			pathName={'confirmations'}
			componentMap={componentMap}
			defaultTabLabel={editAccountingNameRow || editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterConfirmationsOverview;
