import { Check } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface ProfileCardProps {
	step: string;
	title: string;
	subtitle: string;
	stepNumber: string;
	pathUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, subtitle, stepNumber, pathUrl }) => {
	return (
		<Link to={pathUrl}>
			<div className="relative p-2 bg-transparent cursor-pointer ">
				<div className="w-full text-center">
					<p className="text-xs font-bold bg-white border border-white text-[#343148] py-1">STEP {stepNumber}</p>
				</div>

				<div className="p-4 py-6 text-center uppercase group bg-secondary text-primary hover:bg-primary">
					<p className="text-xs font-semibold group-hover:text-black">{title}</p>
					<p className="text-[10px]   group-hover:text-black mt-3">{subtitle}</p>
				</div>

				<div className="flex justify-center items-center rounded-full bg-white h-8 w-8 absolute left-1/2 -translate-x-1/2 bottom-[-10px]">
					<Check />
				</div>
			</div>
		</Link>
	);
};

export default ProfileCard;
