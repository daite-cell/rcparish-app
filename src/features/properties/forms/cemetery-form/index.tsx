import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
	DynamicTableFieldArraysForm,
} from '@/components';
import { cemeteryFormSchema, type CemeteryFormType } from '../../validations';
import { familyNameOptions, maintainedByParishOptions } from '@/forms-options-data';
import type { ColumnDef } from '@tanstack/react-table';
import { getCemeteryDynamicColumns } from '../../columns';
import { useMemo } from 'react';

const CemeteryForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CemeteryFormType>({
		resolver: zodResolver(cemeteryFormSchema),
		defaultValues: {
			dynamicFormFields: [{ memberId: '', buriedPersonName: '', buriedDate: '' }],
			from: 'same',
		},
	});

	const from = useWatch({ control, name: 'from' });

	const columns = useMemo(() => getCemeteryDynamicColumns(control), [control]);
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
							{ label: 'Same Parish', value: 'same' },
							{ label: 'Different Parish', value: 'different' },
						]}
						label="From"
						error={errors.from?.message}
					/>

					{from === 'different' ? (
						<>
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
						</>
					) : (
						<SingleSelectDropdown
							control={control}
							label="Select the Family Name"
							options={familyNameOptions}
							placeholder="Select the Family Name"
							name="parishFamilyName"
							error={errors.parishFamilyName?.message}
						/>
					)}

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
						name="mobileNo"
						control={control}
						label="Mobile Number"
						error={errors.mobileNo?.message}
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
			<DynamicTableFieldArraysForm
				control={control}
				fieldName="dynamicFormFields"
				title="Buried Person Details"
				columns={columns as ColumnDef<Record<'id', string>, unknown>[]}
			/>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default CemeteryForm;
