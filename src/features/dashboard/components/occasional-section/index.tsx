import WishesCard, { type WishesCardProps } from '../wishes-card';
const OccasionalSection = ({ data }: { data: WishesCardProps[] }) => {
	return (
		<div className="px-5 py-2 text-gray-700 transition duration-300 bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl">
			{data.map((item, index) => (
				<WishesCard
					key={index}
					parentName={item.parentName}
					childName={item.childName}
					age={item.age}
					parish={item.parish}
					phone={item.phone}
					isBirthday={item.isBirthday}
					coupleNames={item.coupleNames}
				/>
			))}
		</div>
	);
};

export default OccasionalSection;
