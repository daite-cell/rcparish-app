import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ControlledDateInputField,
	ControlledRadioGroup,
	CustomFormInput,
	FormButton,
	SingleSelectDropdown,
} from '@/components';

import { dayBookSchema, type DayBookType } from '../../validations';

const DayBookForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<DayBookType>({
		resolver: zodResolver(dayBookSchema),
	});

	const onSubmit = (data: DayBookType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Date"
						name="donationDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.donationDate?.message}
						type="date"
					/>
					<CustomFormInput
						label="Name of the Person"
						control={control}
						name="name"
						placeholder="Enter the name"
						error={errors.name?.message}
					/>
					<CustomFormInput
						label="Voucher No / Id (Unique)"
						control={control}
						name="voucherId"
						placeholder="Enter voucher number or ID"
						error={errors.voucherId?.message}
					/>
					<ControlledRadioGroup
						label="Select Any One"
						name="entryType"
						control={control}
						options={[
							{ label: 'Donation', value: 'donation' },
							{ label: 'Category', value: 'category' },
						]}
						error={errors.entryType?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						label="Category Name"
						control={control}
						name="categoryName"
						placeholder="Enter the category name"
						error={errors.categoryName?.message}
					/>
					<CustomFormInput
						label="Description"
						control={control}
						name="description"
						placeholder="Enter the description"
						error={errors.description?.message}
					/>
					<CustomFormInput
						label="Details"
						control={control}
						name="details"
						placeholder="Enter the details"
						error={errors.details?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						label="Amount"
						control={control}
						name="amount"
						placeholder="Enter the amount"
						error={errors.amount?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Donation For"
						options={[
							{ label: 'Income', value: 'income' },
							{ label: 'Expense', value: 'expense' },
						]}
						placeholder="Select donation type"
						name="donationFor"
						error={errors.donationFor?.message}
					/>
					<ControlledRadioGroup
						label="Do you want to enter more details about income / expense?"
						name="hasMoreDetails"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.hasMoreDetails?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Income Source"
						options={[
							{ label: 'By Cash', value: 'cash' },
							{ label: 'By Bank', value: 'bank' },
							{ label: 'By Cheque', value: 'cheque' },
						]}
						placeholder="Select income source"
						name="incomeSource"
						error={errors.incomeSource?.message}
					/>
				</div>
			</div>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default DayBookForm;
