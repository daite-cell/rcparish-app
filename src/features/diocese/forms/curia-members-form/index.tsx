import { DynamicDataTable, FormButton } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { curiaMembersFormSchema, type CuriaMembersFormType } from '../../validations';
import { curiaMembersDummyData, registerMembersData } from '../../data';
import { registerMemberColumns, useCuriaMembersFormColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';
import type { RegisterMemberType } from '@/types';

const CuriaMembersForm = () => {
	const { control, handleSubmit } = useForm<CuriaMembersFormType>({
		resolver: zodResolver(curiaMembersFormSchema),
		defaultValues: {
			members: curiaMembersDummyData,
		},
		mode: 'onSubmit',
		reValidateMode: 'onChange',
	});

	const columns = useCuriaMembersFormColumns(control);

	const registerColumns = registerMemberColumns as ColumnDef<RegisterMemberType>[];
	const onSubmit = (data: CuriaMembersFormType) => {
		console.warn('Submitted Curia Members Data:', data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<DynamicDataTable
					enableDateSorting={false}
					wrapText={false}
					data={curiaMembersDummyData}
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
			<DynamicDataTable
				data={registerMembersData}
				customColumns={registerColumns}
				enableExport={false}
				enableSearch={false}
				enablePagination={false}
				title="MEMBERS OF DIOCESE OF VELLORE SOCIETY (REGISTERED)"
			/>
		</>
	);
};

export default CuriaMembersForm;
