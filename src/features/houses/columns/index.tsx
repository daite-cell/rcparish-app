import type { ColumnDef } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type {
	CollegesListProps,
	ConventDetailsTypeProps,
	HealthInstituteListProps,
	HomeInstitutionsListProps,
	HostelCampusListProps,
	SchoolsListProps,
	TechnicalInstitutionListProps,
	VocationalInstitutionType,
	WorkingMember,
} from '@/types';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { CustomFormInput, SingleSelectDropdown } from '@/components';

const useVocationalInstitutionColumns = (): ColumnDef<VocationalInstitutionType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<VocationalInstitutionType>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'noviciateName',
			header: 'Noviciate Name',
		},
		{ accessorKey: 'place', header: 'Place' },
		{ accessorKey: 'landOwnership', header: 'Land Ownership' },
		{ accessorKey: 'belongsTo', header: 'Belongs to' },
		{ accessorKey: 'seminary', header: 'Seminary' },
		{ accessorKey: 'contactNumberLL', header: 'Contact Number (LL)' },
		{ accessorKey: 'mailId', header: 'Mail ID' },
		{ accessorKey: 'address', header: 'Address' },
	];
};

const useCommunitiesDetailsColumns = (): ColumnDef<ConventDetailsTypeProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ConventDetailsTypeProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'type_content',
			header: 'Type of Convent',
		},
		{
			accessorKey: 'name',
			header: 'Name of the Convent',
		},
		{ accessorKey: 'place', header: 'Place of the Convent' },
		{ accessorKey: 'belongs_to', header: 'Belongs To' },
		{ accessorKey: 'established_year_content', header: 'Established Year' },
		{ accessorKey: 'established_by', header: 'Established by' },
		{ accessorKey: 'land_ownership_content', header: 'Land Ownership' },
		{ accessorKey: 'address', header: 'Contact Address' },
		{ accessorKey: 'mobile_no', header: 'Mobile No' },
		{ accessorKey: 'mail_id', header: 'Email' },
	];
};
const getWorkingMemberColumns = <TForm extends FieldValues>(control: Control<TForm>): ColumnDef<WorkingMember>[] => [
	{ header: 'ID' },

	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicWorkingMembers.${row.index}.name` as Path<TForm>}
				placeholder="Enter name"
			/>
		),
	},
	{
		accessorKey: 'designation',
		header: 'Designation',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicWorkingMembers.${row.index}.designation` as Path<TForm>}
				placeholder="Enter designation"
			/>
		),
	},
	{
		accessorKey: 'jobType',
		header: 'Job Type',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`dynamicWorkingMembers.${row.index}.jobType` as Path<TForm>}
				options={[
					{ label: 'Temporary', value: 'temporary' },
					{ label: 'Permanent', value: 'permanent' },
				]}
			/>
		),
	},
	{
		accessorKey: 'mobile',
		header: 'Mobile',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`dynamicWorkingMembers.${row.index}.mobile` as Path<TForm>}
				placeholder="Enter mobile number"
			/>
		),
	},
];

const useSchoolsListColumns = (): ColumnDef<SchoolsListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<SchoolsListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category_content',
			header: 'Category',
		},
		{
			accessorKey: 'religious_content',
			header: 'Institution Category',
		},
		{
			accessorKey: 'type_content',
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
			accessorKey: 'land_ownership_content',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'established_year_content',
			header: 'Established Year',
		},
		{
			accessorKey: 'recognition_date',
			header: 'Recognition Date',
		},
		{
			accessorKey: 'recognition_no',
			header: 'Recognition Number',
		},
		{
			accessorKey: 'class_from',
			header: 'Classes From',
		},
		{
			accessorKey: 'class_to',
			header: 'Classes Upto',
		},
		{
			accessorKey: 'gender_content',
			header: 'Gender',
		},
		{
			accessorKey: 'run_by_content',
			header: 'Run By',
		},
		{
			accessorKey: 'medium_content',
			header: 'Medium',
		},
		{
			accessorKey: 'management_content',
			header: 'Management',
		},
		{
			accessorKey: 'mobile_no',
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

const useTechnicalInstitutionsColumns = (): ColumnDef<TechnicalInstitutionListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<TechnicalInstitutionListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category_content',
			header: 'Category',
		},
		{
			accessorKey: 'religious_content',
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
			accessorKey: 'established_year_content',
			header: 'Established Year',
		},
		{
			accessorKey: 'recognition_date',
			header: 'Recognition Date',
		},
		{
			accessorKey: 'recognition_no',
			header: 'Recognition Number',
		},
		{
			accessorKey: 'land_ownership_content',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'gender_content',
			header: 'Gender',
		},
		{
			accessorKey: 'run_by_content',
			header: 'Run by',
		},
		{
			accessorKey: 'medium_content',
			header: 'Medium',
		},
		{
			accessorKey: 'management_content',
			header: 'Management',
		},
		{
			accessorKey: 'mobile_no',
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
const useCollegeInstitutionsColumns = (): ColumnDef<CollegesListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<CollegesListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category_content',
			header: 'Category',
		},
		{
			accessorKey: 'college_category_content',
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
			accessorKey: 'established_year_content',
			header: 'Established Year',
		},
		{
			accessorKey: 'recognition_date',
			header: 'Recognition Date',
		},
		{
			accessorKey: 'recognition_no',
			header: 'Recognition Number',
		},
		{
			accessorKey: 'land_ownership_content',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'affiliation_with_content',
			header: 'Affiliation With',
		},
		{
			accessorKey: 'gender_content',
			header: 'Gender',
		},
		{
			accessorKey: 'run_by_content',
			header: 'Run by',
		},
		{
			accessorKey: 'medium_content',
			header: 'Medium',
		},
		{
			accessorKey: 'management_content',
			header: 'Management',
		},
		{
			accessorKey: 'mobile_no',
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
const useHomeInstitutionsColumns = (): ColumnDef<HomeInstitutionsListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<HomeInstitutionsListProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'category_content',
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
			accessorKey: 'land_ownership_content',
			header: 'Land Ownership',
		},
		{
			accessorKey: 'established_year_content',
			header: 'Established Year',
		},
		{
			accessorKey: 'recognition_date',
			header: 'Recognition Date',
		},
		{
			accessorKey: 'recognition_no',
			header: 'Recognition Number',
		},
		{
			accessorKey: 'run_by_content',
			header: 'Run by',
		},
		{
			accessorKey: 'home_for_content',
			header: 'Home For',
		},
		{
			accessorKey: 'mobile_no',
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

		{ accessorKey: 'category_content', header: 'Category' },
		{ accessorKey: 'health_category_content', header: 'Health Institute Category' },
		{ accessorKey: 'name', header: 'Name' },
		{ accessorKey: 'place', header: 'Place' },
		{ accessorKey: 'land_ownership_content', header: 'Land Ownership' },
		{ accessorKey: 'established_year_content', header: 'Established Year' },
		{ accessorKey: 'recognition_date', header: 'Recognition Date' },
		{ accessorKey: 'recognition_no', header: 'Recognition Number' },
		{ accessorKey: 'run_by_content', header: 'Run by' },
		{ accessorKey: 'mobile_no', header: 'Contact Number (LL)' },
		{ accessorKey: 'mail_id', header: 'Mail ID' },
		{ accessorKey: 'address', header: 'Address' },
	];
};

const useHostelListColumns = (): ColumnDef<HostelCampusListProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<HostelCampusListProps>(handleSelectRow, handleEditRow),

		{ accessorKey: 'category_content', header: 'Category' },
		{ accessorKey: 'name', header: 'Name' },
		{ accessorKey: 'campus_name_content', header: 'Campus Name' },
		{ accessorKey: 'place', header: 'Place' },
		{ accessorKey: 'land_ownership_content', header: 'Land Ownership' },
		{ accessorKey: 'specification_content', header: 'Specification' },
		{ accessorKey: 'established_year_content', header: 'Established Year' },
		{ accessorKey: 'recognition_date', header: 'Recognition Date' },
		{ accessorKey: 'recognition_no', header: 'Recognition Number' },
		{ accessorKey: 'run_by_content', header: 'Run by' },
		{ accessorKey: 'mobile_no', header: 'Contact Number (LL)' },
		{ accessorKey: 'mail_id', header: 'Mail ID' },
		{ accessorKey: 'address', header: 'Address' },
	];
};

export {
	useVocationalInstitutionColumns,
	useCommunitiesDetailsColumns,
	getWorkingMemberColumns,
	useSchoolsListColumns,
	useTechnicalInstitutionsColumns,
	useCollegeInstitutionsColumns,
	useHomeInstitutionsColumns,
	useHealthInstituteListColumns,
	useHostelListColumns,
};
