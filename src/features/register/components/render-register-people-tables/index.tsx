import { DynamicDataTable } from '@/components';
import { dummy_members_data } from '../../data';
import { useMemberColumns } from '../../columns';

const RenderRegisterPeopleTables = () => {
	return (
		<div>
			<DynamicDataTable wrapText={false} data={dummy_members_data} customColumns={useMemberColumns()} />
		</div>
	);
};

export default RenderRegisterPeopleTables;
