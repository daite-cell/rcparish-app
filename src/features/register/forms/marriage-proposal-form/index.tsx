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
	genderOptions,
} from '@/forms-options-data';

import { Label } from '@/components/ui/label';
import { marriageProposalSchema, type MarriageProposalType } from '../../validations';

const MarriageProposalForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<MarriageProposalType>({
		resolver: zodResolver(marriageProposalSchema),
		defaultValues: {
			haveReason: 'no',
		},
	});

	const onSubmit = (data: MarriageProposalType) => {
		console.warn('Submitted Marriage Proposal Data:', data);
	};

	const haveReason = useWatch({ control, name: 'haveReason' });

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
					<Label className="text-extrabold text-xs">Details of Bridegroom / Bride</Label>
					<SingleSelectDropdown
						label="Gender"
						name="gender"
						control={control}
						options={genderOptions}
						placeholder="Select Gender"
						error={errors.gender?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Marital Status"
						options={groomMaritalStatusOptions}
						placeholder="Select Marital Status"
						name="maritalStatus"
						error={errors.maritalStatus?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Marriage Preparation Class"
						options={groomMarriagePreparationOptions}
						placeholder="Select Class Attended"
						name="marriagePreparation"
						error={errors.marriagePreparation?.message}
					/>
					<ControlledDateInputField
						label="Attended Date"
						name="attendedDate"
						control={control}
						type="date"
						error={errors.attendedDate?.message}
					/>
					<ControlledDateInputField
						name="dateOfBirth"
						label="Date of Birth"
						control={control}
						type="date"
						error={errors.dateOfBirth?.message}
					/>
					<CustomFormInput
						control={control}
						name="parishAttended"
						label="In Which Parish Marriage Preparation Class Attended"
						placeholder="Enter Parish Name"
						error={errors.parishAttended?.message}
					/>
					<CustomFormInput
						control={control}
						name="dioceseAttended"
						label="In Which Diocese Marriage Preparation Class Attended"
						placeholder="Enter Diocese Name"
						error={errors.dioceseAttended?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="fatherName"
						label="Enter Father Name of Bridegroom / Bride"
						placeholder="Enter Father's Name"
						error={errors.fatherName?.message}
					/>
					<CustomFormInput
						control={control}
						name="motherName"
						label="Enter Mother Name of Bridegroom / Bride"
						placeholder="Enter Mother's Name"
						error={errors.motherName?.message}
					/>
					<CustomFormInput
						control={control}
						name="parishName"
						label="Parish Name"
						placeholder="Enter Parish Name"
						error={errors.parishName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Religion of Bridegroom / Bride"
						options={[
							{ label: 'RC', value: 'rc' },
							{ label: 'Converted', value: 'converted' },
						]}
						placeholder="Select Religion"
						name="religion"
						error={errors.religion?.message}
					/>
					<ControlledRadioGroup
						label="Whether Received Necessary Sacraments"
						name="haveReason"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.haveReason?.message}
					/>
					{haveReason === 'no' && (
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
						name="registrationNumber"
						label="Registration Number (in Register Record Note)"
						placeholder="Enter Registration Number"
						error={errors.registrationNumber?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default MarriageProposalForm;
