import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { yearSelectionSchema, type YearSelectionFormValues } from '@/validations';

interface YearSelectionFormProps {
	value: string;
	onChange: (value: string) => void;
}

const YearSelectionForm = ({ value, onChange }: YearSelectionFormProps) => {
	const {
		control,
		formState: { errors },
	} = useForm<YearSelectionFormValues>({
		resolver: zodResolver(yearSelectionSchema),
		defaultValues: {
			year_type: value as 'current_year' | 'next_year' | undefined,
		},
	});

	return (
		<div className="space-y-4 my-3">
			<Controller
				name="year_type"
				control={control}
				render={({ field }) => (
					<RadioGroup
						className="flex gap-4"
						onValueChange={(val) => {
							field.onChange(val);
							onChange(val);
						}}
						value={field.value}
					>
						{[
							{ name: 'Current Year', value: 'current_year' },
							{ name: 'Next Year', value: 'next_year' },
						].map((input) => (
							<div key={input.value} className="flex items-center space-x-2">
								<RadioGroupItem
									value={input.value}
									id={input.value}
									className={cn(
										'border-2 border-gray-300',
										'data-[state=checked]:border-blue-600',
										'data-[state=checked]:bg-blue-600',
										'focus-visible:ring-2 focus-visible:ring-blue-400'
									)}
								/>
								<Label className="font-light" htmlFor={input.value}>
									{input.name}
								</Label>
							</div>
						))}
					</RadioGroup>
				)}
			/>
			{errors.year_type && <p className="text-sm text-red-500">{errors.year_type.message}</p>}
		</div>
	);
};

export default YearSelectionForm;
