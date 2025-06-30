import {
	DisplayInfoRowContainer,
	DisplayUserName,
	DynamicDataTable,
	InfoHeadingTitle,
	YearSelectionForm,
} from '@/components';
import { MemberOverviewLayout } from '@/layouts';
import { family_member_table_data } from '../../data';
import { lazy, Suspense, useState } from 'react';
import { generateColumnsFromData } from '@/utils/generateColumnsFromData';
import type { FamilyFullOverviewData } from '@/types';

const PDFExporter = lazy(() => import('@/components/pdf-exporter'));

const FamiliesOverview = ({ data }: { data: FamilyFullOverviewData }) => {
	const [yearType, setYearType] = useState<string>('current_year');
	const sectionData = [
		{
			col: 1,
			sections: [{ data: data.activeness }, { heading: 'FAMILY DETAILS', data: data.family_details }],
		},
		{
			col: 2,
			sections: [
				{ heading: 'SOCIAL STATUS DETAILS', data: data.social_status_details },
				{ heading: 'INCOME & SUBSCRIPTION DETAILS', data: data.income_and_subscription_details },
			],
		},
		{
			col: 3,
			sections: [{ data: data.community_details }, { heading: 'FAMILY CONTACT DETAILS', data: data.contact_details }],
		},
	];

	const columns = generateColumnsFromData(family_member_table_data);

	const tableId = 'family-members';

	return (
		<>
			<YearSelectionForm value={yearType} onChange={setYearType} />
			<MemberOverviewLayout>
				<div className="p-6">
					<DisplayUserName userName={data?.family_name} />
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{sectionData.map((column, colIndex) => (
							<div key={colIndex}>
								{column.sections.map((section, i) => (
									<DisplayInfoRowContainer key={i} data={section.data} heading={section.heading} />
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
			</MemberOverviewLayout>
		</>
	);
};

export default FamiliesOverview;
