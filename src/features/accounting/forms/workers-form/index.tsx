import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ControlledDateInputField,
	CustomFormInput,
	FormButton,
	InputWithCheckbox,
	SingleSelectDropdown,
} from '@/components';
import { religionOptions, workingOptions } from '../../../../forms-options-data';
import { workersSchema, type WorkersType } from '../../validations';

const WorkersForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<WorkersType>({
		resolver: zodResolver(workersSchema),
	});

	const onSubmit = (data: WorkersType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Working as"
						options={workingOptions}
						placeholder="Select working role"
						name="activeness"
						error={errors.activeness?.message}
					/>
					<CustomFormInput
						label="Name of the Worker"
						control={control}
						name="workerName"
						placeholder="Enter the name of the worker"
						error={errors.workerName?.message}
					/>
					<ControlledDateInputField
						label="Date of Joining"
						name="joiningDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.joiningDate?.message}
						type="date"
					/>
					<CustomFormInput
						label="Salary Per Month"
						control={control}
						name="monthlySalary"
						placeholder="Enter monthly salary"
						error={errors.monthlySalary?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Salary Fixed From On"
						name="salaryFixedFrom"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.salaryFixedFrom?.message}
						type="date"
					/>
					<SingleSelectDropdown
						control={control}
						label="Religion"
						options={religionOptions}
						placeholder="Select religion"
						name="religion"
						error={errors.religion?.message}
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile No"
						error={errors.mobileNumber?.message}
						placeholder="Enter the mobile number"
					/>
					<CustomFormInput
						control={control}
						name="aadhaarNumber"
						label="Aadhaar Number"
						error={errors.aadhaarNumber?.message}
						placeholder="Enter Aadhaar number"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="permanentAddress"
						label="Permanent Address"
						error={errors.permanentAddress?.message}
						placeholder="Enter permanent address"
						type="textarea"
					/>
					<InputWithCheckbox
						control={control}
						name="temporaryAddress"
						checkboxName="isSameAsPermanentAddress"
						label="Temporary Address"
						checkboxLabel="Same as Permanent Address:"
						placeholder="Enter temporary address"
						error={errors.temporaryAddress?.message}
					/>
				</div>
			</div>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default WorkersForm;
