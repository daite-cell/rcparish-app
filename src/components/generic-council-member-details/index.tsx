import { DisplayInfoRowContainer, DisplayUserName } from '@/components';
import { MemberOverviewLayout } from '@/layouts';

type GenericMemberOverviewProps = {
	userName?: string;
	heading?: string;
	sectionData: {
		col: number;
		sections: {
			heading: string;
			data: Record<string, string | number | null | undefined>;
		}[];
	}[];
};

const GenericCouncilMemberDetails = ({ userName, heading, sectionData }: GenericMemberOverviewProps) => {
	return (
		<MemberOverviewLayout heading={heading}>
			<div className="p-6">
				<DisplayUserName userName={userName || ''} />
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{sectionData.map((column, colIndex) => (
						<div key={colIndex}>
							{column.sections.map((section, i) => (
								<DisplayInfoRowContainer
									key={i}
									data={
										Object.fromEntries(
											Object.entries(section.data).map(([key, value]) => [key, value ?? ''])
										) as Record<string, string | number>
									}
									heading={section.heading}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</MemberOverviewLayout>
	);
};

export default GenericCouncilMemberDetails;
