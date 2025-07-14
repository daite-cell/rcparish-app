import type { ColumnDef } from '@tanstack/react-table';

type MemberTableOne = {
	memberName: string;
	memberId: string;
	birthDate: string;
	baptismDate: string;
	fhcDate: string;
	confirmationDate: string;
	vocation: string;
	adhaarNo: string;
};

type MemberTableTwo = {
	memberName: string;
	relation: string;
	marriage: string;
	mobileNo: string;
	education: string;
	occupation: string;
	bloodType: string;
	activeness: string;
};

const familyMemberDetailsTableOneColumns: ColumnDef<MemberTableOne>[] = [
	{
		accessorKey: 'memberName',
		header: 'Member Name',
	},
	{
		accessorKey: 'memberId',
		header: 'Member Id',
	},
	{
		accessorKey: 'birthDate',
		header: 'Birth Date',
	},
	{
		accessorKey: 'baptismDate',
		header: 'Baptism Date',
	},
	{
		accessorKey: 'fhcDate',
		header: 'FHC Date',
	},
	{
		accessorKey: 'confirmationDate',
		header: 'Confirmation Date',
	},
	{
		accessorKey: 'vocation',
		header: 'Vocation',
	},
	{
		accessorKey: 'adhaarNo',
		header: 'Adhaar No',
	},
];

const familyMemberDetailsTableTwoColumns: ColumnDef<MemberTableTwo>[] = [
	{
		accessorKey: 'memberName',
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
		accessorKey: 'mobileNo',
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
		accessorKey: 'bloodType',
		header: 'Blood Type',
	},
	{
		accessorKey: 'activeness',
		header: 'Activeness',
	},
];

const electedMembersColumns = [
	{
		header: 'Position',
		accessorKey: 'position',
	},
	{
		header: 'Member Name',
		accessorKey: 'member_name',
	},
	{
		header: 'Elected From',
		accessorKey: 'elected_from',
	},
	{
		header: 'Elected Status',
		accessorKey: 'elected_status',
	},
	{
		header: 'Elected Date',
		accessorKey: 'elected_date',
	},
	{
		header: 'Period End On',
		accessorKey: 'period_end_on',
	},
	{
		header: 'Mobile',
		accessorKey: 'mobile',
	},
];

export { familyMemberDetailsTableOneColumns, familyMemberDetailsTableTwoColumns, electedMembersColumns };
