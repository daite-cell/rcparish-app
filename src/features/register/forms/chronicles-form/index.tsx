import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormButton,
	CustomFormInput,
	ControlledDateInputField,
	ControlledRadioGroup,
	ControlledFileUpload,
} from '@/components';
import { chroniclesSchema, type ChroniclesType } from '../../validations';

const ChroniclesForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ChroniclesType>({
		resolver: zodResolver(chroniclesSchema),
		defaultValues: {},
	});

	const onSubmit = (data: ChroniclesType) => {
		console.warn('Submitted Chronicles Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						control={control}
						name="date"
						label="Date"
						placeholder="dd-mm-yyyy"
						error={errors.date?.message}
					/>

					<CustomFormInput
						control={control}
						name="event"
						label="Event"
						error={errors.event?.message}
						placeholder="Enter Event"
					/>

					<CustomFormInput
						control={control}
						name="description"
						label="Descriptions"
						error={errors.description?.message}
						placeholder="Enter Description"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						label="Attachment of Document"
						name="extendPeriod"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.extendPeriod?.message}
					/>
					<ControlledFileUpload
						name="image1"
						control={control}
						label="Add Image (Maximum size of 1MB)"
						error={errors.image1?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledFileUpload
						name="image2"
						control={control}
						label="Add Image (Maximum size of 1MB)"
						error={errors.image2?.message}
					/>
					<ControlledFileUpload
						name="image3"
						control={control}
						label="Add Image (Maximum size of 1MB)"
						error={errors.image3?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default ChroniclesForm;
