import { useWatch, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Label } from '@/components/ui/label';

type TotalProps<T extends FieldValues> = {
	control: Control<T>;
	fieldNames: Path<T>[];
};

const DisplayTotalAmount = <T extends FieldValues>({ control, fieldNames }: TotalProps<T>) => {
	const values = useWatch({
		control,
		name: fieldNames,
	}) as unknown as (string | number | undefined)[];

	const total = values.reduce((acc: number, val) => {
		const num = Number(val);
		return acc + (isNaN(num) ? 0 : num);
	}, 0);

	return <Label className="text-sm font-bold">{`Total : Rs.  ${total || 0}`}</Label>;
};

export default DisplayTotalAmount;
