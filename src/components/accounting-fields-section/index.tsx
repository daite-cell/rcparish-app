import { InfoHeadingTitle, InputWithLabel } from '@/components';
import type { Control, FieldValues, Path } from 'react-hook-form';

type FieldConfig<T extends FieldValues> = {
	name: Path<T>;
	label: string;
	placeholder?: string;
	disabled?: boolean;
};

type IncomeSectionProps<T extends FieldValues> = {
	title: string;
	control: Control<T>;
	baseName: Path<T>;
	fields: FieldConfig<T[keyof T]>[];
};
function AccountingFieldsSection<T extends FieldValues>({ title, control, baseName, fields }: IncomeSectionProps<T>) {
	return (
		<section>
			<InfoHeadingTitle style="uppercase !text-xs" title={title} />
			{fields.map((field) => (
				<InputWithLabel
					key={field.name}
					control={control}
					name={`${baseName}.${field.name}` as Path<T>}
					label={field.label}
					placeholder={field.placeholder ?? 'Enter the Amount'}
					disabled={field.disabled}
				/>
			))}
		</section>
	);
}

export default AccountingFieldsSection;
