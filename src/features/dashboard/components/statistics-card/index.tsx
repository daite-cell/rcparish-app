import { Users, User, Church, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { memo, useMemo } from 'react';

const Icons = {
	Users,
	User,
	Church,
	UsersRound,
};

const ICON_KEYS_SET = new Set(Object.keys(Icons) as (keyof typeof Icons)[]);

interface StatisticsCardProps {
	link: string;
	icon?: string;
	label: string;
	value: number | string;
	id: string;
}

const StatisticsCard = memo<StatisticsCardProps>(({ link, label, value, id, icon }) => {
	const iconElement = useMemo(() => {
		if (!icon || !ICON_KEYS_SET.has(icon as keyof typeof Icons)) {
			return null;
		}

		const IconComponent = Icons[icon as keyof typeof Icons];
		return <IconComponent />;
	}, [icon]);

	return (
		<div className="px-5 py-2 text-gray-700 transition duration-300 bg-white rounded shadow-md hover:shadow-lg">
			<Link to={link} className="block p-4 lg:p-0 xl:p-4">
				<div className="flex items-center justify-between">
					<div className="flex flex-col items-center gap-2">
						{iconElement && <span>{iconElement}</span>}
						<p className="text-xs font-normal text-gray-700 uppercase">{label}</p>
					</div>
					<p id={id} className="text-lg font-semibold">
						{value}
					</p>
				</div>
			</Link>
		</div>
	);
});

export default StatisticsCard;
