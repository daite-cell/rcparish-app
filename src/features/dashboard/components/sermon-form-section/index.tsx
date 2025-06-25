import { CustomFormInput, DateInputFelid, FormButton, SingleSelectDropdown } from '@/components';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

const SermonFormSection = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<div className="flex flex-wrap items-start w-full gap-4">
				<div className="flex-1 w-full p-5 space-y-3 border border-gray-300 rounded-md ">
					<CustomFormInput
						type="text"
						label="Written By"
						placeholder={'Fr. Gnanasekar S A'}
						className="rounded-[2px] w-full  justify-between "
					/>
					<Label className="text-[12px] font-normal ">Select the Year</Label>
					<RadioGroup className="flex gap-4 " defaultValue="A">
						{['A', 'B', 'C'].map((value) => (
							<div key={value} className="flex items-center space-x-2">
								<RadioGroupItem
									value={value}
									id={`option-${value}`}
									className={cn(
										'border-2 border-gray-300',
										'data-[state=checked]:border-blue-600 ',
										'data-[state=checked]:bg-blue-600',
										'data-[state=checked]:!text-white',
										'focus-visible:ring-2 focus-visible:ring-blue-400'
									)}
								/>

								<Label className="text-[12px] font-sm" htmlFor={`option-${value}`}>
									{value}
								</Label>
							</div>
						))}
					</RadioGroup>
					<SingleSelectDropdown label="Select the Season" />
					<CustomFormInput
						type="text"
						label="Week"
						placeholder="Enter the week "
						className="rounded-[2px] w-full  justify-between text-[12px] font-sm placeholder:text-xs"
					/>
				</div>
				<div className="flex-1 w-full p-4 space-y-3 border border-gray-300 rounded-md ">
					<DateInputFelid label="date" />
					<CustomFormInput
						type="text"
						label="Day"
						placeholder="Day "
						className="rounded-[2px] w-full  justify-between text-[12px] font-sm placeholder:text-xs "
					/>
					<div className="flex flex-col gap-1 text-sm mt-7 ">
						<label htmlFor="document-upload" className="text-[12px] font-normal">
							Upload Document <span className="text-xs text-muted-foreground">( If Any )</span>
						</label>
						<Input
							type="file"
							id="document-upload"
							name="document"
							className="block text-xs text-gray-900 border-none file:mr-4 file:py-1 file:px-2 file:rounded file:border file:border-gray-300 file:text-xs file:font-normal file:bg-gray-100 file:text-gray-700"
						/>
					</div>
				</div>
				<div className="flex-1 w-full p-4 border border-gray-300 rounded-md ">
					<CustomFormInput
						type="textarea"
						label="Sermon Description (Unicode Format Only)"
						placeholder="Enter the brief description "
						className="rounded-[2px]"
					/>
				</div>
			</div>
			<FormButton label="Submit" />
		</div>
	);
};

export default SermonFormSection;
