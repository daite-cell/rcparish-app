import { useForm } from 'react-hook-form';
import { communitiesFormSchema, type CommunitiesFormData } from '../../validations';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	CustomFormInput,
	FormButton,
	SingleSelectDropdown,
	ControlledRadioGroup,
	ControlledDateInputField,
} from '@/components';
import {
	abbreviationOptions,
	congregationOptions,
	conventTypeOptions,
	landOwnershipOptions,
	subStationOptions,
} from '../../../../forms-options-data';

const CommunitiesForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CommunitiesFormData>({
		resolver: zodResolver(communitiesFormSchema),
		defaultValues: {
			belongsTo: 'congregation',
		},
	});

	const onSubmit = (data: CommunitiesFormData) => {
		alert(JSON.stringify(data, null, 2));
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Select the Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Sub-Station"
						name="subStationName"
						error={errors.subStationName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Type of Convent"
						options={conventTypeOptions}
						placeholder="Select Sub-Station"
						name="conventType"
						error={errors.conventType?.message}
					/>
					<CustomFormInput
						control={control}
						name="name"
						label="Name"
						placeholder="Enter the Name"
						error={errors.name?.message}
					/>
					<CustomFormInput
						control={control}
						name="place"
						label="Name of the Place"
						placeholder="Enter the place name"
						error={errors.place?.message}
					/>
					<ControlledRadioGroup
						name="belongsTo"
						control={control}
						options={[
							{ label: 'Diocese', value: 'diocese' },
							{ label: 'Congregation', value: 'congregation' },
						]}
						label="Belongs to"
						error={errors.belongsTo?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						name="congregation"
						control={control}
						label="Congregation"
						options={congregationOptions}
						placeholder="Choose congregation"
						error={errors.congregation?.message}
					/>
					<SingleSelectDropdown
						name="abbreviation"
						control={control}
						label="Abbreviation"
						options={abbreviationOptions}
						placeholder="Choose abbreviation"
						error={errors.congregation?.message}
					/>
					<ControlledDateInputField
						control={control}
						name="establishedDate"
						label="Established on (optional)"
						error={errors.establishedDate?.message}
					/>
					<CustomFormInput
						label="Established by (optional)"
						name="establishedBy"
						control={control}
						placeholder="Enter the Name"
						error={errors.establishedBy?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="landOwnership"
						label="Land Ownership"
						options={landOwnershipOptions}
						placeholder="Select Ownership"
						error={errors.landOwnership?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						label="Address (Optional)"
						control={control}
						name="address"
						type="textarea"
						placeholder="Enter the Address"
						error={errors.address?.message}
					/>
					<CustomFormInput
						label="Contact Number (Optional)"
						control={control}
						name="mobile_no"
						type="text"
						placeholder="Enter the Number"
						error={errors.mobile_no?.message}
					/>
					<CustomFormInput
						label="Mail Id (Optional)"
						control={control}
						name="mail_id"
						type="email"
						placeholder="Enter the Email"
						error={errors.mail_id?.message}
					/>
				</div>
			</div>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default CommunitiesForm;
