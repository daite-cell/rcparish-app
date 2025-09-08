import { DynamicDataTable, FormButton, PageSectionHeading } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { vsssFormSchema, type VSSSFormType } from '../../validations';
import { useVSSSFormColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';
import get_vsss from '../../data/get_vsss.json';
import get_senate_members from '../../data/get_senate_member.json';
import get_vf from '../../data/get_vf.json';
import { useRouteName } from '@/utils/getRouteName';

const common__member_edit_form = [
	{ page_name: 'vss', heading_title: 'Social Service Society', data: get_vsss.vsss },
	{ page_name: 'senate_members', heading_title: 'Senate Members', data: get_senate_members.senate_member },
	{ page_name: 'vf', heading_title: 'Vicariate Forane', data: get_vf.vf },
];

const VsssEditForm = () => {
	const type = useRouteName('type');
	const { control, handleSubmit } = useForm<VSSSFormType>({
		resolver: zodResolver(vsssFormSchema),

		defaultValues: {
			members: common__member_edit_form.find((item) => item.page_name === type)?.data || [],
		},
		mode: 'onSubmit',
		reValidateMode: 'onChange',
	});

	const columns = useVSSSFormColumns(control);
	const vf_columns = useVSSSFormColumns(control, type as string); // 👈 pass type to the hook

	const onSubmit = (data: VSSSFormType) => {
		console.warn('Submitted Committee Data:', data);
	};

	return (
		<>
			<PageSectionHeading
				title={common__member_edit_form.find((item) => item.page_name === type)?.heading_title || ''}
			/>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<DynamicDataTable
					enableDateSorting={false}
					wrapText={false}
					data={common__member_edit_form.find((item) => item.page_name === type)?.data || []}
					customColumns={type === 'vf' ? (vf_columns as ColumnDef<object>[]) : (columns as ColumnDef<object>[])}
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

export default VsssEditForm;
