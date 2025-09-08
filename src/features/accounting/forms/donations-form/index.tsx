import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledDateInputField, CustomFormInput, FormButton, SingleSelectDropdown } from '@/components';
import {
	activeToOptions,
	donationForOptions,
	familyOptions,
	memberNameOptions,
	subStationOptions,
} from '../../../../forms-options-data';
import { donationSchema, type donationFormType } from '../../validations';

const DonationsForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<donationFormType>({
		resolver: zodResolver(donationSchema),
	});

	const onSubmit = (data: donationFormType) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
			<div className="flex flex-wrap w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Activeness"
						options={activeToOptions}
						placeholder="Select Activeness"
						name="activeness"
						error={errors.activeness?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Family Name"
						options={familyOptions}
						placeholder="Select Family Name"
						name="familyName"
						error={errors.familyName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Main-Station / Sub-Station"
						options={subStationOptions}
						placeholder="Select Main or Sub Station"
						name="subStationName"
						error={errors.subStationName?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<SingleSelectDropdown
						control={control}
						label="Anbiam"
						options={[]}
						placeholder="Select Anbiam"
						name="anbiam"
						error={errors.anbiam?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Select the Member"
						options={memberNameOptions}
						placeholder="Select Member"
						name="memberName"
						error={errors.memberName?.message}
					/>
					<SingleSelectDropdown
						control={control}
						label="Donation for"
						options={donationForOptions}
						placeholder="Select Donation Purpose"
						name="donationFor"
						error={errors.donationFor?.message}
					/>
					<CustomFormInput
						label="Amount"
						control={control}
						name="amount"
						placeholder="Enter the Amount"
						error={errors.amount?.message}
					/>
				</div>

				<div className="flex-1 w-full p-5 space-y-5 border border-gray-300 rounded-md">
					<ControlledDateInputField
						label="Date"
						name="donationDate"
						control={control}
						placeholder="dd/mm/yyyy"
						error={errors.donationDate?.message}
						type="date"
					/>
					<CustomFormInput
						label="Voucher Number"
						control={control}
						name="voucherNumber"
						placeholder="Enter Voucher Number"
						error={errors.voucherNumber?.message}
					/>
				</div>
			</div>
			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default DonationsForm;
