import { AdminDefaultImage, DisplayInfoRowContainer, DisplayUserName } from '@/components';
import { MemberOverviewLayout } from '@/layouts';
import { family_members_dummy_data } from '../../data';

const FamilyMembersOverviewLayout = () => {
	const {
		user_name,
		activeness_details,
		contact_details,
		occupation_details,
		personal_details,
		family_details,
		sacraments_details,
		qualification_and_professional,
	} = family_members_dummy_data;

	const sectionData = [
		{
			col: 1,
			sections: [
				{ data: activeness_details },
				{ heading: 'Contact Details', data: contact_details },
				{ heading: 'Occupation', data: occupation_details },
			],
		},
		{
			col: 2,
			sections: [{ heading: 'Personal Details', data: personal_details }],
		},
		{
			col: 3,
			sections: [
				{ heading: 'Family Details', data: family_details },
				{ heading: 'Sacraments Details', data: sacraments_details },
				{ heading: 'Qualification & Prof.Qualification', data: qualification_and_professional },
			],
		},
	];

	return (
		<MemberOverviewLayout>
			<div className="p-6">
				<DisplayUserName userName={user_name} />
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{sectionData.map((column, colIndex) => (
						<div key={colIndex}>
							{colIndex === 0 && <AdminDefaultImage height={200} width={200} />}
							{column.sections.map((section, i) => (
								<DisplayInfoRowContainer key={i} data={section.data} heading={section.heading} />
							))}
						</div>
					))}
				</div>
			</div>
		</MemberOverviewLayout>
	);
};

export default FamilyMembersOverviewLayout;
