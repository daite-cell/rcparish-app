import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
	SingleSelectDropdown,
} from '@/components';
import { holyCommunionEditSchema, type HolyCommunionEditType } from '../../validations';
import { activenessOptions, genderOptions, subStationOptions } from '@/forms-options-data';

const HolyCommunionEditForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<HolyCommunionEditType>({
		resolver: zodResolver(holyCommunionEditSchema),
		defaultValues: {
			baptismDateStatus: 'unknown',
			holyCommunionStatus: 'unknown',
		},
	});

	const onSubmit = (data: HolyCommunionEditType) => {
		console.warn('Submitted Holy Communion Data:', data);
	};

	const baptismDateStatus = useWatch({ control, name: 'baptismDateStatus' });
	const holyCommunionStatus = useWatch({ control, name: 'holyCommunionStatus' });

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
						placeholder="Enter Select the Family Name"
						error={errors.familyName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Main-Station / Sub-Station"
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
						name="uniqueFamilyNumber"
						label="Unique Anbiam Family Number"
						placeholder="Enter Unique Anbiam Family Number"
						error={errors.uniqueFamilyNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="headName"
						label="Name of the Head"
						placeholder="Enter Name of the Head"
						error={errors.headName?.message}
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
						placeholder="Enter God Father Name (optional)"
						error={errors.godFatherName?.message}
					/>
					<CustomFormInput
						control={control}
						name="godMotherName"
						label="God Mother Name (optional)"
						placeholder="Enter God Mother Name (optional)"
						error={errors.godMotherName?.message}
					/>
					<CustomFormInput
						control={control}
						name="nameInBaptismRegister"
						label="Name as in the Baptism Register"
						placeholder="Enter Name as in the Baptism Register"
						error={errors.nameInBaptismRegister?.message}
					/>

					<ControlledRadioGroup
						label="Date of Baptism"
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
							name="baptismDate"
							control={control}
							type="date"
							error={errors.baptismDate?.message}
						/>
					) : (
						<CustomFormInput
							control={control}
							name="baptismDateStatusRemarks"
							placeholder="Enter Date of Baptism Remarks"
							error={errors.baptismDateStatusRemarks?.message}
						/>
					)}
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						label="Holy Communion Status"
						name="holyCommunionStatus"
						control={control}
						options={[
							{ label: 'Received', value: 'received' },
							{ label: 'Not Yet', value: 'not_yet' },
							{ label: 'Unknown', value: 'unknown' },
						]}
						error={errors.holyCommunionStatus?.message}
					/>
					{holyCommunionStatus === 'received' ? (
						<ControlledDateInputField
							name="holyCommunionDate"
							control={control}
							type="date"
							error={errors.holyCommunionDate?.message}
						/>
					) : (
						<CustomFormInput
							control={control}
							name="holyCommunionStatusRemarks"
							placeholder="Enter Holy Communion Status Remarks"
							error={errors.holyCommunionStatusRemarks?.message}
						/>
					)}
					<CustomFormInput
						control={control}
						name="baptistAtChurch"
						label="FHC at (Church Name)"
						placeholder="Enter FHC at (Church Name)"
						error={errors.baptistAtChurch?.message}
					/>
					<CustomFormInput
						control={control}
						name="minister"
						label="FHC in (Parish)"
						placeholder="Enter FHC in (Parish)"
						error={errors.minister?.message}
					/>
					<CustomFormInput
						control={control}
						name="registrationNumber"
						label="Registration Number (as in Register Record)"
						placeholder="Enter Registration Number (as in Register Record)"
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

export default HolyCommunionEditForm;
