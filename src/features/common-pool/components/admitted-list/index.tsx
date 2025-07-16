import { DynamicDataTable } from '@/components';
import { useCommonPoolFamilyAdmittedListColumns, useCommonPoolMemberAdmittedMemberColumns } from '../../columns';

const AdmittedList = () => {
	return (
		<>
			<DynamicDataTable
				data={[]}
				customColumns={useCommonPoolFamilyAdmittedListColumns()}
				title={'Re-Admitted Family List'}
				enableExport={false}
				isDynamic={true}
			/>
			<DynamicDataTable
				data={[]}
				enableExport={false}
				customColumns={useCommonPoolMemberAdmittedMemberColumns()}
				isDynamic={false}
				title={'Re-Admitted Member List'}
			/>
		</>
	);
};

export default AdmittedList;
