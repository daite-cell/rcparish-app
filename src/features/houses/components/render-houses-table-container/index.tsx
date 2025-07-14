import { DynamicDataTable } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { useHousesDataMap, useHousesGroupColumnsMap } from '../../hooks';

const RenderHousesTableContainer = () => {
	const type = useRouteName('type');
	const columnsMap = useHousesGroupColumnsMap();

	const dataMap = useHousesDataMap();

	if (!type || !columnsMap[type] || !dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">Table will be added.......</h1>;
	}
	return <DynamicDataTable wrapText={false} data={dataMap[type]} customColumns={columnsMap[type]} />;
};

export default RenderHousesTableContainer;
