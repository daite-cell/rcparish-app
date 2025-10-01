const TodayDate = () => {
	const today = new Date();

	if (!today) {
		throw new Error('Failed to create date object');
	}

	const month = today.toLocaleString('en-US', { month: 'long' });
	const day = today.getDate();
	const weekday = today.toLocaleString('en-US', { weekday: 'long' });
	const year = today.getFullYear();

	if (!month || !day || !weekday || !year) {
		throw new Error('Failed to get date parts');
	}

	const formattedDate = `${month} ${day}, ${weekday}, ${year}`;

	if (!formattedDate) {
		throw new Error('Failed to format date string');
	}

	try {
		return (
			<div className="mb-5 text-xs text-[#a8926c]" id="today_date">
				{formattedDate}
			</div>
		);
	} catch (error) {
		console.error('Error rendering today date:', error);
		return null;
	}
};

export default TodayDate;
