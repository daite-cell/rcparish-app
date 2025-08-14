import { ControlledRadioGroup, HeadingWithUnderline, SingleSelectDropdown } from '@/components';
import { Label } from '@/components/ui/label';
import { subStationOptions } from '@/forms-options-data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { familyCardSchema, type FamilyCardType } from '../../validation';

const FamilyCardDownloadContainer = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FamilyCardType>({
		resolver: zodResolver(familyCardSchema),
	});

	const onSubmit = (data: FamilyCardType) => {
		console.warn('Submitted Chronicles Data:', data);
	};

	const selectedYearType = watch('hasPriorBalance');

	const currentYear = new Date().getFullYear();
	const nextYear = currentYear + 1;

	return (
		<div>
			<HeadingWithUnderline className="text-start !text-sm" text="FAMILY CARD ( ANBIAM WISE DOWNLOAD )" />
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
				<SingleSelectDropdown
					control={control}
					label="Select the Main-Station / Sub-Station"
					options={subStationOptions}
					placeholder="Select Sub-Station"
					name="subStationName"
					error={errors.subStationName?.message}
				/>

				<SingleSelectDropdown
					control={control}
					label="Select the Anbiam"
					options={[]}
					placeholder="Select Anbiam"
					name="selectedAnbiam"
					error={errors.selectedAnbiam?.message}
				/>

				<ControlledRadioGroup
					label="Choose the Family Card Year"
					name="hasPriorBalance"
					control={control}
					options={[
						{ label: 'Current Year', value: 'current_year' },
						{ label: 'Next Year', value: 'next_year' },
					]}
					error={errors.hasPriorBalance?.message}
				/>

				<Label>
					Year: {selectedYearType === 'next_year' ? nextYear : selectedYearType === 'current_year' ? currentYear : '--'}
				</Label>

				<button type="submit" className="border-2 border-black-300 p-2 py-1 text-sm">
					Download Anbiam Family Cards PDF
				</button>
			</form>
		</div>
	);
};

export default FamilyCardDownloadContainer;
