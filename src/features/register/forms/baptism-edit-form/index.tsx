import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
	SingleSelectDropdown,
} from '@/components';
import { baptismEditSchema, type BaptismEditType } from '../../validations';
import { activenessOptions, genderOptions, subStationOptions } from '@/forms-options-data';

const BaptismEditForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BaptismEditType>({
		resolver: zodResolver(baptismEditSchema),
		defaultValues: {
			dateOfBirthStatus: 'unknown',
			baptismDateStatus: 'unknown',
		},
	});

	const onSubmit = (data: BaptismEditType) => {
		console.warn('Submitted Baptism Data:', data);
	};

	const baptismDateStatus = useWatch({ control, name: 'baptismDateStatus' });
	const dateOfBirthStatus = useWatch({ control, name: 'dateOfBirthStatus' });

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
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
						name="familyName"
						label="Select the Family Name"
						placeholder="Enter Family Name"
						error={errors.familyName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Main or Sub Station"
						name="subStationName"
						error={errors.subStationName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Anbiam"
						options={[]}
						placeholder="Select Anbiam"
						name="anbiam"
						error={errors.anbiam?.message}
					/>
					<CustomFormInput
						control={control}
						name="uniqueAnbiamFamilyNumber"
						label="Unique Anbiam Family Number"
						placeholder="Enter Unique Family Number"
						error={errors.uniqueAnbiamFamilyNumber?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Member Name"
						options={[]}
						placeholder="Select Member Name"
						name="memberName"
						error={errors.memberName?.message}
					/>
					<SingleSelectDropdown
						label="Gender"
						name="gender"
						control={control}
						options={genderOptions}
						placeholder="Select Gender"
						error={errors.gender?.message}
					/>
					<CustomFormInput
						control={control}
						name="fatherName"
						label="Father's Name"
						placeholder="Enter Father's Name"
						error={errors.fatherName?.message}
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
						name="godFatherName"
						label="God Father Name (optional)"
						placeholder="Enter God Father Name"
						error={errors.godFatherName?.message}
					/>
					<CustomFormInput
						control={control}
						name="godMotherName"
						label="God Mother Name (optional)"
						placeholder="Enter God Mother Name"
						error={errors.godMotherName?.message}
					/>
					<CustomFormInput
						control={control}
						name="nameInBaptismRegister"
						label="Name as in the Baptism Register"
						placeholder="Enter Name as per Register"
						error={errors.nameInBaptismRegister?.message}
					/>
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
							placeholder="Enter Remarks"
							error={errors.remarks?.message}
						/>
					)}
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						label="Baptism Date"
						name="baptismDateStatus"
						control={control}
						options={[
							{ label: 'Known', value: 'known' },
							{ label: 'Unknown', value: 'unknown' },
						]}
						error={errors.baptismDateStatus?.message}
					/>
					{baptismDateStatus === 'known' ? (
						<ControlledDateInputField
							label="Baptism Date"
							name="baptismDate"
							control={control}
							type="date"
							error={errors.baptismDate?.message}
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
						name="baptistAtChurch"
						label="Baptized at (Church Name)"
						placeholder="Enter Church Name"
						error={errors.baptistAtChurch?.message}
					/>
					<CustomFormInput
						control={control}
						name="minister"
						label="Minister"
						placeholder="Enter Minister's Name"
						error={errors.minister?.message}
					/>
					<CustomFormInput
						control={control}
						name="registrationNumber"
						label="Registration Number (as in Register)"
						placeholder="Enter Registration Number"
						error={errors.registrationNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="remarks"
						label="Remarks"
						placeholder="Enter Remarks"
						error={errors.remarks?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default BaptismEditForm;
