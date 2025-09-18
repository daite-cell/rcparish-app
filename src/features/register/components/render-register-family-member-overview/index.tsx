import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { BaptismEditForm } from '../../forms';
import { GenericCouncilMemberDetails } from '@/components';
import { extractUserName } from '@/utils/extractUserName';
import { getBaptismSectionData } from '../../columns-section';
import type { BaptismMemberType } from '@/types';

const RenderRegisterPeopleFamilyMemberOverview = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow, routeParams } = useStore();

	const activeRow =
		(editAccountingNameRow as BaptismMemberType | null) ??
		(selectRow as BaptismMemberType | null) ??
		(selectAccountingNameRow as BaptismMemberType | null);
	const userName = extractUserName((activeRow as unknown as Record<string, unknown>) || {});

	const componentMap = {
		baptism: {
			view: (
				<GenericCouncilMemberDetails
					userName={userName}
					sectionData={getBaptismSectionData((activeRow ?? ({} as BaptismMemberType)) as BaptismMemberType)}
				/>
			),
			form: <BaptismEditForm />,
		},
	};
	return (
		<OverviewTabsLayout
			pathName={'baptism'}
			componentMap={componentMap}
			defaultTabLabel={routeParams || editAccountingNameRow || editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterPeopleFamilyMemberOverview;
