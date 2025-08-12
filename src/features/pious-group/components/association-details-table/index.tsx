import { DynamicDataTable } from '@/components';
import get_association_details from '../../data/get_association_details.json';
import get_anbiam_details from '../../data/get_anbiam_details.json';
import { useAnbiamDetailsColumns, useAssociationDetailsColumns } from '../../columns';
import { useRouteName } from '@/utils/getRouteName';
import type { ColumnDef } from '@tanstack/react-table';
import type { AnbiamDetailsProps, AssociationDetailsProps } from '@/types';

const AssociationDetailsTable = () => {
	const type = useRouteName('type');
	const associationDetailsColumns = useAssociationDetailsColumns() as ColumnDef<AssociationDetailsProps>[];
	const anbiamDetailsColumns = useAnbiamDetailsColumns() as ColumnDef<AnbiamDetailsProps>[];

	return type === 'association_details' ? (
		<DynamicDataTable
			customColumns={associationDetailsColumns}
			data={get_association_details.association_details}
			showFooter={true}
		/>
	) : (
		<DynamicDataTable customColumns={anbiamDetailsColumns} data={get_anbiam_details.anbiam_details} showFooter={true} />
	);
};

export default AssociationDetailsTable;
