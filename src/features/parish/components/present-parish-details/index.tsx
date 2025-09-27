import { DynamicDataTable, GenericPeopleDetailsOverview } from '@/components';
import { TabsLayout } from '@/layouts';
import get_present_parish_priest from '../../data/get_present_parish_priest.json';
import { getPresentParishPriestSectionData } from '../../columns-section';
import type { PresentParishPriest, PriestServiceRecord } from '@/types';
import { getPriestServiceColumns } from '../../columns';

const PresentParishDetails = () => {
	const userName = (get_present_parish_priest as { name?: string })?.name || '';
	return (
		<TabsLayout tabs={[{ label: 'view' }]}>
			<GenericPeopleDetailsOverview
				userName={userName}
				sectionData={getPresentParishPriestSectionData(get_present_parish_priest.priest_list as PresentParishPriest)}
			/>
			<DynamicDataTable
				title="SERVICE RECORD"
				enableExport={false}
				enableSearch={false}
				data={get_present_parish_priest.service_record as PriestServiceRecord[]}
				customColumns={getPriestServiceColumns}
				enablePagination={false}
			/>
		</TabsLayout>
	);
};

export default PresentParishDetails;
