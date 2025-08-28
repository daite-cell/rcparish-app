import { useForm, useWatch, type Control } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import {
	ControlledDateInputField,
	DisplayTotalAmount,
	FormButton,
	InfoHeadingTitle,
	AccountingFieldsSection,
} from '@/components';
import { auditingIncomeSchema, type AuditingIncomeType } from '../../validations';
import { auditing_income_sections } from '../../data';

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
		},
	});

	const monthly = useWatch({ control, name: 'monthly' });
	const special = useWatch({ control, name: 'special' });
	const diocese = useWatch({ control, name: 'diocese' });
	const rental = useWatch({ control, name: 'rental' });
	const other = useWatch({ control, name: 'other' });
	const advance = useWatch({ control, name: 'advance' });

	const calcSubTotal = (sectionValues: Record<string, unknown>) => {
		return Object.entries(sectionValues || {})
			.filter(([key]) => key !== 'subTotal')
			.reduce((sum, [, val]) => {
				const num = Number(val);
				return sum + (isNaN(num) ? 0 : num);
			}, 0);
	};

	React.useEffect(() => {
		const monthlyTotal = calcSubTotal(monthly);
		const specialTotal = calcSubTotal(special);
		const dioceseTotal = calcSubTotal(diocese);
		const rentalTotal = calcSubTotal(rental);
		const otherTotal = calcSubTotal(other);
		const advanceTotal = calcSubTotal(advance);

		setValue('monthly.subTotal', monthlyTotal);
		setValue('special.subTotal', specialTotal);
		setValue('diocese.subTotal', dioceseTotal);
		setValue('rental.subTotal', rentalTotal);
		setValue('other.subTotal', otherTotal);
		setValue('advance.subTotal', advanceTotal);

		setValue('grandTotal', monthlyTotal + specialTotal + rentalTotal + otherTotal + advanceTotal);
	}, [monthly, special, diocese, rental, other, advance, setValue]);

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
