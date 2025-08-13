import { ButtonActions, DisplayInfoRowContainer, DynamicDataTable } from '@/components';
import { useStore } from '@/store/store';
import type { MembersInParishFamilyProps } from '@/types';
import get_family_members_details from '../../data/get_family_members_details.json';
import { familyMembersColumns } from '../../columns';
import { useRef } from 'react';

const FamilyMembersInfoWithTable = () => {
	const printRef = useRef<HTMLDivElement>(null);
	const handlePrint = () => window.print();
	const { selectFamilyMembersRow, handleCloseFamilyMembersRow } = useStore() as {
		selectFamilyMembersRow: MembersInParishFamilyProps;
		handleCloseFamilyMembersRow: () => void;
	};

	const sectionData = [
		{
			col: 1,
			sections: [
				{
					heading: '',
					data: {
						'main_station_/_sub_station': selectFamilyMembersRow.sub_station_name ?? '',
						anbiam: selectFamilyMembersRow.anbiam_name ?? '',
					},
				},
			],
		},
		{
			col: 2,
			sections: [
				{
					heading: '',
					data: {
						family_name: selectFamilyMembersRow.family_name ?? '',
						unique_family_number: selectFamilyMembersRow.unique_family_id ?? '',
					},
				},
			],
		},
	];

	return (
		<div className="p-4 flex flex-col  border border-gray-300 rounded min-h-[100px] m-5">
			<h1 className="text-[16px] font-bold uppercase ">
				FAMILY MEMBERS{' '}
				<span className="text-[10px] font-normal capitalize no-underline">(Registered Family Members only)</span>
			</h1>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 my-6">
				{sectionData &&
					sectionData.map((column, colIndex) => (
						<div key={colIndex}>
							{column.sections.map((section, i) => (
								<DisplayInfoRowContainer key={i} data={section.data} />
							))}
						</div>
					))}
			</div>

			<ButtonActions onPrint={handlePrint} onClose={handleCloseFamilyMembersRow} />
			<div className="print-area" ref={printRef}>
				<h1 className="hidden  print:block text-5xl">Pious Group - Families</h1>
				<DynamicDataTable
					data={get_family_members_details.family_members_list}
					customColumns={familyMembersColumns}
					enableExport={false}
					tableId="family-members"
					enablePagination={false}
					enableSearch={false}
				/>
			</div>
		</div>
	);
};

export default FamilyMembersInfoWithTable;
