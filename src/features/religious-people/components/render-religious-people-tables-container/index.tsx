import { usePriestColumns } from '../../columns';
import { DynamicDataTable } from '@/components';
import priestData from '../../data/priest-list.json';
const RenderReligiousPeopleTablesContainer = () => {
	const priestColumns = usePriestColumns();
	return (
		<DynamicDataTable
			wrapText={false}
			data={priestData.priest_list}
			customColumns={priestColumns}
			enableDateSorting={true}
			enableLetterSorting={true}
			filterKey="priest_name"
		/>
	);
};

export default RenderReligiousPeopleTablesContainer;
