import { useForm, FormProvider } from 'react-hook-form';
import { DynamicDataTable, SingleSelectDropdown } from '@/components';
import { useAuditingColumns } from '../../columns';
import { lazy, Suspense } from 'react';
const ExportButton = lazy(() => import('@/components/export-button'));

type FormValues = {
	parish: string;
};

const AuditingContainer = () => {
	const auditingColumns = useAuditingColumns();
	const methods = useForm<FormValues>({
		defaultValues: {
			parish: '',
		},
	});
	const { control } = methods;

	return (
		<FormProvider {...methods}>
			<div className="p-4">
				<SingleSelectDropdown control={control} name="parish" options={[]} />
				<div className="mt-6">
					<Suspense fallback={<div>Loading...</div>}>
						<ExportButton data={[]} columns={[]} tableId="auditing" />
					</Suspense>
				</div>

				<DynamicDataTable
					tableId="auditing"
					isDynamic={false}
					customColumns={auditingColumns}
					data={[]}
					showFooter={true}
				/>
			</div>
		</FormProvider>
	);
};

export default AuditingContainer;
