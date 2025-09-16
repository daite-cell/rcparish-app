import {
	AdminDefaultImage,
	CustomFormInput,
	TableActionButtons,
	TablePriorDignitariesButton,
	TextLink,
	ToDateCell,
	StatusDropdown,
	SingleSelectDropdown,
	CategoryCell,
	ControlledDateInputField,
} from '@/components';
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
	SchoolsListProps,
	HouseListProps,
	NoviciateInstitutionProps,
	BishopPositionTableProps,
	CuriaMembersProps,
	CommitteesProps,
	PriestServiceDetails,
	PriestFamilyDetails,
	PriestEducationDetails,
	PriestHigherEducation,
	MemberType,
	RegisterMemberType,
	TechnicalInstitutionListProps,
	CollegeListProps,
	HomageListProps,
	HealthInstituteListProps,
	HostelListProps,
} from '@/types';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { SquarePen, Upload } from 'lucide-react';
import { useMemo } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import type {
	CommissionsFormType,
	CommitteesFormType,
	CuriaMembersFormType,
	PriestsType,
	VSSSFormType,
} from '../validations';
import { educationLevels, formationStages, priestRoles } from '@/forms-options-data';

const usePriestColumns = (): ColumnDef<PriestDetailsProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<PriestDetailsProps>(handleSelectRow, handleEditRow),
		{
			accessorKey: 'type',
			header: 'Type',
		},
		{
			accessorKey: 'imageUrl',
			header: 'Image',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.imageUrl} height={50} width={50} className="rounded-full" />
			),
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
	const { handleEditRow, handleSelectPriorRow } = useStore();

	return [
		{
			id: 'actions',
			header: 'Edit & Prior Dignitaries',
			cell: ({ row }) => (
				<TableActionButtons row={row.original} onEdit={handleEditRow} onViewPrior={handleSelectPriorRow} />
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
			accessorKey: 'imageUrl',
			header: 'Image',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.imageUrl} height={50} width={50} className="rounded-full" />
			),

			meta: { isExportable: false },
		},
	];
};

const useCuriaMembersColumns = (): ColumnDef<CuriaMembersProps>[] => {
	const { handleSelectPriorRow, handleSelectPriestsRow, handleEditPriestsRow } = useStore();

	return [
		{
			accessorKey: 'position',
			header: 'Position',
			cell: ({ row }) => <h1 className="font-bold">{row.original.position ?? ''}</h1>,
		},
		{
			accessorKey: 'name',
			header: 'Name',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectPriestsRow(row.original);
						handleEditPriestsRow(row.original);
					}}
					to={`/diocese/priests/${row.original.id}`}
				>
					{row.original.name ?? ''}
				</TextLink>
			),
		},
		{
			accessorKey: 'presentPosition',
			header: 'Present Position',
			cell: ({ row }) => <h1 className="font-bold">{row.original.presentPosition ?? ''}</h1>,
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
			accessorKey: 'imageUrl',
			header: 'Image',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.imageUrl} height={50} width={50} className="rounded-full" />
			),
			meta: { isExportable: false },
		},
		{
			id: 'prior dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<CuriaMembersProps, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
	];
};

const useCommitteesColumns = (): ColumnDef<CommitteesProps>[] => {
	const { handleEditRow, handleSelectPriorRow, handleSelectPriestsRow, handleEditPriestsRow } = useStore();

	return [
		{
			id: 'actions',
			header: 'Edit & Prior Dignitaries',
			cell: ({ row }) => (
				<TableActionButtons row={row.original} onEdit={handleEditRow} onViewPrior={handleSelectPriorRow} />
			),
			meta: { isExportable: false },
		},

		{
			accessorKey: 'position',
			header: 'Position',
		},
		{
			accessorKey: 'name',
			header: 'Name',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectPriestsRow(row.original);
						handleEditPriestsRow(row.original);
					}}
					to={`/diocese/priests/${row.original.id}`}
				>
					{row.original.name ?? ''}
				</TextLink>
			),
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
			accessorKey: 'imageUrl',
			header: 'Image',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.imageUrl} height={50} width={50} className="rounded-full" />
			),

			meta: { isExportable: false },
		},
	];
};

const useDioceseVSSSColumns = (): ColumnDef<DioceseVSSSMemberProps>[] => {
	const { handleSelectRow, handleSelectPriorRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<DioceseVSSSMemberProps>(handleSelectRow, handleEditRow),
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
			accessorKey: 'imageUrl',
			header: 'Image',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.imageUrl} height={50} width={50} className="rounded-full" />
			),
		},
	];
};

const useDioceseSenateColumns = (): ColumnDef<DioceseSenateMemberProps>[] => {
	const { handleSelectRow, handleSelectPriorRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<DioceseSenateMemberProps>(handleSelectRow, handleEditRow),
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
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.imageUrl} height={50} width={50} className="rounded-full" />
			),
		},
	];
};
const useVicariateForaneColumns = (): ColumnDef<VicariateForaneMemberProps>[] => {
	const { handleSelectRow, handleSelectPriorRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<VicariateForaneMemberProps>(handleSelectRow, handleEditRow),
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
	const { handleSelectRow, handleSelectPriorRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ParishTableDataProps>(handleSelectRow, handleEditRow),
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
			cell: () => <AdminDefaultImage height={50} width={50} className="rounded-full" />,
		},
	];
};
const useLandDocumentColumns = (): ColumnDef<PropertiesProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<PropertiesProps>(handleSelectRow, handleEditRow),

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
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<HouseListProps>(handleSelectRow, handleEditRow),

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

const useSchoolsListColumns = (): ColumnDef<SchoolsListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<SchoolsListProps>(handleSelectRow, handleEditRow),

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

const useTechnicalInstitutionListColumns = (): ColumnDef<TechnicalInstitutionListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<TechnicalInstitutionListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category',
			header: 'Category',
		},
		{
			accessorKey: 'institution_category',
			header: 'Institution Category',
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
			accessorKey: 'established_year',
			header: 'Established Year',
		},
		{
			accessorKey: 'land_ownership',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'gender',
			header: 'Gender',
		},
		{
			accessorKey: 'run_by',
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
			accessorKey: 'contact_number_ll',
			header: 'Contact Number (LL)',
		},
		{
			accessorKey: 'mail_id',
			header: 'Mail ID',
		},
		{
			accessorKey: 'address',
			header: 'Address',
		},
	];
};

const useNoviciateInstitutionColumns = (): ColumnDef<NoviciateInstitutionProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<NoviciateInstitutionProps>(handleSelectRow, handleEditRow),
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

const useBishopPositionColumns = (): ColumnDef<BishopPositionTableProps>[] => {
	const { handleSelectUploadedFileRow } = useStore();
	return [
		{
			accessorKey: 'position',
			header: 'Position',
			cell: (info) => info.getValue(),
			meta: { isExportable: true },
		},
		{
			accessorKey: 'name',
			header: 'Name',
			cell: (info) => info.getValue(),
			meta: { isExportable: true },
		},
		{
			accessorKey: 'from',
			header: 'From',
			cell: (info) => info.getValue(),
			meta: { isExportable: true },
		},
		{
			accessorKey: 'to',
			header: 'To',
			cell: (info) => info.getValue(),
			meta: { isExportable: true },
		},
		{
			accessorKey: 'mobile',
			header: 'Mobile',
			cell: (info) => info.getValue() || '',
			meta: { isExportable: true },
		},
		{
			accessorKey: 'briefHistory',
			header: 'Brief History',
			cell: (info) => info.getValue() || '',
			meta: { isExportable: false },
		},
		{
			accessorKey: 'upload',
			header: 'Upload',
			cell: ({ row }) => (
				<button onClick={() => handleSelectUploadedFileRow(row.original)} type="button" title="Upload">
					<Upload className="w-4 h-4 text-center" />
				</button>
			),
			meta: { isExportable: false },
		},
	];
};

const priestServiceColumns: ColumnDef<PriestServiceDetails>[] = [
	{
		header: 'Service as',
		accessorKey: 'service_as_content',
	},
	{
		header: 'Details',
		accessorKey: 'details',
	},
	{
		header: 'Status',
		accessorKey: 'status_content',
	},
	{
		header: 'Category',
		accessorKey: 'category',
	},
	{
		header: 'Place / Parish Name',
		accessorKey: 'parish_place_name',
	},
	{
		header: 'Church / Institution Name',
		accessorKey: 'church_name',
	},
	{
		header: 'From',
		accessorKey: 'from_date',
	},
	{
		header: 'Till',
		accessorKey: 'to_date',
	},
	{
		header: 'Remark',
		accessorKey: 'remark',
	},
];

const priestFamilyColumns: ColumnDef<PriestFamilyDetails>[] = [
	{
		header: 'Father Name',
		accessorKey: 'father_name',
	},
	{
		header: 'Mother Name',
		accessorKey: 'mother_name',
	},
	{
		header: 'No of Siblings',
		accessorKey: 'no_of_siblings',
	},
	{
		header: 'Birth Order',
		accessorKey: 'birth_order',
	},
	{
		header: 'No of Elder Brother',
		accessorKey: 'elder_brothers',
	},
	{
		header: 'No of Younger Brother',
		accessorKey: 'younger_brothers',
	},
	{
		header: 'No of Elder Sister',
		accessorKey: 'elder_sisters',
	},
	{
		header: 'No of Younger Sister',
		accessorKey: 'younger_sisters',
	},
	{
		header: 'Remark',
		accessorKey: 'remark',
	},
];

const priestEducationColumns: ColumnDef<PriestEducationDetails>[] = [
	{
		header: 'Category',
		accessorKey: 'category',
	},
	{
		header: 'Details',
		accessorKey: 'details',
	},
	{
		header: 'Course Name',
		accessorKey: 'course_name',
	},
	{
		header: 'School / Institution',
		accessorKey: 'institution_name',
	},
	{
		header: 'Place',
		accessorKey: 'place',
	},
	{
		header: 'Course Started',
		accessorKey: 'course_started',
	},
	{
		header: 'Course Completed',
		accessorKey: 'course_completed',
	},
	{
		header: 'Remark',
		accessorKey: 'remark',
	},
];

const priestHigherEducationColumns: ColumnDef<PriestHigherEducation>[] = [
	{
		header: 'Category',
		accessorKey: 'category',
	},
	{
		header: 'Course Name',
		accessorKey: 'course_name',
	},
	{
		header: 'College / Institution',
		accessorKey: 'college_name',
	},
	{
		header: 'Place',
		accessorKey: 'place',
	},
	{
		header: 'Course Started',
		accessorKey: 'course_started',
	},
	{
		header: 'Course Completed',
		accessorKey: 'course_completed',
	},
	{
		header: 'Remark',
		accessorKey: 'remark',
	},
];
const diocesePriorColumns = [
	{
		header: 'Position',
		accessorKey: 'service_as_content',
	},
	{
		header: 'Name',
		accessorKey: 'priest_name',
	},
	{
		header: 'From',
		accessorKey: 'from_date',
	},
	{
		header: 'To',
		accessorKey: 'to_date',
	},

	{
		header: 'Mobile',
		accessorKey: 'mobile_no_1',
	},
];

const useCuriaMembersFormColumns = <TForm extends CuriaMembersFormType>(
	control: Control<TForm>
): ColumnDef<MemberType>[] => {
	const { handleSelectPriorRow } = useStore();

	return [
		{
			accessorKey: 'position',
			header: 'Position',
		},
		{
			accessorKey: 'name_of_member',
			header: 'Name of the Person',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.name_of_member` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: ({ row }) => <AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />,
		},
		{
			accessorKey: 'priest_id',
			header: 'Priest ID',
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => (
				<StatusDropdown control={control as Control<FieldValues>} name={`members.${row.index}.status`} />
			),
		},
		{
			accessorKey: 'from_date',
			header: 'Since from',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.from_date` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'to_date',
			header: 'To',
			cell: ({ row }) => (
				<ToDateCell
					control={control}
					statusName={`members.${row.index}.status` as Path<TForm>}
					toDateName={`members.${row.index}.to_date` as Path<TForm>}
				/>
			),
		},
		{
			accessorKey: 'mobile',
			header: 'Mobile Number',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.mobile` as Path<TForm>} disabled />
			),
		},
		{
			id: 'prior_dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<MemberType, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
	];
};
const useCommissionsFormColumns = <TForm extends CommissionsFormType>(
	control: Control<TForm>
): ColumnDef<MemberType>[] => {
	const { handleSelectPriorRow } = useStore();

	return [
		{
			accessorKey: 'service_as',
			header: 'Service Id',
		},
		{
			accessorKey: 'service_as_content',
			header: 'Incharge for',
		},
		{
			accessorKey: 'priest_name',
			header: 'Name of the Person',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.priest_name` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: ({ row }) => <AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />,
		},
		{
			accessorKey: 'priest_id',
			header: 'Priest ID',
		},
		{
			accessorKey: 'status_content',
			header: 'Status',
			cell: ({ row }) => (
				<StatusDropdown control={control as Control<FieldValues>} name={`members.${row.index}.status_content`} />
			),
		},
		{
			accessorKey: 'from_date',
			header: 'Since from',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.from_date` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'to_date',
			header: 'To',
			cell: ({ row }) => (
				<ToDateCell
					control={control}
					statusName={`members.${row.index}.status_content` as Path<TForm>}
					toDateName={`members.${row.index}.to_date` as Path<TForm>}
				/>
			),
		},
		{
			accessorKey: 'mobile_no_1',
			header: 'Mobile Number',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.mobile_no_1` as Path<TForm>} disabled />
			),
		},
		{
			id: 'prior_dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<MemberType, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
	];
};

const useCommitteesFormColumns = <TForm extends CommitteesFormType>(
	control: Control<TForm>
): ColumnDef<MemberType>[] => {
	const { handleSelectPriorRow } = useStore();

	return [
		{
			accessorKey: 'service_as',
			header: 'Service Id',
		},
		{
			accessorKey: 'position',
			header: 'Name of position',
		},
		{
			accessorKey: 'priest_name',
			header: 'Name of the Person',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.priest_name` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: ({ row }) => <AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />,
		},
		{
			accessorKey: 'priest_id',
			header: 'Priest ID',
		},
		{
			accessorKey: 'status_content',
			header: 'Status',
			cell: ({ row }) => (
				<StatusDropdown control={control as Control<FieldValues>} name={`members.${row.index}.status_content`} />
			),
		},
		{
			accessorKey: 'from_date',
			header: 'Since from',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.from_date` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'to_date',
			header: 'To',
			cell: ({ row }) => (
				<ToDateCell
					control={control}
					statusName={`members.${row.index}.status_content` as Path<TForm>}
					toDateName={`members.${row.index}.to_date` as Path<TForm>}
				/>
			),
		},
		{
			accessorKey: 'mobile_no_1',
			header: 'Mobile Number',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.mobile_no_1` as Path<TForm>} disabled />
			),
		},
		{
			id: 'prior_dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<MemberType, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
	];
};

const useVSSSFormColumns = <TForm extends VSSSFormType>(
	control: Control<TForm>,
	type?: string
): ColumnDef<MemberType>[] => {
	const { handleSelectPriorRow } = useStore();

	if (type === 'vf') {
		return [
			{
				accessorKey: 'service_as_content',
				header: 'Name of the position',
				cell: ({ row }) => (
					<CustomFormInput control={control} name={`members.${row.index}.service_as_content` as Path<TForm>} disabled />
				),
			},
			{
				accessorKey: 'priest_name',
				header: 'Name of the Person',
				cell: ({ row }) => (
					<CustomFormInput control={control} name={`members.${row.index}.priest_name` as Path<TForm>} disabled />
				),
			},
			{
				accessorKey: 'priest_id',
				header: 'Priest ID',
			},
			{
				accessorKey: 'status_content',
				header: 'Status',
				cell: ({ row }) => (
					<StatusDropdown control={control as Control<FieldValues>} name={`members.${row.index}.status_content`} />
				),
			},
			{
				accessorKey: 'from_date',
				header: 'Since from',
				cell: ({ row }) => (
					<CustomFormInput control={control} name={`members.${row.index}.from_date` as Path<TForm>} disabled />
				),
			},
			{
				accessorKey: 'to_date',
				header: 'To',
				cell: ({ row }) => (
					<ToDateCell
						control={control}
						statusName={`members.${row.index}.status_content` as Path<TForm>}
						toDateName={`members.${row.index}.to_date` as Path<TForm>}
					/>
				),
			},
			{ accessorKey: 'parish_place_name', header: 'Vicariate' },
			{ accessorKey: 'address', header: 'Resident at' },
			{
				accessorKey: 'mobile_no_1',
				header: 'Mobile Number',
				cell: ({ row }) => (
					<CustomFormInput control={control} name={`members.${row.index}.mobile_no_1` as Path<TForm>} disabled />
				),
			},
			{
				accessorKey: 'image',
				header: 'Image',
				cell: ({ row }) => (
					<AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />
				),
			},
			{
				id: 'prior_dignitaries',
				header: 'Prior Dignitaries',
				cell: ({ row }) => <TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />,
				meta: { isExportable: false },
				enableSorting: false,
				enableHiding: true,
			},
		];
	}

	return [
		{
			accessorKey: 'service_as_content',
			header: 'Name of the position',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.service_as_content` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'priest_name',
			header: 'Name of the Person',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.priest_name` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'priest_id',
			header: 'Priest ID',
		},
		{
			accessorKey: 'status_content',
			header: 'Status',
			cell: ({ row }) => (
				<StatusDropdown control={control as Control<FieldValues>} name={`members.${row.index}.status_content`} />
			),
		},
		{
			accessorKey: 'from_date',
			header: 'Since from',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.from_date` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'to_date',
			header: 'To',
			cell: ({ row }) => (
				<ToDateCell
					control={control}
					statusName={`members.${row.index}.status_content` as Path<TForm>}
					toDateName={`members.${row.index}.to_date` as Path<TForm>}
				/>
			),
		},
		{ accessorKey: 'address', header: 'Resident at' },
		{
			accessorKey: 'mobile_no_1',
			header: 'Mobile Number',
			cell: ({ row }) => (
				<CustomFormInput control={control} name={`members.${row.index}.mobile_no_1` as Path<TForm>} disabled />
			),
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: ({ row }) => <AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />,
		},
		{
			id: 'prior_dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }) => <TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />,
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
	];
};

const registerMemberColumns: ColumnDef<RegisterMemberType>[] = [
	{
		accessorKey: 'position',
		header: 'Position',
	},
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'from_date',
		header: 'Since from',
	},
	{
		accessorKey: 'to_date',
		header: 'To',
	},
	{
		accessorKey: 'mobile',
		header: 'Mobile',
	},
	{
		accessorKey: 'image',
		header: 'Image',
		cell: ({ row }) => <AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />,
	},
];

const useCollegeListColumns = (): ColumnDef<CollegeListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<CollegeListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category',
			header: 'Category',
		},
		{
			accessorKey: 'college_category',
			header: 'College Category',
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
			accessorKey: 'established_year',
			header: 'Established Year',
		},
		{
			accessorKey: 'land_ownership',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'affiliation_with',
			header: 'Affiliation With',
		},
		{
			accessorKey: 'gender',
			header: 'Gender',
		},
		{
			accessorKey: 'run_by',
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
			accessorKey: 'contact_number_ll',
			header: 'Contact Number (LL)',
		},
		{
			accessorKey: 'mail_id',
			header: 'Mail ID',
		},
		{
			accessorKey: 'address',
			header: 'Address',
		},
	];
};

const useHomageListColumns = (): ColumnDef<HomageListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<HomageListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category',
			header: 'Category',
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
			accessorKey: 'land_ownership',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'established_year',
			header: 'Established Year',
		},
		{
			accessorKey: 'run_by',
			header: 'Run By',
		},
		{
			accessorKey: 'home_for',
			header: 'Home For',
		},
		{
			accessorKey: 'contact_number_ll',
			header: 'Contact Number (LL)',
		},
		{
			accessorKey: 'mail_id',
			header: 'Mail ID',
		},
		{
			accessorKey: 'address',
			header: 'Address',
		},
	];
};

const useHealthInstituteListColumns = (): ColumnDef<HealthInstituteListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<HealthInstituteListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category',
			header: 'Category',
		},
		{
			accessorKey: 'healthInstituteCategory',
			header: 'Health Institute Category',
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
			accessorKey: 'runBy',
			header: 'Run By',
		},
		{
			accessorKey: 'contactNumberLL',
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

const useHostelListColumns = (): ColumnDef<HostelListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<HostelListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category',
			header: 'Category',
		},
		{
			accessorKey: 'name',
			header: 'Name',
		},
		{
			accessorKey: 'campusName',
			header: 'Campus Name',
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
			accessorKey: 'specification',
			header: 'Specification',
		},
		{
			accessorKey: 'establishedYear',
			header: 'Established Year',
		},
		{
			accessorKey: 'runBy',
			header: 'Run By',
		},
		{
			accessorKey: 'contactNumberLL',
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

const getPriestsServiceRecordColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<PriestsType>[] => [
	{
		accessorKey: 'serviceAs',
		header: 'Service As',
		cell: ({ row }) => (
			<div className="flex">
				<span className="h-8 w-1 bg-[#008000]   mr-2"></span>
				<SingleSelectDropdown
					control={control}
					name={`serviceRecord.${row.index}.jobType` as Path<TForm>}
					options={priestRoles}
				/>
			</div>
		),
	},
	{ header: 'Details', cell: () => <h1>nill</h1> },
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => (
			<StatusDropdown control={control as Control<FieldValues>} name={`serviceRecord.${row.index}.status`} />
		),
	},
	{
		accessorKey: 'category',
		header: 'Category',
		cell: ({ row }) => (
			<CategoryCell
				control={control}
				statusName={`serviceRecord.${row.index}.status` as Path<TForm>}
				category={`serviceRecord.${row.index}.to_date` as Path<TForm>}
			/>
		),
	},

	{
		accessorKey: 'placeName',
		header: 'Place / Parish Name',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`serviceRecord.${row.index}.name` as Path<TForm>}
				placeholder="Enter name"
			/>
		),
	},
	{
		accessorKey: 'churchName',
		header: 'Church / Institution Name',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`serviceRecord.${row.index}.churchName` as Path<TForm>}
				placeholder="Enter church name"
			/>
		),
	},
	{
		accessorKey: 'fromDate',
		header: 'Since from',
		cell: ({ row }) => (
			<ControlledDateInputField
				name={`serviceRecord.${row.index}.fromDate` as Path<TForm>}
				control={control}
				placeholder="dd/mm/yyyy"
				type="date"
			/>
		),
	},
	{
		accessorKey: 'toDate',
		header: 'To',
		cell: ({ row }) => (
			<ToDateCell
				control={control}
				statusName={`serviceRecord.${row.index}.status` as Path<TForm>}
				toDateName={`serviceRecord.${row.index}.toDate` as Path<TForm>}
			/>
		),
	},

	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: ({ row }) => <CustomFormInput control={control} name={`serviceRecord.${row.index}.remarks` as Path<TForm>} />,
	},
	{ header: 'ID' },
];

const getPriestsSecularStudiesRecordColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<PriestsType>[] => [
	{
		accessorKey: 'category',
		header: 'Category',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`secularStudies.${row.index}.category` as Path<TForm>}
				options={educationLevels}
			/>
		),
	},
	{ header: 'Details', cell: () => <h1>nill</h1> },
	{
		accessorKey: 'courseName',
		header: 'Course Name',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`secularStudies.${row.index}.courseName` as Path<TForm>} />
		),
	},

	{
		accessorKey: 'schoolName',
		header: 'School / Institution',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`secularStudies.${row.index}.schoolName` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'placeName',
		header: 'Place Name',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`secularStudies.${row.index}.placeName` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'courseStartDate',
		header: 'Course Started Year',
		cell: ({ row }) => (
			<ControlledDateInputField
				name={`secularStudies.${row.index}.courseStartDate` as Path<TForm>}
				control={control}
				placeholder="dd/mm/yyyy"
				type="date"
			/>
		),
	},
	{
		accessorKey: 'courseEndDate',
		header: 'Course Completed Year',
		cell: ({ row }) => (
			<ControlledDateInputField
				name={`secularStudies.${row.index}.courseEndDate` as Path<TForm>}
				control={control}
				placeholder="dd/mm/yyyy"
				type="date"
			/>
		),
	},

	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`secularStudies.${row.index}.remarks` as Path<TForm>} />
		),
	},
	{ header: 'ID' },
];

const getPriestsSacredStudiesRecordColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<PriestsType>[] => [
	{
		accessorKey: 'category',
		header: 'Category',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`secularStudies.${row.index}.category` as Path<TForm>}
				options={formationStages}
			/>
		),
	},
	{ header: 'Details', cell: () => <h1>nill</h1> },
	{
		accessorKey: 'courseName',
		header: 'Course Name',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`secularStudies.${row.index}.courseName` as Path<TForm>} />
		),
	},

	{
		accessorKey: 'collegeName',
		header: 'Institution / College',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`secularStudies.${row.index}.collegeName` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'placeName',
		header: 'Place Name',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`secularStudies.${row.index}.placeName` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'courseStartDate',
		header: 'Course Started Year',
		cell: ({ row }) => (
			<ControlledDateInputField
				name={`secularStudies.${row.index}.courseStartDate` as Path<TForm>}
				control={control}
				placeholder="dd/mm/yyyy"
				type="date"
			/>
		),
	},
	{
		accessorKey: 'courseEndDate',
		header: 'Course Completed Year',
		cell: ({ row }) => (
			<ControlledDateInputField
				name={`secularStudies.${row.index}.courseEndDate` as Path<TForm>}
				control={control}
				placeholder="dd/mm/yyyy"
				type="date"
			/>
		),
	},

	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`secularStudies.${row.index}.remarks` as Path<TForm>} />
		),
	},
	{ header: 'ID' },
];

export {
	usePriestColumns,
	usePriestCalendarColumns,
	useCommissionColumns,
	useCuriaMembersColumns,
	useDioceseVSSSColumns,
	useDioceseSenateColumns,
	useVicariateForaneColumns,
	useParishColumns,
	useLandDocumentColumns,
	useVicariateColumns,
	useHouseListColumns,
	useNoviciateInstitutionColumns,
	useBishopPositionColumns,
	useCommitteesColumns,
	priestServiceColumns,
	priestFamilyColumns,
	priestEducationColumns,
	priestHigherEducationColumns,
	diocesePriorColumns,
	registerMemberColumns,
	useCuriaMembersFormColumns,
	useCommissionsFormColumns,
	useCommitteesFormColumns,
	useVSSSFormColumns,
	useSchoolsListColumns,
	useTechnicalInstitutionListColumns,
	useCollegeListColumns,
	useHomageListColumns,
	useHealthInstituteListColumns,
	useHostelListColumns,
	getPriestsServiceRecordColumns,
	getPriestsSecularStudiesRecordColumns,
	getPriestsSacredStudiesRecordColumns,
};
