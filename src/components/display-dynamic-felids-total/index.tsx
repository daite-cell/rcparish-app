import { memo } from 'react';

const DisplayDynamicFieldsTotal = memo(({ total }: { total: number }) => {
	return <h1 className="font-bold text-end">Total : Rs {total.toLocaleString()}</h1>;
});

export default DisplayDynamicFieldsTotal;
