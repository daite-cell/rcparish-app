import { GenericMembersInFamilesOverview } from '@/components';
import { OverviewTabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import get_families_details from '../../data/get_families_details.json';
import { getAccountingFamilesMembersSectionData, getFamilesSectionData } from '../../columns-sections';
import type { MembersInParishFamilyProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';
import { FamiliesForm } from '../../forms';

const RenderRegisterPiousOverView = () => {
	const { selectAccountingNameRow, editAccountingNameRow, editRow, selectRow } = useStore();
	const baseRow = (selectAccountingNameRow as Record<string, unknown>) || (selectRow as Record<string, unknown>) || {};
	const userName = extractUserName(baseRow);

	const componentMap = {
		family_members: {
			view: selectAccountingNameRow ? (
				<GenericMembersInFamilesOverview
					userName={userName}
					sectionData={getAccountingFamilesMembersSectionData(get_families_details.families)}
				/>
			) : (
				<GenericMembersInFamilesOverview
					userName={userName}
					sectionData={getFamilesSectionData(selectRow as MembersInParishFamilyProps)}
				/>
			),
			form: <FamiliesForm />,
		},
	};

	return (
		<OverviewTabsLayout
			pathName={'family_members'}
			componentMap={componentMap}
			defaultTabLabel={editAccountingNameRow || editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterPiousOverView;
