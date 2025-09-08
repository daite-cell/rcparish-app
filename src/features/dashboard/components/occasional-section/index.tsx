import WishesCard, { type WishesCardProps } from '../wishes-card';
const OccasionalSection = ({ data }: { data: WishesCardProps[] }) => {
	return (
		<div className="px-5 py-2 text-gray-700 transition duration-300 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
			{data.map((item, index) => (
				<WishesCard key={index} {...item} />
			))}
		</div>
	);
};

export default OccasionalSection;
