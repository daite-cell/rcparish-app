import { priestPersonalDummyData } from '../../data';
import { usePriestColumns } from '../../columns';
import { DynamicDataTable } from '@/components';

const RenderReligiousPeopleTablesContainer = () => {
	const priestColumns = usePriestColumns();

	return (
		<div>
			<DynamicDataTable
				wrapText={false}
				data={priestPersonalDummyData ?? []}
				customColumns={priestColumns}
				enableDateSorting={true}
				enableLetterSorting={true}
			/>
		</div>
	);
};

export default RenderReligiousPeopleTablesContainer;
