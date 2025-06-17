import CustomTextarea from '../custom-textarea';
import FormButton from '../form-button';
import { Input } from '../ui/input';

const HistoryForm = () => {
	return (
		<div className="space-y-3 mt-5 ">
			<div>
				<label htmlFor="document-upload" className="text-[12px] font-bold ">
					Upload / Update the image of the Parish ( Optional )
				</label>
				<Input
					type="file"
					id="document-upload"
					name="document"
					className="block p-0 mt-2 text-xs text-gray-900 border-none file:mr-4 file:py-1 file:px-2 file:rounded file:border file:border-gray-300 file:text-xs file:font-normal file:bg-gray-100 file:text-gray-700"
				/>
			</div>
			<div className="space-y-2">
				<label htmlFor="document-upload" className="text-[12px] font-bold   ">
					Write a brief history of the Parish
				</label>
				<CustomTextarea rows={10} />
			</div>
			<FormButton label="upload" />
		</div>
	);
};

export default HistoryForm;
