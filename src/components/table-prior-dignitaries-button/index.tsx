import { Folder } from 'lucide-react';
import { memo } from 'react';

const TablePriorDignitariesButton = memo(({ onClick }: { onClick: () => void }) => (
	<button type="button" onClick={onClick} title="View">
		<Folder className="w-4 h-4 text-center cursor-pointer" />
	</button>
));

export default TablePriorDignitariesButton;
