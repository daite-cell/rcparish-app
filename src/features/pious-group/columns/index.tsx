import type {
	ParishCouncilMemberDetailsProps,
	FamilyDataProps,
	MembersInParishFamilyProps,
	ParishSonsAndDaughtersProps,
} from '@/types';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { Edit, Eye, Folder, Settings, SquarePen, Trash, IdCard } from 'lucide-react';
import { useStore } from '@/store/store';

const useParishCouncilColumns = (): ColumnDef<ParishCouncilMemberDetailsProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<ParishCouncilMemberDetailsProps, unknown>) => (
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
			id: 'edit',
			header: () => <Settings className="w-4 h-4 text-center" />,
			cell: () => (
				<button type="button" title="edit">
					<Edit className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<ParishCouncilMemberDetailsProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			id: 'prior dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<ParishCouncilMemberDetailsProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View Prior Dignitaries">
					<Folder className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'position', header: 'Position' },
		{ accessorKey: 'name', header: 'Name' },
		{ accessorKey: 'mobile', header: 'Mobile' },
		{ accessorKey: 'memberId', header: 'Member ID' },
		{ accessorKey: 'electedStatus', header: 'Elected Status' },
		{
			accessorKey: 'electedDate',
			header: 'Elected Date',
			cell: ({ getValue }) => {
				try {
					const dateValue = getValue() as string;
					if (!dateValue) return '';
					const date = new Date(dateValue);
					return isNaN(date.getTime()) ? dateValue : date.toLocaleDateString('en-GB');
				} catch {
					return getValue() as string;
				}
			},
		},
		{ accessorKey: 'electedFrom', header: 'Elected From' },
		{ accessorKey: 'nameOfRespectives', header: 'Name of Respectives' },
		{ accessorKey: 'positionInDiscipline', header: 'Position in Discipline' },
	];
};

const useFamilyOverviewColumns = (): ColumnDef<FamilyDataProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
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
			id: 'edit',
			header: () => <Settings className="w-4 h-4 text-center" />,
			cell: () => (
				<button type="button" title="edit">
					<Edit className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'fc',
			header: 'FC',
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="FC Action">
					<IdCard className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'anbiam', header: 'Anbiam' },
		{ accessorKey: 'familyNumber', header: 'Family Number' },
		{ accessorKey: 'familyName', header: 'Family Name' },
		{ accessorKey: 'marriageDate1', header: 'Marriage Date' },
		{ accessorKey: 'marriageDate2', header: 'Marriage Date (Full)' },
		{ accessorKey: 'oldFamilyNumber', header: 'Old Family Number' },
		{ accessorKey: 'familyHead', header: 'Family Head' },
		{ accessorKey: 'membersInFamily', header: 'Members in Family' },
		{ accessorKey: 'familyType', header: 'Family Type' },
		{ accessorKey: 'monthlySubscription', header: 'Monthly Subscription' },
		{ accessorKey: 'subscriptionFrom', header: 'Subscription From' },
		{ accessorKey: 'houseType', header: 'House Type' },
		{ accessorKey: 'community', header: 'Community' },
		{ accessorKey: 'ownership', header: 'Ownership' },
		{ accessorKey: 'livingStatus', header: 'Living Status' },
		{ accessorKey: 'settledAs', header: 'Settled As' },
		{ accessorKey: 'mobile', header: 'Mobile' },
		{ accessorKey: 'permanentAddress', header: 'Permanent Address' },
		{ accessorKey: 'temporaryAddress', header: 'Temporary Address' },
		{ accessorKey: 'remarks', header: 'Remarks' },
		{ accessorKey: 'position', header: 'Position' },
		{ accessorKey: 'name', header: 'Member Name' },
		{ accessorKey: 'memberId', header: 'Member ID' },
		{ accessorKey: 'electedStatus', header: 'Elected Status' },
		{ accessorKey: 'electedDate', header: 'Elected Date' },
		{ accessorKey: 'electedFrom', header: 'Elected From' },
		{ accessorKey: 'nameOfRespectives', header: 'Name of Respectives' },
		{ accessorKey: 'positionInDiscipline', header: 'Position in Discipline' },
	];
};

const useMembersInParishFamilyColumns = (): ColumnDef<MembersInParishFamilyProps>[] => {
	const { handleSelectRow } = useStore();

	return [
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
			id: 'edit',
			header: () => <Settings className="w-4 h-4 text-center" />,
			cell: () => (
				<button type="button" title="edit">
					<Edit className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'view',
			header: 'Details',
			cell: ({ row }) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="Delete">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{ accessorKey: 'memberName', header: 'Member Name' },
		{ accessorKey: 'uniqueMembershipNumber', header: 'Unique Membership Number' },
		{ accessorKey: 'familyName', header: 'Family Name' },
		{ accessorKey: 'uniqueAnbiamFamilyNumber', header: 'Unique Anbiam Family Number' },
		{ accessorKey: 'oldFamilyNumber', header: 'Old Family Number' },
		{ accessorKey: 'mainStationSubStation', header: 'Main Station / Sub-Station' },
		{ accessorKey: 'anbiam', header: 'Anbiam' },
		{ accessorKey: 'relationshipToFamily', header: 'Relationship to Family' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'fatherName', header: 'Father Name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'livingWith', header: 'Living With' },
		{ accessorKey: 'physicallyChallenged', header: 'Physically Challenged' },
		{ accessorKey: 'bloodGroup', header: 'Blood Group' },
		{ accessorKey: 'communityCaste', header: 'Community (Caste)' },
		{ accessorKey: 'subCaste', header: 'Sub Caste' },
		{ accessorKey: 'religion', header: 'Religion' },
		{ accessorKey: 'vocationStatus', header: 'Vocation Status' },
		{ accessorKey: 'marriageStatus', header: 'Marriage Status' },
		{ accessorKey: 'marriageDate', header: 'Marriage Date' },
		{ accessorKey: 'marriageRemarks', header: 'Marriage Remarks' },
		{ accessorKey: 'birthDate', header: 'Birth Date' },
		{ accessorKey: 'baptismDate', header: 'Baptism Date' },
		{ accessorKey: 'holyCommunionDate', header: 'Holy Communion Date' },
		{ accessorKey: 'confirmationDate', header: 'Confirmation Date' },
		{ accessorKey: 'mobileNumber', header: 'Mobile Number' },
		{ accessorKey: 'adhaarNumber', header: 'Adhaar Number' },
		{ accessorKey: 'qualification', header: 'Qualification' },
		{ accessorKey: 'occupation', header: 'Occupation' },
		{ accessorKey: 'monthlyIncome', header: 'Monthly Income' },
		{ accessorKey: 'livingStatus', header: 'Living Status' },
		{ accessorKey: 'permanentAddress', header: 'Permanent Address' },
		{ accessorKey: 'residentialAddress', header: 'Residential Address' },
		{ accessorKey: 'subStationId', header: 'Sub Station ID' },
		{ accessorKey: 'anbiamId', header: 'Anbiam ID' },
	];
};

const useParishSonsAndDaughtersColumns = (): ColumnDef<ParishSonsAndDaughtersProps>[] => {
	const { handleSelectRow } = useStore();

	return [
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
			id: 'edit',
			header: () => <Settings className="w-4 h-4 text-center" />,
			cell: () => (
				<button type="button" title="edit">
					<Edit className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'view',
			header: 'Details',
			cell: ({ row }) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			accessorKey: 'memberName',
			header: 'Member Name',
		},
		{
			accessorKey: 'uniqueMemberId',
			header: 'Unique Member Id',
		},
		{
			accessorKey: 'familyName',
			header: 'Family Name',
		},
		{
			accessorKey: 'uniqueFamilyId',
			header: 'Unique Family Id',
		},
		{
			accessorKey: 'station',
			header: 'Sub-Station / Main Station',
		},
		{
			accessorKey: 'subStationId',
			header: 'Sub-Station Id',
		},
		{
			accessorKey: 'anbiam',
			header: 'Anbiam',
		},
		{
			accessorKey: 'anbiamId',
			header: 'Anbiam Id',
		},
		{
			accessorKey: 'gender',
			header: 'Gender',
		},
		{
			accessorKey: 'familyHead',
			header: 'Family Head',
		},
		{
			accessorKey: 'relationshipToFamily',
			header: 'Relationship to Family',
		},
		{
			accessorKey: 'fatherName',
			header: 'Father Name',
		},
		{
			accessorKey: 'motherName',
			header: 'Mother Name',
		},
		{
			accessorKey: 'category',
			header: 'Category',
		},
		{
			accessorKey: 'nameOfRespective',
			header: 'Name of Respective',
		},
		{
			accessorKey: 'presentStatus',
			header: 'Present Status',
		},
		{
			accessorKey: 'studyingOrPosition',
			header: 'Studying/Position',
		},
		{
			accessorKey: 'place',
			header: 'Place',
		},
		{
			accessorKey: 'mobileNumber',
			header: 'Mobile No',
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'permanentAddress',
			header: 'Permanent Address',
		},
		{
			accessorKey: 'temporaryAddress',
			header: 'Temporary Address',
		},
	];
};

export {
	useParishCouncilColumns,
	useFamilyOverviewColumns,
	useMembersInParishFamilyColumns,
	useParishSonsAndDaughtersColumns,
};
