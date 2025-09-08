import { lazy, Suspense, useState } from 'react';
import { useStore } from '@/store/store';
import YearSelectionForm from '../year-selection-form';
import { MemberOverviewLayout } from '@/layouts';
import DisplayUserName from '../display-user-name';
import DisplayInfoRowContainer from '../display-info-rows-container';
import InfoHeadingTitle from '../info-heading-title';
import DynamicDataTable from '../dynamic-table';
import PDFExporter from '../pdf-exporter';
import type { FamilyDataProps } from '@/types';
import { generateColumnsFromData } from '@/utils/generateColumnsFromData';
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

const FamilyCard = lazy(() => import('../../features/pious-group/components/family-card'));

const GenericFamilesDetailsOverview = ({ sectionData, userName }: GenericMemberOverviewProps) => {
	const [yearType, setYearType] = useState<string>('current_year');

	const selectFamilyCardRow = useStore((state) => state.selectFamilyCardRow) as FamilyDataProps;

	const family_member_table_data = [
		{
			member_id: 'TH022M01',
			active_ness: 'Active',
			member: 'Israel',
			relation: 'Father/Husband',
			gender: 'Male',
		},
	];

	const columns = generateColumnsFromData(family_member_table_data);

	const tableId = 'family-members';

	return (
		<>
			<YearSelectionForm value={yearType} onChange={setYearType} />

			<MemberOverviewLayout>
				{selectFamilyCardRow ? (
					<Suspense fallback={<div>Loading...</div>}>
						<FamilyCard />
					</Suspense>
				) : (
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
						<InfoHeadingTitle title="FAMILY MEMBERS" />
						<DynamicDataTable data={family_member_table_data} isDynamic={false} tableId="family-members" />
						<div className="flex justify-end float-end w-[120px] ">
							<Suspense fallback={<div>Loading...</div>}>
								<PDFExporter
									className={
										'text-[#d7c49e] self-end bg-[#343148] text-[12px] !text-center border-none h-7 w-[90px] my-5 mr-2 px-4  transition duration-500 rounded-none font-normal hover:text-[#343148] hover:bg-[#d7c49e] hover:cursor-pointer'
									}
									columns={columns}
									data={family_member_table_data}
									tableId={tableId}
									label="Download PDF"
								/>
							</Suspense>
						</div>
					</div>
				)}
			</MemberOverviewLayout>
		</>
	);
};

export default GenericFamilesDetailsOverview;
