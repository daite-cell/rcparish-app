import { Users, User, Church, UsersRound } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
const Icons = {
	Users,
	User,
	Church,
	UsersRound,
};
const StatisticsCard = ({
	link,
	label,
	value,
	id,
	icon,
}: {
	link: string;
	icon?: string;
	label: string;
	value: number | string;
	id: string;
}) => {
	function isIconKey(icon: string): icon is keyof typeof Icons {
		return icon in Icons;
	}
	return (
		<div className="px-5 py-2 text-gray-700 transition duration-300 bg-white rounded shadow-md hover:shadow-lg">
			<Link to={link} className="block p-4 lg:p-0 xl:p-4">
				<div className="flex items-center justify-between">
					<div className="flex flex-col items-center gap-2">
						{icon && isIconKey(icon) && <span>{React.createElement(Icons[icon], {})}</span>}
						<p className="text-[12px] font-normal text-gray-700 uppercase">{label}</p>
					</div>
					<p id={id} className="text-lg font-semibold ">
						{value}
					</p>
				</div>
			</Link>
		</div>
	);
};
export default StatisticsCard;
