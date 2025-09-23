import type {
	ParishCouncilMemberDetailsProps,
	FamilyDataProps,
	MembersInParishFamilyProps,
	ParishSonsAndDaughtersProps,
	ReligiousPersonProps,
	AnbiamCouncilDataProps,
	AnbiamInchargeDataProps,
	AssociationCouncilMemberProps,
	ParishAssociationClubProps,
	AssociationDetailsProps,
	AssociationInchargeProps,
	MemberDetailsType,
	FamilyMemberDetailsProps,
	StudentDataProps,
	CollegeStudentDataProps,
	AnbiamDetailsProps,
	TotalFamilyMembersDetails,
	ParishSonsAndDaughtersOtherMemberProps,
	AddFamilyMemberType,
} from '@/types';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { Trash, IdCard, SquarePen } from 'lucide-react';
import { useStore } from '@/store/store';
import {
	AdminDefaultImage,
	CustomFormInput,
	SingleSelectDropdown,
	TableDetailsViewButton,
	TablePriorDignitariesButton,
	TextLink,
} from '@/components';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { activeToOptions, relationOptions } from '@/forms-options-data';
import type { FamilesType } from '../validation';

const useParishCouncilColumns = (): ColumnDef<ParishCouncilMemberDetailsProps>[] => {
	const { handleSelectRow, handleSelectPriorRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ParishCouncilMemberDetailsProps>(handleSelectRow, handleEditRow),
		{
			id: 'prior dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<ParishCouncilMemberDetailsProps, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{ accessorKey: 'sub_station_name', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'position', header: 'Position' },
		{ accessorKey: 'member_name', header: 'Name' },
		{ accessorKey: 'mobile_no', header: 'Mobile' },
		{ accessorKey: 'unique_member_id', header: 'Member ID' },
		{ accessorKey: 'elected_status', header: 'Elected Status' },
		{
			accessorKey: 'elected_date',
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
		{ accessorKey: 'elected_from', header: 'Elected From' },
		{ accessorKey: 'elected_category_name', header: 'Elected Category Name' },
		{ accessorKey: 'member_position', header: 'Member Position' },
	];
};

const useFamilyOverviewColumns = (): ColumnDef<FamilyDataProps>[] => {
	const { handleSelectRow, handleSelectFamilyCardRow, handleEditRow, handleSelectFamilyMembersRow } = useStore();

	return [
		...getCommonActionColumns<FamilyDataProps>(handleSelectRow, handleEditRow),
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="Delete">
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
				<button type="button" onClick={() => handleSelectFamilyCardRow(row.original)} title="FC Action">
					<IdCard className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{ accessorKey: 'sub_station_name', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam' },
		{ accessorKey: 'unique_family_id', header: 'Family Number' },
		{ accessorKey: 'family_name', header: 'Family Name' },
		{ accessorKey: 'marriage_date', header: 'Marriage Date' },
		{ accessorKey: 'old_family_id', header: 'Old Family Number' },
		{ accessorKey: 'family_head', header: 'Family Head' },
		{
			accessorKey: 'total_members',
			header: 'Members in Family',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectFamilyMembersRow(row.original);
					}}
					to=""
				>
					{row.original.total_members ?? ''}
				</TextLink>
			),
		},
		{ accessorKey: 'family_type', header: 'Family Type' },
		{ accessorKey: 'monthly_subscription', header: 'Monthly Subscription' },
		{ accessorKey: 'subscription_from', header: 'Subscription From' },
		{ accessorKey: 'social_status', header: 'House Type' },
		{ accessorKey: 'community', header: 'Community' },
		{ accessorKey: 'house_ownership', header: 'Ownership' },
		{ accessorKey: 'living_status', header: 'Living Status' },
		{ accessorKey: 'settled_as', header: 'Settled As' },
		{ accessorKey: 'family_mobile_no', header: 'Mobile' },
		{ accessorKey: 'permanent_address', header: 'Permanent Address' },
		{ accessorKey: 'temporary_address', header: 'Temporary Address' },
		{ accessorKey: 'any_remark', header: 'Remarks' },
		{ accessorKey: 'activeness_content', header: 'Position' },
	];
};

const useMembersInParishFamilyColumns = (): ColumnDef<MembersInParishFamilyProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MembersInParishFamilyProps>(handleSelectRow, handleEditRow),
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

		{ accessorKey: 'member_name', header: 'Member Name' },
		{ accessorKey: 'unique_member_id', header: 'Unique Membership Number' },
		{ accessorKey: 'family_name', header: 'Family Name' },
		{ accessorKey: 'unique_family_id', header: 'Unique Anbiam Family Number' },
		{ accessorKey: 'old_family_id', header: 'Old Family Number' },
		{ accessorKey: 'sub_station_name', header: 'Main Station / Sub-Station' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam' },
		{ accessorKey: 'relation', header: 'Relationship to Family' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'living_with', header: 'Living With' },
		{ accessorKey: 'physically_challenged', header: 'Physically Challenged' },
		{ accessorKey: 'blood_group_content', header: 'Blood Group' },
		{ accessorKey: 'community_category', header: 'Community (Caste)' },
		{ accessorKey: 'sub_caste', header: 'Sub Caste' },
		{ accessorKey: 'religion', header: 'Religion' },
		{ accessorKey: 'vocation_status', header: 'Vocation Status' },
		{ accessorKey: 'marriage_status', header: 'Marriage Status' },
		{ accessorKey: 'individual_marriage_date', header: 'Marriage Date' },
		{ accessorKey: 'marriage_remark', header: 'Marriage Remarks' },
		{ accessorKey: 'birth_date', header: 'Birth Date' },
		{ accessorKey: 'baptism_date', header: 'Baptism Date' },
		{ accessorKey: 'holy_communion_date', header: 'Holy Communion Date' },
		{ accessorKey: 'confirmation_date', header: 'Confirmation Date' },
		{ accessorKey: 'mobile_no', header: 'Mobile Number' },
		{ accessorKey: 'adhaar_no', header: 'Adhaar Number' },
		{ accessorKey: 'full_qualification', header: 'Qualification' },
		{ accessorKey: 'occupation', header: 'Occupation' },
		{ accessorKey: 'monthly_income', header: 'Monthly Income' },
		{ accessorKey: 'living_status', header: 'Living Status' },
		{ accessorKey: 'permanent_address', header: 'Permanent Address' },
		{ accessorKey: 'temporary_address', header: 'Residential Address' },
		{ accessorKey: 'sub_station_id', header: 'Sub Station ID' },
		{ accessorKey: 'anbiam_id', header: 'Anbiam ID' },
	];
};

const useParishSonsAndDaughtersFamilyMembersColumns = (): ColumnDef<ParishSonsAndDaughtersProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ParishSonsAndDaughtersProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'member_name',
			header: 'Member Name',
			cell: ({ row }) => <TextLink to="">{row.original.member_name ?? ''}</TextLink>,
		},

		{
			accessorKey: 'unique_member_id',
			header: 'Unique Member Id',
		},
		{
			accessorKey: 'family_name',
			header: 'Family Name',
		},
		{
			accessorKey: 'unique_family_id',
			header: 'Unique Family Id',
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Sub-Station / Main Station',
		},
		{
			accessorKey: 'sub_station_id',
			header: 'Sub-Station Id',
		},
		{
			accessorKey: 'anbiam_name',
			header: 'Anbiam',
		},
		{
			accessorKey: 'anbiam_id',
			header: 'Anbiam Id',
		},
		{
			accessorKey: 'gender',
			header: 'Gender',
		},
		{
			accessorKey: 'father_name',
			header: 'Father Name',
		},
		{
			accessorKey: 'relation',
			header: 'Relationship to Family',
		},
		{
			accessorKey: 'father_name',
			header: 'Father Name',
		},
		{
			accessorKey: 'mother_name',
			header: 'Mother Name',
		},
		{
			accessorKey: 'vs_data_1',
			header: 'Category',
		},
		{
			accessorKey: 'vs_data_2',
			header: 'Name of Respective',
		},
		{
			accessorKey: 'vs_data_3',
			header: 'Present Status',
		},
		{
			accessorKey: 'vs_data_4',
			header: 'Studying/Position',
		},
		{
			accessorKey: 'vs_data_5',
			header: 'Place',
		},
		{
			accessorKey: 'mobile_no',
			header: 'Mobile No',
		},
		{
			accessorKey: 'email_id',
			header: 'Email',
		},
		{
			accessorKey: 'permanent_address',
			header: 'Permanent Address',
		},
		{
			accessorKey: 'temporary_address',
			header: 'Temporary Address',
		},
	];
};
const useParishSonsAndDaughtersOtherMembersColumns = (): ColumnDef<ParishSonsAndDaughtersOtherMemberProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ParishSonsAndDaughtersOtherMemberProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'member_name',
			header: 'Member Name',
			cell: ({ row }) => <TextLink to="">{row.original.member_name ?? ''}</TextLink>,
		},

		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'category', header: 'Category' },
		{ accessorKey: 'name_of_respective', header: 'Name of Respective' },
		{ accessorKey: 'present_status', header: 'Present Status' },
		{ accessorKey: 'studying_or_position', header: 'Studying/Position' },
		{ accessorKey: 'place', header: 'Place' },
		{ accessorKey: 'mobile', header: 'Mobile' },
		{ accessorKey: 'email', header: 'Email' },
		{ accessorKey: 'permanent_address', header: 'Permanent Address' },
		{ accessorKey: 'temporary_address', header: 'Temporary Address' },
		{ accessorKey: 'member_id', header: 'Member Id' },
		{ accessorKey: 'if_member_in_parish', header: 'If Member in Parish' },
	];
};

const useReligiousPeopleColumns = (): ColumnDef<ReligiousPersonProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ReligiousPersonProps>(handleSelectRow, handleEditRow),
		{
			accessorKey: 'person_name',
			header: 'Religious Person Name',
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: () => <AdminDefaultImage height={50} width={50} className="rounded-full" />,
		},
		{
			accessorKey: 'person_id',
			header: 'Person Id',
		},
		{
			accessorKey: 'gender',
			header: 'Gender',
		},
		{
			accessorKey: 'position',
			header: 'Position',
		},
		{
			accessorKey: 'name',
			header: 'Institution/Convent',
		},
		{
			accessorKey: 'in_charge',
			header: 'In-Charge for',
		},
		{
			accessorKey: 'mobile_no',
			header: 'Contact Mobile Number',
		},
	];
};

const useAnbiamsColumns = (): ColumnDef<AnbiamCouncilDataProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<AnbiamCouncilDataProps>(handleSelectRow, handleEditRow),
		{
			accessorKey: 'parish_content',
			header: 'Parish Name',
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'anbiam_name',
			header: 'Name of the Anbiam',
		},
		{
			accessorKey: 'anbiam_id',
			header: 'Anbiam Id',
		},
		{
			accessorKey: 'anbiam_short_form',
			header: 'Short Form',
		},
		{
			accessorKey: 'elected_on',
			header: 'Elected On',
		},
		{
			accessorKey: 'period_of',
			header: 'Period Of (Years)',
		},
		{
			accessorKey: 'extend_period',
			header: 'If Extended',
		},
		{
			accessorKey: 'period_end_on',
			header: 'Period Ends On',
		},
	];
};

const useAnbiamsInchargeColumns = (): ColumnDef<AnbiamInchargeDataProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<AnbiamInchargeDataProps>(handleSelectRow, handleEditRow),
		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'anbiam_name',
			header: 'Anbiam',
		},
		{
			id: 'prior dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<AnbiamInchargeDataProps, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'position',
			header: 'Position',
		},
		{
			accessorKey: 'elected_status',
			header: 'Elected Status',
		},
		{
			accessorKey: 'reason_content',
			header: 'Reason',
		},
		{
			accessorKey: 'member_name',
			header: 'Name',
		},
		{
			accessorKey: 'mobile_no',
			header: 'Mobile 1',
		},
		{
			accessorKey: 'mobile_no_1',
			header: 'Mobile 2',
		},
		{
			accessorKey: 'unique_member_id',
			header: 'Member ID',
		},
		{
			accessorKey: 'elected_date',
			header: 'Elected Date',
		},
	];
};

const useAssociationCouncilMemberPropsColumns = (): ColumnDef<AssociationCouncilMemberProps>[] => {
	const { handleSelectRow, handleEditRow, handleSelectPriorRow } = useStore();

	return [
		...getCommonActionColumns<AssociationCouncilMemberProps>(handleSelectRow, handleEditRow),
		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'association_name',
			header: 'Association',
		},
		{
			id: 'prior dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<AssociationCouncilMemberProps, unknown>) => (
				<TablePriorDignitariesButton onClick={() => handleSelectPriorRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'position',
			header: 'Position',
		},
		{
			accessorKey: 'member_from',
			header: 'Member From',
		},
		{
			accessorKey: 'elected_status',
			header: 'Elected Status',
		},
		{
			accessorKey: 'reason_content',
			header: 'Reason',
		},
		{
			accessorKey: 'member_name',
			header: 'Name',
		},
		{
			accessorKey: 'mobile_no',
			header: 'Mobile',
		},
		{
			accessorKey: 'unique_member_id',
			header: 'Member ID',
		},
		{
			accessorKey: 'elected_date',
			header: 'Elected Date',
		},
	];
};

const useAssociationClubColumns = (): ColumnDef<ParishAssociationClubProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ParishAssociationClubProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'parish_content',
			header: 'Parish Name',
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'association_content',
			header: 'Name of the Associations',
		},
		{
			accessorKey: 'association_id',
			header: 'Associations Id',
		},
		{
			accessorKey: 'organised_by',
			header: 'Organised by',
		},
		{
			accessorKey: 'elected_on',
			header: 'Elected On',
		},
		{
			accessorKey: 'period_of',
			header: 'Period Of (Years)',
		},
		{
			accessorKey: 'extend_period',
			header: 'If Extended',
		},
		{
			accessorKey: 'period_end_on',
			header: 'Period Ends On',
		},
	];
};
const useAssociationDetailsColumns = (): ColumnDef<AssociationDetailsProps>[] => {
	const { handleSelectAssociationRow } = useStore();
	return [
		{
			accessorKey: 'sub_station_id',
			header: ' Sub-Station Id',
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'association_content',
			header: 'Association Id',
		},
		{
			accessorKey: 'association_id',
			header: 'Association',
		},

		{
			accessorKey: 'total_members',
			header: 'Total Members Amount',
			cell: ({ getValue }) => {
				const value = getValue<number>();
				return value;
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + ((row.getValue('total_members') as number) || 0), 0);

				return `Total: ${total}`;
			},
		},
		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<AssociationDetailsProps, unknown>) => (
				<TableDetailsViewButton onClick={() => handleSelectAssociationRow(row.original)} />
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
	];
};

const useAnbiamDetailsColumns = (): ColumnDef<AnbiamDetailsProps>[] => {
	const { handleSelectAssociationRow } = useStore();

	return [
		{
			accessorKey: 'sub_station_id',
			header: 'Sub Station Id',
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'anbiam_id',
			header: 'Anbiam Id',
		},
		{
			accessorKey: 'anbiam_name',
			header: 'Anbiam',
		},
		{
			accessorKey: 'total_families',
			header: 'Total Families (Active)',
			cell: ({ getValue }) => {
				const value = getValue<number>();
				return value;
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + ((row.getValue('total_families') as number) || 0), 0);

				return `Total: ${total}`;
			},
		},

		{
			accessorKey: 'total_members',
			header: 'Total Members (Active)',
			cell: ({ getValue }) => {
				const value = getValue<number>();
				return value;
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + ((row.getValue('total_members') as number) || 0), 0);

				return `Total: ${total}`;
			},
		},
		{
			id: 'details_members',
			header: 'Details',
			cell: ({ row }: CellContext<AnbiamDetailsProps, unknown>) => (
				<TableDetailsViewButton onClick={() => handleSelectAssociationRow(row.original)} />
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
	];
};

const useAssociationInchargeDetailsColumns = (): ColumnDef<AssociationInchargeProps>[] => {
	return [
		{
			header: 'Position',
			accessorKey: 'position',
		},
		{
			header: 'Member Name',
			accessorKey: 'member_name',
		},

		{
			header: 'Elected Status',
			accessorKey: 'elected_status',
		},
		{
			header: 'Member From',
			accessorKey: 'member_from',
		},
		{
			header: 'Mobile',
			accessorKey: 'mobile_no',
		},
		{
			header: 'Elected Date',
			accessorKey: 'elected_date',
		},
		{
			header: 'Period End',
			accessorKey: 'period_end_on',
		},
	];
};

const familyMemberDetailsTableOneColumns: ColumnDef<MemberDetailsType>[] = [
	{
		accessorKey: 'member_name',
		header: 'Member Name',
	},
	{
		accessorKey: 'unique_member_id',
		header: 'Member Id',
	},
	{
		accessorKey: 'member_birth_date',
		header: 'Birth Date',
	},
	{
		accessorKey: 'member_baptism_date',
		header: 'Baptism Date',
	},
	{
		accessorKey: 'member_holy_communion_date',
		header: 'FHC Date',
	},
	{
		accessorKey: 'member_confirmation_date',
		header: 'Confirmation Date',
	},
	{
		accessorKey: 'member_vocation_status',
		header: 'Vocation',
	},
	{
		accessorKey: 'member_adhaar_no',
		header: 'Adhaar No',
	},
];

const familyMemberDetailsTableTwoColumns: ColumnDef<MemberDetailsType>[] = [
	{
		accessorKey: 'member_name',
		header: 'Member Name',
	},
	{
		accessorKey: 'relation',
		header: 'Relation',
	},
	{
		accessorKey: 'marriage',
		header: 'Marriage',
	},
	{
		accessorKey: 'member_mobile_no',
		header: 'Mobile No',
	},
	{
		accessorKey: 'education',
		header: 'Education',
	},
	{
		accessorKey: 'occupation',
		header: 'Occupation',
	},
	{
		accessorKey: 'member_blood_group',
		header: 'Blood Type',
	},
	{
		accessorKey: 'activeness_content',
		header: 'Activeness',
	},
];

const familyMembersColumns: ColumnDef<FamilyMemberDetailsProps>[] = [
	{
		accessorKey: 'activeness_content',
		header: 'Activeness',
	},

	{
		accessorKey: 'image',
		header: 'Member Image',
		cell: ({ row }) => <AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />,
	},
	{
		accessorKey: 'relation',
		header: 'Relation to Family',
	},
	{
		accessorKey: 'gender',
		header: 'Gender',
	},
	{
		accessorKey: 'mobile_no',
		header: 'Mobile No',
	},
	{
		accessorKey: 'unique_member_id',
		header: 'Member Id',
	},
];

const useSchoolStudentsColumns = (): ColumnDef<StudentDataProps>[] => {
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

		{ accessorKey: 'student_name', header: 'Student Name' },
		{ accessorKey: 'class', header: 'Class' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'mobile_number', header: 'Mobile Number' },
		{ accessorKey: 'family_number', header: 'Family Number' },
		{ accessorKey: 'school_name', header: 'School Name' },
		{ accessorKey: 'place_of_school', header: 'Place Of School' },
		{ accessorKey: 'board_of_school', header: 'Board of School' },
		{ accessorKey: 'management', header: 'Management' },
		{ accessorKey: 'family_type', header: 'Family Type' },
		{ accessorKey: 'family_income', header: 'Family Income' },
		{ accessorKey: 'membership_number', header: 'Membership Number' },
		{ accessorKey: 'sub_station_name', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam' },
		{ accessorKey: 'anbiam_id', header: 'Anbiam Id' },
	];
};

const useCollegeStudentsColumns = (): ColumnDef<CollegeStudentDataProps>[] => {
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
		{ accessorKey: 'student_name', header: 'Student Name' },
		{ accessorKey: 'course_type', header: 'Course Type' },
		{ accessorKey: 'course_name', header: 'Course Name' },
		{ accessorKey: 'year', header: 'Year' },
		{ accessorKey: 'college_name', header: 'College Name' },
		{ accessorKey: 'place_of_college', header: 'Place Of College' },
		{ accessorKey: 'management', header: 'Management' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'mobile_number', header: 'Mobile Number' },
		{ accessorKey: 'family_number', header: 'Family Number' },
		{ accessorKey: 'family_type', header: 'Family Type' },
		{ accessorKey: 'family_income', header: 'Family Income' },
		{ accessorKey: 'membership_number', header: 'Membership Number' },
		{ accessorKey: 'sub_station_name', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam' },
		{ accessorKey: 'anbiam_id', header: 'Anbiam Id' },
	];
};
const useTotalFamilyMembersColumns = (): ColumnDef<TotalFamilyMembersDetails>[] => {
	return [
		{
			accessorKey: 'family_name',
			header: 'Family Name',
			cell: ({ row }) => <TextLink to="">{row.original.family_name ?? ''}</TextLink>,
		},
		{ accessorKey: 'unique_family_id', header: 'Unique Family Id' },
		{ accessorKey: 'old_family_id', header: 'Old Family Id' },
		{ accessorKey: 'family_head', header: 'Family Head' },
		{ accessorKey: 'total_members', header: 'Total Members' },
		{ accessorKey: 'monthly_subscription', header: 'Monthly Subscription' },
	];
};

const getFamilyDynamicColumns = <TForm extends FieldValues>(control: Control<TForm>): ColumnDef<FamilesType>[] => [
	{
		accessorKey: 'memberId',
		header: 'Member Id',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicFamilyMembers.${row.index}.memberId` as Path<TForm>}
				placeholder="Enter Member Id"
			/>
		),
	},

	{
		accessorKey: 'name',
		header: 'Member Name',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicFamilyMembers.${row.index}.name` as Path<TForm>}
				placeholder="Enter name"
			/>
		),
	},

	{
		accessorKey: 'relation',
		header: 'Relation (Based on Father / Husband)',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`dynamicFamilyMembers.${row.index}.relation` as Path<TForm>}
				options={relationOptions}
			/>
		),
	},
	{
		accessorKey: 'gender',
		header: 'Gender',
		cell: ({ row }) => (
			<SingleSelectDropdown
				name={`dynamicFamilyMembers.${row.index}.gender` as Path<TForm>}
				control={control}
				options={[
					{ label: 'Male', value: 'male' },
					{ label: 'Female', value: 'female' },
				]}
			/>
		),
	},

	{
		accessorKey: 'active',
		header: 'Activeness',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				options={activeToOptions}
				placeholder="Select Activeness"
				name={`dynamicFamilyMembers.${row.index}.active` as Path<TForm>}
			/>
		),
	},
];

const getAddFamilyMemberColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<AddFamilyMemberType>[] => [
	{
		accessorKey: 'memberId',
		header: 'Member Id',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicFamilyMembers.${row.index}.memberId` as Path<TForm>}
				placeholder="Enter Member Id"
			/>
		),
	},

	{
		accessorKey: 'name',
		header: 'Member Name',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicFamilyMembers.${row.index}.name` as Path<TForm>}
				placeholder="Enter name"
			/>
		),
	},

	{
		accessorKey: 'relation',
		header: 'Relation',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`dynamicFamilyMembers.${row.index}.relation` as Path<TForm>}
				options={relationOptions}
			/>
		),
	},
	{
		accessorKey: 'gender',
		header: 'Gender',
		cell: ({ row }) => (
			<SingleSelectDropdown
				name={`dynamicFamilyMembers.${row.index}.gender` as Path<TForm>}
				control={control}
				options={[
					{ label: 'Male', value: 'male' },
					{ label: 'Female', value: 'female' },
				]}
			/>
		),
	},

	{
		accessorKey: 'active',
		header: 'Activeness',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				options={activeToOptions}
				placeholder="Select Activeness"
				name={`dynamicFamilyMembers.${row.index}.active` as Path<TForm>}
			/>
		),
	},
];

export {
	useParishCouncilColumns,
	useFamilyOverviewColumns,
	useMembersInParishFamilyColumns,
	useParishSonsAndDaughtersFamilyMembersColumns,
	useParishSonsAndDaughtersOtherMembersColumns,
	useReligiousPeopleColumns,
	useAnbiamsColumns,
	useAnbiamsInchargeColumns,
	useAssociationCouncilMemberPropsColumns,
	useAssociationClubColumns,
	useAssociationDetailsColumns,
	useAssociationInchargeDetailsColumns,
	familyMemberDetailsTableTwoColumns,
	familyMemberDetailsTableOneColumns,
	familyMembersColumns,
	useSchoolStudentsColumns,
	useCollegeStudentsColumns,
	useAnbiamDetailsColumns,
	useTotalFamilyMembersColumns,
	getFamilyDynamicColumns,
	getAddFamilyMemberColumns,
};
