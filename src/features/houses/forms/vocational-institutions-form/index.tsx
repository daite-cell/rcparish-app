import { useForm } from 'react-hook-form';
import { noviciateFormSchema, type NoviciateFormData } from '../../validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomFormInput, FormButton, SingleSelectDropdown } from '@/components';
import { belongsToOptions, landOwnershipOptions, seminaryOptions } from '../../../../forms-options-data';

const VocationalInstitutionsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<NoviciateFormData>({
		resolver: zodResolver(noviciateFormSchema),
	});

	const onSubmit = (data: NoviciateFormData) => {
		alert(JSON.stringify(data, null, 2));
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="name"
						label="Name of the Noviciate"
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
					<SingleSelectDropdown
						control={control}
						label="Land Ownership"
						options={landOwnershipOptions}
						placeholder="Select School Type"
						name="landOwnerShip"
						error={errors.landOwnerShip?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="School Category"
						options={belongsToOptions}
						placeholder="Select School Type"
						name="belongsTo"
						error={errors.belongsTo?.message}
					/>
					<CustomFormInput
						control={control}
						name="congregationName"
						label="Name of the Congregation"
						placeholder="Enter the Congregation name"
						error={errors.congregationName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="seminary"
						label="Seminary Type"
						placeholder="Select Seminary"
						options={seminaryOptions}
						error={errors.seminary?.message}
					/>
					<CustomFormInput
						label="Contact Number (Optional)"
						control={control}
						name="mobile_no"
						type="text"
						placeholder="Enter the Number"
						error={errors.mobile_no?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						label="Mail Id (Optional)"
						control={control}
						name="mail_id"
						type="email"
						placeholder="Enter the Email"
						error={errors.mail_id?.message}
					/>
					<CustomFormInput
						label="Address (Optional)"
						control={control}
						name="address"
						type="textarea"
						placeholder="Enter the Address"
						error={errors.address?.message}
					/>
				</div>
			</div>
			<FormButton type="submit" label="Submit" />
		</form>
	);
};

export default VocationalInstitutionsForm;
