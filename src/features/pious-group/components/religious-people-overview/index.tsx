import { AdminDefaultImage, DisplayUserName } from '@/components';
import DisplayInfoRowContainer from '@/components/display-info-rows-container';
import { MemberOverviewLayout } from '@/layouts';

interface ReligiousPeopleOverviewProps {
	data: {
		id: number;
		name: string;
		person_id: string;
		gender: string;
		position: string;
		institution: string;
		in_charge_for: string;
		phone_number: string;
	};
}

const ReligiousPeopleOverview = ({ data }: ReligiousPeopleOverviewProps) => {
	const { id, name, person_id, gender, position, ...remainingInfo } = data;
	const personal_details = { person_id, gender, position };

	return (
		<MemberOverviewLayout>
			<div key={id} className="flex flex-col gap-6 p-6 border-b border-gray-300 md:flex-row">
				<div className="flex items-start justify-center flex-1">
					<AdminDefaultImage height={200} width={200} />
				</div>
				<div className="flex-[2] ">
					<DisplayUserName userName={name} />
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div>
							<DisplayInfoRowContainer data={personal_details} />
						</div>
						<div>
							<DisplayInfoRowContainer data={remainingInfo} />
						</div>
					</div>
				</div>
			</div>
		</MemberOverviewLayout>
	);
};

export default ReligiousPeopleOverview;
