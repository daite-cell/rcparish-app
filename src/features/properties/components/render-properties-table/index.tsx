import { DynamicDataTable } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { usePropertiesColumnsMap, usePropertiesDataMap } from '../../hooks';

const RenderPrePropertiesTables = () => {
	const type = useRouteName('type');

	const columnsMap = usePropertiesColumnsMap();
	const dataMap = usePropertiesDataMap();

	if (!type || !columnsMap[type] || !dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">Table will be added.......</h1>;
	}

	return <DynamicDataTable wrapText={false} data={dataMap[type]} customColumns={columnsMap[type]} />;
};

export default RenderPrePropertiesTables;
