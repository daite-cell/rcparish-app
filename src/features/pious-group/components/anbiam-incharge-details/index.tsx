import { DisplayInfoRowContainer, DynamicDataTable, TableHeading } from '@/components';
import { MemberOverviewLayout, TabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import get_anbiams_list from '../../data/get_anbiams_list.json';
import type { AnbiamDetailsProps } from '@/types';
import { useTotalFamilyMembersColumns } from '../../columns';
import get_total_families from '../../data/get_total_families.json';

const AnbiamInChargeDetails = () => {
	const { selectAssociationRow, handleCloseAssociationRow } = useStore() as {
		selectAssociationRow: AnbiamDetailsProps;
		handleCloseAssociationRow: () => void;
	};

	const getAnbiamInchargeDetails = get_anbiams_list.anbiams_list.find(
		(item) => item.anbiam_id === selectAssociationRow.anbiam_id
	);

	const sectionData = [
		{
			col: 1,
			sections: [
				{
					heading: '',
					data: {
						'main_station_/_sub_station': `${getAnbiamInchargeDetails?.sub_station_name ?? ''} (${getAnbiamInchargeDetails?.sub_station_id ?? ''})`,
						anbiam: `${getAnbiamInchargeDetails?.anbiam_name ?? ''} (${getAnbiamInchargeDetails?.anbiam_id ?? ''})`,
						'no_of_familes_&_members': `${selectAssociationRow?.total_families ?? ''} - Families  ${selectAssociationRow?.total_members ?? ''} - Members`,
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
						president: '',
						secretary: '',
						treasurer: '',
					},
				},
			],
		},
		{
			col: 3,
			sections: [
				{
					heading: '',
					data: {
						election_date: getAnbiamInchargeDetails?.elected_on ?? '',
						period_end_on: getAnbiamInchargeDetails?.period_end_on ?? '',
					},
				},
			],
		},
	];
	return (
		<TabsLayout hasPageHeading={false} tabs={[]}>
			<TableHeading className="!ml-0 !text-sm !font-bold underline" text="MEMBERS IN ANBIAM" />
			<MemberOverviewLayout
				enableClose={true}
				handleClose={() => handleCloseAssociationRow()}
				sectionHeading="ANBIAM MEMBER DETAILS"
			>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-6 p-5">
					{sectionData &&
						sectionData.map((column, colIndex) => (
							<div key={colIndex}>
								{column.sections.map((section, i) => (
									<DisplayInfoRowContainer key={i} data={section.data} />
								))}
							</div>
						))}
				</div>
			</MemberOverviewLayout>
			<DynamicDataTable
				data={get_total_families.total_families}
				wrapText={false}
				customColumns={useTotalFamilyMembersColumns()}
				enableSearch={false}
				enableExport={false}
			/>
		</TabsLayout>
	);
};

export default AnbiamInChargeDetails;
