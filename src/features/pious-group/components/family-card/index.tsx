import { toTitleCaseFromSnake } from '@/utils/toTitleCaseFromSnake';
import InfoRow from '../../../../components/info-row';
import HeadingWithUnderline from '../../../../components/heading-with-underline';
import FormButton from '../../../../components/form-button';
import get_families_details from '../../data/get_families_details.json';
import { familyMemberDetailsTableOneColumns, familyMemberDetailsTableTwoColumns } from '../../columns';
import DynamicBasicTable, { type TableRow } from '@/components/dynamic-basic-table';
import type { ColumnDef } from '@tanstack/react-table';
const FamilyCard = () => {
	const familyDetails = get_families_details.families;
	const familyIncome = get_families_details.family_income ?? 0;
	const permanentAddress = familyDetails.permanent_address ?? '';
	const temporaryAddress = familyDetails.temporary_address ?? '';
	const family_members = get_families_details.family_members;

	const sectionData = [
		{
			col: 1,
			sections: [
				{
					data: {
						family_no: familyDetails.unique_family_id ?? '',
						family_name: familyDetails.family_name ?? '',
						family_head: familyDetails.family_head ?? '',
						family_mobile_no: familyDetails.family_mobile_no ?? '',
						marriage_date: familyDetails.marriage_date ?? '',
					},
				},
			],
		},
		{
			col: 2,
			sections: [
				{
					data: {
						activeness: familyDetails.activeness_content,
						old_mobile_no: '',
						main_station: familyDetails.parish_content ?? '',
						anbiam: '',
						house_type: familyDetails.social_status ?? '',
					},
				},
			],
		},
		{
			col: 3,
			sections: [
				{
					data: {
						house_ownership: familyDetails.house_ownership ?? '',
						monthly_subscription: familyDetails.monthly_subscription ?? '',
						subscription_fixed_from: familyDetails.subscription_from ?? '',
						family_monthly_income: familyIncome,
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
					<DynamicBasicTable
						data={family_members}
						columns={familyMemberDetailsTableOneColumns as ColumnDef<TableRow>[]}
					/>
					<DynamicBasicTable data={[]} columns={familyMemberDetailsTableTwoColumns as ColumnDef<TableRow>[]} />
				</div>

				<div className="flex flex-col md:flex-row justify-between mt-6">
					<InfoRow label="Permanent Address :" value={permanentAddress} />
					<InfoRow label="Temporary Address:" value={temporaryAddress} />
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
