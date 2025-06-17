const TodayDate = () => {
	const today = new Date();

	const formattedDate = today.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		weekday: 'long',
		year: 'numeric',
	});

	return (
		<div className="mb-5 text-sm text-[#a8926c]" id="today_date">
			{formattedDate}
		</div>
	);
};

export default TodayDate;
