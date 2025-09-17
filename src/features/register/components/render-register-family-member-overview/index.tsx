import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { BaptismEditForm } from '../../forms';
import { GenericCouncilMemberDetails } from '@/components';
import { extractUserName } from '@/utils/extractUserName';
import { getBaptismSectionData } from '../../columns-section';
import type { BaptismMemberType } from '@/types';

const RenderRegisterPeopleFamilyMemberOverview = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow } = useStore();
	console.warn(editAccountingNameRow, 'edit');
	const baseRow = (selectAccountingNameRow as Record<string, unknown>) || (selectRow as Record<string, unknown>) || {};
	const userName = extractUserName(baseRow);

	const componentMap = {
		baptism: {
			view: editAccountingNameRow ? (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getBaptismSectionData(editAccountingNameRow as BaptismMemberType)}
				/>
			) : (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getBaptismSectionData(selectRow as BaptismMemberType)}
				/>
			),
			form: <BaptismEditForm />,
		},
	};
	return (
		<OverviewTabsLayout
			pathName={'baptism'}
			componentMap={componentMap}
			defaultTabLabel={editAccountingNameRow || editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterPeopleFamilyMemberOverview;
