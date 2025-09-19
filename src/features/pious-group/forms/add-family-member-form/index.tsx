import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { getAddFamilyMemberColumns } from '../../columns';
import { DynamicTableFieldArraysForm } from '@/components';
import type { ColumnDef } from '@tanstack/react-table';
import { addNewFamilyMemberSchema } from '../../validation';
import { z } from 'zod';

const addNewFamilyMembersArraySchema = z.object({
	families: z.array(addNewFamilyMemberSchema),
});

type AddNewFamilyMembersArrayType = z.infer<typeof addNewFamilyMembersArraySchema>;

const AddNewFamilyMemberForm = () => {
	const { control, handleSubmit } = useForm<AddNewFamilyMembersArrayType>({
		resolver: zodResolver(addNewFamilyMembersArraySchema),
		defaultValues: { families: [] },
	});

	const columns = useMemo(() => getAddFamilyMemberColumns(control), [control]);

	const onSubmit = (data: AddNewFamilyMembersArrayType) => {
		console.warn('Submitted Families Data:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm my-6">
			<DynamicTableFieldArraysForm
				control={control}
				fieldName="families"
				columns={columns as ColumnDef<Record<'id', string>, unknown>[]}
			/>
		</form>
	);
};

export default AddNewFamilyMemberForm;
