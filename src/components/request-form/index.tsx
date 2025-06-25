import { CustomFormInput, FormButton, SingleSelectDropdown } from '../index';

const RequestForm = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<div className="flex flex-wrap items-start w-full gap-4">
				<div className="border border-gray-300 rounded-md p-4 space-y-3 flex-1 sm:w-[300px]">
					<SingleSelectDropdown label="Parish Name" />
					<SingleSelectDropdown label="Priest Name" />
				</div>
				<div className="border border-gray-300 rounded-md p-4 w-full flex-1  sm:w-[300px]">
					<SingleSelectDropdown label="Request For" />
				</div>
				<div className="border border-gray-300 rounded-md p-4 w-full flex-1  sm:w-[300px]">
					<CustomFormInput type="textarea" label="Request Description" className="rounded-[2px]" />
				</div>
			</div>
			<FormButton label="Submit" />
		</div>
	);
};

export default RequestForm;
