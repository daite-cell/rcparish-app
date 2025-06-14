import { FormButton } from '@/components';

const RulesEditForm = () => {
	return (
		<div className="mt-5">
			<textarea
				title="parish_edit_data"
				id="parish_edit_data"
				name="paragraph_text"
				rows={6}
				className="w-full p-2 whitespace-pre-wrap border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
			/>
			<FormButton label="upload" />
		</div>
	);
};

export default RulesEditForm;
