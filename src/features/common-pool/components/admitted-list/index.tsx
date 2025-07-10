import { DynamicDataTable } from '@/components';
import { admittedFamilyListData, admittedMemberListData } from '../../data';

const AdmittedList = () => {
	return (
		<>
			<DynamicDataTable
				data={admittedFamilyListData}
				isDynamic={false}
				enableDateSorting={false}
				enableLetterSorting={false}
				title={'Re-Admitted Family List'}
			/>
			<DynamicDataTable
				data={admittedMemberListData}
				isDynamic={false}
				enableDateSorting={false}
				enableLetterSorting={false}
				title={'Re-Admitted Member List'}
			/>
		</>
	);
};

export default AdmittedList;
