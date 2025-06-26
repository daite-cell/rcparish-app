export const formatPathToTitle = (url: string, options?: { separator?: string; defaultTitle?: string }): string => {
	const { separator = ' - ', defaultTitle = 'Home' } = options || {};

	if (!url || typeof url !== 'string') return defaultTitle;

	const parts = url.split('/').filter(Boolean);

	if (parts.length === 0) return defaultTitle;

	const formatPart = (part: string): string => {
		return part
			.replace(/[^a-zA-Z0-9_-]/g, '')
			.split(/[_-]/)
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
			.join(' ');
	};

	const main = formatPart(parts[0]);
	const sub = parts[1] ? formatPart(parts[1]) : null;

	return sub ? `${main}${separator}${sub}` : main;
};
