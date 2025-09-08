import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SingleSelectDropdown, FormButton, CustomFormInput, ControlledDateInputField } from '@/components';
import { positionsOptions, subStationOptions } from '@/forms-options-data';
import { anbiamsInchargeSchema, type AnbiamInchargeType } from '../../validation';

const AnbiamInchargeForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<AnbiamInchargeType>({
		resolver: zodResolver(anbiamsInchargeSchema),
		defaultValues: {},
	});

	const onSubmit = (data: AnbiamInchargeType) => {
		console.warn('Submitted Anbiam Incharge Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Sub-Station"
						name="subStationName"
						error={errors.subStationName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Select the Anbiam"
						options={[]}
						placeholder="Select Anbiam"
						name="selectedAnbiam"
						error={errors.selectedAnbiam?.message}
					/>
					<CustomFormInput
						control={control}
						name="shortForm"
						label="Short Form"
						error={errors.shortForm?.message}
						placeholder="Enter Short Form"
					/>
					<ControlledDateInputField
						label="General Election Conducted On"
						name="electionConductedOn"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.electionConductedOn?.message}
						type="date"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
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
						options={[
							{ label: 'Regular', value: 'regular' },
							{ label: 'Intermediate', value: 'intermediate' },
						]}
						error={errors.electedStatus?.message}
					/>
					<CustomFormInput
						control={control}
						name="presidentName"
						label="Name of President for Anbiam"
						error={errors.presidentName?.message}
						placeholder="Enter President's Name"
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber1"
						label="Mobile Number - 1"
						error={errors.mobileNumber1?.message}
						placeholder="Enter Mobile Number 1"
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber2"
						label="Mobile Number - 2 (optional)"
						error={errors.mobileNumber2?.message}
						placeholder="Enter Mobile Number 2"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Elected Date"
						name="electedDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.electedDate?.message}
						type="date"
					/>
					<ControlledDateInputField
						label="Period End On"
						name="periodEndOn"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.periodEndOn?.message}
						type="date"
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default AnbiamInchargeForm;
