import {
	CustomFormInput,
	FormButton,
	SingleSelectDropdown,
	ControlledDateInputField,
	ControlledRadioGroup,
	ControlledFileUpload,
} from '@/components';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sermonSchema, type SermonFormValues } from '../../../validations';

const yearOptions = ['A', 'B', 'C'].map((val) => ({ value: val, label: val }));
const seasonOptions = [
	{ label: 'Ordinary Time', value: 'ordinary' },
	{ label: 'Lent', value: 'lent' },
	{ label: 'Easter', value: 'easter' },
];

const SermonFormSection = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SermonFormValues>({
		resolver: zodResolver(sermonSchema),
		defaultValues: {
			year: 'A',
		},
	});

	const onSubmit = (data: SermonFormValues) => {
		console.warn('Form Submitted:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-3 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="writtenBy"
						type="text"
						label="Written By"
						error={errors.writtenBy?.message}
					/>

					<Label className="text-[12px] font-normal">Select the Year</Label>
					<ControlledRadioGroup name="year" control={control} options={yearOptions} error={errors.year?.message} />

					<SingleSelectDropdown
						label="Select Season"
						name="season"
						control={control}
						options={seasonOptions}
						error={errors.season?.message}
					/>

					<CustomFormInput
						control={control}
						name="week"
						type="text"
						label="Week"
						placeholder="Enter the week"
						error={errors.week?.message}
					/>
				</div>

				<div className="flex-1 w-full p-4 space-y-3 border border-gray-300 rounded-md">
					<ControlledDateInputField
						control={control}
						name="date"
						label="Date"
						placeholder="dd-mm-yyyy"
						error={errors.date?.message}
					/>

					<CustomFormInput
						control={control}
						name="day"
						type="text"
						label="Day"
						placeholder="Day"
						error={errors.day?.message}
					/>

					<ControlledFileUpload
						control={control}
						name="image"
						label="Upload Document ( If Any )"
						error={errors.image?.message}
						enableImagePreview={false}
					/>
				</div>

				<div className="flex-1 w-full p-4 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="description"
						type="textarea"
						label="Sermon Description (Unicode Format Only)"
						placeholder="Enter the brief description"
						error={errors.description?.message}
					/>
				</div>
			</div>

			<FormButton label="Submit" type="submit" />
		</form>
	);
};

export default SermonFormSection;
