import { MemberOverviewLayout } from '@/layouts';
import DisplayUserName from '../display-user-name';
import AdminDefaultImage from '../admin-default-image';
import DisplayInfoRowContainer from '../display-info-rows-container';

type SectionDataType = {
	col: number;
	sections: {
		heading?: string;
		data: Record<string, string | number | null | undefined>;
	}[];
};

interface GenericOverviewProps {
	userName: string;
	sectionData: SectionDataType[];
	isFamilyType?: boolean;
	showImage?: boolean;
}

const GenericMembersInFamilesOverview = ({
	userName,
	sectionData,
	isFamilyType = true,
	showImage = true,
}: GenericOverviewProps) => {
	return (
		<MemberOverviewLayout>
			<div className="p-6">
				<DisplayUserName className={isFamilyType ? 'text-center' : ''} userName={userName} />

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{sectionData?.map((column, colIndex) => (
						<div key={colIndex}>
							{colIndex === 0 && showImage && <AdminDefaultImage height={200} width={200} />}

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
