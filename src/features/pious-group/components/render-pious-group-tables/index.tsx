import { DynamicDataTable } from '@/components';
import {
	anbiam_council_dummy_data,
	anbiam_incharge_dummy_data,
	association_council_member_dummy_data,
	family_overview_dummy_data,
	parish_council_family_members_dummy_data,
	parish_council_members_dummy_data,
	Parish_sons_and_daughters_dummy_data,
	religious_person_dummy_data,
} from '../../data';
import {
	useFamilyOverviewColumns,
	useParishCouncilColumns,
	useMembersInParishFamilyColumns,
	useParishSonsAndDaughtersColumns,
	useReligiousPeopleColumns,
	useAnbiamsColumns,
	useAnbiamsInchargeColumns,
	useAssociationCouncilMemberPropsColumns,
} from '../../columns';
import { useRouteName } from '@/utils/getRouteName';

const RenderPiousGroupTables = () => {
	const type = useRouteName('type');
	const familyOverviewColumns = useFamilyOverviewColumns();
	const parishCouncilColumns = useParishCouncilColumns();
	const familyMemberColumns = useMembersInParishFamilyColumns();
	const parishSonsAndDaughtersColumns = useParishSonsAndDaughtersColumns();
	const religiousPeopleColumns = useReligiousPeopleColumns();
	const anbiamsColumns = useAnbiamsColumns();
	const anbiamsInchargeColumns = useAnbiamsInchargeColumns();
	const associationCouncilMemberPropsColumns = useAssociationCouncilMemberPropsColumns();

	return (
		<>
			{type === 'families' && (
				<DynamicDataTable wrapText={false} data={family_overview_dummy_data} customColumns={familyOverviewColumns} />
			)}
			{type === 'parish_council_members' && (
				<DynamicDataTable
					wrapText={false}
					data={parish_council_members_dummy_data}
					customColumns={parishCouncilColumns}
				/>
			)}
			{type === 'family_members' && (
				<DynamicDataTable
					wrapText={false}
					data={parish_council_family_members_dummy_data}
					customColumns={familyMemberColumns}
				/>
			)}
			{type === 'priest_nun_parish' && (
				<DynamicDataTable
					wrapText={false}
					data={Parish_sons_and_daughters_dummy_data}
					customColumns={parishSonsAndDaughtersColumns}
				/>
			)}
			{type === 'religious_people_parish' && (
				<DynamicDataTable wrapText={false} data={religious_person_dummy_data} customColumns={religiousPeopleColumns} />
			)}
			{(type === 'anbiams' || type === 'associations_club') && (
				<DynamicDataTable wrapText={false} data={anbiam_council_dummy_data} customColumns={anbiamsColumns} />
			)}

			{type === 'anbiam_incharge' && (
				<DynamicDataTable wrapText={false} data={anbiam_incharge_dummy_data} customColumns={anbiamsInchargeColumns} />
			)}
			{type === 'associations_incharge' && (
				<DynamicDataTable
					wrapText={false}
					data={association_council_member_dummy_data}
					customColumns={associationCouncilMemberPropsColumns}
				/>
			)}
		</>
	);
};

export default RenderPiousGroupTables;
