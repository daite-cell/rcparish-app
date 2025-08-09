import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
	ControlledDateInputField,
	ControlledFileUpload,
	ControlledRadioGroup,
	CustomFormInput,
	FormButton,
	SingleSelectDropdown,
} from '@/components';
import { landTypeOptions, parishNameOptions, vicariateOptions } from '../../../../forms-options-data';
import { propertiesSchema, type PropertiesType } from '../../validations';

const PropertiesForm = () => {
	const {
		control,
		handleSubmit,
		setValue,
		watch,
		resetField,
		formState: { errors },
	} = useForm<PropertiesType>({
		resolver: zodResolver(propertiesSchema),
	});

	const [registrationDates, setRegistrationDates] = useState<string[]>([]);
	const electionConductedOn = watch('electionConductedOn');

	const handleAddDate = () => {
		if (!electionConductedOn) return;

		const formattedDate = new Date(electionConductedOn).toLocaleDateString('en-GB');
		if (!registrationDates.includes(formattedDate)) {
			const updatedDates = [...registrationDates, formattedDate];
			setRegistrationDates(updatedDates);
			setValue('registrationDates', updatedDates.join(' & '));
		}
		resetField('electionConductedOn');
	};

	const handleClearDates = () => {
		setRegistrationDates([]);
		setValue('registrationDates', '');
	};

	const onSubmit = (data: PropertiesType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						name="vicariate"
						label="Select the Vicariate"
						placeholder="Select Vicariate"
						options={vicariateOptions}
						error={errors.vicariate?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="parish"
						label="Parish Name (Place Name)"
						placeholder="Select Parish"
						options={parishNameOptions}
						error={errors.parish?.message}
					/>
					<CustomFormInput
						control={control}
						name="villageName"
						label="Village Name"
						placeholder="Enter Village Name"
						error={errors.villageName?.message}
					/>
					<CustomFormInput
						control={control}
						name="documentNumber"
						label="Document Number (as per Register)"
						placeholder="Enter Document Number"
						error={errors.documentNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="registrationDates"
						label="Date of Registration"
						placeholder="Enter Registration Dates"
						error={errors.registrationDates?.message}
					/>
					<div className="flex gap-4 items-end">
						<ControlledDateInputField
							name="electionConductedOn"
							control={control}
							placeholder="dd/mm/yyyy"
							type="date"
							error={errors.electionConductedOn?.message}
						/>
						<FormButton type="button" onClick={handleAddDate} label="Add" />
						{registrationDates.length > 0 && <FormButton type="button" onClick={handleClearDates} label="Clear" />}
					</div>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="purchasingAmount"
						label="Purchasing Amount"
						placeholder="Enter Purchasing Amount"
						error={errors.purchasingAmount?.message}
					/>
					<CustomFormInput
						control={control}
						name="purchaserName"
						label="Purchaser Name"
						placeholder="Enter Purchaser Name"
						error={errors.purchaserName?.message}
					/>
					<CustomFormInput
						control={control}
						name="vendorName"
						label="Vendor Name"
						placeholder="Enter Vendor Name"
						error={errors.vendorName?.message}
					/>
					<CustomFormInput
						control={control}
						name="oldSurvey"
						label="Old Survey"
						placeholder="Enter Old Survey Number"
						error={errors.oldSurvey?.message}
					/>
					<CustomFormInput
						control={control}
						name="newSurvey"
						label="New Survey"
						placeholder="Enter New Survey Number"
						error={errors.newSurvey?.message}
					/>
					<CustomFormInput
						control={control}
						name="extent"
						label="Extent"
						placeholder="Enter Extent"
						error={errors.extent?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="pattaNumber"
						label="Patta No"
						placeholder="Enter Patta Number"
						error={errors.pattaNumber?.message}
					/>
					<ControlledRadioGroup
						label="Availability of Document"
						name="availabilityOfDocument"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.availabilityOfDocument?.message}
					/>
					<ControlledFileUpload name="image" control={control} label="Image" error={errors.image?.message} />
					<ControlledRadioGroup
						label="Usage of Land"
						name="usageOfLand"
						control={control}
						options={[
							{ label: 'In Use', value: 'in_use' },
							{ label: 'Not In Use', value: 'not_in_use' },
						]}
						error={errors.usageOfLand?.message}
					/>
					<SingleSelectDropdown
						control={control}
						name="typeOfLand"
						label="Type of Land"
						placeholder="Select Type of Land"
						options={landTypeOptions}
						error={errors.typeOfLand?.message}
					/>
					<CustomFormInput
						control={control}
						name="remarks"
						label="Remarks"
						placeholder="Enter Remarks"
						type="textarea"
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default PropertiesForm;
