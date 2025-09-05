import { DynamicDataTable, FormButton, PageSectionHeading } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { collegeConsultersFormSchema, type CollegeConsultersFormType } from '../../validations';
import { curiaMembersDummyData, dummy_college_consulters } from '../../data';
import { useCuriaMembersFormColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';

const CollegeConsulterForm = () => {
	const { control, handleSubmit } = useForm<CollegeConsultersFormType>({
		resolver: zodResolver(collegeConsultersFormSchema),
		defaultValues: {
			members: curiaMembersDummyData,
		},
		mode: 'onSubmit',
		reValidateMode: 'onChange',
	});

	const columns = useCuriaMembersFormColumns(control);

	const onSubmit = (data: CollegeConsultersFormType) => {
		console.warn('Submitted Curia Members Data:', data);
	};

	return (
		<>
			<PageSectionHeading title="CURIA MEMBERS" />
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<DynamicDataTable
					enableDateSorting={false}
					wrapText={false}
					data={dummy_college_consulters}
					customColumns={columns as ColumnDef<object>[]}
					showFooter={false}
					enableExport={false}
					enablePagination={false}
					enableSearch={false}
				/>
				<div className="flex justify-center w-full">
					<FormButton type="submit" label="Submit" />
				</div>
			</form>
		</>
	);
};

export default CollegeConsulterForm;
