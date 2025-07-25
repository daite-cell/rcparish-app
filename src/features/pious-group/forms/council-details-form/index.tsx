import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	SingleSelectDropdown,
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	TableHeading,
	ControlledRadioGroup,
} from '@/components';

import { subStationOptions } from '@/forms-options-data';
import { councilDetailSchema, type CouncilDetailFormType } from '../../validation';

const CouncilDetailsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CouncilDetailFormType>({
		resolver: zodResolver(councilDetailSchema),
		defaultValues: {},
	});

	const onSubmit = (data: CouncilDetailFormType) => {
		console.warn('Submitted Rent Type:', data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<TableHeading text="PARTICULARS ABOUT PARISH COUNCIL" className="!ml-0 mb-5 underline" />
					<SingleSelectDropdown
						control={control}
						label="Main-Station"
						options={subStationOptions}
						placeholder="Select Sub-Station"
						name="mainStationName"
						error={errors.mainStationName?.message}
					/>
					<ControlledDateInputField
						label="General Election Conducted On"
						name="electionConductedOn"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.electionConductedOn?.message}
						type="date"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<TableHeading text="PARTICULARS ABOUT PARISH COUNCIL MEMBERS" className="!ml-0 mb-5 underline" />
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
					<TableHeading text="PARTICULARS ABOUT PARISH COUNCIL MEMBERS" className="!ml-0 mb-5 underline" />
					<ControlledDateInputField
						label="Period End on"
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

export default CouncilDetailsForm;
