import { SearchByFamily, SearchByMember } from '../index';

const RenderForms = ({ pageName }: { pageName: string | '' }) => {
	return (
		<div className="mt-10">
			<h1 className="text-normal text-center font-bold">Search Based on</h1>
			{pageName === 'search_family' ? <SearchByFamily /> : <SearchByMember />}
		</div>
	);
};

export default RenderForms;
