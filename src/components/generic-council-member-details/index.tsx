import { DisplayInfoRowContainer, DisplayUserName, DynamicDataTable } from '@/components';
import { getWorkingMembersDataColumns } from '@/features/houses/columns';
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
	enableWorkingMembersTable?: boolean;
	workingMembersData?: Record<string, string | number>[];
};

const GenericCouncilMemberDetails = ({
	userName,
	heading,
	sectionData,
	enableWorkingMembersTable = false,
	workingMembersData,
}: GenericMemberOverviewProps) => {
	const columns = getWorkingMembersDataColumns();
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
			<div className="py-6 px-4">
				{enableWorkingMembersTable && (
					<DynamicDataTable
						tableId="working-members"
						title="Working Members"
						customColumns={columns}
						data={workingMembersData || []}
						enablePagination={false}
						enableSearch={false}
						enableExport={false}
						isDynamic={false}
					/>
				)}
			</div>
		</MemberOverviewLayout>
	);
};

export default GenericCouncilMemberDetails;
