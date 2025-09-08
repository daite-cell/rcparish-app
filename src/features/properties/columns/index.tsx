import { ControlledDateInputField, CustomFormInput } from '@/components';
import type { CemeteryMember, VendorMember } from '@/types';
import type { ColumnDef } from '@tanstack/react-table';
import type { Control, FieldValues, Path } from 'react-hook-form';

const getVendorDynamicColumns = <TForm extends FieldValues>(control: Control<TForm>): ColumnDef<VendorMember>[] => [
	{ header: 'ID' },

	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicVendorMembers.${row.index}.name` as Path<TForm>}
				placeholder="Enter name"
			/>
		),
	},

	{
		accessorKey: 'mobile',
		header: 'Mobile Number',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicVendorMembers.${row.index}.mobile` as Path<TForm>}
				placeholder="Enter mobile number"
			/>
		),
	},
	{
		accessorKey: 'adhaarNumber',
		header: 'Adhaar Number',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicVendorMembers.${row.index}.adhaarNumber` as Path<TForm>}
				placeholder="Enter Adhaar Number"
			/>
		),
	},
];
const getCemeteryDynamicColumns = <TForm extends FieldValues>(control: Control<TForm>): ColumnDef<CemeteryMember>[] => [
	{ header: 'ID' },

	{
		accessorKey: 'buriedPersonName',
		header: 'Name',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicFormFields.${row.index}.buriedPersonName` as Path<TForm>}
				placeholder="Enter name"
			/>
		),
	},

	{
		accessorKey: 'buriedDate',
		header: 'Buried Date',
		cell: ({ row }) => (
			<ControlledDateInputField
				name={`dynamicFormFields.${row.index}.buriedDate` as Path<TForm>}
				control={control}
				placeholder="Select a date"
				type="date"
			/>
		),
	},
];
export { getVendorDynamicColumns, getCemeteryDynamicColumns };
