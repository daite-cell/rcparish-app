import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledDateInputField, CustomFormInput, FormButton, ControlledRadioGroup } from '@/components';
import { employersSalarySchema, type EmployersSalaryType } from '../../validations';

const EmployersSalaryForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<EmployersSalaryType>({
		resolver: zodResolver(employersSalarySchema),
	});

	const onSubmit = (data: EmployersSalaryType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="familyName"
						label="Working Role"
						placeholder="Enter Working Role"
						error={errors.familyName?.message}
					/>
					<CustomFormInput
						control={control}
						name="familyNumber"
						label="Worker Name"
						placeholder="Enter Worker Name"
						error={errors.familyNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="familyNumber"
						label="Worker ID"
						placeholder="Enter Worker ID"
						error={errors.familyNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="familyHeadName"
						label="Mobile Number"
						placeholder="Enter Mobile Number"
						error={errors.familyHeadName?.message}
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Aadhaar Number"
						placeholder="Enter Aadhaar Number"
						error={errors.mobileNumber?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="fixedAmount"
						label="Fixed Salary Amount"
						placeholder="Enter Fixed Salary Amount"
						error={errors.fixedAmount?.message}
					/>
					<ControlledDateInputField
						control={control}
						name="fixedFrom"
						label="Fixed Salary From"
						placeholder="dd/mm/yyyy"
						error={errors.fixedFrom?.message}
						type="date"
					/>
					<ControlledDateInputField
						control={control}
						name="paidUpto"
						label="Salary Paid Upto"
						placeholder="dd/mm/yyyy"
						error={errors.paidUpto?.message}
						type="date"
					/>
					<ControlledDateInputField
						control={control}
						name="subscriptionFor"
						label="Subscription For"
						placeholder="dd/mm/yyyy"
						error={errors.subscriptionFor?.message}
						type="date"
					/>
					<CustomFormInput
						control={control}
						name="voucherNumber"
						label="Voucher Number"
						placeholder="Enter Voucher Number"
						error={errors.voucherNumber?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						control={control}
						name="hasPriorBalance"
						label="Advance Received?"
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.hasPriorBalance?.message}
					/>
					<CustomFormInput
						control={control}
						name="nowPayingAmount"
						label="Now Paying Amount"
						placeholder="Enter Now Paying Amount"
						error={errors.nowPayingAmount?.message}
					/>
					<CustomFormInput
						control={control}
						name="lastPaidAmount"
						label="Last Paid Amount"
						placeholder="Enter Last Paid Amount"
						error={errors.lastPaidAmount?.message}
					/>
					<ControlledDateInputField
						control={control}
						name="lastPaidDate"
						label="Last Paid Date"
						placeholder="dd/mm/yyyy"
						error={errors.lastPaidDate?.message}
						type="date"
					/>
					<CustomFormInput
						control={control}
						name="lastPaidVoucherNumber"
						label="Last Paid Voucher Number"
						placeholder="Enter Last Paid Voucher Number"
						error={errors.lastPaidVoucherNumber?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default EmployersSalaryForm;
