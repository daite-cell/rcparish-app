import { Label } from '@/components/ui/label';
import { Controller, type Control, type FieldValues, type Path, type PathValue } from 'react-hook-form';

interface ControlledTimeInputFieldProps<T extends FieldValues> {
	label?: string;
	name: Path<T>;
	control: Control<T>;
	placeholder?: string;
	disabled?: boolean;
	error?: string;
	defaultValue?: string;
}

function ControlledTimeInputField<T extends FieldValues>({
	label,
	name,
	control,
	placeholder = 'hh:mm',
	disabled = false,
	error,
	defaultValue,
}: ControlledTimeInputFieldProps<T>) {
	return (
		<div className="w-full">
			{label && (
				<Label htmlFor={name} className="px-1 text-[12px] font-normal">
					{label}
				</Label>
			)}

			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue as PathValue<T, Path<T>>}
				render={({ field }) => (
					<div className="relative mt-2">
						<input
							type="time"
							value={field.value || ''}
							onChange={(e) => field.onChange(e.target.value)}
							disabled={disabled}
							placeholder={placeholder}
							className="w-full h-8 rounded-[2px] border px-2 pr-8 text-[12px] focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
						/>
					</div>
				)}
			/>

			{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
		</div>
	);
}

export default ControlledTimeInputField;
