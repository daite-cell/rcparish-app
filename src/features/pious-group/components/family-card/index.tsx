import { lazy, Suspense, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';
import { toTitleCaseFromSnake } from '@/utils/toTitleCaseFromSnake';
import InfoRow from '../../../../components/info-row';
import HeadingWithUnderline from '../../../../components/heading-with-underline';
import FormButton from '../../../../components/form-button';
import get_families_details from '../../data/get_families_details.json';
import { familyMemberDetailsTableOneColumns, familyMemberDetailsTableTwoColumns } from '../../columns';
import { type TableRow } from '@/components/dynamic-basic-table';
import type { ColumnDef } from '@tanstack/react-table';
const DynamicBasicTable = lazy(() => import('@/components/dynamic-basic-table'));

const FamilyCard = ({ year }: { year?: string }) => {
	const receiptRef = useRef<HTMLDivElement>(null);

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

	const currentYear = new Date().getFullYear();
	const nextYear = currentYear + 1;

	const display_year = year === 'current_year' ? currentYear.toString() : nextYear.toString();

	const handleDownloadPdf = async () => {
		if (!receiptRef.current) return;

		const canvas = await html2canvas(receiptRef.current, {
			scale: 2,
			useCORS: true,
			allowTaint: true,
		});

		const imgData = canvas.toDataURL('image/png');

		const pdf = new jsPDF('p', 'mm', 'a4');
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

		let position = 0;
		if (pdfHeight < pdf.internal.pageSize.getHeight()) {
			pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
		} else {
			let heightLeft = pdfHeight;
			while (heightLeft > 0) {
				pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
				heightLeft -= pdf.internal.pageSize.getHeight();
				position -= pdf.internal.pageSize.getHeight();
				if (heightLeft > 0) pdf.addPage();
			}
		}

		pdf.save('family_card.pdf');
	};

	return (
		<div className="flex flex-col  ">
			<FormButton onClick={handleDownloadPdf} className="self-end" label="Download PDF" />

			<div ref={receiptRef} className="bg-white text-black p-4">
				<HeadingWithUnderline text="Christ the King Church - Perumanam Parish" />
				<p className="text-sm text-gray-800 text-center underline mb-4">
					<span className="font-semibold uppercase tracking-wide text-gray-700">FAMILY CARD FOR </span>
					<span className="font-semibold">{display_year}</span>
					<span className="text-gray-600 text-xs"> ( Valid upto DEC-2027 )</span>
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
					<Suspense fallback={<div>Loading table...</div>}>
						<DynamicBasicTable
							data={family_members}
							columns={familyMemberDetailsTableOneColumns as ColumnDef<TableRow>[]}
						/>
					</Suspense>
					<Suspense fallback={<div>Loading table...</div>}>
						<DynamicBasicTable
							data={family_members}
							columns={familyMemberDetailsTableTwoColumns as ColumnDef<TableRow>[]}
						/>
					</Suspense>
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
