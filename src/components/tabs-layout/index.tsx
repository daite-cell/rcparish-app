import { useState } from 'react';

type Tab = {
	label: string;
	content: React.ReactNode;
};

interface TabsLayoutProps {
	tabs: Tab[];
	activeTabId?: number;
}

const TabsLayout = ({ tabs, activeTabId = 1 }: TabsLayoutProps) => {
	const [activeTab, setActiveTab] = useState<number>(activeTabId);

	return (
		<div className="w-full  mx-auto p-4">
			<div className="flex justify-end ">
				{tabs.map((tab, index) => (
					<button
						type="button"
						key={index}
						onClick={() => setActiveTab(index)}
						className={`px-4 py-2 font-normal text-[12px] ${
							activeTab === index ? 'border-b-2 border-black ' : 'text-gray-500 '
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className="mt4 p-4 bg-white border-2 border-gray-200 h-[400px]">
				{tabs[activeTab] ? tabs[activeTab].content : <div>Error: Tab content not available</div>}
			</div>
		</div>
	);
};

export default TabsLayout;
