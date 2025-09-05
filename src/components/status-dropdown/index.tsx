import type { Control, FieldValues, Path } from 'react-hook-form';
import SingleSelectDropdown from '../single-select-dropdown';

interface StatusDropdownProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
}

function StatusDropdown<T extends FieldValues>({ control, name }: StatusDropdownProps<T>) {
	return (
		<SingleSelectDropdown
			control={control}
			name={name}
			options={[
				{ label: 'Present', value: 'Present' },
				{ label: 'Past', value: 'Past' },
			]}
		/>
	);
}

export default StatusDropdown;
