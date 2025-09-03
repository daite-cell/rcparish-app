import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ControlledDateInputField,
	ControlledRadioGroup,
	DynamicTableFieldArraysForm,
	FormButton,
	SingleSelectDropdown,
} from '@/components';
import { churchCollectionSchema, type ChurchCollectionSchema } from '../../validations';
import { useMemo } from 'react';
import { collections_data } from '@/features/common-pool/data';
import { getMonthlyCollectionsColumns } from '../../columns';

const ChurchCollectionForm = () => {
	const {
		control,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<ChurchCollectionSchema>({
		resolver: zodResolver(churchCollectionSchema),
		defaultValues: {
			collection: 'monthly',
			monthlyValues: [
				{
					id: '',
					name: '',
					occasion: '',
					details: '',
					sundayCollection: 0,
					massIndention: 0,
					boxCollection: 0,
					total: 0,
				},
			],
		},
	});
	const selectedField = watch('collection');
	const selectedInput = useMemo(() => collections_data.find((i) => i.value === selectedField), [selectedField]);

	const monthly_collection = useMemo(() => getMonthlyCollectionsColumns(control), [control]);

	const onSubmit = (data: ChurchCollectionSchema) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Select Any One"
						options={[]}
						placeholder="Select donation type"
						name="memberName"
						error={errors.memberName?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Month & Year"
						name="month"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.month?.message}
						type="date"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						label="Select Any One Collection"
						name="collection"
						control={control}
						options={collections_data}
						error={errors.collection?.message}
					/>
				</div>
			</div>
			<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
				{selectedInput?.label === 'Monthly' && (
					<>
						<DynamicTableFieldArraysForm
							control={control}
							fieldName="monthlyValues"
							title="MONTHLY COLLECTIONS"
							columns={monthly_collection}
						/>
						<h1>Total :</h1>
					</>
				)}
				{selectedInput?.label === 'Others' && <h1>Others table</h1>}
				{selectedInput?.label === 'Special' && <h1>Monthly table</h1>}
			</div>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default ChurchCollectionForm;
