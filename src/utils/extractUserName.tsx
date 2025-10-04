const extractUserName = (row: Record<string, unknown>): string => {
	if (!row) return '';
	if (typeof row.member_name === 'string') return row.member_name;
	if (typeof row.anbiam_name === 'string') return row.anbiam_name;
	if (typeof row.association_content === 'string') return row.association_content;
	if (typeof row.person_name === 'string') return row.person_name;
	if (typeof row.worker_name === 'string') return row.worker_name;
	if (typeof row.property_name === 'string') return row.property_name;
	if (typeof row.village_name === 'string') return row.village_name;
	if (typeof row.thing_name === 'string') return row.thing_name;
	if (typeof row.sub_station_name === 'string') return row.sub_station_name;
	if (typeof row.name === 'string') return row.name;
	if (typeof row.priest_name === 'string') return row.priest_name;
	if (typeof row.property_name === 'string') return row.property_name;
	if (typeof row.chronicles_event === 'string') return row.chronicles_event;
	if (typeof row.memberName === 'string') return row.memberName;
	if (typeof row.userName === 'string') return row.userName;
	if (typeof row.noviciateName === 'string') return row.noviciateName;
	if (typeof row.nameOfThePriests === 'string') return row.nameOfThePriests;
	if (typeof row.nameOfAssociations === 'string') return row.nameOfAssociations;
	if (typeof row.institutionName === 'string') return row.institutionName;
	if (typeof row.villageName === 'string') return row.villageName;
	if (typeof row.parishName === 'string') return row.parishName;
	if (typeof row.vicariateName === 'string') return row.vicariateName;
	if (typeof row.dioceseName === 'string') return row.dioceseName;
	if (typeof row.religiousPersonName === 'string') return row.religiousPersonName;
	if (typeof row.familyName === 'string') return row.familyName;
	if (typeof row.workerName === 'string') return row.workerName;

	return '';
};

export { extractUserName };
