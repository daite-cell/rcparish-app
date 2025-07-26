import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledFileUpload,
	ControlledDateInputField,
} from '@/components';
import {
	commissionOptions,
	commissionPositionOptions,
	secretaryPositionOptions,
	statusOptions,
	categoryFromOptions,
} from '@/forms-options-data';
import { commissionsSchema, type CommissionsType } from '../../validations';

const CommissionsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CommissionsType>({
		resolver: zodResolver(commissionsSchema),
		defaultValues: {},
	});

	const onSubmit = (data: CommissionsType) => {
		console.warn('Submitted Commission Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="commission"
						label="Select the Commission's Category"
						placeholder="Select a Commission"
						options={commissionOptions}
						error={errors.commission?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="position"
						label="Select the Name of the Commission"
						placeholder="Select a Position"
						options={commissionPositionOptions}
						error={errors.position?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="select_position"
						label="Select the Position"
						placeholder="Select a Position"
						options={secretaryPositionOptions}
						error={errors.select_position?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="category_from"
						label="Selecting the Person From"
						placeholder="Select Category"
						options={categoryFromOptions}
						error={errors.category_from?.message}
					/>
					<CustomFormInput
						control={control}
						name="personName"
						label="Name of the Person"
						error={errors.personName?.message}
						placeholder="Enter the Person's Name"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="status"
						label="Select the Status"
						placeholder="Select Status"
						options={statusOptions}
						error={errors.status?.message}
					/>
					<ControlledDateInputField
						label="From the Year"
						name="electionConductedOn"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.electionConductedOn?.message}
						type="date"
					/>
					<CustomFormInput
						control={control}
						name="toYear"
						label="To the Year"
						error={errors.toYear?.message}
						placeholder="Enter the To Year"
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile No"
						error={errors.mobileNumber?.message}
						placeholder="Enter the Mobile Number"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						label="Address"
						control={control}
						name="address"
						type="textarea"
						placeholder="Enter the Address"
						error={errors.address?.message}
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

export default CommissionsForm;
