import { lazy, Suspense, useState } from 'react';
import { useStore } from '@/store/store';
import YearSelectionForm from '../year-selection-form';
import { MemberOverviewLayout } from '@/layouts';
import DisplayUserName from '../display-user-name';
import DisplayInfoRowContainer from '../display-info-rows-container';
import DynamicDataTable from '../dynamic-table';
import type { FamilyDataProps } from '@/types';
import { getFamilyMembersColumns, getRegisterDetailsTableColumns } from '@/features/pious-group/columns';
type GenericMemberOverviewProps = {
	userName?: string;
	heading?: string;
	sectionData: {
		col: number;
		sections: {
			heading: string;
			data: Record<string, string | number | null | undefined>;
		}[];
	}[];
};

const FamilyCard = lazy(() => import('../../features/pious-group/components/family-card'));

const GenericFamilesDetailsOverview = ({ sectionData, userName }: GenericMemberOverviewProps) => {
	const [yearType, setYearType] = useState<string>('current_year');
	const { routeParams } = useStore();

	const selectFamilyCardRow = useStore((state) => state.selectFamilyCardRow) as FamilyDataProps;

	return (
		<>
			<YearSelectionForm value={yearType} onChange={setYearType} />

			<MemberOverviewLayout>
				{selectFamilyCardRow ? (
					<Suspense fallback={<div>Loading...</div>}>
						<FamilyCard />
					</Suspense>
				) : (
					<div className="p-6">
						<DisplayUserName userName={userName || ''} />
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{sectionData.map((column, colIndex) => (
								<div key={colIndex}>
									{column.sections.map((section, i) => (
										<DisplayInfoRowContainer
											key={i}
											data={
												Object.fromEntries(
													Object.entries(section.data).map(([key, value]) => [key, value ?? ''])
												) as Record<string, string | number>
											}
											heading={section.heading}
										/>
									))}
								</div>
							))}
						</div>
						<DynamicDataTable
							title="Family Members"
							customColumns={getFamilyMembersColumns}
							data={[]}
							isDynamic={false}
							tableId="family-members"
							enablePagination={false}
							enableSearch={false}
						/>
						<DynamicDataTable
							title="REGISTER DETAILS"
							customColumns={getRegisterDetailsTableColumns}
							data={[]}
							isDynamic={false}
							tableId="register-details"
							enablePagination={false}
							enableSearch={false}
						/>
					</div>
				)}
				{routeParams && <FamilyCard />}
			</MemberOverviewLayout>
		</>
	);
};

export default GenericFamilesDetailsOverview;
