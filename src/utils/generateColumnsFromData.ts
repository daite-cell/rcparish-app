export const generateColumnsFromData = (data: Record<string, string>[]) => {
	if (!data || data.length === 0) return [];

	return Object.keys(data[0]).map((key) => ({
		header: key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()),
		accessorKey: key,
	}));
};
