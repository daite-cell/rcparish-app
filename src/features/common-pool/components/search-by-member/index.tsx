import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledRadioGroup, CustomFormInput, FormButton } from '@/components';
import { memberSearchSchema, type MemberSearchForm } from '../../validations';

const inputs_data = [
	{ name: 'Member ID', type: 'text', value: 'member_id' },
	{ name: 'Family No', type: 'text', value: 'family_no' },
	{ name: 'Member Mobile No', type: 'text', value: 'member_mobile_no' },
];

const SearchByMember = () => {
	const {
		control,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<MemberSearchForm>({
		resolver: zodResolver(memberSearchSchema),
		defaultValues: {
			search_by_member: 'member_id',
			search_value: '',
		},
	});

	const selectedField = watch('search_by_member');

	const selectedInputName = useMemo(() => {
		return inputs_data.find((i) => i.value === selectedField)?.name || 'Input';
	}, [selectedField]);

	const onSubmit = (data: MemberSearchForm) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-6 p-6">
			<ControlledRadioGroup
				name="search_by_member"
				control={control}
				options={inputs_data.map((i) => ({
					value: i.value,
					label: i.name,
				}))}
				error={errors.search_by_member?.message}
				onChange={() => setValue('search_value', '')}
			/>

			<div className="w-full">
				<CustomFormInput
					control={control}
					name="search_value"
					label={selectedInputName}
					placeholder={`Enter ${selectedInputName}`}
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
