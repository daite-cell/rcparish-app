import { DynamicDataTable, FormButton } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { committeesFormSchema, type CommitteesFormType } from '../../validations';
import { useCommitteesFormColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import get_edit_priest_committees from '../../data/get_edit_priest_committees.json';
import type { CommitteesProps } from '@/types';

const CommitteesEditForm = () => {
	const editRow = useStore((state) => state.editRow) as CommitteesProps | null;

	const normalizedMembers = get_edit_priest_committees.committees_list.map((m) => ({
		...m,
		position: editRow?.position,
	}));
	console.warn('Edit Row Data in CommitteesEditForm:', normalizedMembers, editRow);
	const { control, handleSubmit } = useForm<CommitteesFormType>({
		resolver: zodResolver(committeesFormSchema),
		defaultValues: {
			members: normalizedMembers,
		},
		mode: 'onSubmit',
		reValidateMode: 'onChange',
	});

	const columns = useCommitteesFormColumns(control);

	const onSubmit = (data: CommitteesFormType) => {
		console.warn('Submitted Committee Data:', data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<DynamicDataTable
					enableDateSorting={false}
					wrapText={false}
					data={normalizedMembers}
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

export default CommitteesEditForm;
