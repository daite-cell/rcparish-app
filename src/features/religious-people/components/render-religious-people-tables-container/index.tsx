import { usePriestColumns } from '../../columns';
import { DynamicDataTable } from '@/components';
import priestData from '../../data/priest-list.json';
const RenderReligiousPeopleTablesContainer = () => {
	const priestColumns = usePriestColumns();
	console.warn('Priest Data:', priestData);
	return (
		<div>
			<DynamicDataTable
				wrapText={false}
				data={priestData.priest_list}
				customColumns={priestColumns}
				enableDateSorting={true}
				enableLetterSorting={true}
			/>
		</div>
	);
};

export default RenderReligiousPeopleTablesContainer;
