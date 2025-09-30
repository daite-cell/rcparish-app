import { getDayAndMonth } from '@/utils/dateHelpers';
import { useWatch, type Control, type FieldValues, type Path } from 'react-hook-form';

function DayCell<TForm extends FieldValues>({ control, name }: { control: Control<TForm>; name: Path<TForm> }) {
	const dateValue = useWatch({ control, name });
	const { day } = getDayAndMonth(dateValue);
	return <span>{day || 'Auto Display'}</span>;
}

export default DayCell;
