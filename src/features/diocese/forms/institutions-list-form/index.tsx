import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SingleSelectDropdown, FormButton, CustomFormInput, ControlledDateInputField } from '@/components';
import {
	categoryOptions,
	genderOptions,
	housingListParishOptions,
	landOwnershipOptions,
	mediumOptions,
	runByOptions,
	schoolTypeOptions,
} from '../../../../forms-options-data';

import { Label } from '@/components/ui/label';
import { institutionsFormSchema, type InstitutionsType } from '../../validations';

const InstitutionsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<InstitutionsType>({
		resolver: zodResolver(institutionsFormSchema),
		defaultValues: {
			category: '',
		},
	});

	const onSubmit = (data: InstitutionsType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-4">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						name="category"
						control={control}
						label="Select the Category"
						options={categoryOptions}
						placeholder="Choose a category"
						error={errors.category?.message}
					/>

					<SingleSelectDropdown
						control={control}
						label="School Category"
						options={schoolTypeOptions}
						placeholder="Select School Category"
						name="schoolCategory"
						error={errors.schoolCategory?.message}
					/>

					<CustomFormInput
						name="instituteName"
						control={control}
						label="Name of the Institute"
						placeholder="Enter the Institute Name"
						error={errors.instituteName?.message}
					/>

					<CustomFormInput
						name="place"
						control={control}
						label="Place"
						placeholder="Enter the Place Name"
						error={errors.place?.message}
					/>

					<SingleSelectDropdown
						control={control}
						name="parish"
						label="Select the Parish"
						placeholder="Select Parish"
						options={housingListParishOptions}
						error={errors.parish?.message}
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
						name="landOwnership"
						label="Land Ownership"
						options={landOwnershipOptions}
						placeholder="Select Land Ownership"
						error={errors.landOwnership?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						type="month"
						control={control}
						name="establishedYear"
						label="Established Year (Optional)"
						placeholder="Select Month and Year"
						error={errors.establishedYear?.message}
					/>

					<SingleSelectDropdown
						label="Gender"
						name="gender"
						control={control}
						options={genderOptions}
						placeholder="Select Gender"
						error={errors.gender?.message}
					/>
					<Label className="text-[13px] font-bold my-4">Grade :</Label>
					<SingleSelectDropdown
						label="Grade Name"
						name="gradeName"
						control={control}
						options={[]}
						placeholder="Select a class"
						error={errors.gradeName?.message}
					/>

					<SingleSelectDropdown
						label="Class From"
						name="classFrom"
						control={control}
						options={[]}
						placeholder="Select Starting Grade"
						error={errors.classFrom?.message}
					/>

					<SingleSelectDropdown
						name="runBy"
						label="Run By"
						control={control}
						options={runByOptions}
						placeholder="Select Run By Option"
						error={errors.runBy?.message}
					/>

					<CustomFormInput
						control={control}
						name="congregation"
						label="Name of the Congregation"
						placeholder="Enter Congregation Name"
						error={errors.congregation?.message}
					/>

					<SingleSelectDropdown
						name="medium"
						label="Medium"
						control={control}
						options={mediumOptions}
						placeholder="Select Medium of Teaching"
						error={errors.medium?.message}
					/>
					<Label className="text-[13px] font-bold my-4">Grade :</Label>
					<SingleSelectDropdown
						label="Grade Name"
						name="gradeName"
						control={control}
						options={[]}
						placeholder="Select a class"
						error={errors.gradeName?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						name="management"
						control={control}
						label="Management"
						placeholder="Enter Management Name"
						error={errors.management?.message}
					/>

					<CustomFormInput
						label="Contact Number (Optional)"
						control={control}
						name="mobile"
						type="text"
						placeholder="Enter Mobile Number"
						error={errors.mobile?.message}
					/>

					<CustomFormInput
						label="Mail ID (Optional)"
						control={control}
						name="email"
						type="email"
						placeholder="Enter Email"
						error={errors.email?.message}
					/>

					<CustomFormInput
						label="Address (Optional)"
						control={control}
						name="address"
						type="textarea"
						placeholder="Enter Address"
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

export default InstitutionsForm;
