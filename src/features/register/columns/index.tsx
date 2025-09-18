import type { ColumnDef } from '@tanstack/react-table';
import type {
	HolyCommunionMemberType,
	ChronicleMemberProps,
	BaptismMemberType,
	ConfirmationFromFamilyMemberType,
	ConfirmationRegisteredMemberType,
	MarriageRegisterMemberType,
	MarriageProposalMemberType,
	MarriageRegisterMemberAsParishType,
	MarriageProposalMemberFormType,
	DeathRegisterMemberType,
	DeathRegisterMemberAsParishType,
} from '@/types';
import { Link } from 'react-router-dom';
import { useStore } from '@/store/store';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import { TextLink } from '@/components';

const useHolyCommunionMemberColumns = (): ColumnDef<HolyCommunionMemberType>[] => {
	const { handleSelectRow, handleEditRow, handleSelectAccountingNameRow, handleEditAccountingName } = useStore();
	return [
		...getCommonActionColumns<HolyCommunionMemberType>(handleSelectRow, handleEditRow),
		{
			header: 'Member Name',
			accessorKey: 'member_name',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectAccountingNameRow(row.original);
						handleEditAccountingName(row.original);
					}}
					to={`/pious_group/family_members/${row.original.sub_station_id}/${row.original.anbiam_id}/${row.original.unique_family_id}/${row.original.unique_member_id}`}
					className="underline text-[#0d73c4]"
				>
					{row.original.member_name}
				</TextLink>
			),
		},
		{ accessorKey: 'unique_member_id', header: 'Unique Member ID' },
		{ accessorKey: 'family_name', header: 'Family Name' },
		{ accessorKey: 'unique_family_id', header: 'Unique Family ID' },
		{ accessorKey: 'sub_station_name', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'sub_station_id', header: 'Sub-Station ID' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam' },
		{ accessorKey: 'anbiam_id', header: 'Anbiam ID' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'family_head', header: 'Family Head' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'god_father_name', header: 'God Father Name' },
		{ accessorKey: 'god_mother_name', header: 'God Mother Name' },
		{ accessorKey: 'baptism_date', header: 'Date of Baptism' },
		{ accessorKey: 'holy_communion_date', header: 'FHC Date' },
		{ accessorKey: 'holy_communion_received', header: 'FHC Received' },
		{ accessorKey: 'holy_communion_at', header: 'FHC At' },
		{ accessorKey: 'holy_communion_in', header: 'FHC In' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'record_no', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useChronicleMemberColumns = (): ColumnDef<ChronicleMemberProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();
	return [
		...getCommonActionColumns<ChronicleMemberProps>(handleSelectRow, handleEditRow),
		{ accessorKey: 'date', header: 'Date' },
		{ accessorKey: 'event', header: 'Event' },
		{ accessorKey: 'descriptions', header: 'Descriptions' },
		{ accessorKey: 'documentAttachment', header: 'Attachment of Document' },
		{ accessorKey: 'image1', header: 'Image 1' },
		{ accessorKey: 'image2', header: 'Image 2' },
		{ accessorKey: 'image3', header: 'Image 3' },
		{ accessorKey: 'eventNo', header: 'Event No' },
	];
};

const useBaptismMemberColumns = (): ColumnDef<BaptismMemberType>[] => {
	const { handleSelectRow, handleEditRow, handleSelectAccountingNameRow } = useStore();

	return [
		...getCommonActionColumns<BaptismMemberType>(handleSelectRow, handleEditRow),

		{
			header: 'Member Name (Baptism Name)',
			accessorKey: 'member_name',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectRow(row.original);
						handleSelectAccountingNameRow(row.original);
					}}
					to={`/pious_group/family_members/${row.original.sub_station_id}/${row.original.anbiam_id}/${row.original.unique_family_id}/${row.original.unique_member_id}`}
					className="underline text-[#0d73c4]"
				>
					{row.original.member_name}
				</TextLink>
			),
		},
		{ accessorKey: 'unique_member_id', header: 'Unique Member Id' },
		{ accessorKey: 'family_name', header: 'Family Name' },
		{ accessorKey: 'unique_family_id', header: 'Unique Family Id' },
		{ accessorKey: 'sub_station_name', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam' },
		{ accessorKey: 'anbiam_id', header: 'Anbiam Id' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'family_head', header: 'Family Head' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'god_father_name', header: 'God Father Name' },
		{ accessorKey: 'god_mother_name', header: 'God Mother Name' },
		{ accessorKey: 'birth_date', header: 'Date of Birth' },
		{ accessorKey: 'baptism_date', header: 'Baptist Date' },
		{ accessorKey: 'baptism_at', header: 'Baptist at' },
		{ accessorKey: 'baptism_in', header: 'Baptist in' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'record_no', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useMemberFromFamiliesColumns = (): ColumnDef<ConfirmationFromFamilyMemberType>[] => {
	const { handleSelectRow, handleEditRow, handleSelectAccountingNameRow } = useStore();

	return [
		...getCommonActionColumns<ConfirmationFromFamilyMemberType>(handleSelectRow, handleEditRow),

		{
			header: 'Member Name',
			accessorKey: 'member_name',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectAccountingNameRow(row.original);
						// handleEditAccountingName(row.original);
					}}
					to={`/pious_group/family_members/${row.original.sub_station_id}/${row.original.anbiam_id}/${row.original.unique_family_id}/${row.original.unique_member_id}`}
					className="underline text-[#0d73c4]"
				>
					{row.original.member_name}
				</TextLink>
			),
		},
		{ accessorKey: 'unique_member_id', header: 'Unique Member Id' },
		{ accessorKey: 'family_name', header: 'Family Name' },
		{ accessorKey: 'unique_family_id', header: 'Unique Family Id' },
		{ accessorKey: 'sub_station_name', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam' },
		{ accessorKey: 'anbiam_id', header: 'Anbiam Id' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'family_head', header: 'Family Head' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'god_father_name', header: 'God Father Name' },
		{ accessorKey: 'god_mother_name', header: 'God Mother Name' },
		{ accessorKey: 'baptism_date', header: 'Date of Baptism' },
		{ accessorKey: 'holy_communion_date', header: 'Confirmation Date' },
		{ accessorKey: 'holy_communion_received', header: 'Confirmation Received' },
		{ accessorKey: 'holy_communion_at', header: 'Confirmation at' },
		{ accessorKey: 'holy_communion_in', header: 'Confirmation in' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'record_no', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useConfirmationRegisterColumns = (): ColumnDef<ConfirmationRegisteredMemberType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ConfirmationRegisteredMemberType>(handleSelectRow, handleEditRow),

		{
			header: 'Member Name',
			accessorKey: 'member_name',
		},
		{ accessorKey: 'unique_member_id', header: 'Unique Member Id' },
		{ accessorKey: 'holy_communion_received', header: 'If Member in Parish' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'domicile_name', header: 'Domicile Name' },
		{ accessorKey: 'god_father_name', header: 'God Father Name' },
		{ accessorKey: 'god_mother_name', header: 'God Mother Name' },
		{ accessorKey: 'baptism_date', header: 'Date of Baptism' },
		{ accessorKey: 'confirmation_date', header: 'Confirmation Date' },
		{ accessorKey: 'confirmation_at', header: 'Confirmation At' },
		{ accessorKey: 'confirmation_in', header: 'Confirmation In' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'registration_number', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useMarriageRegisterAsParishColumns = (): ColumnDef<MarriageRegisterMemberAsParishType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MarriageRegisterMemberAsParishType>(handleSelectRow, handleEditRow),

		{
			header: 'Banns / Rectification',
			accessorKey: 'bannsOrRectification',
		},
		{
			header: 'Bridegroom Name',
			accessorKey: 'bridegroomName',
		},
		{
			header: 'Bride Name',
			accessorKey: 'brideName',
		},
		{
			header: 'Family Name',
			accessorKey: 'familyName',
		},
		{
			header: 'Unique Family Id',
			accessorKey: 'familyId',
		},
		{
			header: 'Main-Station / Sub-Station',
			accessorKey: 'mainStation',
		},
		{
			header: 'Sub-Station Id',
			accessorKey: 'subStationId',
		},
		{
			header: 'Anbiam Name',
			accessorKey: 'anbiamName',
		},
		{
			header: 'Anbiam Id',
			accessorKey: 'anbiamId',
		},
		{
			header: 'Marriage Date',
			accessorKey: 'marriageDate',
		},
		{
			header: 'Marriage at',
			accessorKey: 'marriageAt',
		},
		{
			header: 'Marriage in',
			accessorKey: 'marriageIn',
		},
		{
			header: 'Minister',
			accessorKey: 'minister',
		},
		{
			header: 'Bridegroom Witness',
			accessorKey: 'bridegroomWitness',
		},
		{
			header: 'Bridegroom Address',
			accessorKey: 'bridegroomAddress',
		},
		{
			header: 'Bride Witness',
			accessorKey: 'brideWitness',
		},
		{
			header: 'Bride Address',
			accessorKey: 'brideAddress',
		},
		{
			header: 'Registration Number',
			accessorKey: 'registrationNumber',
		},
		{
			header: 'Remarks',
			accessorKey: 'remarks',
		},
	];
};
const useMarriageRegisterColumns = (): ColumnDef<MarriageRegisterMemberType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MarriageRegisterMemberType>(handleSelectRow, handleEditRow),

		{
			header: 'Banns / Rectification',
			accessorKey: 'bannsOrRectification',
		},
		{
			header: 'Bridegroom Name',
			accessorKey: 'bridegroomName',
			cell: ({ row }) => (
				<Link to="" className="underline text-[#0d73c4]">
					{row.original.bridegroomName}
				</Link>
			),
		},
		{ accessorKey: 'brideName', header: 'Bride Name' },
		{ accessorKey: 'isMemberInParish', header: 'If Member in Parish' },
		{ accessorKey: 'marriageDate', header: 'Marriage Date' },
		{ accessorKey: 'marriageAt', header: 'Marriage at' },
		{ accessorKey: 'marriageIn', header: 'Marriage in' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'priestName', header: 'Priest Name' },
		{ accessorKey: 'bridegroomWitness', header: 'Bridegroom Witness' },
		{ accessorKey: 'bridegroomAddress', header: 'Bridegroom Address' },
		{ accessorKey: 'brideWitness', header: 'Bride Witness' },
		{ accessorKey: 'brideAddress', header: 'Bride Address' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useMarriageProposalColumns = (): ColumnDef<MarriageProposalMemberType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MarriageProposalMemberType>(handleSelectRow, handleEditRow),

		{
			header: 'Bride / Bridegroom Name',
			accessorKey: 'memberName',
			cell: ({ row }) => (
				<Link to="" className="underline text-[#0d73c4]">
					{row.original.memberName}
				</Link>
			),
		},
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'isMemberInParish', header: 'If Member in Parish' },
		{ accessorKey: 'fatherName', header: 'Father_name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
	];
};

const useMarriageProposalFormColumns = (): ColumnDef<MarriageProposalMemberFormType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MarriageProposalMemberFormType>(handleSelectRow, handleEditRow),

		{
			header: 'Bride / Bridegroom Name',
			accessorKey: 'memberName',
			cell: ({ row }) => (
				<Link to="" className="underline text-[#0d73c4]">
					{row.original.memberName}
				</Link>
			),
		},
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'familyName', header: 'Family Name' },
		{ accessorKey: 'familyId', header: 'Unique Family Id' },
		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'subStationId', header: 'Sub-Station Id' },
		{ accessorKey: 'anbiam', header: 'Anbiam Name' },
		{ accessorKey: 'anbiamId', header: 'Anbiam Id' },
		{ accessorKey: 'fatherName', header: 'Father_name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
	];
};

const useDeathRegisterColumns = (): ColumnDef<DeathRegisterMemberType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<DeathRegisterMemberType>(handleSelectRow, handleEditRow),

		{
			header: 'Person who died',
			accessorKey: 'memberName',
			cell: ({ row }) => (
				<Link to="" className="underline text-[#0d73c4]">
					{row.original.memberName}
				</Link>
			),
		},
		{ accessorKey: 'memberId', header: 'Unique Member Id' },
		{ accessorKey: 'familyName', header: 'Family Name' },
		{ accessorKey: 'familyId', header: 'Unique Family Id' },
		{ accessorKey: 'mainStation', header: 'Main-Station / sub-Station' },
		{ accessorKey: 'subStationId', header: 'Sub-Station id' },
		{ accessorKey: 'anbiamName', header: 'Anbiam name' },
		{ accessorKey: 'anbiamId', header: 'Anbiam id' },
		{ accessorKey: 'fatherName', header: 'Father Name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'deathDate', header: 'Died on' },
		{ accessorKey: 'deathPlace', header: 'Died at' },
		{ accessorKey: 'causeOfDeath', header: 'Cause for the Death' },
		{ accessorKey: 'deathCertificateIssued', header: 'Death Certificate Issued Status' },
		{ accessorKey: 'burialDate', header: 'Date of Burial' },
		{ accessorKey: 'cemetery', header: 'Buried at Cemetery' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useDeathRegisterAsParishColumns = (): ColumnDef<DeathRegisterMemberAsParishType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<DeathRegisterMemberAsParishType>(handleSelectRow, handleEditRow),

		{
			header: 'Person who died',
			accessorKey: 'memberName',
			cell: ({ row }) => (
				<Link to="" className="underline text-[#0d73c4]">
					{row.original.memberName}
				</Link>
			),
		},
		{ accessorKey: 'memberId', header: 'unique_member_id' },
		{ accessorKey: 'isMemberInParish', header: 'If Member in Parish' },
		{ accessorKey: 'fatherName', header: 'Father Name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'birthDate', header: 'Birth Date' },
		{ accessorKey: 'birthPlace', header: 'Birth Place' },
		{ accessorKey: 'deathDate', header: 'Died on' },
		{ accessorKey: 'deathPlace', header: 'Died at' },
		{ accessorKey: 'burialDate', header: 'Date of Burial' },
		{ accessorKey: 'cemetery', header: 'Buried at Cemetery' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

export {
	useHolyCommunionMemberColumns,
	useChronicleMemberColumns,
	useBaptismMemberColumns,
	useMemberFromFamiliesColumns,
	useConfirmationRegisterColumns,
	useMarriageRegisterColumns,
	useMarriageProposalColumns,
	useMarriageRegisterAsParishColumns,
	useMarriageProposalFormColumns,
	useDeathRegisterColumns,
	useDeathRegisterAsParishColumns,
};
