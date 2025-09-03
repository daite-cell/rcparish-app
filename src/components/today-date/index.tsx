const TodayDate = () => {
	const today = new Date();

	const month = today.toLocaleString('en-US', { month: 'long' });
	const day = today.getDate();
	const weekday = today.toLocaleString('en-US', { weekday: 'long' });
	const year = today.getFullYear();

	const formattedDate = `${month} ${day}, ${weekday}, ${year}`;

	return (
		<div className="mb-5 text-xs text-[#a8926c]" id="today_date">
			{formattedDate}
		</div>
	);
};

export default TodayDate;
