import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	AdminDefaultImage,
	ControlledFileUpload,
	ControlledRadioGroup,
	CustomFormInput,
	FormButton,
	SingleSelectDropdown,
} from '@/components';
import { parishPlaceNameOptions, vicariateOptions } from '../../../../forms-options-data';
import { parishesSchema, type ParishesType } from '../../validations';
import { Label } from '@radix-ui/react-label';

const ParishesForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ParishesType>({
		resolver: zodResolver(parishesSchema),
		defaultValues: { parishMobile: 'separate' },
	});
	const parishMobile = useWatch({ control, name: 'parishMobile' });

	const onSubmit = (data: ParishesType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				{/* Block 1 */}
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<div className="flex items-center relative">
						<span className="mx-2 h-7 mt-6 w-[4px] bg-red-700 absolute -left-5"></span>
						<SingleSelectDropdown
							control={control}
							name="parishPlaceName"
							label="Parish Name (Place Name)"
							placeholder="Select Parish Place Name"
							options={parishPlaceNameOptions}
							error={errors.parishPlaceName?.message}
						/>
					</div>

					<SingleSelectDropdown
						control={control}
						name="vicariate"
						label="Select the Vicariate"
						placeholder="Select Vicariate"
						options={vicariateOptions}
						error={errors.vicariate?.message}
					/>

					<CustomFormInput
						control={control}
						name="patronName"
						label="Name of the Patron (Church Name)"
						placeholder="Enter Patron / Church Name"
						error={errors.patronName?.message}
					/>

					<ControlledRadioGroup
						label="Does it have Sub-Station?"
						name="hasSubStation"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.hasSubStation?.message}
					/>

					<SingleSelectDropdown
						name="runBy"
						label="Run by"
						control={control}
						options={[
							{ label: 'Diocese', value: 'diocese' },
							{ label: 'Religious', value: 'religious' },
							{ label: 'Others', value: 'others' },
						]}
						placeholder="Select Run By"
						error={errors.runBy?.message}
					/>
				</div>

				{/* Block 2 */}
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						label="Is it Mission Station?"
						name="isMissionStation"
						control={control}
						options={[
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						]}
						error={errors.isMissionStation?.message}
					/>

					<ControlledRadioGroup
						label="Parish Mobile Number"
						name="parishMobile"
						control={control}
						options={[
							{ label: 'Same as Present Parish Priest', value: 'same' },
							{ label: 'Separate', value: 'separate' },
						]}
						error={errors.parishMobile?.message}
					/>

					{parishMobile === 'separate' ? (
						<CustomFormInput
							control={control}
							name="separateMobileNumber"
							label="Separate Mobile Number"
							placeholder="Enter Separate Mobile Number"
							error={errors.separateMobileNumber?.message}
						/>
					) : (
						<CustomFormInput
							control={control}
							name="parishPriestMobile"
							label="Parish Priest Mobile Number"
							placeholder="Enter Parish Priest Mobile Number"
							error={errors.parishPriestMobile?.message}
						/>
					)}

					<CustomFormInput
						control={control}
						name="parishEmail"
						label="Parish Mail ID"
						placeholder="Enter Parish Mail ID"
						error={errors.parishEmail?.message}
					/>

					<CustomFormInput
						control={control}
						type="textarea"
						name="parishAddress"
						label="Address (Optional)"
						placeholder="Enter Address"
						error={errors.parishAddress?.message}
					/>

					<ControlledFileUpload
						name="parishImage"
						control={control}
						label="Parish Image"
						error={errors.parishImage?.message}
					/>
				</div>

				{/* Block 3 */}
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="presentParishPriest"
						label="Present Parish Priest"
						placeholder="Enter Present Parish Priest Name"
						error={errors.presentParishPriest?.message}
					/>

					<CustomFormInput
						control={control}
						name="presentParishPriestMobile"
						label="Parish Priest Mobile Number"
						placeholder="Enter Parish Priest Mobile Number"
						error={errors.presentParishPriestMobile?.message}
					/>

					<CustomFormInput
						control={control}
						name="presentParishPriestEmail"
						label="Parish Priest Mail ID"
						placeholder="Enter Parish Priest Mail ID"
						error={errors.presentParishPriestEmail?.message}
					/>

					<Label className="text-xs">Priest Image (Auto Display)</Label>
					<AdminDefaultImage className="mt-5" />
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default ParishesForm;
