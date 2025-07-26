import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { CustomTextarea, FormButton } from '@/components';
import { historyFormSchema, type HistoryFormType } from '../../validations';

const HistoryForm = ({ onSubmit }: { onSubmit?: (data: HistoryFormType) => void }) => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<HistoryFormType>({
		resolver: zodResolver(historyFormSchema),
	});

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setValue('document', file);
		}
	};

	const handleFormSubmit = (data: HistoryFormType) => {
		onSubmit?.(data);
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-3 mt-5">
			<div>
				<label htmlFor="document-upload" className="text-[12px] font-bold">
					Upload / Update the image of the Parish (Optional)
				</label>
				<Input
					type="file"
					id="document-upload"
					name="document"
					onChange={handleFileChange}
					className="block p-0 mt-2 text-xs text-gray-900 border-none file:mr-4 file:py-1 file:px-2 file:rounded file:border file:border-gray-300 file:text-xs file:font-normal file:bg-gray-100 file:text-gray-700"
				/>
			</div>

			<div className="space-y-1">
				<label htmlFor="parish-history" className="text-[12px] font-bold">
					Write a brief history of the Parish
				</label>
				<CustomTextarea id="parish-history" {...register('parishHistory')} name="parishHistory" rows={10} />
				{errors.parishHistory && <p className="text-xs text-red-500">{errors.parishHistory.message}</p>}
			</div>

			<FormButton type="submit" label="Upload" />
		</form>
	);
};

export default HistoryForm;
