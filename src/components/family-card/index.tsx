import { useStore } from '@/store/store';
import type { FamilyCardDataProps } from '@/types';
import { toTitleCaseFromSnake } from '@/utils/toTitleCaseFromSnake';
import InfoRow from '../info-row';
import HeadingWithUnderline from '../heading-with-underline';
import DynamicDataTable from '../dynamic-table';
import { familyMemberDetailsTableOneColumns, familyMemberDetailsTableTwoColumns } from '@/table-columns';
import FormButton from '../form-button';

const FamilyCard = () => {
	const selectFamilyCardRow = useStore((state) => state.selectFamilyCardRow) as FamilyCardDataProps;

	if (!selectFamilyCardRow) return null;

	const sectionData = [
		{
			col: 1,
			sections: [
				{
					data: {
						family_no: selectFamilyCardRow.familyNumber,
						family_name: selectFamilyCardRow.familyName,
						family_head: selectFamilyCardRow.familyHead,
						family_mobile_no: selectFamilyCardRow.mobile,
						marriage_date: 'unknown',
					},
				},
			],
		},
		{
			col: 2,
			sections: [
				{
					data: {
						activeness: 'Active',
						old_mobile_no: '',
						main_station: selectFamilyCardRow.mainStation,
						anbiam: selectFamilyCardRow.anbiam,
						house_type: selectFamilyCardRow.houseType,
					},
				},
			],
		},
		{
			col: 3,
			sections: [
				{
					data: {
						house_ownership: selectFamilyCardRow.ownership,
						monthly_subscription: selectFamilyCardRow.monthlySubscription,
						subscription_fixed_from: selectFamilyCardRow.subscriptionFrom,
						family_monthly_income: selectFamilyCardRow.familyMonthlyIncome,
						cemetery_no: '',
					},
				},
			],
		},
	];

	const handleDownloadPdf = () => {};
	return (
		<div className="flex flex-col p-4 md:p-10">
			<FormButton onClick={handleDownloadPdf} className="self-end" label="Download PDF" />

			<div className="bg-white text-black p-6">
				<HeadingWithUnderline text="Christ the King Church - Perumanam Parish" />
				<p className="text-sm text-gray-800 text-center underline mb-4">
					<span className="font-semibold uppercase tracking-wide text-gray-700">FAMILY CARD FOR </span>
					<span className="font-semibold">2025</span>
					<span className="text-gray-600"> ( Valid upto </span>
					<span className="font-semibold">DEC-2027</span>
					<span className="text-gray-600"> )</span>
				</p>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-6">
					{sectionData.map((column, colIndex) => (
						<div key={colIndex}>
							{column.sections.map((section, i) => (
								<div key={i} className="mb-4 space-y-1">
									{Object.entries(section.data).map(([label, value]) => (
										<h1 className="font-semibold text-xs" key={label}>
											{toTitleCaseFromSnake(label)}: <span className="font-normal">{value || '--'}</span>
										</h1>
									))}
								</div>
							))}
						</div>
					))}
				</div>

				<div>
					<HeadingWithUnderline text="Family Members Details" className="text-xs" />
					<DynamicDataTable data={[]} customColumns={familyMemberDetailsTableOneColumns} isDynamic={false} />
					<DynamicDataTable data={[]} customColumns={familyMemberDetailsTableTwoColumns} isDynamic={false} />
				</div>

				<div className="flex flex-col md:flex-row justify-between mt-6">
					<InfoRow label="Permanent :" value={selectFamilyCardRow.permanentAddress} />
					<div className="flex flex-col items-center mt-7">
						<div className="w-40 border-t border-black mb-1"></div>
						<span className="text-xs">Authorised Signature</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FamilyCard;
