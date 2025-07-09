import { MemberOverviewLayout } from '@/layouts';
import DisplayUserName from '../display-user-name';
import AdminDefaultImage from '../admin-default-image';
import DisplayInfoRowContainer from '../display-info-rows-container';

export type InfoSection = {
	heading?: string;
	data: Record<string, string | number | undefined>;
};

export type InfoColumn = {
	col: number;
	sections: InfoSection[];
};

interface GenericOverviewProps<T> {
	selectRow: T;
	userNameKey: keyof T;
	sectionData: InfoColumn[];
	showImage?: boolean;
}

function GenericMemberOverview<T>({ selectRow, userNameKey, sectionData, showImage = true }: GenericOverviewProps<T>) {
	return (
		<MemberOverviewLayout>
			<div className="p-6">
				<DisplayUserName className="text-center" userName={String(selectRow[userNameKey])} />
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{sectionData.map((column, colIndex) => (
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
}

export default GenericMemberOverview;
