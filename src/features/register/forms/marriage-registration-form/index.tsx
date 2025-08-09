import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
	SingleSelectDropdown,
} from '@/components';
import {
	activenessOptions,
	familyNameOptions,
	groomMaritalStatusOptions,
	groomMarriagePreparationOptions,
	subStationOptions,
	marriageTypeOptions,
} from '@/forms-options-data';

import { Label } from '@/components/ui/label';
import { marriageRegistrationSchema, type MarriageRegistrationType } from '../../validations';

const MarriageRegistrationForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<MarriageRegistrationType>({
		resolver: zodResolver(marriageRegistrationSchema),
		defaultValues: {
			haveSacraments: 'no',
		},
	});

	const onSubmit = (data: MarriageRegistrationType) => {
		console.warn('Submitted Marriage Proposal Data:', data);
	};

	const haveSacraments = useWatch({ control, name: 'haveSacraments' });

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				{/* Section 1 */}
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Activeness"
						options={activenessOptions}
						placeholder="Select Activeness"
						name="activeness"
						error={errors.activeness?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Select the Family Name"
						options={familyNameOptions}
						placeholder="Select Family Name"
						name="familyName"
						error={errors.familyName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Main or Sub Station"
						name="stationType"
						error={errors.stationType?.message}
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
						placeholder="Enter Unique Family Number"
						error={errors.uniqueFamilyNumber?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Banns / Rectification"
						options={marriageTypeOptions}
						placeholder="Select Banns Type"
						name="bannsType"
						error={errors.bannsType?.message}
					/>
					<ControlledDateInputField
						label="Marriage Date"
						name="marriageDate"
						control={control}
						type="date"
						error={errors.marriageDate?.message}
					/>
					<CustomFormInput
						control={control}
						name="churchName"
						label="Marriage at (Church Name)"
						placeholder="Enter Church Name"
						error={errors.churchName?.message}
					/>
					<CustomFormInput
						control={control}
						name="marriageParish"
						label="Marriage in (Parish)"
						placeholder="Enter Parish Name"
						error={errors.marriageParish?.message}
					/>
					<CustomFormInput
						control={control}
						name="minister"
						label="Minister"
						placeholder="Enter Minister Name"
						error={errors.minister?.message}
					/>
					<Label className="text-extrabold text-xs">Announcements Dates</Label>
					<ControlledDateInputField
						label="1st Announcement Date"
						name="announcement1"
						control={control}
						type="date"
						error={errors.announcement1?.message}
					/>
					<ControlledDateInputField
						label="2nd Announcement Date"
						name="announcement2"
						control={control}
						type="date"
						error={errors.announcement2?.message}
					/>
					<ControlledDateInputField
						label="3rd Announcement Date"
						name="announcement3"
						control={control}
						type="date"
						error={errors.announcement3?.message}
					/>
				</div>

				{/* Section 2 - Groom */}
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<Label className="text-extrabold text-xs">Bridegroom/Husband Details</Label>
					<CustomFormInput
						control={control}
						name="groomName"
						label="Bridegroom Name"
						placeholder="Enter Groom's Name"
						error={errors.groomName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Marital Status"
						options={groomMaritalStatusOptions}
						placeholder="Select Marital Status"
						name="groomMaritalStatus"
						error={errors.groomMaritalStatus?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Marriage Preparation Class"
						options={groomMarriagePreparationOptions}
						placeholder="Select Class Attended"
						name="groomPreparationClass"
						error={errors.groomPreparationClass?.message}
					/>
					<ControlledDateInputField
						label="Attended Date"
						name="groomClassDate"
						control={control}
						type="date"
						error={errors.groomClassDate?.message}
					/>
					<CustomFormInput
						control={control}
						name="groomParish"
						label="Which Parish"
						placeholder="Enter Parish Name"
						error={errors.groomParish?.message}
					/>
					<CustomFormInput
						control={control}
						name="groomDiocese"
						label="Which Diocese"
						placeholder="Enter Diocese"
						error={errors.groomDiocese?.message}
					/>
					<CustomFormInput
						control={control}
						name="groomFather"
						label="Bridegroom Parent's Name"
						placeholder="Enter Father's Name"
						error={errors.groomFather?.message}
					/>
					<CustomFormInput
						control={control}
						name="groomMother"
						label="Bridegroom Mother's Name"
						placeholder="Enter Mother's Name"
						error={errors.groomMother?.message}
					/>
					<CustomFormInput
						control={control}
						name="groomParishName"
						label="Parish Name of Bridegroom"
						placeholder="Enter Parish Name"
						error={errors.groomParishName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Religion of Bridegroom"
						options={[
							{ label: 'RC', value: 'rc' },
							{ label: 'Converted', value: 'converted' },
						]}
						placeholder="Select Religion"
						name="groomReligion"
						error={errors.groomReligion?.message}
					/>
					<ControlledRadioGroup
						label="Whether Received Necessary Sacraments"
						name="haveSacraments"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.haveSacraments?.message}
					/>
					{haveSacraments === 'no' && (
						<CustomFormInput
							control={control}
							name="sacramentReason"
							label="Give the Reasons"
							placeholder="Enter Reason"
							error={errors.sacramentReason?.message}
						/>
					)}
					<CustomFormInput
						control={control}
						name="groomWitness"
						label="Witness for Bridegroom"
						placeholder="Enter Witness Name"
						error={errors.groomWitness?.message}
					/>
					<CustomFormInput
						control={control}
						name="groomAddress"
						label="Address of Bridegroom"
						placeholder="Enter Address"
						error={errors.groomAddress?.message}
						type="textarea"
					/>
				</div>

				{/* Section 3 - Bride */}
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<Label className="text-extrabold text-xs">Bride/Wife Details</Label>
					<CustomFormInput
						control={control}
						name="brideName"
						label="Bride Name"
						placeholder="Enter Bride's Name"
						error={errors.brideName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Marital Status"
						options={groomMaritalStatusOptions}
						placeholder="Select Marital Status"
						name="brideMaritalStatus"
						error={errors.brideMaritalStatus?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Marriage Preparation Class"
						options={groomMarriagePreparationOptions}
						placeholder="Select Class Attended"
						name="bridePreparationClass"
						error={errors.bridePreparationClass?.message}
					/>
					<ControlledDateInputField
						label="Attended Date"
						name="brideClassDate"
						control={control}
						type="date"
						error={errors.brideClassDate?.message}
					/>
					<CustomFormInput
						control={control}
						name="brideParish"
						label="Which Parish"
						placeholder="Enter Parish Name"
						error={errors.brideParish?.message}
					/>
					<CustomFormInput
						control={control}
						name="brideDiocese"
						label="Which Diocese"
						placeholder="Enter Diocese"
						error={errors.brideDiocese?.message}
					/>
					<CustomFormInput
						control={control}
						name="brideFather"
						label="Bride Parent's Name"
						placeholder="Enter Father's Name"
						error={errors.brideFather?.message}
					/>
					<CustomFormInput
						control={control}
						name="brideMother"
						label="Bride's Mother Name"
						placeholder="Enter Mother's Name"
						error={errors.brideMother?.message}
					/>
					<CustomFormInput
						control={control}
						name="brideParishName"
						label="Parish Name of Bride"
						placeholder="Enter Parish Name"
						error={errors.brideParishName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Religion of Bride"
						options={[
							{ label: 'RC', value: 'rc' },
							{ label: 'Converted', value: 'converted' },
						]}
						placeholder="Select Religion"
						name="brideReligion"
						error={errors.brideReligion?.message}
					/>
					<CustomFormInput
						control={control}
						name="brideWitness"
						label="Witness for Bride"
						placeholder="Enter Witness Name"
						error={errors.brideWitness?.message}
					/>
					<CustomFormInput
						control={control}
						name="brideAddress"
						label="Address of Bride"
						placeholder="Enter Address"
						error={errors.brideAddress?.message}
						type="textarea"
					/>
					<CustomFormInput
						control={control}
						name="registerNumber"
						label="Registration Number (in Register Record Note)"
						placeholder="Enter Registration Number"
						error={errors.registerNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="remarks"
						label="Remarks"
						placeholder="Enter Remarks"
						error={errors.remarks?.message}
						type="textarea"
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default MarriageRegistrationForm;
