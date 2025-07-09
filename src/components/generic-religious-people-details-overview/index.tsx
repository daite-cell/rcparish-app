import { MemberOverviewLayout } from '@/layouts';
import AdminDefaultImage from '../admin-default-image';
import DisplayUserName from '../display-user-name';
import DisplayInfoRowContainer from '../display-info-rows-container';
import { useStore } from '@/store/store';
import type { ReligiousPersonProps } from '@/types';

const GenericReligiousPeopleDetailsOverview = () => {
	const selectRow = useStore((state) => state.selectRow) as ReligiousPersonProps;
	if (!selectRow) {
		return <div className="p-6 text-center">No data found</div>;
	}

	const sectionData = [
		{
			col: 1,
			sections: [{ data: { person_id: selectRow.personId, gender: selectRow.gender, position: selectRow.position } }],
		},
		{
			col: 2,
			sections: [
				{
					data: {
						'Institution_/_convent': selectRow.institution,
						in_charge_for: selectRow.inChargeFor,
						mobile_number: selectRow.contactMobileNumber || '',
					},
				},
			],
		},
	];

	return (
		<MemberOverviewLayout>
			<div className="flex flex-col gap-6 p-6 border-b border-gray-300 md:flex-row">
				<div className="flex items-start justify-center flex-1">
					<AdminDefaultImage height={200} width={200} />
				</div>
				<div className="flex-[2] ">
					<DisplayUserName userName={selectRow.religiousPersonName} />
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{sectionData.map((column, colIndex) => (
							<div key={colIndex}>
								{column.sections.map((section, i) => (
									<DisplayInfoRowContainer key={i} data={section.data} />
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</MemberOverviewLayout>
	);
};

export default GenericReligiousPeopleDetailsOverview;
