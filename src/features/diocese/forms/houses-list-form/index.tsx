import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
} from '@/components';
import {
	abbreviationOptions,
	congregationOptions,
	conventTypeOptions,
	housingListParishOptions,
	landOwnershipOptions,
} from '@/forms-options-data';
import { houseListSchema, type HouseListType } from '../../validations';

const HouseListForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<HouseListType>({
		resolver: zodResolver(houseListSchema),
		defaultValues: {},
	});

	const onSubmit = (data: HouseListType) => {
		console.warn('Submitted House Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="parishName"
						label="Parish Name"
						placeholder="Select Parish"
						options={housingListParishOptions}
						error={errors.parishName?.message}
					/>

					<CustomFormInput
						control={control}
						name="churchName"
						label="Name of the Church"
						placeholder="Enter the Church Name"
						error={errors.churchName?.message}
					/>

					<CustomFormInput
						control={control}
						name="vicariate"
						label="Vicariate"
						placeholder="Enter Vicariate Name"
						error={errors.vicariate?.message}
					/>

					<SingleSelectDropdown
						control={control}
						name="houseType"
						label="Type of House"
						placeholder="Select House Type"
						options={conventTypeOptions}
						error={errors.houseType?.message}
					/>

					<CustomFormInput
						control={control}
						name="houseName"
						label="Name of the House"
						placeholder="Enter House Name"
						error={errors.houseName?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="housePlace"
						label="Place of the House"
						placeholder="Enter House Location"
						error={errors.housePlace?.message}
					/>

					<ControlledRadioGroup
						label="Incardinated To"
						name="incardinatedTo"
						control={control}
						options={[
							{ label: 'Diocesan Right', value: 'diocese' },
							{ label: 'Pontificial Right', value: 'pontifical' },
							{ label: 'Public Association', value: 'public' },
						]}
						error={errors.incardinatedTo?.message}
					/>

					<SingleSelectDropdown
						name="congregation"
						control={control}
						label="Select the Congregation"
						options={congregationOptions}
						placeholder="Choose Congregation"
						error={errors.congregation?.message}
					/>

					<SingleSelectDropdown
						name="abbreviation"
						control={control}
						label="Abbreviation"
						options={abbreviationOptions}
						placeholder="Choose Abbreviation"
						error={errors.abbreviation?.message}
					/>

					<ControlledDateInputField
						label="Established on (optional)"
						name="establishedOn"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.establishedOn?.message}
					/>

					<ControlledDateInputField
						label="Established by (optional)"
						name="establishedBy"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.establishedBy?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="landOwnership"
						label="Land Ownership"
						placeholder="Select Ownership Type"
						options={landOwnershipOptions}
						error={errors.landOwnership?.message}
					/>

					<CustomFormInput
						control={control}
						name="contactAddress"
						label="Contact Address (Optional)"
						placeholder="Enter Contact Address"
						type="textarea"
						error={errors.contactAddress?.message}
					/>

					<CustomFormInput
						control={control}
						name="contactNumber"
						label="Contact Number (Optional)"
						placeholder="Enter Contact Number"
						error={errors.contactNumber?.message}
					/>

					<CustomFormInput
						name="recognitionNumber"
						control={control}
						label="Recognition Number (Optional)"
						placeholder="Enter Recognition Number"
						error={errors.recognitionNumber?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default HouseListForm;
