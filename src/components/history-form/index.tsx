import CustomTextarea from '../custom-textarea';
import FormButton from '../form-button';
import { Input } from '../ui/input';
import React from 'react';

interface HistoryFormProps {
	onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const HistoryForm = ({ onSubmit }: HistoryFormProps) => {
	return (
		<form onSubmit={onSubmit} className="space-y-3 mt-5">
			<div>
				<label htmlFor="document-upload" className="text-[12px] font-bold">
					Upload / Update the image of the Parish (Optional)
				</label>
				<Input
					type="file"
					id="document-upload"
					name="document"
					className="block p-0 mt-2 text-xs text-gray-900 border-none file:mr-4 file:py-1 file:px-2 file:rounded file:border file:border-gray-300 file:text-xs file:font-normal file:bg-gray-100 file:text-gray-700"
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="parish-history" className="text-[12px] font-bold">
					Write a brief history of the Parish
				</label>
				<CustomTextarea id="parish-history" name="parishHistory" rows={10} />
			</div>

			<FormButton type="submit" label="Upload" />
		</form>
	);
};

export default HistoryForm;
