import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomFormInput, FormButton } from '@/components';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { memberSearchSchema, type MemberSearchForm } from '@/validations';

const inputs_data = [
	{ name: 'Member ID', type: 'text', value: 'member_id' },
	{ name: 'Family No', type: 'text', value: 'family_no' },
	{ name: 'Member Mobile No', type: 'text', value: 'member_mobile_no' },
];

const SearchByMember = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<MemberSearchForm>({
		resolver: zodResolver(memberSearchSchema),
		defaultValues: {
			search_by_family: 'member_id',
			search_value: '',
		},
	});

	const selectedField = watch('search_by_family');
	const selectedInputName = useMemo(() => {
		return inputs_data.find((i) => i.value === selectedField)?.name || 'Input';
	}, [selectedField]);

	const onSubmit = (data: MemberSearchForm) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-6 p-6">
			<div className="space-y-2">
				<RadioGroup
					className="flex gap-4"
					defaultValue="member_id"
					onValueChange={(val) => {
						setValue('search_by_family', val as MemberSearchForm['search_by_family']);
						setValue('search_value', '');
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
				<CustomFormInput
					label={selectedInputName}
					placeholder={`Enter ${selectedInputName}`}
					{...register('search_value')}
					error={errors.search_value?.message}
				/>
			</div>

			<div className="mt-4">
				<FormButton label="Search" />
			</div>
		</form>
	);
};

export default SearchByMember;
