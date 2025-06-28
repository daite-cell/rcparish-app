import { DisplayUserName, InfoRow } from '@/components';
import { member_dummy_data } from '../../data';
import { toTitleCaseFromSnake } from '@/utils/toTitleCaseFromSnake';
import { MemberOverviewLayout } from '@/layouts';
import InfoSectionRowHeading from '@/components/info-section-row-heading';

const ParishCouncilMemberOverview = () => {
	return (
		<MemberOverviewLayout heading="Pious Group - Religious People in Parish">
			<div className="p-6">
				<DisplayUserName userName={member_dummy_data?.user_name} />
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
					{Object.entries(member_dummy_data.council_details).map(([sectionKey, sectionData], index) => (
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

export default ParishCouncilMemberOverview;
