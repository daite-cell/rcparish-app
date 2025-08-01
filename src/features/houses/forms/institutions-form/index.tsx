import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SingleSelectDropdown, FormButton, CustomFormInput, ControlledDateInputField } from '@/components';
import {
	categoryOptions,
	classOptions,
	classUptoOptions,
	diocesanCategoryOptions,
	genderOptions,
	landOwnershipOptions,
	managementOptions,
	mediumOptions,
	runByOptions,
	schoolTypeOptions,
} from '../../../../forms-options-data';
import { institutionsFormSchema, type InstitutionsFormData } from '../../validations';

const InstitutionsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<InstitutionsFormData>({
		resolver: zodResolver(institutionsFormSchema),
		defaultValues: {
			category: '',
		},
	});
	const onSubmit = (data: InstitutionsFormData) => {
		console.warn('Selected Category:', data);
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
						placeholder="Select School Type"
						name="schoolType"
						error={errors.schoolType?.message}
					/>

					<SingleSelectDropdown
						control={control}
						label="Diocesan School Category"
						options={diocesanCategoryOptions}
						name="diocesanCategory"
						error={errors.diocesanCategory?.message}
					/>
					<CustomFormInput
						name="schoolName"
						control={control}
						label="Name of the School"
						placeholder="Enter the School Name"
						error={errors.schoolName?.message}
					/>
					<CustomFormInput
						name="placeName"
						control={control}
						label="Name of the Place"
						placeholder="Enter the Place Name"
						error={errors.placeName?.message}
					/>

					<SingleSelectDropdown
						control={control}
						name="landOwnership"
						label="Land Ownership"
						options={landOwnershipOptions}
						placeholder="Select Ownership"
						error={errors.landOwnership?.message}
					/>

					<SingleSelectDropdown
						control={control}
						name="runBy"
						label="Run By"
						options={runByOptions}
						placeholder="Select Run By"
						error={errors.runBy?.message}
					/>

					<ControlledDateInputField
						type="month"
						control={control}
						name="establishedYear"
						label="Established Year (Optional)"
						placeholder="Select Year & Month"
						error={errors.establishedYear?.message}
					/>

					<ControlledDateInputField
						label="Recognition Date (Optional)"
						name="s_recognition_date"
						control={control}
						placeholder="Select a date"
						error={errors.s_recognition_date?.message}
						type="date"
					/>

					<CustomFormInput
						label="Recognition Number (Optional)"
						name="s_recognition_no"
						control={control}
						placeholder="Enter the Recognition Number"
						error={errors.s_recognition_no?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						label="Classes From"
						name="class_from"
						control={control}
						options={classOptions}
						placeholder="Select a class"
						error={errors.class_from?.message}
					/>
					<SingleSelectDropdown
						label="Classes Upto"
						name="classUpto"
						control={control}
						options={classUptoOptions}
						placeholder="Select Class"
						error={errors.classUpto?.message}
					/>
					<SingleSelectDropdown
						label="Gender"
						name="gender"
						control={control}
						options={genderOptions}
						placeholder="Select gender"
						error={errors.gender?.message}
					/>

					<label className="text-[13px] font-bold  my-5">Classes:</label>

					<SingleSelectDropdown
						label="Classes From"
						name="class_from"
						control={control}
						options={classOptions}
						placeholder="Select a class"
						error={errors.class_from?.message}
					/>
					<SingleSelectDropdown
						label="Classes Upto"
						name="classUpto"
						control={control}
						options={classUptoOptions}
						placeholder="Select Class"
						error={errors.classUpto?.message}
					/>
					<SingleSelectDropdown
						name="runBy"
						label="Run by"
						control={control}
						options={runByOptions}
						placeholder="Select who runs it"
						error={errors.runBy?.message}
					/>
					<CustomFormInput
						control={control}
						name="dioceseName"
						label="Name of the Diocese"
						placeholder="Diocesan"
						error={errors.dioceseName?.message}
					/>
					<SingleSelectDropdown
						name="medium"
						label="Medium of Instruction"
						control={control}
						options={mediumOptions}
						placeholder="Select medium"
						error={errors.medium?.message}
					/>
					<label className="text-[13px] font-bold  my-5">Classes:</label>

					<SingleSelectDropdown
						label="Classes From"
						name="class_from"
						control={control}
						options={classOptions}
						placeholder="Select a class"
						error={errors.class_from?.message}
					/>
					<SingleSelectDropdown
						label="Classes Upto"
						name="classUpto"
						control={control}
						options={classUptoOptions}
						placeholder="Select Class"
						error={errors.classUpto?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						name="management"
						label="Type of Management"
						control={control}
						options={managementOptions}
						placeholder="Select management"
						error={errors.management?.message}
					/>
					<label className="text-[13px] font-bold  my-5">Fully Aided:</label>
					<SingleSelectDropdown
						label="Classes From"
						name="class_from"
						control={control}
						options={classOptions}
						placeholder="Select a class"
						error={errors.class_from?.message}
					/>
					<SingleSelectDropdown
						label="Classes Upto"
						name="classUpto"
						control={control}
						options={classUptoOptions}
						placeholder="Select Class"
						error={errors.classUpto?.message}
					/>
					<CustomFormInput
						label="Contact Number (Optional)"
						name="optionalContactMail"
						control={control}
						placeholder="Enter the Contact Number"
						error={errors.optionalContactMail?.message}
					/>
					<CustomFormInput
						label="Contact Mail (Optional)"
						name="optionalContactMail"
						control={control}
						placeholder="Enter the Recognition Number"
						error={errors.optionalContactMail?.message}
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
