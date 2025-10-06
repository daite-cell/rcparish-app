import { GenericMembersInFamilesOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import get_members_link_details from '../../data/get_members_link_details.json';

import { getAccountingFamilesMembersSectionData, getFamilesSectionData } from '../../columns-sections';
import type { MembersInParishFamilyProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';
import { FamilyMembersForm } from '../../forms';

const RenderRegisterPiousOverView = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow, routeParams } = useStore();
	const baseRow = (selectAccountingNameRow as Record<string, unknown>) || (selectRow as Record<string, unknown>) || {};
	const userName = extractUserName(baseRow);

	const componentMap = {
		family_members: {
			view: selectAccountingNameRow ? (
				<GenericMembersInFamilesOverview
					userName={userName}
					sectionData={getAccountingFamilesMembersSectionData(get_members_link_details)}
				/>
			) : (
				<GenericMembersInFamilesOverview
					userName={userName}
					sectionData={getFamilesSectionData(selectRow as MembersInParishFamilyProps)}
				/>
			),

			form: <FamilyMembersForm />,
		},
	};

	return (
		<OverviewTabsLayout
			pathName={'family_members'}
			componentMap={componentMap}
			defaultTabLabel={editAccountingNameRow || editRow || routeParams ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterPiousOverView;
