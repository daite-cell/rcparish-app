import { usePathName } from '@/utils/getPathName';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import navImage1 from '/nav-images/nav-image1.jpg';
import navImage2 from '/nav-images/nav-image2.jpg';
import { memo } from 'react';

const AppNavHeader = memo(() => {
	const { state } = useSidebar();
	const pathName = usePathName().split('/')[1];

	const diocese_heading_pages = ['dashboard', 'diocese', 'parish'];
	const renderSidebarTrigger = (additionalClasses: string) => (
		<SidebarTrigger
			className={`absolute left-0 top-4 text-white bg-[#343148] z-50 p-2 hover:bg-[#413e52] ${additionalClasses}`}
		/>
	);
	return (
		<div className="w-full h-[90px] bg-secondary border-l border-[#413e52] flex items-center justify-between relative ">
			{state !== 'expanded' && renderSidebarTrigger('hidden md:block')}
			{renderSidebarTrigger('md:hidden')}

			<div className="md:w-[15%] pl-2 md:pl-5 pt-[5px]">
				<img
					src={navImage1}
					alt="Image depicting the Diocese of Vellore"
					width="80"
					height="80"
					className="float-left object-cover w-15 h-15 md:w-20 md:h-20 rounded-full border-2 border-[#d7c49e]"
				/>
			</div>

			<div className="md:w-[70%] text-center">
				<p className="text-[#d7c49e] uppercase text-[18px] md:text-[20px] font-semibold mt-[10px] shadow-sm drop-shadow-[0_0_5px_#d7c49e]">
					{diocese_heading_pages.includes(pathName) ? 'Diocese of Vellore' : 'Christ the King Church'}
				</p>
				<p className="text-[#a8926c] text-[12px]">
					{diocese_heading_pages.includes(pathName) ? 'For the fullness of kingdom of God' : 'Perumanam Parish-V05P10'}
				</p>
				<p className="text-[#a8926c] text-[12px]">
					{diocese_heading_pages.includes(pathName) ? 'Do whatever he tells you' : 'Thiruvannamalai-V05'}
				</p>
			</div>

			<div className="md:w-[15%] pr-2 md:pr-5  pt-[5px]">
				<img
					src={navImage2}
					alt="Image depicting Christ the King Church"
					width="80"
					height="80"
					className="float-right object-cover w-15 h-15 md:w-20 md:h-20 rounded-full border-2 border-[#d7c49e]"
				/>
			</div>
		</div>
	);
});

export default AppNavHeader;
