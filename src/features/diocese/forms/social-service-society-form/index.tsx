import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledFileUpload,
	ControlledDateInputField,
} from '@/components';
import { statusOptions } from '@/forms-options-data';
import { socialServiceSocietyTypeSchema, type SocialServiceSocietyType } from '../../validations';

const SocialServiceSocietyForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SocialServiceSocietyType>({
		resolver: zodResolver(socialServiceSocietyTypeSchema),
		defaultValues: {},
	});

	const onSubmit = (data: SocialServiceSocietyType) => {
		console.warn('Submitted Social Service Society Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="society"
						label="Select the SSS"
						placeholder="Choose SSS"
						options={[
							{ label: 'VSSS', value: 'vsss' },
							{ label: 'TVMSSS', value: 'tvmsss' },
						]}
						error={errors.society?.message}
					/>

					<SingleSelectDropdown
						control={control}
						name="category"
						label="Category From"
						placeholder="Choose Category"
						options={[
							{ label: 'Social Worker', value: 'social_worker' },
							{ label: 'Member', value: 'member' },
						]}
						error={errors.category?.message}
					/>

					<CustomFormInput
						control={control}
						name="personName"
						label="Name of the Person"
						placeholder="Enter the Person's Name"
						error={errors.personName?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="status"
						label="Select Status"
						placeholder="Choose Status"
						options={statusOptions}
						error={errors.status?.message}
					/>

					<ControlledDateInputField
						label="From the Year"
						name="electionConductedOn"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.electionConductedOn?.message}
					/>

					<CustomFormInput
						control={control}
						name="toYear"
						label="To the Year"
						placeholder="Enter the To Year"
						error={errors.toYear?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						label="Address"
						control={control}
						name="address"
						placeholder="Enter the Address"
						error={errors.address?.message}
					/>

					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile No"
						placeholder="Enter the Mobile Number"
						error={errors.mobileNumber?.message}
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

export default SocialServiceSocietyForm;
