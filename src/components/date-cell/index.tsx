import { useWatch, type Control, type FieldValues, type Path } from 'react-hook-form';
import ControlledDateInputField from '../controlled-date-input-field';

interface ToDateCellProps<TFormValues extends FieldValues> {
	control: Control<TFormValues>;
	statusName: Path<TFormValues>;
	toDateName: Path<TFormValues>;
}

function ToDateCell<TFormValues extends FieldValues>({
	control,
	statusName,
	toDateName,
}: ToDateCellProps<TFormValues>) {
	const currentStatus = useWatch({
		control,
		name: statusName,
	});

	if (currentStatus === 'present') {
		return <span className="text-[12px]">till now</span>;
	}

	return <ControlledDateInputField name={toDateName} control={control} placeholder="dd/mm/yyyy" type="date" />;
}

export default ToDateCell;
