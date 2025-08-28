import { useForm, useFieldArray, Controller, type Control } from 'react-hook-form';
import { type ColumnDef } from '@tanstack/react-table';
import { DynamicDataTable } from '@/components';
type AuditingProps = {
	description: string;
	amount: number;
};
type FormValues = {
	auditing: AuditingProps[];
};

const useAuditingColumns = (
	control: Control<FormValues>,
	remove: (index: number) => void
): ColumnDef<AuditingProps>[] => [
	{
		accessorKey: 'description',
		header: 'Title',
		cell: ({ row }) => {
			const index = row.index;
			return (
				<Controller
					control={control}
					name={`auditing.${index}.description`}
					render={({ field }) => <input {...field} className="border p-1 rounded w-full" placeholder="Enter title" />}
				/>
			);
		},
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
		cell: ({ row }) => {
			const index = row.index;
			return (
				<Controller
					control={control}
					name={`auditing.${index}.amount`}
					render={({ field }) => (
						<input {...field} type="number" className="border p-1 rounded w-full" placeholder="Enter amount" />
					)}
				/>
			);
		},
	},
	{
		id: 'actions',
		header: 'Action',
		cell: ({ row }) => (
			<button type="button" onClick={() => remove(row.index)} className="px-2 py-1 bg-red-500 text-white rounded">
				Delete
			</button>
		),
	},
];

export const AuditingForm = () => {
	const { control, handleSubmit } = useForm<FormValues>({
		defaultValues: { auditing: [] },
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'auditing',
	});

	const columns = useAuditingColumns(control, remove);

	const onSubmit = (data: FormValues) => {
		console.warn('Form Submitted:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<button
				type="button"
				onClick={() => append({ description: '', amount: 0 })}
				className="px-4 py-2 bg-blue-600 text-white rounded-lg"
			>
				Add Row
			</button>

			<DynamicDataTable
				enableDateSorting={false}
				wrapText={false}
				data={fields} // 🔑 dynamic rows from useFieldArray
				customColumns={columns}
				showFooter={false}
			/>

			<button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg">
				Save
			</button>
		</form>
	);
};
