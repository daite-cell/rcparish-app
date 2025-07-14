import { DynamicDataTable } from '@/components';
import { SearchByFamily, SearchByMember } from '../index';
import { useCommonPoolSearchColumns } from '../../columns';

const RenderForms = ({ pageName }: { pageName: string | '' }) => {
	return (
		<div className="mt-10">
			<h1 className="text-normal text-center font-bold">Search Based on</h1>
			{pageName === 'search_family' ? <SearchByFamily /> : <SearchByMember />}
			<DynamicDataTable data={[]} customColumns={useCommonPoolSearchColumns()} enableExport={false} />
		</div>
	);
};

export default RenderForms;
