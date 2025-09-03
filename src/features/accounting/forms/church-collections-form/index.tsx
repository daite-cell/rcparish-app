import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ControlledDateInputField,
	ControlledRadioGroup,
	DisplayDynamicFieldsTotal,
	DynamicTableFieldArraysForm,
	FormButton,
	SingleSelectDropdown,
} from '@/components';
import { churchCollectionSchema, type ChurchCollectionSchema } from '../../validations';
import { useEffect, useMemo } from 'react';
import { collections_data } from '@/features/common-pool/data';
import { getMonthlyCollectionsColumns, getOtherCollectionColumns, getSpecialCollectionsColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';

const ChurchCollectionForm = () => {
	const {
		control,
		watch,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ChurchCollectionSchema>({
		resolver: zodResolver(churchCollectionSchema),
		defaultValues: {
			collection: 'monthly',
			monthlyValues: [
				{
					name: undefined,
					occasion: undefined,
					details: undefined,
					sundayCollection: undefined,
					massIndention: undefined,
					boxCollection: undefined,
					total: undefined,
				},
			],
			specialValues: [
				{
					occasion: undefined,
					details: undefined,
					collection: undefined,
					amount: undefined,
				},
			],
			otherValues: [
				{
					occasion: undefined,
					collection: undefined,
					amount: undefined,
				},
			],
		},
	});

	const selectedField = watch('collection');
	const selectedInput = useMemo(() => collections_data.find((i) => i.value === selectedField), [selectedField]);

	const monthly_collection = useMemo(() => getMonthlyCollectionsColumns(control), [control]);

	const special_collection = useMemo(() => getSpecialCollectionsColumns(control), [control]);

	const other_collection = useMemo(() => getOtherCollectionColumns(control), [control]);

	const monthlyValues = useWatch({ control, name: 'monthlyValues' });

	useEffect(() => {
		if (!monthlyValues) return;

		monthlyValues.forEach((row, index) => {
			const sunday = Number(row.sundayCollection) || 0;
			const mass = Number(row.massIndention) || 0;
			const box = Number(row.boxCollection) || 0;

			const rowTotal = sunday + mass + box;

			if (row.total !== rowTotal) {
				setValue(`monthlyValues.${index}.total`, rowTotal, {
					shouldValidate: true,
					shouldDirty: true,
				});
			}
		});
	}, [monthlyValues, setValue]);

	const monthly_values_total = useMemo(() => {
		if (!monthlyValues) return 0;
		return monthlyValues.reduce((acc, row) => acc + (Number(row.total) || 0), 0);
	}, [monthlyValues]);

	const otherValues = useWatch({ control, name: 'otherValues' });

	const other_collections_total_sum = useMemo(() => {
		if (!otherValues) return 0;

		return otherValues.reduce((acc, curr) => {
			const occasion = Number(curr.occasion) || 0;
			const collection = Number(curr.collection) || 0;
			const amount = Number(curr.amount) || 0;

			return acc + occasion + collection + amount;
		}, 0);
	}, [otherValues]);

	const specialValues = useWatch({ control, name: 'specialValues' });

	const special_total = useMemo(() => {
		if (!specialValues) return 0;

		return specialValues.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
	}, [specialValues]);

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
							columns={monthly_collection as ColumnDef<Record<'id', string>, unknown>[]}
						/>

						<DisplayDynamicFieldsTotal total={monthly_values_total} />
					</>
				)}

				{selectedInput?.label === 'Special' && (
					<>
						<DynamicTableFieldArraysForm
							control={control}
							fieldName="specialValues"
							title="SPECIAL COLLECTIONS"
							columns={special_collection as ColumnDef<Record<'id', string>, unknown>[]}
						/>
						<DisplayDynamicFieldsTotal total={special_total} />
					</>
				)}

				{selectedInput?.label === 'Others' && (
					<>
						<DynamicTableFieldArraysForm
							control={control}
							fieldName="otherValues"
							title="OTHER COLLECTIONS"
							columns={other_collection as ColumnDef<Record<'id', string>, unknown>[]}
						/>

						<DisplayDynamicFieldsTotal total={other_collections_total_sum} />
					</>
				)}
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default ChurchCollectionForm;
