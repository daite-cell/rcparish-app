import type { ProfileCardProps } from '@/types';
import { Check } from 'lucide-react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = memo(({ title, subtitle, stepNumber, pathUrl }: ProfileCardProps) => {
	return (
		<Link to={pathUrl}>
			<div className="relative p-2 bg-transparent cursor-pointer group">
				<div className="w-full text-center">
					<p className="text-xs font-bold bg-white border border-white text-[#343148] py-1">STEP {stepNumber}</p>
				</div>

				<div className="p-4 py-6 text-center uppercase group-hover:bg-primary group-hover:text-black bg-secondary text-primary">
					<p className="text-xs font-semibold">{title}</p>
					<p className="text-[10px] mt-3">{subtitle}</p>
				</div>

				<div className="flex justify-center items-center rounded-full bg-white h-8 w-8 absolute left-1/2 -translate-x-1/2 bottom-[-10px]">
					<Check className="group-hover:text-black" />
				</div>
			</div>
		</Link>
	);
});

export default ProfileCard;
