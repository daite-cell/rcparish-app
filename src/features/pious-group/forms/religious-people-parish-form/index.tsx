import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SingleSelectDropdown, FormButton, CustomFormInput, ControlledFileUpload } from '@/components';
import { inchargeOptions, positionRoleOptions } from '@/forms-options-data';
import { religiousPeopleParishSchema, type ReligiousPeopleParishType } from '../../validation';

const ReligiousParishCouncilMembersForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ReligiousPeopleParishType>({
		resolver: zodResolver(religiousPeopleParishSchema),
		defaultValues: {},
	});

	const onSubmit = (data: ReligiousPeopleParishType) => {
		console.warn('Submitted Rent Type:', data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Institution/Convent"
						options={[{ label: 'SD Convert', value: 'sd_convert' }]}
						name="institution"
						error={errors.institution?.message}
					/>
					<CustomFormInput
						control={control}
						name="personName"
						label="Name of the Religious Person"
						error={errors.personName?.message}
						placeholder="Enter the Religious Person Name"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						name="position"
						control={control}
						label="Select the Gender"
						options={[
							{ label: 'Male', value: 'male' },
							{ label: 'Female', value: 'female' },
						]}
						error={errors.position?.message}
					/>
					<SingleSelectDropdown
						name="position"
						control={control}
						label="Position"
						options={positionRoleOptions}
						error={errors.position?.message}
					/>

					<SingleSelectDropdown
						control={control}
						label="Incharge For"
						options={inchargeOptions}
						name="incharge"
						error={errors.incharge?.message}
					/>
				</div>
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile Number (Optional)"
						error={errors.mobileNumber?.message}
						placeholder="Enter the Mobile Number"
					/>
					<ControlledFileUpload name="image" control={control} label="Image" error={errors.image?.message} />
				</div>
			</div>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default ReligiousParishCouncilMembersForm;
