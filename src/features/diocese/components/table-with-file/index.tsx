import { DynamicDataTable } from '@/components';
import { bishopPositionData } from '../../data';
import { useStore } from '@/store/store';
import type { BishopPositionTableProps } from '@/types';
import UploadFileComponent from '../upload-file-component';
import { PriorityDignitariesTableLayout } from '@/layouts';
import { useBishopPositionColumns } from '../../columns';

const TableWithFileUpload = () => {
	const selectUploadedFileRow = useStore((state) => state.selectUploadedFileRow) as BishopPositionTableProps | null;
	const bishopPositionColumns = useBishopPositionColumns();

	return (
		<>
			{selectUploadedFileRow ? (
				<UploadFileComponent />
			) : (
				<PriorityDignitariesTableLayout heading="Diocese - Emeritus / Retired Bishops" enableClose={false}>
					<DynamicDataTable isDynamic={false} data={bishopPositionData} customColumns={bishopPositionColumns} />
				</PriorityDignitariesTableLayout>
			)}
		</>
	);
};

export default TableWithFileUpload;
