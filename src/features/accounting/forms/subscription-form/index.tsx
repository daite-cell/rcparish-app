import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ControlledDateInputField,
	ControlledRadioGroup,
	CustomFormInput,
	FormButton,
	SingleSelectDropdown,
} from '@/components';
import { subStationOptions } from '../../../../forms-options-data';
import { Label } from '@/components/ui/label';
import { subscriptionSchema, type SubscriptionType } from '../../validations';

const SubScriptionForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionType>({
		resolver: zodResolver(subscriptionSchema),
	});

	const onSubmit = (data: SubscriptionType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						name="familyName"
						control={control}
						label="Family Name"
						placeholder="Enter the Family Name"
						error={errors.familyName?.message}
					/>
					<CustomFormInput
						control={control}
						name="familyNumber"
						label="Family Number"
						placeholder="Enter the Family Number"
						error={errors.familyNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="familyHeadName"
						label="Family Head Name"
						placeholder="Enter the Family Head Name"
						error={errors.familyHeadName?.message}
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile Number of the Head"
						placeholder="Enter 10-digit Mobile Number"
						error={errors.mobileNumber?.message}
					/>
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
						label="Select the Anbiam"
						options={[]}
						placeholder="Select Anbiam"
						name="selectedAnbiam"
						error={errors.selectedAnbiam?.message}
					/>
					<CustomFormInput
						control={control}
						name="monthlyIncome"
						label="Family Monthly Income"
						placeholder="Enter Family Monthly Income"
						error={errors.monthlyIncome?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="fixedAmount"
						label="Fixed Amount"
						placeholder="Enter Fixed Amount"
						error={errors.fixedAmount?.message}
					/>
					<ControlledDateInputField
						label="Fixed From"
						name="fixedFrom"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.fixedFrom?.message}
						type="date"
					/>
					<CustomFormInput
						control={control}
						name="grandPaidAmount"
						label="Grand Paid Amount"
						placeholder="Enter Grand Paid Amount"
						error={errors.grandPaidAmount?.message}
					/>
					<ControlledDateInputField
						label="Paid Upto"
						name="paidUpto"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.paidUpto?.message}
						type="date"
					/>
					<ControlledDateInputField
						label="Now Subscription For"
						name="subscriptionFor"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.subscriptionFor?.message}
						type="date"
					/>
					<CustomFormInput
						control={control}
						name="nowPayingAmount"
						label="Now Paying Amount"
						placeholder="Enter Now Paying Amount"
						error={errors.nowPayingAmount?.message}
					/>
					<Label className="text-xs ">Balance Amount : 1,600 /-</Label>

					<ControlledRadioGroup
						label="Any Prior Balance Amount"
						name="hasPriorBalance"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.hasPriorBalance?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Now Paying Date"
						name="nowPayingDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.nowPayingDate?.message}
						type="date"
					/>
					<CustomFormInput
						label="Voucher Number"
						control={control}
						name="voucherNumber"
						placeholder="Enter Voucher Number"
						error={errors.voucherNumber?.message}
					/>
					<Label className="text-xs font-bold">Last Paid Details :</Label>

					<CustomFormInput
						label="Last Paid Amount"
						control={control}
						name="lastPaidAmount"
						placeholder="Enter Last Paid Amount"
						error={errors.lastPaidAmount?.message}
					/>
					<ControlledDateInputField
						label="Last Paid Date"
						name="lastPaidDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.lastPaidDate?.message}
						type="date"
					/>
					<CustomFormInput
						label="Last Paid Voucher Number"
						control={control}
						name="lastPaidVoucherNumber"
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

export default SubScriptionForm;
