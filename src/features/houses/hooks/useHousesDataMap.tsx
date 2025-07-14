import { congregation_institution_dummy_data, convent_details_dummy_data } from '../data';

const useHousesDataMap = (): Record<string, object[]> => ({
	institutions: congregation_institution_dummy_data,
	vocational_institutions: [],
	communities: convent_details_dummy_data,
});

export default useHousesDataMap;
