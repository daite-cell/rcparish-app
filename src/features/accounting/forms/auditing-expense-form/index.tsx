import { useFieldArray, useForm, useWatch, type Control, type FieldArrayWithId } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import {
	ControlledDateInputField,
	DisplayTotalAmount,
	FormButton,
	InfoHeadingTitle,
	AccountingFieldsSection,
	DynamicDataTable,
	CustomFormInput,
} from '@/components';
import { auditingExpenseSchema, type AuditingExpenseType } from '../../validations';
import { auditing_expense_sections } from '../../data';
import type { ColumnDef } from '@tanstack/react-table';

export default function AuditingExpenseForm() {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<AuditingExpenseType>({
		resolver: zodResolver(auditingExpenseSchema),
		defaultValues: {
			administrativeExpenses: {},
			maintenance: {},
			contribution: {},
			hallMaintenance: {},
			otherExpenses: {},
			advance: {},
			closing: {},
			grandTotal: 0,
			dynamicExpenses: [{ title: '', amount: 0 }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'dynamicExpenses',
	});

	const columns: ColumnDef<FieldArrayWithId<AuditingExpenseType>>[] = React.useMemo(
		() => [
			{
				accessorFn: (row) => row.title,
				header: 'Title',
				cell: ({ row }) => (
					<CustomFormInput control={control} name={`dynamicExpenses.${row.index}.title`} placeholder="Enter title" />
				),
			},
			{
				accessorFn: (row) => row.amount,
				header: 'Amount',
				cell: ({ row }) => (
					<CustomFormInput
						control={control}
						name={`dynamicExpenses.${row.index}.amount`}
						placeholder="Enter amount"
						type="number"
					/>
				),
			},
		],
		[control]
	);

	const administrativeExpenses = useWatch({ control, name: 'administrativeExpenses' });
	const maintenance = useWatch({ control, name: 'maintenance' });
	const contribution = useWatch({ control, name: 'contribution' });
	const hallMaintenance = useWatch({ control, name: 'hallMaintenance' });
	const otherExpenses = useWatch({ control, name: 'otherExpenses' });
	const advance = useWatch({ control, name: 'advance' });
	const closing = useWatch({ control, name: 'closing' });

	const dynamicExpenses = useWatch({ control, name: 'dynamicExpenses' });

	const calcSubTotal = (sectionValues: Record<string, unknown>) => {
		return Object.entries(sectionValues || {})
			.filter(([key]) => key !== 'subTotal')
			.reduce((sum, [, val]) => {
				const num = Number(val);
				return sum + (isNaN(num) ? 0 : num);
			}, 0);
	};

	useEffect(() => {
		const totals = {
			administrativeExpenses: calcSubTotal(administrativeExpenses),
			maintenance: calcSubTotal(maintenance),
			contribution: calcSubTotal(contribution),
			hallMaintenance: calcSubTotal(hallMaintenance),
			otherExpenses: calcSubTotal(otherExpenses),
			advance: calcSubTotal(advance),
			closing: calcSubTotal(closing),
		};

		setValue('administrativeExpenses.subTotal', totals.administrativeExpenses);
		setValue('maintenance.subTotal', totals.maintenance);
		setValue('contribution.subTotal', totals.contribution);
		setValue('hallMaintenance.subTotal', totals.hallMaintenance);
		setValue('otherExpenses.subTotal', totals.otherExpenses);
		setValue('advance.subTotal', totals.advance);
		setValue('closing.subTotal', totals.closing);

		const dynamicTotal = dynamicExpenses?.reduce((sum, item) => sum + Number(item.amount || 0), 0) || 0;

		setValue('grandTotal', Object.values(totals).reduce((acc, val) => acc + val, 0) + dynamicTotal);
	}, [
		administrativeExpenses,
		maintenance,
		contribution,
		hallMaintenance,
		otherExpenses,
		advance,
		closing,
		dynamicExpenses,
		setValue,
	]);

	const onSubmit = (data: AuditingExpenseType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			<InfoHeadingTitle style="uppercase !text-xs" title="FOR AUDITING - EXPENSE" />

			<div className="w-full flex gap-6">
				<ControlledDateInputField
					label="From"
					name="fromDate"
					control={control}
					placeholder="dd/mm/yyyy"
					error={errors.fromDate?.message}
					type="date"
				/>
				<ControlledDateInputField
					label="To"
					name="toDate"
					control={control}
					placeholder="dd/mm/yyyy"
					error={errors.toDate?.message}
					type="date"
				/>
			</div>

			{auditing_expense_sections.map((section) => (
				<AccountingFieldsSection
					key={section.baseName}
					title={section.title}
					control={control as Control<AuditingExpenseType>}
					baseName={section.baseName as keyof AuditingExpenseType}
					fields={section.fields}
				/>
			))}

			<div>
				<InfoHeadingTitle style="uppercase !text-xs" title="OTHER PURPOSES" />

				<DynamicDataTable
					enableDateSorting={false}
					wrapText={false}
					data={fields}
					customColumns={columns}
					showFooter={false}
					enableExport={false}
					enablePagination={false}
					enableSearch={false}
				/>
				<div className="flex gap-4 mt-2 ml-8">
					<FormButton type="button" onClick={() => append({ title: '', amount: 0 })} label="Add" />
					<FormButton type="button" onClick={() => remove(fields.length - 1)} label="Remove" />
				</div>

				<div className="mt-2 ml-8  text-xs">
					Sub Total: {dynamicExpenses?.reduce((sum, item) => sum + Number(item.amount || 0), 0) || 0}
				</div>
			</div>

			<DisplayTotalAmount
				control={control}
				fieldNames={[
					'administrativeExpenses.subTotal',
					'maintenance.subTotal',
					'contribution.subTotal',
					'hallMaintenance.subTotal',
					'otherExpenses.subTotal',
					'advance.subTotal',
					'closing.subTotal',
				]}
			/>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
}
