import { Controller, type Control, type FieldError, type FieldValues, type Path } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import AdminDefaultImage from '../admin-default-image';

interface ControlledFileUploadProps<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	label?: string;
	accept?: string;
	error?: FieldError | string;
}

const ControlledFileUpload = <T extends FieldValues>({
	name,
	control,
	label,
	accept = '',
	error,
}: ControlledFileUploadProps<T>) => {
	return (
		<div className="w-full text-xs">
			<AdminDefaultImage height={50} width={50} className="my-3" />
			{label && (
				<label htmlFor={name} className="block mb-1">
					{label}
				</label>
			)}

			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, ref } }) => (
					<Input
						type="file"
						id={name}
						ref={ref}
						accept={accept}
						onChange={(e) => {
							const file = e.target.files?.[0] ?? null;
							onChange(file);
						}}
						className="block w-full h-7 mt-2 p-0 text-xs text-gray-900  border-none rounded-none
                         file:mr-1 file:py-1 file:px-2 file:rounded-none
                         file:border file:border-gray-300
                         file:text-xs file:font-normal
                       file:bg-gray-100 file:text-gray-700"
					/>
				)}
			/>

			{error && <p className="text-xs text-red-500 mt-1">{typeof error === 'string' ? error : error.message}</p>}
		</div>
	);
};

export default ControlledFileUpload;
