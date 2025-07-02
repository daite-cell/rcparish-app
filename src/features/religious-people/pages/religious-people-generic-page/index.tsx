import { DynamicDataTable, TabsLayout, PriestFullInfo, AdminDefaultImage } from '@/components';
import { useState } from 'react';
import { convertKeysToCamelCase } from '@/utils/convertKeysToCamelCase';
import { useAutoDocumentTitle } from '@/hooks/useAutoDocumentTitle';
import type { CellContext } from '@tanstack/react-table';
import { Eye, SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { userData, type User } from '../../data';

const ReligiousPeopleGenericPage = () => {
	useAutoDocumentTitle();
	const [activeIndex, setActiveIndex] = useState(0);
	const [id, setId] = useState<number | null>(1);

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
		if (index === 1) {
			setId(null);
		}
	};

	const onView = (id: number) => setId(id);

	const dummy_priest_info = convertKeysToCamelCase({
		id: 1,
		name: 'John Doe',
		priest_from: 'Diocese',
		ordination_date: 30,
		birth_date: '1982-05-05',
		living_status: 'New York',
		native_place: '',
		adhaar_number: '3747337t426347',
		phone_number: '1234567890',
		email: '',
		address: '',
	});

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
				<button type="button" onClick={() => onView((row.original as User).id)} title="View">
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

	return (
		<>
			<TabsLayout
				onTabChange={handleToggleTab}
				activeTabId={activeIndex}
				tabs={id ? [{ label: 'Profile' }, { label: 'Back' }] : [{ label: 'View' }]}
			>
				{!id ? (
					<DynamicDataTable data={userData} customColumns={columns} enableDateAndLetterSorting={true} />
				) : (
					<PriestFullInfo {...dummy_priest_info} />
				)}
			</TabsLayout>
		</>
	);
};

export default ReligiousPeopleGenericPage;
