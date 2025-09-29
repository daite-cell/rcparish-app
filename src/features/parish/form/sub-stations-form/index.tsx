import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormButton, CustomFormInput, ControlledRadioGroup, ControlledFileUpload } from '@/components';
import { subStationsFormSchema, type SubStationsFormType } from '../../validations';

const SubStationsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SubStationsFormType>({
		resolver: zodResolver(subStationsFormSchema),
		defaultValues: {
			hasSubStation: '',
			parishName: '',
			subStationName: '',
			churchAvailability: '',
			subStationChurchName: '',
			subStationHistory: '',
			catechistName: '',
			catechistMobile: '',
			image: undefined,
		},
	});
	const churchAvailability = useWatch({ control, name: 'churchAvailability' });

	const onSubmit = (data: SubStationsFormType) => {
		console.warn('Submitted Sub-Station:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<ControlledRadioGroup
				label="Do you have Sub-station in your Parish"
				name="hasSubStation"
				control={control}
				options={[
					{ label: 'Yes', value: 'yes' },
					{ label: 'No', value: 'no' },
				]}
				error={errors.hasSubStation?.message}
			/>

			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="parishName"
						label="Parish Name"
						error={errors.parishName?.message}
						placeholder="Enter the Parish Name"
					/>

					<CustomFormInput
						control={control}
						name="subStationName"
						label="Name of the Sub-Station"
						error={errors.subStationName?.message}
						placeholder="Enter the Sub-Station Name"
					/>

					<ControlledRadioGroup
						label="Church Availability"
						name="churchAvailability"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.churchAvailability?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					{churchAvailability === 'yes' && (
						<CustomFormInput
							control={control}
							name="subStationChurchName"
							label="Sub-station Church Name"
							error={errors.subStationChurchName?.message}
							placeholder="Enter the Church Name"
						/>
					)}

					<CustomFormInput
						control={control}
						name="subStationHistory"
						label="Sub-Station History (Optional)"
						error={errors.subStationHistory?.message}
						placeholder="Enter the Sub-Station History"
						type="textarea"
					/>

					<ControlledFileUpload name="image" control={control} label="Image" error={errors.image?.message} />
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="catechistName"
						label="Catechist Name (Optional)"
						error={errors.catechistName?.message}
						placeholder="Enter the Catechist Name"
					/>

					<CustomFormInput
						control={control}
						name="catechistMobile"
						label="Catechist Mobile Number (Optional)"
						error={errors.catechistMobile?.message}
						placeholder="Enter the Catechist Mobile Number"
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default SubStationsForm;
