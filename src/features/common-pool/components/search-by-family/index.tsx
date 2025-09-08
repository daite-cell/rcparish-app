import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledRadioGroup, CustomFormInput, DateInputField, FormButton } from '@/components';

import { useCallback, useMemo } from 'react';
import { familySearchSchema, type FamilySearchForm } from '../../validations';

const inputs_data = [
	{ name: 'Family No', type: 'text', value: 'family_no' },
	{ name: 'Marriage Date', type: 'date', value: 'marriage_date' },
	{ name: 'Family Mobile No', type: 'text', value: 'family_mobile_no' },
];

const SearchByFamily = () => {
	const {
		handleSubmit,
		watch,
		control,
		formState: { errors },
	} = useForm<FamilySearchForm>({
		resolver: zodResolver(familySearchSchema),
		defaultValues: {
			search_by_family: 'family_no',
			search_value: '',
		},
	});

	const selectedField = watch('search_by_family');

	const onSubmit = useCallback((data: FamilySearchForm) => {
		alert(JSON.stringify(data, null, 2));
	}, []);

	const selectedInput = useMemo(() => inputs_data.find((i) => i.value === selectedField), [selectedField]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-6 p-6">
			<ControlledRadioGroup
				name="search_by_family"
				control={control}
				label="Search By"
				options={[
					{ value: 'family_no', label: 'Family No' },
					{ value: 'marriage_date', label: 'Marriage Date' },
					{ value: 'family_mobile_no', label: 'Family Mobile No' },
				]}
				error={errors.search_by_family?.message}
			/>

			<div className="w-full">
				{selectedField === 'marriage_date' ? (
					<Controller
						control={control}
						name="search_value"
						render={({ field }) => (
							<DateInputField
								label="Marriage Date"
								placeholder="dd-mm-yyyy"
								value={field.value ? new Date(field.value) : undefined}
								onChange={(date) => {
									const formatted = date?.toISOString().split('T')[0] || '';
									field.onChange(formatted);
								}}
								error={errors.search_value?.message}
							/>
						)}
					/>
				) : (
					<CustomFormInput
						control={control}
						label={selectedInput?.name || 'Input'}
						placeholder={`Enter ${selectedInput?.name || ''}`}
						name="search_value"
						error={errors.search_value?.message}
					/>
				)}
			</div>

			<div className="mt-4">
				<FormButton label="Search" />
			</div>
		</form>
	);
};

export default SearchByFamily;
