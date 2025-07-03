import { DynamicDataTable, TabsLayout, AdminDefaultImage } from '@/components';
import { useState } from 'react';

import { useAutoDocumentTitle } from '@/hooks/useAutoDocumentTitle';
import type { CellContext } from '@tanstack/react-table';
import { Eye, SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { userData, type User } from '../../data';
import { RenderReligiousPeopleOverviewContainer } from '../../components';
import { useRouteName } from '@/utils/getRouteName';
import { useStore } from '@/store/store';

const ReligiousPeopleGenericPage = () => {
	useAutoDocumentTitle();
	const [activeIndex, setActiveIndex] = useState(0);

	const { selectRow, handleSelectRow } = useStore();

	const type = useRouteName('type');

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const columns = [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<User, unknown>) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => {
						console.warn('Selected:', row.original, e.target.checked);
					}}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<User, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},

		{
			header: 'Name',
			accessorKey: 'name',
			cell: ({ row }: CellContext<User, unknown>) => (
				<Link className="underline text-[#0d73c4]" to="">
					{(row.original as User).name}
				</Link>
			),
		},
		{
			header: 'Image',
			accessorKey: 'image',
			cell: ({ row }: CellContext<User, unknown>) => <AdminDefaultImage src={(row.original as User)?.image} />,
			meta: { isExportable: false },
		},
		{
			header: 'Email',
			accessorKey: 'email',
		},
		{
			header: 'Age',
			accessorKey: 'age',
		},
		{
			header: 'Role',
			accessorKey: 'role',
		},
		{
			header: 'Created At',
			accessorKey: 'created_at',
		},
	];

	return selectRow ? (
		<RenderReligiousPeopleOverviewContainer pathName={type} />
	) : (
		<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'View' }]}>
			{activeIndex === 0 && (
				<DynamicDataTable data={userData} customColumns={columns} enableDateAndLetterSorting={true} />
			)}
		</TabsLayout>
	);
};

export default ReligiousPeopleGenericPage;
