import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { getFamilesSectionData, getSonsAndDaughtersSectionData } from '../../columns-sections';
import { GenericMembersInFamilesOverview } from '@/components';
import type { MembersInParishFamilyProps, ParishSonsAndDaughtersProps } from '@/types';

const GenericMembersInFamilesOverviewContainer = () => {
	const type = useRouteName('type');
	const membersInFamilyselectedRow = useStore((state) => state.selectRow) as MembersInParishFamilyProps;
	const sonsAndDaughtersSelectedRow = useStore((state) => state.selectRow) as ParishSonsAndDaughtersProps;

	return (
		<>
			{type === 'family_members' && (
				<GenericMembersInFamilesOverview
					userName={membersInFamilyselectedRow.memberName}
					sectionData={getFamilesSectionData(membersInFamilyselectedRow)}
				/>
			)}

			{type === 'priest_nun_parish' && (
				<GenericMembersInFamilesOverview
					userName={sonsAndDaughtersSelectedRow.memberName}
					sectionData={getSonsAndDaughtersSectionData(sonsAndDaughtersSelectedRow)}
				/>
			)}
		</>
	);
};

export default GenericMembersInFamilesOverviewContainer;
