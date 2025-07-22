import { Pencil, Folder } from 'lucide-react';
import { memo } from 'react';

export interface TableActionButtonsProps<T> {
	row: T;
	onEdit?: (row: T) => void;
	onViewPrior?: (row: T) => void;
}

function TableActionButtons<T>({ row, onEdit, onViewPrior }: TableActionButtonsProps<T>) {
	return (
		<div className="flex px-2 gap-6">
			{onEdit && (
				<button type="button" title="Edit" onClick={() => onEdit(row)}>
					<Pencil className="w-4 h-4" />
				</button>
			)}
			{onViewPrior && (
				<button type="button" title="View Prior Dignitaries" onClick={() => onViewPrior(row)}>
					<Folder className="w-4 h-4" />
				</button>
			)}
		</div>
	);
}

export default memo(TableActionButtons);
