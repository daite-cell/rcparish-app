import { TabsLayout } from '@/components';
const tabs = [
	{ label: 'CLOSED REQUEST', content: 'Data will be added' },
	{ label: 'OPEN REQUEST', content: 'Data will be added' },
	{ label: 'CREATE REQUEST', content: 'Data will be added' },
];

const RequestToBishop = () => {
	return (
		<div>
			<TabsLayout tabs={tabs} activeTabId={1} />
		</div>
	);
};

export default RequestToBishop;
