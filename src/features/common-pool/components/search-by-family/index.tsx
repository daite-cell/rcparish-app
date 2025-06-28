import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomFormInput, DateInputFelid, FormButton } from '@/components';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { familySearchSchema, type FamilySearchForm } from '@/validations';
import { useCallback, useMemo } from 'react';

const inputs_data = [
	{ name: 'Family No', type: 'text', value: 'family_no' },
	{ name: 'Marriage Date', type: 'date', value: 'marriage_date' },
	{ name: 'Family Mobile No', type: 'text', value: 'family_mobile_no' },
];

const SearchByFamily = () => {
	const {
		register,
		handleSubmit,
		watch,
		control,
		setValue,
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
		alert(JSON.stringify(data, null, 2) || data);
	}, []);

	const selectedInput = useMemo(() => inputs_data.find((i) => i.value === selectedField), [selectedField]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-6 p-6">
			<div className="space-y-2">
				<RadioGroup
					className="flex gap-4"
					defaultValue="family_no"
					onValueChange={(val) => {
						setValue('search_by_family', val as 'family_no' | 'marriage_date' | 'family_mobile_no');
						setValue('search_value', val === 'marriage_date' ? '' : '');
					}}
				>
					{inputs_data.map((input) => (
						<div key={input.value} className="flex items-center space-x-2">
							<RadioGroupItem
								value={input.value}
								id={input.value}
								className={cn(
									'border-2 border-gray-300',
									'data-[state=checked]:border-blue-600',
									'data-[state=checked]:bg-blue-600',
									'focus-visible:ring-2 focus-visible:ring-blue-400'
								)}
							/>
							<Label className="font-light" htmlFor={input.value}>
								{input.name}
							</Label>
						</div>
					))}
				</RadioGroup>
				{errors.search_by_family && <p className="text-red-500 text-xs">{errors.search_by_family.message}</p>}
			</div>

			<div className="w-full">
				{selectedField === 'marriage_date' ? (
					<Controller
						control={control}
						name="search_value"
						render={({ field }) => (
							<DateInputFelid
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
						label={selectedInput?.name || 'Input'}
						placeholder={`Enter ${selectedInput?.name || ''}`}
						{...register('search_value')}
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
