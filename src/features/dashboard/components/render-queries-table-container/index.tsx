import { DynamicDataTable } from '@/components';
import type { ColumnDef } from '@tanstack/react-table';

interface RenderQueryTableProps {
	isClosed: boolean;
	isBishop?: boolean;
	columns: ColumnDef<object>[];
}

const RenderQueryTableContainer: React.FC<RenderQueryTableProps> = ({ isClosed, columns }) => {
	const tableId = isClosed ? 'closed-queries' : 'open-queries';
	const title = isClosed ? 'CLOSED QUERIES' : 'OPEN QUERIES';

	return (
		<DynamicDataTable
			wrapText={false}
			customColumns={columns}
			enableExport={false}
			tableId={tableId}
			title={title}
			data={[]}
		/>
	);
};

export default RenderQueryTableContainer;
