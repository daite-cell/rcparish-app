import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormButton, CustomFormInput, ControlledFileUpload } from '@/components';
import { formNotificationsFormSchema, type FormNotificationsFormType } from '../../validations';

const FormNotificationsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormNotificationsFormType>({
		resolver: zodResolver(formNotificationsFormSchema),
	});

	const onSubmit = (data: FormNotificationsFormType) => {
		console.warn('Submitted Notification:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="title"
						label="Title"
						error={errors.title?.message}
						placeholder="Enter the Title"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledFileUpload
						enableImagePreview={false}
						name="document"
						control={control}
						label="Upload Document ( If Any )"
						error={errors.document?.message}
					/>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default FormNotificationsForm;
