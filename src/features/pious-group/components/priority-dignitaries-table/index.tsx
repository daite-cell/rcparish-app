import { ButtonActions, DynamicDataTable } from '@/components';
import { useStore } from '@/store/store';

interface PriorityDignitariesTableProps<T> {
	data?: T[];
}

const PriorityDignitariesTable = <T extends object>({ data }: PriorityDignitariesTableProps<T>) => {
	const handleClose = useStore((state) => state.handleCloseRow);
	const handlePrint = () => {
		if (typeof window !== 'undefined' && window.print) {
			window.print();
		} else {
			console.error('Error printing page');
		}
	};
	if (!data) {
		return <div className="error-message">No data available</div>;
	}
	return (
		<div className="flex flex-col print-area">
			<h1 className="font-bold underline no-print">PRIOR DIGNITARIES</h1>
			<h1 className="text-5xl my-6 hidden print:block">Pious Group - Parish Council Members</h1>
			<ButtonActions onPrint={handlePrint} onClose={handleClose} />
			<DynamicDataTable filterKey="member_name" data={data} isDynamic={false} tableId="priority-dignitaries-table" />
		</div>
	);
};

export default PriorityDignitariesTable;
