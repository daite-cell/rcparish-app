import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SingleSelectDropdown, FormButton, CustomFormInput, ControlledDateInputField } from '@/components';
import { otherInventoryFormSchema, type OtherInventoryFormType } from '../../validations';
import { buyerTypeOptions, otherInventoryCategoryOptions, ownForOptions } from '@/forms-options-data';

const OtherInventoryForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
		trigger,
	} = useForm<OtherInventoryFormType>({
		resolver: zodResolver(otherInventoryFormSchema),
		defaultValues: {
			quantity: '1',
			ratePerItem: '',
			price: '',
		},
	});

	const handlePriceUpdate = () => {
		const { ratePerItem, quantity } = getValues();
		const rate = parseFloat(ratePerItem || '0');
		const qty = parseInt(quantity?.toString() || '0');
		if (!isNaN(rate) && !isNaN(qty)) {
			const total = (rate * qty).toFixed(2);
			setValue('price', total);
			trigger('price');
		}
	};

	const onSubmit = (data: OtherInventoryFormType) => {
		console.warn('Submitted Rent Type:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="thingsName"
						label="Things Name"
						placeholder="Enter the things name"
					/>
					<SingleSelectDropdown
						control={control}
						name="otherInventoryCategory"
						label="Other Inventory Category"
						placeholder="Select category"
						options={otherInventoryCategoryOptions}
						error={errors.otherInventoryCategory?.message}
					/>
					<CustomFormInput
						control={control}
						name="ratePerItem"
						label="Rate per item"
						placeholder="Enter the price"
						error={errors.ratePerItem?.message}
						onBlur={handlePriceUpdate}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="quantity"
						label="Quantity"
						placeholder="Enter quantity"
						error={errors.quantity?.message}
						onBlur={handlePriceUpdate}
					/>
					<CustomFormInput
						control={control}
						name="price"
						label="Price"
						placeholder="Auto calculated"
						error={errors.price?.message}
						disabled
					/>
					<SingleSelectDropdown
						name="buyerType"
						control={control}
						label="Buyer Type"
						placeholder="Select buyer type"
						options={buyerTypeOptions}
						error={errors.buyerType?.message}
					/>
				</div>
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="purchasedName"
						label="Name"
						placeholder="Enter the name"
						error={errors.purchasedName?.message}
					/>
					<ControlledDateInputField
						label="Date on"
						name="dateOn"
						control={control}
						placeholder="Select a date"
						error={errors.dateOn?.message}
						type="date"
					/>
					<SingleSelectDropdown
						name="propertyOwnFor"
						control={control}
						label="Property Own For"
						options={ownForOptions}
						error={errors.propertyOwnFor?.message}
					/>
				</div>
			</div>
			<FormButton type="submit" label="Submit" />
		</form>
	);
};

export default OtherInventoryForm;
