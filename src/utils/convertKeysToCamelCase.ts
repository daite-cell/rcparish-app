const toCamelCase = (str: string): string => str.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());

export const convertKeysToCamelCase = <T>(input: T): T => {
	if (Array.isArray(input)) {
		return input.map((item) => convertKeysToCamelCase(item)) as T;
	}

	if (input !== null && typeof input === 'object') {
		const newObj: Record<string, unknown> = {};
		for (const key in input) {
			if (Object.prototype.hasOwnProperty.call(input, key)) {
				const camelKey = toCamelCase(key);
				const value = (input as Record<string, unknown>)[key];
				newObj[camelKey] = convertKeysToCamelCase(value);
			}
		}
		return newObj as T;
	}

	return input;
};
