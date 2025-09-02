import { MemberOverviewLayout } from '@/layouts';
import DisplayUserName from '../display-user-name';
import AdminDefaultImage from '../admin-default-image';
import DisplayInfoRowContainer from '../display-info-rows-container';
import DynamicDataTable from '../dynamic-table';
import {
	priestEducationColumns,
	priestFamilyColumns,
	priestHigherEducationColumns,
	priestServiceColumns,
} from '@/features/diocese/columns';
import type { ColumnDef } from '@tanstack/react-table';
import TableHeading from '../table-heading';
import type { GenericOverviewProps } from '@/types';
import { useMemo } from 'react';

interface RecordSection {
	section_heading: string;
	columns: ColumnDef<object>[];
	data: object[];
}

interface ExtendedGenericOverviewProps<T> extends GenericOverviewProps<T> {
	visibleSections?: string[];
}

const GenericMembersInFamilesOverview = <T,>({
	userName = 'Unknown User',
	sectionData = [],
	isFamilyType = true,
	showImage = true,
	enableRecordTable = false,
	recordsData,
	visibleSections = [],
}: ExtendedGenericOverviewProps<T>) => {
	const recordsSections = useMemo<RecordSection[]>(() => {
		if (!recordsData) return [];

		return [
			{
				section_heading: 'SERVICE RECORD',
				columns: priestServiceColumns as ColumnDef<object>[],
				data: recordsData.service_record ?? [],
			},
			{
				section_heading: 'FAMILY RECORD',
				columns: priestFamilyColumns as ColumnDef<object>[],
				data: recordsData.family_record ?? [],
			},
			{
				section_heading: 'SECULAR STUDIES',
				columns: priestEducationColumns as ColumnDef<object>[],
				data: recordsData.secular_studies ?? [],
			},
			{
				section_heading: 'SACRED STUDIES',
				columns: priestHigherEducationColumns as ColumnDef<object>[],
				data: recordsData.sacred_studies ?? [],
			},
		].filter((section) => (visibleSections.length === 0 ? true : visibleSections.includes(section.section_heading)));
	}, [recordsData, visibleSections]);

	return (
		<MemberOverviewLayout>
			<div className="p-6">
				<DisplayUserName className={!isFamilyType ? 'text-center' : ''} userName={userName} />

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{sectionData.map((column, colIndex) => (
						<div key={colIndex}>
							{colIndex === 0 && showImage && <AdminDefaultImage height={200} width={200} />}
							{column.sections?.map((section, i) => (
								<DisplayInfoRowContainer key={i} data={section.data} heading={section.heading || ''} />
							))}
						</div>
					))}
				</div>
			</div>

			{enableRecordTable &&
				recordsSections.map((section, index) => (
					<div key={index} className="my-4 px-3">
						<TableHeading className="!font-bold" text={section.section_heading} />
						<DynamicDataTable
							enablePagination={false}
							enableSearch={false}
							customColumns={section.columns}
							isDynamic={false}
							data={section.data}
							tableId="records"
						/>
					</div>
				))}
		</MemberOverviewLayout>
	);
};

export default GenericMembersInFamilesOverview;
