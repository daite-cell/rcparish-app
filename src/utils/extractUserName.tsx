const extractUserName = (row: Record<string, unknown>): string => {
	if (!row) return '';

	const possibleKeys = [
		'member_name',
		'anbiam_name',
		'association_content',
		'person_name',
		'worker_name',
		'property_name',
		'village_name',
		'thing_name',
		'sub_station_name',
		'name',
		'priest_name',
		'memberName',
		'userName',
		'noviciateName',
		'nameOfThePriests',
		'nameOfAssociations',
		'institutionName',
		'villageName',
		'parishName',
		'vicariateName',
		'dioceseName',
		'religiousPersonName',
		'familyName',
		'workerName',
	];

	for (const key of possibleKeys) {
		if (typeof row[key] === 'string') return row[key] as string;
	}

	return '';
};

export { extractUserName };
