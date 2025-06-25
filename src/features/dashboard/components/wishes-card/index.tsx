import { Cake, Heart } from 'lucide-react';

export type WishesCardProps = {
	parentName: string;
	childName?: string;
	age: number;
	parish: string;
	phone: string;
	isBirthday?: boolean;
	coupleNames?: {
		husbandName: string;
		wifeName: string;
	};
};

const WishesCard = ({ parentName, childName, age, parish, phone, isBirthday = true, coupleNames }: WishesCardProps) => {
	return (
		<div className="flex flex-col p-2 md:flex-row">
			<div className="mb-3 text-left md:w-1/4 md:mb-0">
				<span className="text-[12px] gray-700 text-">{parentName}</span>
			</div>

			<div className="space-y-2 text-left md:w-3/4">
				<p className="text-sm font-semibold text-gray-800">
					{isBirthday ? (
						<span>
							{childName}
							<Cake size={14} className="inline mx-2 " />
							(Turns {age} Year Old Today)
						</span>
					) : (
						<span>
							{coupleNames?.husbandName}
							<Heart size={14} className="inline mx-2 overflow-hidden text-red-600" />
							{coupleNames?.wifeName}(celebrate {age} Year Anniversary Today )
						</span>
					)}
				</p>

				<p className="text-xs text-gray-600">{parish}</p>
				<p className="text-xs text-gray-600">{phone}</p>
			</div>
		</div>
	);
};

export default WishesCard;
