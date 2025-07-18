import { AdminDefaultImage, TablePriorDignitariesButton, TextLink } from '@/components';
import { useStore } from '@/store/store';
import type {
	PriestDetailsProps,
	PriestCalendarDetailsProps,
	CommissionMemberProps,
	DioceseVSSSMemberProps,
	DioceseSenateMemberProps,
	VicariateForaneMemberProps,
	ParishTableDataProps,
	PropertiesProps,
	VicariateDetailsProps,
	InstitutionDetailsProps,
	HouseListProps,
	NoviciateInstitutionProps,
} from '@/types';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { Folder, Pencil, SquarePen } from 'lucide-react';
import { useMemo } from 'react';

const usePriestColumns = (): ColumnDef<PriestDetailsProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<PriestDetailsProps>(handleSelectRow),
		{
			accessorKey: 'type',
			header: 'Type',
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: () => <AdminDefaultImage height={50} width={50} className="rounded-full" />,
		},
		{
			accessorKey: 'name',
			header: 'Name of the Priests',
		},
		{
			accessorKey: 'position',
			header: 'Present Position',
		},
		{
			accessorKey: 'ordinationDate',
			header: 'Ordination Date',
		},
		{
			accessorKey: 'dob',
			header: 'Birth Date',
		},
		{
			accessorKey: 'mobile1',
			header: 'Mobile Number',
		},
		{
			accessorKey: 'mobile2',
			header: 'Optional Mobile Number',
		},
		{
			accessorKey: 'email',
			header: 'Mail Id',
		},
		{
			accessorKey: 'aadhaar',
			header: 'Adhaar Number',
		},
		{
			accessorKey: 'village',
			header: 'Native Place',
		},
		{
			accessorKey: 'address',
			header: 'Present Residential',
		},
		{
			accessorKey: 'status',
			header: 'Living Status',
		},
		{
			accessorKey: 'id',
			header: 'Unique Id',
			meta: { isExportable: false },
		},
	];
};
const usePriestCalendarColumns = (): ColumnDef<PriestCalendarDetailsProps>[] => [
	{
		accessorKey: 'name',
		header: 'Name of the Priest',
	},
	{
		accessorKey: 'firstProfessionDate',
		header: 'Date of First Profession',
	},
	{
		accessorKey: 'ordinationDate',
		header: 'Date of Priestly Ordination',
	},
	{
		accessorKey: 'birthDate',
		header: 'Date of Birth',
	},
	{
		accessorKey: 'mobileNumber',
		header: 'Mobile Number',
	},
];

const useCommissionColumns = (): ColumnDef<CommissionMemberProps>[] => {
	const { handleSelectRow, handleSelectPriorRow } = useStore();

	return [
		{
			id: 'actions',
			header: 'Edit & Prior Dignitaries',
			cell: ({ row }) => (
				<div className="flex gap-2">
					<button type="button" title="Edit" onClick={() => handleSelectRow?.(row.original)}>
						<Pencil className="w-4 h-4" />
					</button>
					<button type="button" title="View Prior Dignitaries" onClick={() => handleSelectPriorRow?.(row.original)}>
						<Folder className="w-4 h-4" />
					</button>
				</div>
			),
			meta: { isExportable: false },
		},
		{
			accessorKey: 'nameOfCommission',
			header: 'Name of the Commission',
		},
		{
			accessorKey: 'position',
			header: 'Position',
		},
		{
			accessorKey: 'priestName',
			header: 'Name of the Priest',
		},
		{
			accessorKey: 'presentPosition',
			header: 'Present Position',
		},
		{
			accessorKey: 'from',
			header: 'From',
		},
		{
			accessorKey: 'to',
			header: 'To',
		},
		{
			accessorKey: 'mobile',
			header: 'Mobile',
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: () => <AdminDefaultImage height={40} width={40} className="rounded-full" />,
		},
	];
};

const useDioceseVSSSColumns = (): ColumnDef<DioceseVSSSMemberProps>[] => {
	const { handleSelectRow, handleSelectPriorRow } = useStore();

	return [
		...getCommonActionColumns<DioceseVSSSMemberProps>(handleSelectRow),
		{
			accessorKey: 'designation',
			header: 'Designation',
		},
		{
			id: 'prior dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<DioceseVSSSMemberProps, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'priestName',
			header: 'Name of the Priests',
		},
		{
			accessorKey: 'presentPosition',
			header: 'Present Position',
		},
		{
			accessorKey: 'fromYear',
			header: 'From the Year',
		},
		{
			accessorKey: 'toYear',
			header: 'To the Year',
		},
		{
			accessorKey: 'residentAt',
			header: 'Resident at',
		},
		{
			accessorKey: 'mobileNumber',
			header: 'Mobile Number',
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: () => <AdminDefaultImage height={40} width={40} className="rounded-full" />,
		},
	];
};

const useDioceseSenateColumns = (): ColumnDef<DioceseSenateMemberProps>[] => {
	const { handleSelectRow, handleSelectPriorRow } = useStore();

	return [
		...getCommonActionColumns<DioceseSenateMemberProps>(handleSelectRow),
		{
			accessorKey: 'role',
			header: 'Designation',
		},
		{
			id: 'prior dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<DioceseSenateMemberProps, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'memberName',
			header: 'Name of the Priests',
			cell: ({ row }) => <TextLink to="">{row.original.memberName ?? ''}</TextLink>,
		},
		{
			accessorKey: 'designation',
			header: 'Present Position',
		},
		{
			accessorKey: 'fromYear',
			header: 'From the Year',
		},
		{
			accessorKey: 'toYear',
			header: 'To the Year',
		},
		{
			accessorKey: 'address',
			header: 'Resident at',
		},
		{
			accessorKey: 'mobileNumber',
			header: 'Mobile Number',
		},
		{
			accessorKey: 'imageUrl',
			header: 'Image',
			cell: () => <AdminDefaultImage height={40} width={40} className="rounded-full" />,
		},
	];
};
const useVicariateForaneColumns = (): ColumnDef<VicariateForaneMemberProps>[] => {
	const { handleSelectRow, handleSelectPriorRow } = useStore();

	return [
		...getCommonActionColumns<VicariateForaneMemberProps>(handleSelectRow),
		{
			id: 'priorDignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }) => <TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />,
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'vicariateName',
			header: 'Name of the Vicariate',
		},
		{
			accessorKey: 'churchName',
			header: 'Name of the Church',
		},
		{
			accessorKey: 'memberName',
			header: 'Name of the Priests',
			cell: ({ row }) => <TextLink to="">{row.original.memberName}</TextLink>,
		},
		{
			accessorKey: 'presentPosition',
			header: 'Present Position',
		},
		{
			accessorKey: 'fromYear',
			header: 'From the Year',
		},
		{
			accessorKey: 'toYear',
			header: 'To the Year',
		},
		{
			accessorKey: 'residentAt',
			header: 'Resident at',
		},
		{
			accessorKey: 'mobileNumber',
			header: 'Mobile Number',
		},
		{
			accessorKey: 'imageUrl',
			header: 'Image',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.imageUrl} height={40} width={40} className="rounded-full" />
			),
		},
	];
};

const useParishColumns = (): ColumnDef<ParishTableDataProps>[] => {
	const { handleSelectRow, handleSelectPriorRow } = useStore();

	return [
		...getCommonActionColumns<ParishTableDataProps>(handleSelectRow),
		{
			id: 'priorDignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }) => <TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />,
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'vicariateName',
			header: 'Name of the Vicariate',
		},
		{
			accessorKey: 'parishName',
			header: 'Parish Name',
		},
		{
			accessorKey: 'priestName',
			header: 'Present Parish Priest',
			cell: ({ row }) => <TextLink to="">{row.original.priestName}</TextLink>,
		},
		{
			accessorKey: 'churchName',
			header: 'Church Name',
		},
		{
			accessorKey: 'hasAssistant',
			header: 'Does it have Sub-Station',
		},
		{
			accessorKey: 'type',
			header: 'Run by',
		},
		{
			accessorKey: 'parishCouncil',
			header: 'Is it Mission Station',
		},
		{
			accessorKey: 'mobile1',
			header: 'Parish Contact Number',
		},
		{
			accessorKey: 'email1',
			header: 'Parish Mail Id',
		},
		{
			accessorKey: 'address',
			header: 'Address',
		},
		{
			accessorKey: 'mobile2',
			header: 'Priest Mobile No',
		},
		{
			accessorKey: 'email2',
			header: 'Priest Email Id',
		},
		{
			accessorKey: 'imageUrl',
			header: 'Image',
			cell: () => <AdminDefaultImage height={40} width={40} className="rounded-full" />,
		},
	];
};
const useLandDocumentColumns = (): ColumnDef<PropertiesProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<PropertiesProps>(handleSelectRow),

		{
			accessorKey: 'document',
			header: 'Document',
		},
		{
			accessorKey: 'parishName',
			header: 'Parish Name',
		},
		{
			accessorKey: 'villageName',
			header: 'Village name',
		},
		{
			accessorKey: 'documentNumber',
			header: 'Document Number',
		},
		{
			accessorKey: 'dateOfRegistration',
			header: 'Date of registration',
		},
		{
			accessorKey: 'purchasingAmount',
			header: 'Purchasing Amount',
		},
		{
			accessorKey: 'purchaserName',
			header: 'Purchaser Name',
		},
		{
			accessorKey: 'vendorName',
			header: 'Vendor Name',
		},
		{
			accessorKey: 'oldSurvey',
			header: 'Old Survey',
		},
		{
			accessorKey: 'newSurvey',
			header: 'New survey',
		},
		{
			accessorKey: 'extent',
			header: 'Extent',
		},
		{
			accessorKey: 'pattaNo',
			header: 'Patta No',
		},
		{
			accessorKey: 'availabilityOfDocument',
			header: 'Availability of Document (yes / no)',
		},
		{
			accessorKey: 'landUsage',
			header: 'Land Usage',
		},
		{
			accessorKey: 'landType',
			header: 'Land Type',
		},
		{
			accessorKey: 'remark',
			header: 'Remark',
		},
	];
};

const useVicariateColumns = (): ColumnDef<VicariateDetailsProps>[] => {
	return useMemo<ColumnDef<VicariateDetailsProps>[]>(
		() => [
			{
				id: 'select',
				header: () => <SquarePen className="w-4 h-4 text-center" />,
				cell: ({ row }) => (
					<input
						title="select"
						type="checkbox"
						onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
					/>
				),
				enableSorting: false,
				meta: { isExportable: false },
				enableHiding: true,
			},
			{
				accessorKey: 'patronChurch',
				header: 'Patron Church',
			},
			{
				accessorKey: 'place',
				header: 'Place',
			},
			{
				accessorKey: 'detailed',
				header: 'Detailed',
			},
		],
		[]
	);
};

const useHouseListColumns = (): ColumnDef<HouseListProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<HouseListProps>(handleSelectRow),

		{
			accessorKey: 'parish',
			header: 'Parish',
		},
		{
			accessorKey: 'vicariate',
			header: 'Vicariate',
		},
		{
			accessorKey: 'churchName',
			header: 'Church Name',
		},
		{
			accessorKey: 'houses',
			header: 'Houses',
		},
		{
			accessorKey: 'nameOfTheHouse',
			header: 'Name of the House',
		},
		{
			accessorKey: 'placeOfTheHouse',
			header: 'Place of the House',
		},
		{
			accessorKey: 'incardinatedTo',
			header: 'Incardinated To',
		},
		{
			accessorKey: 'establishedYear',
			header: 'Established Year',
		},
		{
			accessorKey: 'establishedBy',
			header: 'Established by',
		},
		{
			accessorKey: 'landOwnership',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'contactAddress',
			header: 'Contact Address',
		},
		{
			accessorKey: 'mobileNo',
			header: 'Mobile No',
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
	];
};

const useInstitutionDetailsColumns = (): ColumnDef<InstitutionDetailsProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<InstitutionDetailsProps>(handleSelectRow),

		{
			accessorKey: 'category',
			header: 'Category',
		},
		{
			accessorKey: 'institutionCategory',
			header: 'Institution Category',
		},
		{
			accessorKey: 'institutionType',
			header: 'Institution Type',
		},
		{
			accessorKey: 'name',
			header: 'Name',
		},
		{
			accessorKey: 'place',
			header: 'Place',
		},
		{
			accessorKey: 'parish',
			header: 'Parish',
		},
		{
			accessorKey: 'vicariate',
			header: 'Vicariate',
		},
		{
			accessorKey: 'landOwnership',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'establishedYear',
			header: 'Established Year',
		},
		{
			accessorKey: 'classesFrom',
			header: 'Classes From',
		},
		{
			accessorKey: 'classesUpto',
			header: 'Classes Upto',
		},
		{
			accessorKey: 'gender',
			header: 'Gender',
		},
		{
			accessorKey: 'runBy',
			header: 'Run By',
		},
		{
			accessorKey: 'medium',
			header: 'Medium',
		},
		{
			accessorKey: 'management',
			header: 'Management',
		},
		{
			accessorKey: 'contactNumber',
			header: 'Contact Number (LL)',
		},
		{
			accessorKey: 'mailId',
			header: 'Mail ID',
		},
		{
			accessorKey: 'address',
			header: 'Address',
		},
	];
};

const useNoviciateInstitutionColumns = (): ColumnDef<NoviciateInstitutionProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<NoviciateInstitutionProps>(handleSelectRow),
		{
			accessorKey: 'noviciateName',
			header: 'Noviciate Name',
		},
		{
			accessorKey: 'place',
			header: 'Place',
		},
		{
			accessorKey: 'parish',
			header: 'Parish',
		},
		{
			accessorKey: 'vicariate',
			header: 'Vicariate',
		},
		{
			accessorKey: 'landOwnership',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'institutionCategory',
			header: 'Belongs to',
		},
		{
			accessorKey: 'institutionType',
			header: 'Congregation',
		},
		{
			accessorKey: 'category',
			header: 'Seminary',
		},
		{
			accessorKey: 'contactNumber',
			header: 'Contact Number (LL)',
		},
		{
			accessorKey: 'mailId',
			header: 'Mail ID',
		},
		{
			accessorKey: 'address',
			header: 'Address',
		},
	];
};
export {
	usePriestColumns,
	usePriestCalendarColumns,
	useCommissionColumns,
	useDioceseVSSSColumns,
	useDioceseSenateColumns,
	useVicariateForaneColumns,
	useParishColumns,
	useLandDocumentColumns,
	useVicariateColumns,
	useHouseListColumns,
	useInstitutionDetailsColumns,
	useNoviciateInstitutionColumns,
};
