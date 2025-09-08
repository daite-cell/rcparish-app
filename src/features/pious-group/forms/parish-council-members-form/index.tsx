import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	TableHeading,
} from '@/components';

import { electedStatusOptions, positionsOptions, subStationOptions } from '@/forms-options-data';
import { parishCouncilMemberSchema, type ParishCouncilMemberFormType } from '../../validation';

const ParishCouncilMembersForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ParishCouncilMemberFormType>({
		resolver: zodResolver(parishCouncilMemberSchema),
		defaultValues: {},
	});

	const onSubmit = (data: ParishCouncilMemberFormType) => {
		console.warn('Submitted Rent Type:', data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<TableHeading text="PARTICULARS ABOUT PARISH COUNCIL" className="!ml-0 mb-5 underline" />
					<SingleSelectDropdown
						control={control}
						label="Main-Station"
						options={subStationOptions}
						placeholder="Select Sub-Station"
						name="mainStationName"
						disabled={true}
						error={errors.subStationName?.message}
					/>
					<ControlledDateInputField
						label="General Election Conducted On"
						name="electionConductedOn"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.electionConductedOn?.message}
						type="date"
						disabled={true}
					/>
					<ControlledDateInputField
						label="Period End on"
						name="periodEndOn"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.periodEndOn?.message}
						type="date"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<TableHeading text="PARTICULARS ABOUT PARISH COUNCIL MEMBERS" className="!ml-0 mb-5 underline" />
					<SingleSelectDropdown
						name="position"
						control={control}
						label="Position"
						options={positionsOptions}
						error={errors.position?.message}
					/>
					<SingleSelectDropdown
						name="electedStatus"
						control={control}
						label="Elected Status"
						options={electedStatusOptions}
						error={errors.electedStatus?.message}
					/>
					<ControlledDateInputField
						label="Elected Date"
						name="electedDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.electedDate?.message}
						type="date"
						disabled={true}
					/>
					<SingleSelectDropdown
						control={control}
						label="Select the Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Sub-Station"
						name="memberSubStationName"
						error={errors.subStationName?.message}
					/>
					<ControlledDateInputField
						label="Elected From"
						name="electedForm"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.electedForm?.message}
						type="date"
						disabled={true}
					/>
					<SingleSelectDropdown
						control={control}
						label="Select the Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Sub-Station"
						name="councilSubStationName"
						error={errors.subStationName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Select the Anbiam"
						options={[]}
						placeholder="Select Sub-Station"
						name="selectAnbiam"
						error={errors.selectAnbiam?.message}
					/>
				</div>
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<TableHeading text="PARTICULARS ABOUT PARISH COUNCIL MEMBERS" className="!ml-0 mb-5 underline" />
					<SingleSelectDropdown
						control={control}
						label="Name of the Person"
						options={[]}
						placeholder="Select any one"
						name="personName"
						error={errors.personName?.message}
					/>
					<CustomFormInput
						control={control}
						name="anbiamPostion"
						label="Position in Anbiam"
						error={errors.anbiamPostion?.message}
						placeholder=""
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile Number"
						error={errors.mobileNumber?.message}
						placeholder=""
					/>
				</div>
			</div>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default ParishCouncilMembersForm;
