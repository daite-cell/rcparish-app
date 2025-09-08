import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
} from '@/components';
import { subStationOptions } from '@/forms-options-data';
import { anbiamsSchema, type AnbiamsType } from '../../validation';

const AnbiamsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<AnbiamsType>({
		resolver: zodResolver(anbiamsSchema),
		defaultValues: {},
	});

	const onSubmit = (data: AnbiamsType) => {
		console.warn('Submitted Anbiam Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="parishName"
						label="Parish Name"
						error={errors.parishName?.message}
						placeholder="Enter Parish Name"
					/>
					<SingleSelectDropdown
						control={control}
						label="Select the Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Sub-Station"
						name="subStationName"
						error={errors.subStationName?.message}
					/>
					<CustomFormInput
						control={control}
						name="anbiamName"
						label="Name of the Anbiam"
						error={errors.anbiamName?.message}
						placeholder="Enter Anbiam Name"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="anbiamShortForm"
						label="Anbiam Short Form"
						error={errors.anbiamShortForm?.message}
						placeholder="Enter Short Form"
					/>
					<ControlledDateInputField
						label="Elected On"
						name="electedOn"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.electedOn?.message}
						type="date"
					/>
					<CustomFormInput
						control={control}
						name="periodYears"
						label="Period of (How many years)"
						error={errors.periodYears?.message}
						placeholder="Enter duration in years"
					/>
					<ControlledRadioGroup
						label="Do you want to extend the period?"
						name="extendPeriod"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.extendPeriod?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Period End On"
						name="periodEndOn"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.periodEndOn?.message}
						type="date"
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default AnbiamsForm;
