import { useWatch, type Control, type FieldValues, type Path } from 'react-hook-form';
import SingleSelectDropdown from '../single-select-dropdown';
import { priestStatuses } from '@/forms-options-data';

interface CategoryCellProps<TFormValues extends FieldValues> {
	control: Control<TFormValues>;
	statusName: Path<TFormValues>;
	category: Path<TFormValues>;
}

function CategoryCell<TFormValues extends FieldValues>({
	control,
	statusName,
	category,
}: CategoryCellProps<TFormValues>) {
	const currentStatus = useWatch({
		control,
		name: statusName,
	});

	if (currentStatus === 'Past') {
		return <span className="text-[12px]">nill</span>;
	}

	return <SingleSelectDropdown control={control} name={category} options={priestStatuses} />;
}

export default CategoryCell;
