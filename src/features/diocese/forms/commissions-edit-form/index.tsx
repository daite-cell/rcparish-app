import { DynamicDataTable, FormButton } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { commissionsFormSchema, type CommissionsFormType } from '../../validations';
import { useCommissionsFormColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import get_edit_priest_commissions from '../../data/get_edit_priest_commissions.json';

const CommissionsEditForm = () => {
	const { editRow } = useStore();
	console.warn('Edit Row Data in CommissionsForm:', editRow);
	const { control, handleSubmit } = useForm<CommissionsFormType>({
		resolver: zodResolver(commissionsFormSchema),
		defaultValues: {
			members: get_edit_priest_commissions.commissions_list,
		},
		mode: 'onSubmit',
		reValidateMode: 'onChange',
	});

	const columns = useCommissionsFormColumns(control);

	const onSubmit = (data: CommissionsFormType) => {
		console.warn('Submitted Commission Data:', data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<DynamicDataTable
					enableDateSorting={false}
					wrapText={false}
					data={get_edit_priest_commissions.commissions_list}
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

export default CommissionsEditForm;
