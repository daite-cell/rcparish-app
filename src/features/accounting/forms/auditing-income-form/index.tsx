import { useFieldArray, useForm, useWatch, type Control, type FieldArrayWithId } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import {
	ControlledDateInputField,
	DisplayTotalAmount,
	FormButton,
	InfoHeadingTitle,
	AccountingFieldsSection,
	DynamicDataTable,
	CustomFormInput,
} from '@/components';
import { auditingIncomeSchema, type AuditingIncomeType } from '../../validations';
import { auditing_income_sections } from '../../data';
import type { ColumnDef } from '@tanstack/react-table';

export default function AuditingIncomeForm() {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<AuditingIncomeType>({
		resolver: zodResolver(auditingIncomeSchema),
		defaultValues: {
			monthly: {},
			special: {},
			diocese: {},
			rental: {},
			other: {},
			advance: {},
			grandTotal: 0,
			dynamicIncome: [{ title: '', details: 0 }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'dynamicIncome',
	});

	const columns: ColumnDef<FieldArrayWithId<AuditingIncomeType>>[] = React.useMemo(
		() => [
			{
				accessorFn: (row) => row.title,
				header: 'Title',
				cell: ({ row }) => (
					<CustomFormInput control={control} name={`dynamicIncome.${row.index}.title`} placeholder="Enter title" />
				),
			},
			{
				accessorFn: (row) => row.details,
				header: 'Details',
				cell: ({ row }) => (
					<CustomFormInput
						control={control}
						name={`dynamicIncome.${row.index}.details`}
						placeholder="Enter details"
						type="number"
					/>
				),
			},
		],
		[control]
	);

	const monthly = useWatch({ control, name: 'monthly' });
	const special = useWatch({ control, name: 'special' });
	const diocese = useWatch({ control, name: 'diocese' });
	const rental = useWatch({ control, name: 'rental' });
	const other = useWatch({ control, name: 'other' });
	const advance = useWatch({ control, name: 'advance' });

	const dynamicIncome = useWatch({ control, name: 'dynamicIncome' });

	const calcSubTotal = (sectionValues: Record<string, unknown>) => {
		return Object.entries(sectionValues || {})
			.filter(([key]) => key !== 'subTotal')
			.reduce((sum, [, val]) => {
				const num = Number(val);
				return sum + (isNaN(num) ? 0 : num);
			}, 0);
	};

	React.useEffect(() => {
		const totals = {
			monthlyTotal: calcSubTotal(monthly),
			specialTotal: calcSubTotal(special),
			dioceseTotal: calcSubTotal(diocese),
			rentalTotal: calcSubTotal(rental),
			otherTotal: calcSubTotal(other),
			advanceTotal: calcSubTotal(advance),
		};

		setValue('monthly.subTotal', totals.monthlyTotal);
		setValue('special.subTotal', totals.specialTotal);
		setValue('diocese.subTotal', totals.dioceseTotal);
		setValue('rental.subTotal', totals.rentalTotal);
		setValue('other.subTotal', totals.otherTotal);
		setValue('advance.subTotal', totals.advanceTotal);

		const dynamicTotal = dynamicIncome?.reduce((sum, item) => sum + Number(item.details || 0), 0) || 0;

		setValue('grandTotal', Object.values(totals).reduce((acc, val) => acc + val, 0) + dynamicTotal);
	}, [monthly, special, diocese, rental, other, advance, dynamicIncome, setValue]);

	const onSubmit = (data: AuditingIncomeType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			<InfoHeadingTitle style="uppercase !text-xs" title="FOR AUDITING - INCOME" />
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

			{auditing_income_sections.map((section) => (
				<AccountingFieldsSection
					key={section.baseName}
					title={section.title}
					control={control as Control<AuditingIncomeType>}
					baseName={section.baseName as keyof AuditingIncomeType}
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
					<FormButton type="button" onClick={() => append({ title: '', details: 0 })} label="Add" />
					<FormButton type="button" onClick={() => remove(fields.length - 1)} label="Remove" />
				</div>

				<div className="mt-2 ml-8  text-xs">
					Sub Total: {dynamicIncome?.reduce((sum, item) => sum + Number(item.details || 0), 0) || 0}
				</div>
			</div>

			<DisplayTotalAmount
				control={control}
				fieldNames={[
					'monthly.subTotal',
					'special.subTotal',
					'diocese.subTotal',
					'rental.subTotal',
					'other.subTotal',
					'advance.subTotal',
				]}
			/>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
}
