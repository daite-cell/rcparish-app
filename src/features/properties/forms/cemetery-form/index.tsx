import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
} from '@/components';
import { cemeteryFormSchema, type CemeteryFormType } from '../../validations';
import { maintainedByParishOptions } from '@/forms-options-data';

const CemeteryForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CemeteryFormType>({
		resolver: zodResolver(cemeteryFormSchema),
		defaultValues: {},
	});

	const onSubmit = (data: CemeteryFormType) => {
		console.warn('Submitted Rent Type:', data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						name="from"
						control={control}
						options={[
							{ label: 'Same Parish', value: 'same_parish' },
							{ label: 'Different Parish', value: 'different_parish' },
						]}
						label="From"
						error={errors.from?.message}
					/>
					<SingleSelectDropdown
						name="parishName"
						control={control}
						label="Property Maintained by "
						options={maintainedByParishOptions}
						error={errors.parishName?.message}
					/>
					<CustomFormInput
						name="familyName"
						control={control}
						label="Family Name"
						placeholder="Enter the Family Name"
						error={errors.familyName?.message}
					/>
					<CustomFormInput
						name="cemeteryNumber"
						control={control}
						label="Cemetery Serial Number"
						placeholder="Enter the Cemetery Number"
						error={errors.cemeteryNumber?.message}
					/>
					<CustomFormInput
						name="maintainedBy"
						control={control}
						label="Cemetery Name"
						placeholder="Enter the Name"
						error={errors.maintainedBy?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						name="mobile_no"
						control={control}
						label="Mobile Number"
						error={errors.mobile_no?.message}
						placeholder="Enter the Mobile Number"
					/>
					<CustomFormInput
						name="nameOfParish"
						control={control}
						label="Parish Name"
						error={errors.nameOfParish?.message}
						placeholder="Enter the Parish Name"
					/>
					<CustomFormInput
						name="cemeteryAt"
						control={control}
						label="Cemetery At (Place)"
						error={errors.cemeteryAt?.message}
						placeholder="Enter the Cemetery At"
					/>
				</div>
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						name="address"
						control={control}
						label="Address"
						error={errors.address?.message}
						placeholder="Enter the Address"
					/>
					<ControlledDateInputField
						name="dug_on"
						control={control}
						label="Dug on (last time)"
						error={errors.dug_on?.message}
					/>
				</div>
			</div>
			<FormButton type="submit" label="Submit" />
		</form>
	);
};

export default CemeteryForm;
