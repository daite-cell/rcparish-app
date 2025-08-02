import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormButton, UploadPriestNameHeading } from '@/components';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useStore } from '@/store/store';
import { uploadSchema, type UploadSchema } from '../../validations';

const UploadFileComponent = () => {
	const { handleCloseUploadedFileRow } = useStore();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<UploadSchema>({
		resolver: zodResolver(uploadSchema),
	});

	const [uploading, setUploading] = useState(false);

	const onSubmit = (data: UploadSchema) => {
		setUploading(true);

		const formData = new FormData();
		formData.append('document', data.document[0]);

		setTimeout(() => {
			alert(`File "${data.document[0].name}" uploaded successfully`);
			setUploading(false);
			reset();
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-full gap-5">
			<UploadPriestNameHeading name="Most Rev Fr. Ambrose Picharmuthu" />
			<h1 className="text-xs">( 2024-12-09 to Till Now )</h1>

			<div>
				<label htmlFor="document-upload" className="text-[12px] font-bold">
					To upload brief history (Maximum File Size Limit 5 MB)
				</label>

				<div className="text-[#343148] mt-5 w-[80%] m-auto">
					<Input
						type="file"
						id="document-upload"
						{...register('document')}
						accept="application/pdf,application/vnd.ms-excel"
						className="block rounded-none w-full h-7 mt-2 p-0 text-xs text-gray-900 bg-primary border-none
              file:mr-1 file:py-1 file:px-2 file:rounded-none
              file:border file:border-gray-300
              file:text-xs file:font-normal
              file:bg-gray-100 file:text-gray-700"
					/>
					{errors.document && <p className="text-xs text-red-500 mt-1">{errors.document.message as string}</p>}
				</div>
			</div>

			<div className="flex gap-3">
				<FormButton type="submit" label={uploading ? 'Uploading...' : 'Upload'} disabled={uploading} />
				<FormButton type="button" label="Close" onClick={handleCloseUploadedFileRow} />
			</div>
		</form>
	);
};

export default UploadFileComponent;
