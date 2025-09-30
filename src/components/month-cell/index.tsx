import { getDayAndMonth } from '@/utils/dateHelpers';
import { useWatch, type Control, type FieldValues, type Path } from 'react-hook-form';
function MonthCell<TForm extends FieldValues>({ control, name }: { control: Control<TForm>; name: Path<TForm> }) {
	const dateValue = useWatch({ control, name });
	const { month } = getDayAndMonth(dateValue);
	return <span>{month || 'Auto Display'}</span>;
}

export default MonthCell;
