import { getDayAndMonth } from '@/utils/dateHelpers';
import { useWatch, type Control, type FieldValues, type Path } from 'react-hook-form';
function MonthCell<TForm extends FieldValues>({ control, name }: { control: Control<TForm>; name: Path<TForm> }) {
	const dateValue = useWatch({ control, name });
	if (dateValue === null || typeof dateValue !== 'string') {
		throw new Error(`Expected dateValue to be a string, but got ${typeof dateValue}`);
	}
	const { month } = getDayAndMonth(dateValue);
	if (month === null) {
		throw new Error(`Expected month to be a string, but got null`);
	}
	return <span>{month || 'Auto Display'}</span>;
}

export default MonthCell;
