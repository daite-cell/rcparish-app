import { Eye } from 'lucide-react';
import { memo } from 'react';

const TableDetailsViewButton = memo(({ onClick }: { onClick: () => void }) => (
	<button type="button" onClick={onClick} title="View">
		<Eye className="w-4 h-4 text-center cursor-pointer" />
	</button>
));

export default TableDetailsViewButton;
