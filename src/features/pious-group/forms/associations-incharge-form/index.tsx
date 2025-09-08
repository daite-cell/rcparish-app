import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SingleSelectDropdown, FormButton, CustomFormInput, ControlledDateInputField } from '@/components';
import { positionsOptions, subStationOptions } from '@/forms-options-data';
import { associationsInchargeSchema, type AssociationsInchargeType } from '../../validation';

const AssociationsInchargeForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<AssociationsInchargeType>({
		resolver: zodResolver(associationsInchargeSchema),
		defaultValues: {},
	});

	const onSubmit = (data: AssociationsInchargeType) => {
		console.warn('Submitted Association Incharge Data:', data);
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
						label="Select the Association"
						options={[]}
						placeholder="Select Association"
						name="selectedAnbiam"
						error={errors.selectedAnbiam?.message}
					/>
					<ControlledDateInputField
						label="Election Conducted On"
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
					<SingleSelectDropdown
						name="memberType"
						control={control}
						label="Select From"
						options={[
							{ label: 'Member of Parish', value: 'memberOfParish' },
							{ label: 'Member of Religious', value: 'memberOfReligious' },
						]}
						error={errors.memberType?.message}
					/>
					<SingleSelectDropdown
						name="presidentName"
						control={control}
						label="Name of President"
						options={[]}
						error={errors.presidentName?.message}
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile Number"
						error={errors.mobileNumber?.message}
						placeholder="Enter Mobile Number"
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

export default AssociationsInchargeForm;
