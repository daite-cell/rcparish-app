import { MemberOverviewLayout } from '@/layouts';
import DisplayUserName from '../display-user-name';
import AdminDefaultImage from '../admin-default-image';
import { useStore } from '@/store/store';
import type { MembersInParishFamilyProps, ParishSonsAndDaughtersProps } from '@/types';
import DisplayInfoRowContainer from '../display-info-rows-container';
import { useRouteName } from '@/utils/getRouteName';

const GenericMembersInFamilesOverview = () => {
	const type = useRouteName('type');

	type SelectRowType = MembersInParishFamilyProps | ParishSonsAndDaughtersProps;
	function isMembersInParishFamily(row: SelectRowType): row is MembersInParishFamilyProps {
		return 'uniqueMembershipNumber' in row;
	}

	const rawSelectRow = useStore((state) => state.selectRow) as SelectRowType;

	const familesSectionData = isMembersInParishFamily(rawSelectRow)
		? [
				{
					col: 1,
					sections: [
						{
							data: {
								activeness: 'Active',
								unique_membership_number: rawSelectRow.uniqueMembershipNumber,
							},
						},
						{
							heading: 'Contact Details',
							data: {
								mobile_number: rawSelectRow.mobileNumber,
								adhaar_number: rawSelectRow.adhaarNumber,
							},
						},
						{
							heading: 'Occupation',
							data: {
								occupation: 'None',
								occupation_sector: 'None',
								monthly_income: rawSelectRow.monthlyIncome,
							},
						},
					],
				},
				{
					col: 2,
					sections: [
						{
							heading: 'Personal Details',
							data: {
								birth_date: rawSelectRow.birthDate,
								gender: rawSelectRow.gender,
								blood_group: rawSelectRow.bloodGroup,
								physically_challenged: rawSelectRow.physicallyChallenged,
								community: rawSelectRow.communityCaste,
								sub_caste: rawSelectRow.subCaste,
								relation: rawSelectRow.relationshipToFamily,
								father_name: rawSelectRow.fatherName,
								mother_name: rawSelectRow.motherName,
								religion: rawSelectRow.religion,
								marriage_status: rawSelectRow.marriageStatus,
								marriage_date: rawSelectRow.marriageDate,
								vocation_status: rawSelectRow.vocationStatus,
								congregation_name: '',
							},
						},
					],
				},
				{
					col: 3,
					sections: [
						{
							heading: 'Family Details',
							data: {
								family_name: rawSelectRow.familyName,
								unique_anbiam_family_number: rawSelectRow.uniqueAnbiamFamilyNumber,
								anbiam: rawSelectRow.anbiam,
								main_station: rawSelectRow.mainStationSubStation,
							},
						},
					],
				},
			]
		: [];

	const parishSonsAndDaughtersSectionData = !isMembersInParishFamily(rawSelectRow)
		? [
				{
					col: 1,
					sections: [
						{
							heading: '',
							data: {
								members_from_familes: 'Member from family',
								mobile_number: rawSelectRow.mobileNumber,
								email_id: '',
								gender: rawSelectRow.gender,
							},
						},
					],
				},
				{
					col: 2,
					sections: [
						{
							heading: '',
							data: {
								family_name: rawSelectRow.familyName,
								unique_anbiam_family_number: rawSelectRow.uniqueFamilyId,
								main_station: rawSelectRow.station,
								anbiam: rawSelectRow.anbiam,
								relation_to_family: rawSelectRow.relationshipToFamily,
								family_head: rawSelectRow.familyHead,
								father_name: rawSelectRow.fatherName,
								mother_name: rawSelectRow.motherName,
							},
						},
					],
				},
				{
					col: 3,
					sections: [
						{
							heading: '',
							data: {
								category: rawSelectRow.category,
								diocese_name: rawSelectRow.nameOfRespective,
								current_status: rawSelectRow.presentStatus,
								position: rawSelectRow.studyingOrPosition,
								place: rawSelectRow.place,
								permanent_address: rawSelectRow.permanentAddress,
								temporary_address: rawSelectRow.temporaryAddress || '',
							},
						},
					],
				},
			]
		: [];

	const displaySectionData = type === 'familes' ? familesSectionData : parishSonsAndDaughtersSectionData;

	return (
		<MemberOverviewLayout>
			<div className="p-6">
				<DisplayUserName className={`${type !== 'familes' ? 'text-center' : ''}`} userName={rawSelectRow.memberName} />
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{displaySectionData.map((column, colIndex) => (
						<div key={colIndex}>
							{colIndex === 0 && <AdminDefaultImage height={200} width={200} />}
							{column.sections.map((section, i) => (
								<DisplayInfoRowContainer key={i} data={section.data} heading={section.heading || ''} />
							))}
						</div>
					))}
				</div>
			</div>
		</MemberOverviewLayout>
	);
};

export default GenericMembersInFamilesOverview;
