import { AdminDefaultImage, DisplayInfoRowContainer, DisplayUserName } from '@/components';
import { MemberOverviewLayout } from '@/layouts';
import type { PriestFamilyDataProps } from '@/types';

const ParishFamilyFullDetailsOverView = ({ data }: { data: PriestFamilyDataProps }) => {
	const sectionData = [
		{
			col: 1,
			sections: [{ data: data.profile }],
		},
		{
			col: 2,
			sections: [{ data: data.family_info }],
		},
		{
			col: 3,
			sections: [{ data: data.religious_details }],
		},
	];
	return (
		<MemberOverviewLayout>
			<div className="p-6">
				<DisplayUserName className="text-center " userName={data?.profile?.member_name} />
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{sectionData.map((column, colIndex) => (
						<div key={colIndex}>
							{colIndex === 0 && <AdminDefaultImage height={200} width={200} />}
							{column.sections.map((section, i) => (
								<DisplayInfoRowContainer key={i} data={section.data} />
							))}
						</div>
					))}
				</div>
			</div>
		</MemberOverviewLayout>
	);
};

export default ParishFamilyFullDetailsOverView;
