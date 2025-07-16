import { DynamicDataTable } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { usePiousGroupColumnsMap, usePiousGroupDataMap } from '../../hooks';

const RenderPiousGroupTables = () => {
	const type = useRouteName('type');
	const columnsMap = usePiousGroupColumnsMap();
	const dataMap = usePiousGroupDataMap();

	if (!type || !columnsMap[type] || !dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">No data available</h1>;
	}

	return <DynamicDataTable wrapText={false} data={dataMap[type]} customColumns={columnsMap[type]} />;
};

export default RenderPiousGroupTables;
