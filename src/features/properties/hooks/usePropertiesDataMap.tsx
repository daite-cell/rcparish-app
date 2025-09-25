import get_rent_details_list from '../data/get_rent_details_list.json';
import get_land_list from '../data/get_land_list.json';
import get_church_inventory_list from '../data/get_church_inventory_list.json';
import get_other_inventory_list from '../data/get_other_inventory_list.json';

const usePropertiesDataMap = (): Record<string, object[]> => ({
	rent_details: get_rent_details_list.rent_details_list,
	land_properties: get_land_list.land_list,
	cemetery: [],
	church_inventory: get_church_inventory_list.church_inventory_list,
	other_inventory: get_other_inventory_list.other_inventory_list,
});

export default usePropertiesDataMap;
