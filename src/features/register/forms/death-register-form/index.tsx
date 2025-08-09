import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
	SingleSelectDropdown,
} from '@/components';
import { activenessOptions } from '@/forms-options-data';
import { deathRegisterSchema, type DeathRegisterType } from '../../validations';

const DeathRegisterForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<DeathRegisterType>({
		resolver: zodResolver(deathRegisterSchema),
		defaultValues: {
			dateOfBirthStatus: 'unknown',
		},
	});

	const onSubmit = (data: DeathRegisterType) => {
		console.warn('Submitted Death Register Data:', data);
	};

	const dateOfBirthStatus = useWatch({ control, name: 'dateOfBirthStatus' });

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="eventNumber"
						label="Registration Number (as in Record)"
						error={errors.eventNumber?.message}
						placeholder="Enter Registration Number"
					/>
					<SingleSelectDropdown
						control={control}
						label="Activeness"
						options={activenessOptions}
						placeholder="Select Activeness"
						name="activeness"
						error={errors.activeness?.message}
					/>
					<CustomFormInput
						control={control}
						name="name"
						label="Name"
						error={errors.name?.message}
						placeholder="Enter Name"
					/>
					<CustomFormInput
						control={control}
						name="motherName"
						label="Mother's Name"
						placeholder="Enter Mother's Name"
						error={errors.motherName?.message}
					/>
					<CustomFormInput
						control={control}
						name="place"
						label="Place"
						placeholder="Enter Place"
						error={errors.place?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						label="Date of Birth"
						name="dateOfBirthStatus"
						control={control}
						options={[
							{ label: 'Known', value: 'known' },
							{ label: 'Unknown', value: 'unknown' },
						]}
						error={errors.dateOfBirthStatus?.message}
					/>
					{dateOfBirthStatus === 'known' ? (
						<ControlledDateInputField
							label="Date of Birth"
							name="dateOfBirth"
							control={control}
							type="date"
							error={errors.dateOfBirth?.message}
						/>
					) : (
						<CustomFormInput
							control={control}
							name="remarks"
							label="Remarks"
							placeholder="Enter Remarks"
							error={errors.remarks?.message}
						/>
					)}
					<CustomFormInput
						control={control}
						name="birthPlace"
						label="Birth Place"
						error={errors.birthPlace?.message}
						placeholder="Enter Birth Place"
					/>
					<ControlledDateInputField
						label="Died on"
						name="diedOn"
						control={control}
						type="date"
						error={errors.diedOn?.message}
					/>
					<CustomFormInput
						control={control}
						name="diedAt"
						label="Died at"
						error={errors.diedAt?.message}
						placeholder="Enter Place of Death"
					/>
					<ControlledDateInputField
						label="Date of Burial (optional)"
						name="dateOfBurial"
						control={control}
						type="date"
						error={errors.dateOfBurial?.message}
					/>
					<CustomFormInput
						control={control}
						name="buriedAt"
						label="Buried at cemetery (optional)"
						error={errors.buriedAt?.message}
						placeholder="Enter Burial Place"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="minister"
						label="Minister"
						placeholder="Enter Minister's Name"
						error={errors.minister?.message}
					/>
					<CustomFormInput
						control={control}
						name="finalRemarks"
						label="Remarks"
						placeholder="Enter Remarks"
						error={errors.finalRemarks?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default DeathRegisterForm;
