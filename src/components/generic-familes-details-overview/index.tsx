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
				{ data: { active: 'Active' } },
				{
					heading: 'FAMILY DETAILS',
					data: {
						family_head_name: selectRow.familyHead,
						unique_anbiam_family_number: selectRow.familyNumber,
						old_family_number: selectRow.oldFamilyNumber || '',
						'main_station_/_sub_station': selectRow.mainStation,
						anbiam: selectRow.anbiam,
						father_or_husband_name: selectRow.familyHead,
						mother_or_wife_name: selectRow.nameOfRespectives || '',
						marriage_date: selectRow.marriageDate1,
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
						house_type: selectRow.houseType,
						house_ownership: selectRow.ownership,
					},
				},
				{
					heading: 'INCOME & SUBSCRIPTION DETAILS',
					data: {
						family_monthly_income: selectRow.familyMonthlyIncome || 0,
						subscription_from: selectRow.subscriptionFrom,
						family_card_valid_upto: selectRow.subscriptionFrom || '--',
						monthly_subscription: selectRow.monthlySubscription || '',
						cemetery_number: '',
						community: selectRow.community,
						sub_caste: selectRow.subCaste || '',
					},
				},
			],
		},
		{
			col: 3,
			sections: [
				{
					heading: 'FAMILY CONTACT DETAILS',
					data: {
						living_status: selectRow.livingStatus,
						parish_name: '--',
						diocese_name: '--',
						country_name: '--',
						settled_as: selectRow.settledAs,
						mobile_number: selectRow.mobile,
						email_id: '--',
						temporary_address: selectRow.temporaryAddress,
						permanent_address: selectRow.permanentAddress,
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
						<DisplayUserName userName={selectRow?.familyName} />
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
