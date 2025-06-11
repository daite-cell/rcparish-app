import { TabsLayout } from '@/components';
const QueriesFormPage = () => {
	const tabs = [
		{ label: 'CLOSED QUERIES', content: '' },
		{ label: 'OPEN QUERIES', content: '' },
	];
	return (
		<div>
			<TabsLayout tabs={tabs} />
		</div>
	);
};

export default QueriesFormPage;
