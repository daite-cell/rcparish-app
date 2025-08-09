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

const FamilyCard = lazy(() => import('../family-card'));

const GenericFamilesDetailsOverview = () => {
	const [yearType, setYearType] = useState<string>('current_year');
	const selectRow = useStore((state) => state.selectRow) as FamilyDataProps;

	const selectFamilyCardRow = useStore((state) => state.selectFamilyCardRow) as FamilyDataProps;

	const sectionData = selectRow && [
		{
			col: 1,
			sections: [
				{ heading: '', data: { active: 'Active' } },
				{
					heading: 'FAMILY DETAILS',
					data: {
						family_head_name: selectRow.family_head,
						unique_anbiam_family_number: selectRow.unique_family_id,
						old_family_number: '',
						'main_station_/_sub_station': selectRow.sub_station_name,
						anbiam: selectRow.anbiam_name,
						father_or_husband_name: selectRow.family_head,
						mother_or_wife_name: '',
						marriage_date: 'unknown',
					},
				},
			],
		},
		{
			col: 2,
			sections: [
				{
					heading: 'SOCIAL STATUS DETAILS',
					data: {
						house_type: selectRow.social_status,
						house_ownership: selectRow.house_ownership,
					},
				},
				{
					heading: 'INCOME & SUBSCRIPTION DETAILS',
					data: {
						family_monthly_income: 0,
						subscription_from: selectRow.subscription_from,
						family_card_valid_upto: selectRow.subscription_period || '--',
						monthly_subscription: selectRow.monthly_subscription || '',
						cemetery_number: '',
						community: selectRow.community,
					},
				},
			],
		},
		{
			col: 3,
			sections: [
				{ heading: '', data: { sub_caste: 'Adi Dravidar' } },
				{
					heading: 'FAMILY CONTACT DETAILS',
					data: {
						living_status: selectRow.living_status,

						settled_as: selectRow.settled_as,
						mobile_number: selectRow.family_mobile_no,
						email_id: '',
						temporary_address: selectRow.temporary_address,
						permanent_address: selectRow.permanent_address,
					},
				},
			],
		},
	];

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
						<DisplayUserName userName={selectRow?.family_name} />
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
				)}
			</MemberOverviewLayout>
		</>
	);
};

export default GenericFamilesDetailsOverview;
