import { Edit } from 'lucide-react';
import { memo } from 'react';

const TableDetailsEditButton = memo(({ onClick }: { onClick?: () => void }) => (
	<button type="button" title="edit" onClick={onClick}>
		<Edit className="w-4 h-4 text-center cursor-pointer" />
	</button>
));

export default TableDetailsEditButton;
