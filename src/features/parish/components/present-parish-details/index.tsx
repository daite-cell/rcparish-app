import { DynamicDataTable, GenericPeopleDetailsOverview } from '@/components';
import { TabsLayout } from '@/layouts';
import get_present_parish_priest from '../../data/get_present_parish_priest.json';
import { getPresentParishPriestSectionData } from '../../columns-section';
import type { PresentParishPriest, PriestServiceRecord } from '@/types';
import { getPriestServiceColumns } from '../../columns';

const PresentParishDetails = () => {
	const presentParishPriest = {
		...(get_present_parish_priest.priest_list as Partial<PresentParishPriest>),
		in_charge_taken_from: get_present_parish_priest.in_charge_from ?? '',
	} as PresentParishPriest;

	return (
		<TabsLayout tabs={[{ label: 'view' }]}>
			<GenericPeopleDetailsOverview
				userName={(presentParishPriest.priest_name as string) ?? ''}
				sectionData={getPresentParishPriestSectionData(presentParishPriest)}
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
