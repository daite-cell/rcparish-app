import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ControlledDateInputField,
	ControlledFileUpload,
	ControlledRadioGroup,
	CustomFormInput,
	FormButton,
	InputWithCheckbox,
	SingleSelectDropdown,
} from '@/components';
import { currentLivingStatusOptions } from '../../../../forms-options-data';
import { priestsSchema, type PriestsType } from '../../validations';

const PriestsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<PriestsType>({
		resolver: zodResolver(priestsSchema),
	});

	const onSubmit = (data: PriestsType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledRadioGroup
						name="belongsTo"
						control={control}
						options={[
							{ label: 'Diocese', value: 'diocese' },
							{ label: 'Congregation', value: 'congregation' },
						]}
						label="Incadinated to"
						error={errors.belongsTo?.message}
					/>
					<CustomFormInput
						control={control}
						name="priestPermanentId"
						label="Priest Permanent Id"
						placeholder="Enter Priest Permanent Id"
						error={errors.priestPermanentId?.message}
					/>
					<CustomFormInput
						control={control}
						name="nameOfPriest"
						label="Name of the Priest"
						placeholder="Enter Name of the Priest"
						error={errors.nameOfPriest?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Living Status"
						options={currentLivingStatusOptions}
						placeholder="Select Living Status"
						name="livingStatus"
						error={errors.livingStatus?.message}
					/>
					<ControlledDateInputField
						label="Date of Priestly Ordination"
						name="priestOrdinationDate"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.priestOrdinationDate?.message}
					/>
					<CustomFormInput
						control={control}
						name="priestOrdinationPlace"
						label="Place of Priestly Ordination"
						placeholder="Enter Place of Ordination"
						error={errors.priestOrdinationPlace?.message}
					/>
					<ControlledDateInputField
						label="Date of Birth"
						name="dateOfBirth"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfBirth?.message}
					/>
					<CustomFormInput
						control={control}
						name="placeOfBirth"
						label="Place of Birth"
						placeholder="Enter Place of Birth"
						error={errors.placeOfBirth?.message}
					/>

					<InputWithCheckbox
						control={control}
						name="nativePlace"
						checkboxName="isSameAsBirthPlaceForPlace"
						label="Native Place"
						checkboxLabel="Same as Birth Place"
						placeholder="Enter Native Place"
						error={errors.nativePlace?.message}
					/>

					<InputWithCheckbox
						control={control}
						name="nativeParish"
						checkboxName="isSameAsBirthPlaceForParish"
						label="Native Parish"
						checkboxLabel="Same as Birth Parish"
						placeholder="Enter Native Parish"
						error={errors.nativeParish?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Date of Baptism (Optional)"
						name="dateOfBaptism"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfBaptism?.message}
					/>
					<InputWithCheckbox
						control={control}
						name="nativeBaptism"
						checkboxName="isSameAsBirthPlaceForParish"
						label="Place of Baptism"
						checkboxLabel="Same as Native Place"
						placeholder="Enter Place of Baptism"
						error={errors.nativeBaptism?.message}
					/>
					<ControlledDateInputField
						label="Date of First Profession (Optional)"
						name="dateOfFirstProfession"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfFirstProfession?.message}
					/>
					<CustomFormInput
						control={control}
						name="placeOfFirstProfession"
						label="Place of First Profession (Optional)"
						placeholder="Enter Place of First Profession"
						error={errors.placeOfFirstProfession?.message}
					/>
					<ControlledDateInputField
						label="Date of Diaconate (Optional)"
						name="dateOfDiaconate"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfDiaconate?.message}
					/>
					<CustomFormInput
						control={control}
						name="placeOfDiaconate"
						label="Place of Diaconate (Optional)"
						placeholder="Enter Place of Diaconate"
						error={errors.placeOfDiaconate?.message}
					/>
					<CustomFormInput
						control={control}
						name="mobileNumber"
						label="Mobile Number"
						placeholder="Enter Mobile Number"
						error={errors.mobileNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="optionalNumber"
						label="Optional Number"
						placeholder="Enter Optional Number"
						error={errors.optionalNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="email"
						label="Mail id"
						placeholder="Enter Email ID"
						error={errors.email?.message}
					/>
					<CustomFormInput
						control={control}
						name="aadhaarNumber"
						label="Adhaar Number (Optional)"
						placeholder="Enter Aadhaar Number"
						error={errors.aadhaarNumber?.message}
					/>
					<CustomFormInput
						control={control}
						name="presentAddress"
						label="Present Residential Address (Optional)"
						placeholder="Enter Residential Address"
						error={errors.presentAddress?.message}
						type="textarea"
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="fatherName"
						label="Father Name (Optional)"
						placeholder="Enter Father's Name"
					/>
					<CustomFormInput
						control={control}
						name="motherName"
						label="Mother Name (Optional)"
						placeholder="Enter Mother's Name"
					/>
					<CustomFormInput
						control={control}
						name="numberOfSiblings"
						label="No of Siblings (Exclude Yourself) (Optional)"
						placeholder="Enter Number of Siblings"
					/>
					<CustomFormInput
						control={control}
						name="birthOrder"
						label="Birth Order (Yours) (Optional)"
						placeholder="Enter Birth Order"
					/>
					<CustomFormInput
						control={control}
						name="elderBrothers"
						label="No of Elder Brother (Optional)"
						placeholder="Enter Elder Brothers Count"
					/>
					<CustomFormInput
						control={control}
						name="youngerBrothers"
						label="No of Younger Brother (Optional)"
						placeholder="Enter Younger Brothers Count"
					/>
					<CustomFormInput
						control={control}
						name="elderSisters"
						label="No of Elder Sister (Optional)"
						placeholder="Enter Elder Sisters Count"
					/>
					<CustomFormInput
						control={control}
						name="youngerSisters"
						label="No of Younger Sister (Optional)"
						placeholder="Enter Younger Sisters Count"
					/>
					<CustomFormInput
						control={control}
						name="remarks"
						label="Remarks (Optional)"
						placeholder="Enter Remarks"
						type="textarea"
					/>
					<ControlledFileUpload control={control} name="image" label="Upload Image" />
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default PriestsForm;
