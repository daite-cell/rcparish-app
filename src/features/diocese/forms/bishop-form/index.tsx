import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ControlledDateInputField,
	ControlledFileUpload,
	ControlledRadioGroup,
	CustomFormInput,
	FormButton,
} from '@/components';
import { bishopSchema, type BishopType } from '../../validations';

const BishopForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BishopType>({
		resolver: zodResolver(bishopSchema),
	});

	const onSubmit = (data: BishopType) => {
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
						name="bishopName"
						label="Name of the Bishop"
						placeholder="Enter Name of the Bishop"
						error={errors.bishopName?.message}
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

					<CustomFormInput
						control={control}
						name="nativePlace"
						label="Native Place"
						placeholder="Enter Native Place"
						error={errors.nativePlace?.message}
					/>

					<CustomFormInput
						control={control}
						name="nativeParish"
						label="Native Parish"
						placeholder="Enter Native Parish"
						error={errors.nativeParish?.message}
					/>

					<ControlledDateInputField
						label="Date of First Profession"
						name="dateOfFirstProfession"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfFirstProfession?.message}
					/>

					<CustomFormInput
						control={control}
						name="placeOfFirstProfession"
						label="Place of First Profession"
						placeholder="Enter Place of First Profession"
						error={errors.placeOfFirstProfession?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Date of Diaconate"
						name="dateOfDiaconate"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfDiaconate?.message}
					/>

					<CustomFormInput
						control={control}
						name="placeOfDiaconate"
						label="Place of Diaconate"
						placeholder="Enter Place of Diaconate"
						error={errors.placeOfDiaconate?.message}
					/>

					<ControlledDateInputField
						label="Date of Priestly Ordination"
						name="dateOfPriestlyOrdination"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfPriestlyOrdination?.message}
					/>

					<CustomFormInput
						control={control}
						name="placeOfPriestlyOrdination"
						label="Place of Priestly Ordination"
						placeholder="Enter Place of Priestly Ordination"
						error={errors.placeOfPriestlyOrdination?.message}
					/>

					<ControlledDateInputField
						label="Date of Nomination as Bishop"
						name="dateOfNominationAsBishop"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfNominationAsBishop?.message}
					/>

					<ControlledDateInputField
						label="Date of Episcopal Ordination"
						name="dateOfEpiscopalOrdination"
						control={control}
						placeholder="dd/mm/yyyy"
						type="date"
						error={errors.dateOfEpiscopalOrdination?.message}
					/>

					<CustomFormInput
						control={control}
						name="placeOfEpiscopalOrdination"
						label="Place of Episcopal Ordination"
						placeholder="Enter Place of Episcopal Ordination"
						error={errors.placeOfEpiscopalOrdination?.message}
					/>
				</div>

				{/* Column 3 */}
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<CustomFormInput
						control={control}
						name="address"
						label="Address"
						placeholder="Enter Address"
						type="textarea"
						error={errors.address?.message}
					/>

					<CustomFormInput
						control={control}
						name="contactNumber"
						label="Contact Number"
						placeholder="Enter Contact Number"
						error={errors.contactNumber?.message}
					/>

					<CustomFormInput
						control={control}
						name="alternateContactNumber"
						label="Alternate Contact Number"
						placeholder="Enter Alternate Contact Number (Optional)"
						error={errors.alternateContactNumber?.message}
					/>

					<ControlledFileUpload control={control} name="image" label="Upload Image" error={errors.image?.message} />
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default BishopForm;
