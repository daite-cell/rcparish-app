import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
} from '@/components';
import {
	activenessOptions,
	communityOptions,
	houseOwnershipOptions,
	livingStatusOptions,
	roofTypeOptions,
	settledAsOptions,
	subStationOptions,
} from '@/forms-options-data';
import { familesTypeSchema, type FamilesType } from '../../validation';
import { Label } from '@radix-ui/react-dropdown-menu';

const FamilesForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FamilesType>({
		resolver: zodResolver(familesTypeSchema),
		defaultValues: {
			marriageDateStatus: 'unknown',
			familyType: 'couple',
			permanentAddressStatus: 'same_as_temporary',
		},
	});

	const onSubmit = (data: FamilesType) => {
		console.warn('Submitted Families Data:', data);
	};

	const marriageStatus = useWatch({ control, name: 'marriageDateStatus' });

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Sub Station"
						options={subStationOptions}
						placeholder="Select Sub Station"
						name="subStationName"
						error={errors.subStationName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Anbiam"
						options={[]}
						placeholder="Select Anbiam"
						name="selectedAnbiam"
						error={errors.selectedAnbiam?.message}
					/>
					<CustomFormInput
						control={control}
						name="anbiamShortForm"
						label="Anbiam Short Form"
						placeholder="Enter Anbiam Short Form"
						error={errors.anbiamShortForm?.message}
					/>
					<CustomFormInput
						control={control}
						name="parishName"
						label="Father / Husband Name"
						placeholder="Enter Father / Husband Name"
						error={errors.parishName?.message}
					/>
					<CustomFormInput
						control={control}
						name="anbiamName"
						label="Mother / Wife Name"
						placeholder="Enter Mother / Wife Name"
						error={errors.anbiamName?.message}
					/>
					<ControlledRadioGroup
						label="Marriage Date Known?"
						name="marriageDateStatus"
						control={control}
						options={[
							{ label: 'Known', value: 'known' },
							{ label: 'Unknown', value: 'unknown' },
						]}
						error={errors.marriageDateStatus?.message}
					/>
					{marriageStatus === 'known' ? (
						<ControlledDateInputField
							label="Marriage Date"
							name="marriageDate"
							control={control}
							type="date"
							error={errors.marriageDate?.message}
						/>
					) : (
						<CustomFormInput
							control={control}
							name="oldFamilyNumber"
							label="Old Family Number"
							placeholder="Enter Old Family Number"
							error={errors.oldFamilyNumber?.message}
						/>
					)}
					<CustomFormInput
						control={control}
						name="familyName"
						label="Family Name"
						placeholder="Enter Family Name"
						error={errors.familyName?.message}
					/>
					<CustomFormInput
						control={control}
						name="headOfFamily"
						label="Head of the Family"
						placeholder="Enter Head of the Family Name"
						error={errors.headOfFamily?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						label="Family Type"
						name="familyType"
						control={control}
						options={[
							{ label: 'Couple', value: 'couple' },
							{ label: 'Single', value: 'single' },
						]}
						error={errors.familyType?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Social Status (Roof Type)"
						options={roofTypeOptions}
						placeholder="Select Roof Type"
						name="roofType"
						error={errors.roofType?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Community"
						options={communityOptions}
						placeholder="Select Community"
						name="community"
						error={errors.community?.message}
					/>
					<CustomFormInput
						control={control}
						name="subCaste"
						label="Sub Caste"
						placeholder="Enter Sub Caste"
						error={errors.subCaste?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="House Ownership"
						options={houseOwnershipOptions}
						placeholder="Select House Ownership"
						name="houseOwnership"
						error={errors.houseOwnership?.message}
					/>
					<CustomFormInput
						control={control}
						name="familyIncome"
						label="Monthly Family Income"
						placeholder="Enter Monthly Family Income"
						error={errors.familyIncome?.message}
					/>
					<ControlledDateInputField
						label="Subscription Start"
						name="subscriptionStart"
						control={control}
						type="date"
						error={errors.subscriptionStart?.message}
					/>
					<CustomFormInput
						control={control}
						name="subscriptionPeriod"
						label="Subscription Period (in Months)"
						placeholder="Enter Subscription Period"
						error={errors.subscriptionPeriod?.message}
					/>
					<ControlledDateInputField
						label="Subscription End"
						name="subscriptionEnd"
						control={control}
						type="date"
						error={errors.subscriptionEnd?.message}
					/>
					<CustomFormInput
						control={control}
						name="monthlySubscription"
						label="Monthly Subscription Amount"
						placeholder="Enter Monthly Subscription Amount"
						error={errors.monthlySubscription?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="cemeteryNumber"
						label="Cemetery Number"
						placeholder="Enter Cemetery Number"
						error={errors.cemeteryNumber?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Living Status"
						options={livingStatusOptions}
						placeholder="Select Living Status"
						name="livingStatus"
						error={errors.livingStatus?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Settled As"
						options={settledAsOptions}
						placeholder="Select Settled As"
						name="settledAs"
						error={errors.settledAs?.message}
					/>
					<ControlledRadioGroup
						label="Permanent Address"
						name="permanentAddressStatus"
						control={control}
						options={[
							{ label: 'Same as Temporary', value: 'same_as_temporary' },
							{ label: 'Different', value: 'different' },
						]}
						error={errors.permanentAddressStatus?.message}
					/>
					<CustomFormInput
						control={control}
						name="temporaryAddress"
						label="Temporary Address"
						placeholder="Enter Temporary Address"
						type="textarea"
						error={errors.temporaryAddress?.message}
					/>
					<Label className="text-[12px]">Family Communication Details</Label>
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile Number"
						placeholder="Enter Mobile Number"
						error={errors.mobileNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="email"
						label="Email (optional)"
						placeholder="Enter Email (optional)"
						error={errors.email?.message}
					/>
					<CustomFormInput
						control={control}
						name="remark"
						label="Remark"
						type="textarea"
						placeholder="Enter Remarks"
						error={errors.remark?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Activeness"
						options={activenessOptions}
						placeholder="Select Activeness"
						name="activeness"
						error={errors.activeness?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default FamilesForm;
