const extractUserName = (row: Record<string, unknown>): string => {
	if (!row) return '';
	if (typeof row.name === 'string') return row.name;
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
	if (typeof row.priestName === 'string') return row.priestName;
	if (typeof row.religiousPersonName === 'string') return row.religiousPersonName;

	return '';
};

export { extractUserName };
