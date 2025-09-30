import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormButton, SingleSelectDropdown, DynamicTableFieldArraysForm } from '@/components';
import { parishActivitiesFormSchema, type ParishActivitiesFormType } from '../../validations';
import { useMemo, useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
	getAnbiamMeetingsColumns,
	getFestivalsDetailsColumns,
	getMassTimingsColumns,
	getMonthlyMeetingsColumns,
	getYearPlansColumns,
} from '../../columns';

const ParishActivitiesForm = () => {
	const [activeTabId, setActiveTabId] = useState(0);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ParishActivitiesFormType>({
		resolver: zodResolver(parishActivitiesFormSchema),
	});

	const massTimingsColumns = useMemo(() => getMassTimingsColumns(control), [control]);
	const festivalDetailsColumns = useMemo(() => getFestivalsDetailsColumns(control), [control]);
	const yearPlansColumns = useMemo(() => getYearPlansColumns(control), [control]);
	const monthlyMeetingsColumns = useMemo(() => getMonthlyMeetingsColumns(control), [control]);
	const anbiamMeetingsColumns = useMemo(() => getAnbiamMeetingsColumns(control), [control]); // TODO: Add columns for Anbiam Meetings

	const tabs = [
		{
			label: 'MASS TIMINGS',
			value: 'mass_timings',
			component: (
				<DynamicTableFieldArraysForm
					className="border-0"
					control={control}
					fieldName="massTimings"
					columns={massTimingsColumns as ColumnDef<Record<'id', string>, unknown>[]}
				/>
			),
		},
		{
			label: 'FESTIVAL DETAILS',
			value: 'festival_details',
			component: (
				<DynamicTableFieldArraysForm
					className="border-0"
					control={control}
					fieldName="festivalDetails"
					columns={festivalDetailsColumns as ColumnDef<Record<'id', string>, unknown>[]}
				/>
			),
		},
		{
			label: 'YEAR PLAN',
			value: 'year_plan',
			component: (
				<DynamicTableFieldArraysForm
					className="border-0"
					control={control}
					fieldName="yearPlans"
					columns={yearPlansColumns as ColumnDef<Record<'id', string>, unknown>[]}
				/>
			),
		},
		{
			label: 'MONTHLY MEETINGS',
			value: 'monthly_meetings',
			component: (
				<DynamicTableFieldArraysForm
					className="border-0"
					control={control}
					fieldName="monthlyMeetings"
					columns={monthlyMeetingsColumns as ColumnDef<Record<'id', string>, unknown>[]}
				/>
			),
		},
		{
			label: 'ANBIAM MEETINGS',
			value: 'anbiam_meetings',
			component: (
				<DynamicTableFieldArraysForm
					className="border-0"
					control={control}
					fieldName="anbiamMeetings"
					columns={anbiamMeetingsColumns as ColumnDef<Record<'id', string>, unknown>[]}
				/>
			),
		},
	];

	const onSubmit = (data: ParishActivitiesFormType) => {
		console.warn('Submitted Notification:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<div className="flex flex-wrap w-full gap-4">
				<SingleSelectDropdown
					control={control}
					label="Select the Main-Station / Sub-Station"
					options={[{ label: 'Kodaiyanchi Parish', value: 'kodaiyanchi_parish' }]}
					placeholder="Select Sub-Station"
					name="subStationName"
					error={errors.subStationName?.message}
				/>
				<div className="w-full mx-auto">
					<div className="flex justify-start">
						{tabs.map((tab, index) => {
							const isActive = activeTabId === index;
							return (
								<button
									key={index}
									type="button"
									onClick={() => setActiveTabId?.(index)}
									className={`px-4 py-2 font-normal uppercase text-[12px] transition-all duration-200 ${
										isActive ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-black'
									}`}
								>
									{tab.label}
								</button>
							);
						})}
					</div>
					<div className=" flex flex-col  border border-gray-300 rounded min-h-[100px] p-4">
						{tabs[activeTabId].component}
					</div>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FormButton type="submit" label="Submit" />
			</div>
		</form>
	);
};

export default ParishActivitiesForm;
