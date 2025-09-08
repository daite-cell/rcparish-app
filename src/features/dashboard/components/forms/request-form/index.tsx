import { CustomFormInput, FormButton, SingleSelectDropdown } from '@/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { requestSchema, type RequestFormValues } from '@/features/dashboard/validations';

const parishOptions = [
	{ label: "St. Mary's Parish", value: 'st_mary' },
	{ label: "St. Joseph's Parish", value: 'st_joseph' },
];

const priestOptions = [
	{ label: 'Fr. Thomas', value: 'fr_thomas' },
	{ label: 'Fr. George', value: 'fr_george' },
];

const requestForOptions = [
	{ label: 'Marriage Certificate', value: 'marriage' },
	{ label: 'Baptism Certificate', value: 'baptism' },
	{ label: 'Death Certificate', value: 'death' },
];

const RequestForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RequestFormValues>({
		resolver: zodResolver(requestSchema),
		defaultValues: {
			parish: '',
			priests: '',
			requestFor: '',
			description: '',
		},
	});

	const onSubmit = (data: RequestFormValues) => {
		console.warn('Submitted Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4">
			<div className="flex flex-wrap items-start w-full gap-4">
				<div className="border border-gray-300 rounded-md p-4 space-y-3 flex-1 sm:w-[300px]">
					<SingleSelectDropdown
						label="Parish Name"
						name="parish"
						control={control}
						options={parishOptions}
						error={errors.parish?.message}
					/>
					<SingleSelectDropdown
						label="Priest Name"
						name="priests"
						control={control}
						options={priestOptions}
						error={errors.priests?.message}
					/>
				</div>

				<div className="border border-gray-300 rounded-md p-4 w-full flex-1 sm:w-[300px]">
					<SingleSelectDropdown
						label="Request For"
						name="requestFor"
						control={control}
						options={requestForOptions}
						error={errors.requestFor?.message}
					/>
				</div>

				<div className="border border-gray-300 rounded-md p-4 w-full flex-1 sm:w-[300px]">
					<CustomFormInput
						label="Request Description"
						name="description"
						control={control}
						type="textarea"
						placeholder="Describe your request"
						error={errors.description?.message}
						className="rounded-[2px]"
					/>
				</div>
			</div>

			<FormButton label="Submit" type="submit" />
		</form>
	);
};

export default RequestForm;
