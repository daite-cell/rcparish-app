import { DisplayInfoRowContainer, DisplayUserName, DynamicDataTable } from '@/components';
import type { ColumnDef } from '@tanstack/react-table';
import { MemberOverviewLayout } from '@/layouts';

export type TableSection<T extends object> = {
	title?: string;
	columns?: ColumnDef<T>[];
	data: T[];
};

type GenericMemberOverviewProps<T extends object> = {
	userName?: string;
	heading?: string;
	sectionData: {
		col: number;
		sections: {
			heading: string;
			data: Record<string, string | number | null | undefined>;
		}[];
	}[];
	enableMembersTable?: boolean;
	membersTables?: TableSection<T>[];
};

const GenericCouncilMemberDetails = <T extends object>({
	userName,
	heading,
	sectionData,
	enableMembersTable = false,
	membersTables = [],
}: GenericMemberOverviewProps<T>) => {
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

			{enableMembersTable &&
				membersTables.map((table, index) => (
					<div key={index} className="py-6 px-4">
						<DynamicDataTable
							tableId={`members-table-${index}`}
							title={table.title || 'Members Table'}
							customColumns={table.columns as ColumnDef<object>[]}
							data={table.data}
							enablePagination={false}
							enableSearch={false}
							enableExport={false}
							isDynamic={false}
						/>
					</div>
				))}
		</MemberOverviewLayout>
	);
};

export default GenericCouncilMemberDetails;
