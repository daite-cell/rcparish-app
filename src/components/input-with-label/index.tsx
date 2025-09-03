import { Label } from '@/components/ui/label';
import CustomFormInput from '../custom-form-input';
import type { Control, FieldValues, Path } from 'react-hook-form';

type InputWithLabelProps<T extends FieldValues> = {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder?: string;
	error?: string;
	className?: string;
	disabled?: boolean;
};

const InputWithLabel = <T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	error,
	className,
	disabled = false,
}: InputWithLabelProps<T>) => {
	return (
		<div className="w-full flex my-2 items-center">
			<Label className="w-full text-[12px] font-normal">{label}</Label>
			<div className="w-full">
				<CustomFormInput
					control={control}
					name={name}
					placeholder={placeholder}
					error={error}
					className={className ?? 'w-full text-[12px] font-normal'}
					disabled={disabled} // ✅ pass down
				/>
			</div>
		</div>
	);
};

export default InputWithLabel;
