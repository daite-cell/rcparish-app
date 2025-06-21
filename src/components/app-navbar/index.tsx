import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { NavLink } from 'react-router-dom';
import navImage1 from '/nav-images/nav-image1.jpg';
import navImage2 from '/nav-images/nav-image2.jpg';
import navItems from '@/data/navbar-content';
import { memo, useState } from 'react';
import { usePathName } from '@/utils/usePathName';

const AppNavbar = memo(() => {
	const [activeTab, setActiveTab] = useState<number | null>(0);
	const { state } = useSidebar();
	const pathName = usePathName();

	const handleActiveTabChange = (index: number) => {
		setActiveTab(activeTab === index ? null : index);
	};

	const renderSidebarTrigger = (additionalClasses: string) => (
		<SidebarTrigger
			className={`absolute left-0 top-4 text-white bg-[#343148] z-50 p-2 hover:bg-[#413e52] ${additionalClasses}`}
		/>
	);

	return (
		<>
			{pathName !== '/profile' && (
				<div className="w-full h-[90px] bg-secondary border-l border-[#413e52] flex items-center justify-between relative ">
					{state !== 'expanded' && renderSidebarTrigger('hidden md:block')}
					{renderSidebarTrigger('md:hidden')}

					<div className="md:w-[15%] pl-2 md:pl-5 pt-[5px]">
						<img
							src={navImage1}
							alt="nav-image-1"
							width="80"
							height="80"
							className="float-left object-cover w-15 h-15 md:w-20 md:h-20 rounded-full border-2 border-[#d7c49e]"
						/>
					</div>

					<div className="md:w-[70%] text-center">
						<p className="text-[#d7c49e] uppercase text-[18px] md:text-[20px] font-semibold mt-[10px] shadow-sm drop-shadow-[0_0_5px_#d7c49e]">
							Diocese of Vellore
						</p>
						<p className="text-[#a8926c] text-[12px]">For the fullness of kingdom of God</p>
						<p className="text-[#a8926c] text-[12px]">Do whatever he tells you</p>
					</div>

					<div className="md:w-[15%] pr-2 md:pr-5  pt-[5px]">
						<img
							src={navImage2}
							alt="nav-image-2"
							width="80"
							height="80"
							className="float-right object-cover w-15 h-15 md:w-20 md:h-20 rounded-full border-2 border-[#d7c49e]"
						/>
					</div>
				</div>
			)}

			<div className="w-full text-[13px] bg-[#343148] border border-[#413e52] overflow-auto whitespace-nowrap text-center flex justify-between">
				{pathName !== '/profile' ? (
					navItems.map((item, index) => (
						<NavLink
							onClick={() => handleActiveTabChange(index)}
							key={index}
							to={item.to}
							className={() =>
								`inline-block text-[#d7c49e] text-center px-[15px] py-[13px] border-b-4 border-[#343148] ${activeTab === index ? 'border-[#d7c49e] hover:border-[#d7c49e] transition-all bg-[#483f44]' : ''} hover:border-[#d7c49e] transition-all hover:bg-[#48453f]`
							}
						>
							{item.label}
						</NavLink>
					))
				) : (
					<div>
						{state !== 'expanded' && renderSidebarTrigger('hidden md:block')}
						{renderSidebarTrigger('md:hidden')}
						<h1 className="uppercase text-primary text-[14px] font-bold py-4 px-7">
							Initial 24 Steps and Input Flow for the Data Records :
						</h1>
					</div>
				)}
			</div>
		</>
	);
});

export default AppNavbar;
