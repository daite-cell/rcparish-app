import SectionHeading from '../section-heading';

interface TabBase {
	label: string;
}

interface TabsLayoutProps<T extends TabBase> {
	tabs: T[];
	activeTabId?: number;
	onTabChange?: (index: number) => void;
	hasPageHeading?: boolean;
	children: React.ReactNode;
}

const TabsLayout = <T extends TabBase>({
	tabs,
	activeTabId = 0,
	onTabChange,
	hasPageHeading = true,
	children,
}: TabsLayoutProps<T>) => (
	<div className="w-full mx-auto pt-4 px-6">
		<div className="flex justify-end">
			{tabs.map((tab, index) => {
				const isActive = activeTabId === index;
				return (
					<button
						key={index}
						type="button"
						onClick={() => onTabChange?.(index)}
						className={`px-4 py-2 font-normal uppercase text-[12px] transition-all duration-200 ${
							isActive ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-black'
						}`}
					>
						{tab.label}
					</button>
				);
			})}
		</div>
		<div className="p-4 flex flex-col  border border-gray-300 rounded min-h-[100px]">
			{hasPageHeading && <SectionHeading />}
			<div className=" flex-1 ">{children}</div>
		</div>
	</div>
);

export default TabsLayout;
