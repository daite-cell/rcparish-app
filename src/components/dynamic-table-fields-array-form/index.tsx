import React from 'react';
import {
	useFieldArray,
	type ArrayPath,
	type Control,
	type FieldArray,
	type FieldArrayWithId,
	type FieldValues,
} from 'react-hook-form';
import { DynamicDataTable, FormButton, InfoHeadingTitle } from '@/components';
import type { ColumnDef } from '@tanstack/react-table';

type ArrayElement<T> = T extends Array<infer U> ? U : never;

interface DynamicFieldArrayProps<
	TForm extends FieldValues,
	TFieldName extends ArrayPath<TForm>,
	TItem extends FieldValues = Extract<ArrayElement<TForm[TFieldName]>, FieldValues>,
> {
	control: Control<TForm>;
	fieldName: TFieldName;
	title?: string;
	columns: ColumnDef<FieldArrayWithId<TItem>, unknown>[];
	defaultValues?: Partial<TItem>;
}

const DynamicTableFieldArraysForm = <TForm extends FieldValues, TFieldName extends ArrayPath<TForm>>({
	control,
	fieldName,
	title = 'Items',
	columns,
	defaultValues,
}: DynamicFieldArrayProps<TForm, TFieldName>) => {
	type TItem = ArrayElement<TForm[TFieldName]>;
	type TFieldItem = FieldArray<TForm, TFieldName>;

	const { fields, append, remove } = useFieldArray<TForm, TFieldName>({
		control,
		name: fieldName,
	});

	const normalizedColumns = React.useMemo(
		() =>
			columns.map((col, idx) => ({
				...col,
				id:
					(col as { id?: string; accessorKey?: string }).id ??
					(col as { accessorKey?: string }).accessorKey ??
					`col_${idx}`,
			})),
		[columns]
	);

	const emptyItem = React.useMemo(() => {
		const base = {} as TFieldItem;

		normalizedColumns.forEach((col) => {
			const key = (col as { accessorKey?: string }).accessorKey;
			if (key) {
				(base as Record<string, unknown>)[key] = defaultValues?.[key as keyof TItem] ?? '';
			}
		});

		return base;
	}, [normalizedColumns, defaultValues]);

	return (
		<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
			<InfoHeadingTitle style="uppercase !text-xs" title={title} />

			<DynamicDataTable
				enableDateSorting={false}
				wrapText={false}
				showFooter={false}
				enableExport={false}
				enablePagination={false}
				enableSearch={false}
				customColumns={normalizedColumns as ColumnDef<FieldArrayWithId<TForm, TFieldName, 'id'>, unknown>[]}
				data={fields}
			/>

			<div className="flex gap-4 mt-2 ml-8">
				<FormButton type="button" onClick={() => append(emptyItem)} label="Add" />
				{fields.length > 0 && <FormButton type="button" onClick={() => remove(fields.length - 1)} label="Remove" />}
			</div>
		</div>
	);
};

export default DynamicTableFieldArraysForm;
