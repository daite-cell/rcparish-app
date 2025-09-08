import get_school_list from '../data/get_school_list.json';
import get_convert_list from '../data/get_convent_list.json';
import get_vocational_list from '../data/get_vocational_list.json';

const useHousesDataMap = (): Record<string, object[]> => ({
	institutions: get_school_list.school_list,
	vocational_institutions: get_vocational_list.vocational_list,
	communities: get_convert_list.convent_list,
});

export default useHousesDataMap;
