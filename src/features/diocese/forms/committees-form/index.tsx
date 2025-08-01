import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledFileUpload,
	ControlledDateInputField,
} from '@/components';
import { statusOptions, committeeOptions } from '@/forms-options-data';
import { committeeSchema, type CommitteeType } from '../../validations';

const CommitteesForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CommitteeType>({
		resolver: zodResolver(committeeSchema),
		defaultValues: {},
	});

	const onSubmit = (data: CommitteeType) => {
		console.warn('Submitted Commission Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="committee"
						label="Select Committee"
						placeholder="Choose Committee"
						options={committeeOptions}
						error={errors.committee?.message}
					/>

					<SingleSelectDropdown
						control={control}
						name="committeePosition"
						label="Select the Position"
						placeholder="Choose Position"
						options={[{ label: 'Finance Committee', value: 'finance_committee' }]}
						error={errors.committeePosition?.message}
					/>

					<SingleSelectDropdown
						control={control}
						name="position"
						label="Category From"
						placeholder="Choose Category"
						options={[
							{ label: 'Religious People', value: 'Religious People' },
							{ label: 'Lay People', value: 'Lay People' },
						]}
						error={errors.position?.message}
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

					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile No"
						placeholder="Enter the Mobile Number"
						error={errors.mobileNumber?.message}
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

export default CommitteesForm;
