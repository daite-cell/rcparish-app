import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledRadioGroup,
	ControlledFileUpload,
} from '@/components';
import { priestNunParishSchema, type priestNunParishType } from '../../validation';

const PriestNunParishForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<priestNunParishType>({
		resolver: zodResolver(priestNunParishSchema),
		defaultValues: {},
	});

	const onSubmit = (data: priestNunParishType) => {
		console.warn('Submitted Parish Person:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Member from Family / Others"
						options={[{ label: 'SD Convert', value: 'sd_convert' }]}
						name="institution"
						error={errors.institution?.message}
					/>
					<CustomFormInput
						control={control}
						name="personName"
						label="Name of the Person"
						error={errors.personName?.message}
						placeholder="Enter the Religious Person Name"
					/>
					<ControlledFileUpload name="image" control={control} label="Image" error={errors.image?.message} />

					<CustomFormInput
						control={control}
						name="fatherName"
						label="Father Name"
						error={errors.fatherName?.message}
						placeholder="Enter the Father Name"
					/>
					<CustomFormInput
						control={control}
						name="motherName"
						label="Mother Name"
						error={errors.motherName?.message}
						placeholder="Enter the Mother Name"
					/>
					<SingleSelectDropdown
						name="gender"
						control={control}
						label="Select the Gender"
						options={[
							{ label: 'Male', value: 'male' },
							{ label: 'Female', value: 'female' },
						]}
						error={errors.gender?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						name="dioceseOrCongregation"
						control={control}
						label="Diocese / Congregation"
						options={[
							{ label: 'Diocese', value: 'diocese' },
							{ label: 'Congregation', value: 'congregation' },
						]}
						error={errors.dioceseOrCongregation?.message}
					/>
					<CustomFormInput
						control={control}
						name="dioceseName"
						label="Name of the Diocese"
						error={errors.dioceseName?.message}
						placeholder="Enter the Name of the Diocese"
					/>
					<SingleSelectDropdown
						name="brotherhoodOrPriesthood"
						control={control}
						label="Brotherhood / Priesthood"
						options={[
							{ label: 'Brotherhood', value: 'brotherhood' },
							{ label: 'Priesthood', value: 'priesthood' },
						]}
						error={errors.brotherhoodOrPriesthood?.message}
					/>
					<CustomFormInput
						control={control}
						name="studying"
						label="Studying"
						error={errors.studying?.message}
						placeholder="Enter Current Study Details"
					/>
					<CustomFormInput
						control={control}
						name="place"
						label="Place"
						error={errors.place?.message}
						placeholder="Enter the Place"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile Number"
						error={errors.mobileNumber?.message}
						placeholder="Enter the Mobile Number"
					/>
					<CustomFormInput
						control={control}
						name="email"
						label="Email"
						error={errors.email?.message}
						placeholder="Enter Email Address"
					/>
					<CustomFormInput
						control={control}
						name="temporaryAddress"
						label="Temporary Address"
						type="textarea"
						error={errors.temporaryAddress?.message}
						placeholder="Enter the Temporary Address"
					/>
					<ControlledRadioGroup
						label="Permanent Address"
						name="permanentAddressStatus"
						control={control}
						options={[
							{ label: 'Same as Temporary Address', value: 'same_as_temporary' },
							{ label: 'Different Address', value: 'different' },
						]}
						error={errors.permanentAddressStatus?.message}
					/>
					<CustomFormInput
						control={control}
						name="permanentAddress"
						type="textarea"
						error={errors.permanentAddress?.message}
						placeholder="Enter the Permanent Address"
					/>
				</div>
			</div>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default PriestNunParishForm;
