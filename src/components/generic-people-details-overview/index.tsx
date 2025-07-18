import { MemberOverviewLayout } from '@/layouts';
import AdminDefaultImage from '../admin-default-image';
import DisplayUserName from '../display-user-name';
import DisplayInfoRowContainer from '../display-info-rows-container';

type SectionDataType = {
	col: number;
	sections: {
		heading?: string;
		data: Record<string, string | number | null | undefined>;
	}[];
};

interface GenericPeopleProps {
	userName: string;
	sectionData: SectionDataType[];
}

const GenericPeopleDetailsOverview = ({ userName, sectionData }: GenericPeopleProps) => {
	return (
		<MemberOverviewLayout>
			<div className="flex flex-col gap-6 p-6 border-b border-gray-300 md:flex-row">
				<div className="flex items-start justify-center flex-1">
					<AdminDefaultImage height={200} width={200} />
				</div>
				<div className="flex-[2] ">
					<DisplayUserName userName={userName} />
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{sectionData.map((column, colIndex) => (
							<div key={colIndex}>
								{column.sections.map((section, i) => (
									<DisplayInfoRowContainer key={i} data={section.data} />
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</MemberOverviewLayout>
	);
};

export default GenericPeopleDetailsOverview;
