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

const WishesCard = ({ parentName, childName, age, parish, phone, isBirthday = true, coupleNames }: WishesCardProps) => (
	<div className="flex flex-col p-2 md:flex-row text-xs">
		<div className="mb-3  text-left md:w-1/4 md:mb-0">{parentName}</div>

		<div className="space-y-2 text-left md:w-3/4">
			<p className="text-xs font-semibold text-gray-800">
				{isBirthday ? (
					<>
						{childName}
						<Cake size={14} className="inline mx-2" />
						(Turns {age} Year Old Today)
					</>
				) : (
					<>
						{coupleNames?.husbandName}
						<Heart size={14} className="inline mx-2 text-red-600" />
						{coupleNames?.wifeName}(celebrate {age} Year Anniversary Today)
					</>
				)}
			</p>
			<p className="text-xs text-gray-600">{parish}</p>
			<p className="text-xs text-gray-600">{phone}</p>
		</div>
	</div>
);

export default WishesCard;
