import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomFormInput, FormButton, SingleSelectDropdown } from '@/components';
import {
	belongsToOptions,
	housingListParishOptions,
	landOwnershipOptions,
	seminaryOptions,
} from '../../../../forms-options-data';
import { vocationalListSchema, type VocationalListType } from '../../validations';

const VocationalListForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<VocationalListType>({
		resolver: zodResolver(vocationalListSchema),
	});

	const onSubmit = (data: VocationalListType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="noviciateName"
						label="Name of the Noviciate"
						placeholder="Enter the Name of the Noviciate"
						error={errors.noviciateName?.message}
					/>
					<CustomFormInput
						control={control}
						name="placeName"
						label="Name of the Place"
						placeholder="Enter the Name of the Place"
						error={errors.placeName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="parish"
						label="Select the Parish"
						placeholder="Select the Parish"
						options={housingListParishOptions}
						error={errors.parish?.message}
					/>
					<CustomFormInput
						control={control}
						name="vicariate"
						label="Vicariate"
						placeholder="Enter the Vicariate"
						error={errors.vicariate?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="landOwnership"
						label="Land Ownership"
						placeholder="Select the Land Ownership"
						options={landOwnershipOptions}
						error={errors.landOwnership?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="belongsTo"
						label="Belongs to"
						placeholder="Select the Belongs To"
						options={belongsToOptions}
						error={errors.belongsTo?.message}
					/>
					<CustomFormInput
						control={control}
						name="congregationName"
						label="Name of the Congregation"
						placeholder="Enter the Name of the Congregation"
						error={errors.congregationName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="seminary"
						label="Seminary"
						placeholder="Select the Seminary"
						options={seminaryOptions}
						error={errors.seminary?.message}
					/>
					<CustomFormInput
						control={control}
						name="mobileNo"
						label="Contact Number (Optional)"
						type="text"
						placeholder="Enter the Contact Number"
						error={errors.mobileNo?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="mailId"
						label="Mail Id (Optional)"
						type="email"
						placeholder="Enter the Mail Id"
						error={errors.mailId?.message}
					/>
					<CustomFormInput
						control={control}
						name="address"
						label="Address (Optional)"
						type="textarea"
						placeholder="Enter the Address"
						error={errors.address?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default VocationalListForm;
