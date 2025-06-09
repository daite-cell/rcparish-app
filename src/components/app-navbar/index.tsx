import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { Link } from 'react-router-dom';
import navImage1 from '/nav-images/nav-image1.jpg';
import navImage2 from '/nav-images/nav-image2.jpg';
import navItems from '@/data/navbar-content';

const AppNavbar = () => {
	const { state } = useSidebar();
	return (
		<>
			<div className="w-full h-[90px] bg-secondary border-l border-[#413e52] flex items-center justify-between relative ">
				{state !== 'expanded' && (
					<SidebarTrigger className="absolute left-0 top-4 text-white bg-[#343148] z-50 p-2 hover:bg-[#413e52] hidden md:block " />
				)}
				<SidebarTrigger className="absolute left-0 top-4 text-white bg-[#343148] z-50 p-2 hover:bg-[#413e52] md:hidden " />

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
			<div className="w-full text-[13px] bg-[#343148] border border-[#413e52] overflow-auto whitespace-nowrap text-center flex justify-between">
				{navItems.map((item, index) => (
					<Link
						key={index}
						to={item.to}
						className={`inline-block text-[#d7c49e] text-center px-[15px] py-[13px] border-b-4 border-[#343148] hover:border-[#d7c49e] transition-all hover:bg-[#48453f]`}
					>
						{item.label}
					</Link>
				))}
			</div>
		</>
	);
};

export default AppNavbar;
