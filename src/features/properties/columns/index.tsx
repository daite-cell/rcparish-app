import { ControlledDateInputField, CustomFormInput } from '@/components';
import { useStore } from '@/store/store';
import type {
	CemeteryEntry,
	CemeteryMember,
	ChurchInventoryEntry,
	LandRegistrationEntry,
	OtherInventoryEntry,
	RentPropertyEntry,
	VendorMember,
} from '@/types';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { ColumnDef } from '@tanstack/react-table';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { getCommonColumns } from '../components/get-common-columns';

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

const useRentPropertyColumns = (): ColumnDef<RentPropertyEntry>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<RentPropertyEntry>(handleSelectRow, handleEditRow),

		{ accessorKey: 'type', header: 'Type' },
		{ accessorKey: 'property_type_content', header: 'Property Type' },
		{ accessorKey: 'property_name', header: 'Property Name' },
		{ accessorKey: 'property_id', header: 'Property Id / No' },
		{ accessorKey: 'own_for', header: 'Property Own for' },
		{ accessorKey: 'maintained_by_content', header: 'Property Maintained by' },
		{ accessorKey: 'ownership_content', header: 'Name of the Ownership' },
		{ accessorKey: 'render_name', header: 'Name of the Render' },
		{ accessorKey: 'mobile_no', header: 'Mobile' },
		{ accessorKey: 'adhaar_no', header: 'Adhaar' },
		{ accessorKey: 'address', header: 'Address' },

		{
			accessorKey: 'type_data_1',
			header: 'Advance / Lease Amount',
			cell: ({ getValue }) => {
				const value = Number(getValue() ?? 0);
				return value ? `₹${value.toLocaleString('en-IN')}` : '-';
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + Number(row.original.type_data_1 ?? 0), 0);
				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},

		{ accessorKey: 'ag_written', header: 'Agreement Document written' },
		{ accessorKey: 'ag_from', header: 'Agreement from on' },
		{ accessorKey: 'ag_period', header: 'Agreement period' },
		{ accessorKey: 'ag_end_on', header: 'Agreement End on' },
		{ accessorKey: 'ag_made_by', header: 'Agreement Made by' },
	];
};

const useLandRegistrationColumns = (): ColumnDef<LandRegistrationEntry>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonColumns<LandRegistrationEntry>(handleSelectRow),

		{ accessorKey: 'document_no', header: 'Document' },
		{ accessorKey: 'parish_content', header: 'Parish Name' },
		{ accessorKey: 'village_name', header: 'Village name' },
		{ accessorKey: 'register_no', header: 'Automatic Document ID' },
		{ accessorKey: 'register_date', header: 'Date of registration' },
		{ accessorKey: 'purchasing_amount', header: 'Purchasing Amount' },
		{ accessorKey: 'purchaser_name', header: 'Purchaser Name' },
		{ accessorKey: 'vendor_name', header: 'Vendor Name' },
		{ accessorKey: 'old_survey', header: 'Old Survey' },
		{ accessorKey: 'new_survey', header: 'New survey' },
		{ accessorKey: 'extent', header: 'Extent ( in acre )' },
		{ accessorKey: 'patta_no', header: 'Patta No' },
		{ accessorKey: 'document_availability', header: 'Availability of Document (yes / no)' },
		{ accessorKey: 'land_usage', header: 'Land Usage' },
		{ accessorKey: 'land_type', header: 'Land Type' },
		{ accessorKey: 'remarks', header: 'Remark' },
	];
};

const useCemeteryColumns = (): ColumnDef<CemeteryEntry>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<CemeteryEntry>(handleSelectRow, handleEditRow),

		{ accessorKey: 'cemetery_number', header: 'Cemetery Number' },
		{ accessorKey: 'for_family', header: 'For Family' },
		{ accessorKey: 'maintained_by', header: 'Maintained by' },
		{ accessorKey: 'mobile', header: 'Mobile' },
		{ accessorKey: 'parish', header: 'Parish' },
		{ accessorKey: 'cemetery_at', header: 'Cemetery at' },
		{ accessorKey: 'address', header: 'Address' },

		{
			accessorKey: 'dug_on',
			header: 'Dug on (Last time)',
			cell: ({ getValue }) => {
				const date = getValue<string>();
				if (!date) return '-';
				return new Date(date).toLocaleDateString('en-IN', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				});
			},
		},
	];
};

const useChurchInventoryColumns = (): ColumnDef<ChurchInventoryEntry>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ChurchInventoryEntry>(handleSelectRow, handleEditRow),

		{ accessorKey: 'sub_station_name', header: 'Sub-Station / Main-Station' },
		{ accessorKey: 'thing_name', header: "Thing's Name" },
		{ accessorKey: 'thing_no', header: 'Thing Id / No' },
		{ accessorKey: 'category_content', header: 'Category' },

		{
			accessorKey: 'rate',
			header: 'Rate per item',
			cell: ({ getValue }) => {
				const value = Number(getValue() ?? 0);
				return value ? `₹${value.toLocaleString('en-IN')}` : '-';
			},
		},

		{ accessorKey: 'quantity', header: 'Quantity' },

		{
			accessorKey: 'price',
			header: 'Price',
			cell: ({ getValue }) => {
				const value = Number(getValue() ?? 0);
				return value ? `₹${value.toLocaleString('en-IN')}` : '-';
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + Number(row.original.price ?? 0), 0);
				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},

		{ accessorKey: 'buyer_type', header: 'Purchased / Sponsored' },
		{ accessorKey: 'buyer_name', header: 'Name of the Purchased / Sponsored Person' },

		{
			accessorKey: 'buying_date',
			header: 'Date on',
			cell: ({ getValue }) => {
				const date = getValue<string>();
				if (!date) return '-';
				return new Date(date).toLocaleDateString('en-IN', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				});
			},
		},

		{ accessorKey: 'own_for', header: 'Property Own For' },
	];
};

const useOtherInventorColumns = (): ColumnDef<OtherInventoryEntry>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<OtherInventoryEntry>(handleSelectRow, handleEditRow),

		{ accessorKey: 'thing_name', header: "Thing's Name" },
		{ accessorKey: 'thing_no', header: 'Thing Id / No' },
		{ accessorKey: 'category_content', header: 'Category' },

		{
			accessorKey: 'rate',
			header: 'Rate per item',
			cell: ({ getValue }) => {
				const value = Number(getValue() ?? 0);
				return value ? `₹${value.toLocaleString('en-IN')}` : '-';
			},
		},

		{ accessorKey: 'quantity', header: 'Quantity' },

		{
			accessorKey: 'price',
			header: 'Price',
			cell: ({ getValue }) => {
				const value = Number(getValue() ?? 0);
				return value ? `₹${value.toLocaleString('en-IN')}` : '-';
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + Number(row.original.price ?? 0), 0);
				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},

		{ accessorKey: 'buyer_type', header: 'Purchased / Sponsored' },
		{ accessorKey: 'buyer_name', header: 'Name' },

		{
			accessorKey: 'buying_date',
			header: 'Date on',
			cell: ({ getValue }) => {
				const date = getValue<string>();
				if (!date) return '-';
				return new Date(date).toLocaleDateString('en-IN', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				});
			},
		},

		{ accessorKey: 'own_for', header: 'Property Own For' },
	];
};

export {
	getVendorDynamicColumns,
	getCemeteryDynamicColumns,
	useRentPropertyColumns,
	useLandRegistrationColumns,
	useCemeteryColumns,
	useChurchInventoryColumns,
	useOtherInventorColumns,
};
