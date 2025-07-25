import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
} from '@/components';
import { rentFormSchema, type RentFormType } from '../../validations';
import { maintainedByOptions, propertyOwnerOptions, rentTypeOptions, shopTypeOptions } from '@/forms-options-data';

const RentDetailsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RentFormType>({
		resolver: zodResolver(rentFormSchema),
		defaultValues: {
			rentType: '',
		},
	});

	const onSubmit = (data: RentFormType) => {
		console.warn('Submitted Rent Type:', data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						name="rentType"
						label="Rent Type"
						control={control}
						options={rentTypeOptions}
						placeholder="Select rent type"
						error={errors.rentType?.message}
					/>
					<SingleSelectDropdown
						name="shopType"
						label="Shop Type"
						control={control}
						options={shopTypeOptions}
						placeholder="Select type"
						error={errors.shopType?.message}
					/>
					<CustomFormInput
						name="shopName"
						control={control}
						label="Specific Name to Identify"
						placeholder="Enter the shop name"
						error={errors.shopName?.message}
					/>
					<SingleSelectDropdown
						name="propertyOwner"
						control={control}
						label="Property Owned By"
						options={propertyOwnerOptions}
						placeholder="Select owner"
						error={errors.propertyOwner?.message}
					/>
					<SingleSelectDropdown
						name="maintainedBy"
						control={control}
						label="Property Maintained by "
						options={maintainedByOptions}
						error={errors.maintainedBy?.message}
					/>
					<SingleSelectDropdown
						name="ownershipBy"
						control={control}
						label="Ownership"
						options={maintainedByOptions}
						error={errors.ownershipBy?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						label="Name of the Render"
						name="renderName"
						control={control}
						error={errors.renderName?.message}
						placeholder="Enter the render name"
					/>
					<CustomFormInput
						label="Mobile Number"
						name="renderName"
						control={control}
						error={errors.renderMobile?.message}
						placeholder="Enter the mobile number"
					/>
					<CustomFormInput
						label="Adhaar Number"
						name="adhaarNumber"
						control={control}
						error={errors.adhaarNumber?.message}
						placeholder="Enter the adhaar number"
					/>
					<CustomFormInput
						label="Address"
						name="address"
						control={control}
						error={errors.address?.message}
						placeholder="Enter the address"
					/>
					<CustomFormInput
						label="Advance Amount"
						name="advanceAmount"
						control={control}
						error={errors.advanceAmount?.message}
						placeholder="Enter the amount"
					/>
					<CustomFormInput
						label="Fixed Monthly Amount"
						name="fixedMonthlyAmount"
						control={control}
						error={errors.fixedMonthlyAmount?.message}
						placeholder="Enter the amount"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Fixed Amount from on"
						name="fixedAmountFrom"
						control={control}
						placeholder="Select a date"
						error={errors.fixedAmountFrom?.message}
						type="date"
					/>
					<ControlledRadioGroup
						name="agreementDocument"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						label="Agreement document written"
						error={errors.agreementDocument?.message}
					/>
					<ControlledDateInputField
						label="Agreement from on"
						name="agreementFrom"
						control={control}
						placeholder="Select a date"
						error={errors.agreementFrom?.message}
						type="date"
					/>
					<CustomFormInput
						label="Agreement Period (in months)"
						name="agreementPeriod"
						control={control}
						error={errors.agreementPeriod?.message}
						placeholder="No of months"
					/>
					<ControlledDateInputField
						label="Agreement End on( year and month )"
						name="agreementEnd"
						control={control}
						placeholder="Select a date"
						error={errors.agreementEnd?.message}
						type="date"
					/>

					<CustomFormInput
						label="Agreement Made by ( Priest Name )"
						name="priestName"
						control={control}
						placeholder="Enter the priest name"
						error={errors.priestName?.message}
					/>
				</div>
			</div>
			<FormButton type="submit" label="Submit" />
		</form>
	);
};

export default RentDetailsForm;
