import { DynamicDataTable } from '@/components';
import get_association_details from '../../data/get_association_details.json';
import { useAssociationDetailsColumns } from '../../columns';

const AssociationDetailsTable = () => {
	return (
		<DynamicDataTable
			customColumns={useAssociationDetailsColumns()}
			data={get_association_details.association_details}
		/>
	);
};

export default AssociationDetailsTable;
