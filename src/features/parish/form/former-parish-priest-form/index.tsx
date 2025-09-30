import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledRadioGroup,
	ControlledFileUpload,
	ControlledDateInputField,
} from '@/components';
import { congregationFromOptions, currentLivingStatusOptions } from '@/forms-options-data';
import { formerParishPriestFormSchema, type FormerParishPriestFormType } from '../../validations';

const FormerParishPriestForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormerParishPriestFormType>({
		resolver: zodResolver(formerParishPriestFormSchema),
		defaultValues: { from: 'diocese' },
	});

	const from = useWatch({ control, name: 'from' });

	const onSubmit = (data: FormerParishPriestFormType) => {
		console.warn('Submitted Parish Person:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="priestName"
						label="Priest Name"
						error={errors.priestName?.message}
						placeholder="Enter the Priest Name"
					/>

					<ControlledDateInputField
						label="From"
						name="fromDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.fromDate?.message}
						type="date"
					/>

					<ControlledRadioGroup
						label="Select From"
						name="from"
						control={control}
						options={[
							{ label: 'Diocese', value: 'diocese' },
							{ label: 'Congregation', value: 'congregation' },
						]}
						error={errors.from?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					{from === 'diocese' ? (
						<CustomFormInput
							label="Diocese Name"
							control={control}
							name="dioceseName"
							error={errors.dioceseName?.message}
							placeholder="Enter the Diocese Name"
						/>
					) : (
						<SingleSelectDropdown
							control={control}
							label="Select the Congregation"
							options={congregationFromOptions}
							placeholder="Select the Congregation"
							name="congregationName"
							error={errors.congregationName?.message}
						/>
					)}

					<ControlledDateInputField
						label="Till the Date"
						name="tillDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.tillDate?.message}
						type="date"
					/>

					<CustomFormInput
						control={control}
						name="noOfYears"
						label="No of Years"
						error={errors.noOfYears?.message}
						placeholder="Enter the No of Years"
					/>

					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile Number"
						error={errors.mobileNumber?.message}
						placeholder="Enter the Mobile Number"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Living Status"
						options={currentLivingStatusOptions}
						placeholder="Select Living Status"
						name="livingStatus"
						error={errors.livingStatus?.message}
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

export default FormerParishPriestForm;
