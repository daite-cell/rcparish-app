import { DisplayUserName, InfoRow } from '@/components';
import { toTitleCaseFromSnake } from '@/utils/toTitleCaseFromSnake';
import { MemberOverviewLayout } from '@/layouts';
import InfoSectionRowHeading from '@/components/info-section-row-heading';
import { useStore } from '@/store/store';
import type { ParishCouncilMemberDetailsProps } from '@/types';

const transformCouncilInfo = (selectRow: ParishCouncilMemberDetailsProps | null) => ({
	user_name: selectRow ? selectRow.nameOfRespectives : '',
	council_details: {
		parish_council: {
			main_station: selectRow ? selectRow.mainStation : '',
			general_election_conducted_on: selectRow ? selectRow.electedDate : '',
			periods_ends_on: selectRow ? selectRow.electedDate : '',
		},
		parish_council_member__: {
			position: selectRow ? selectRow.positionInDiscipline : '',
			elected_status: selectRow ? selectRow.electedStatus : '',
			elected_date: selectRow ? selectRow.electedDate : '',
		},
		parish_council_member_: {
			elected_from: selectRow ? selectRow.electedFrom : '',
			respective_name: selectRow ? selectRow.nameOfRespectives : '',
			member_position: selectRow ? selectRow.position : '',
			mobile_number: selectRow ? selectRow.mobile : '',
		},
	},
});

const GenericCouncilMemberDetails = () => {
	const selectRow = useStore((state) => state.selectRow) as ParishCouncilMemberDetailsProps;
	const councilInfo = transformCouncilInfo(selectRow);

	return (
		<MemberOverviewLayout heading="Pious Group - Religious People in Parish">
			<div className="p-6">
				<DisplayUserName userName={selectRow?.name} />
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
					{Object.entries(councilInfo.council_details).map(([sectionKey, sectionData], index) => (
						<div key={index}>
							<InfoSectionRowHeading className="uppercase" title={sectionKey} />
							{Object.entries(sectionData).map(([label, value]) => (
								<InfoRow
									key={label}
									label={label === 'main_station' ? 'Main-Station / Sub-Station' : toTitleCaseFromSnake(label)}
									value={value}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</MemberOverviewLayout>
	);
};

export default GenericCouncilMemberDetails;
