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
import { AdminDefaultImage, TextLink } from '@/components';

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
		{ accessorKey: 'chronicles_date', header: 'Date' },
		{ accessorKey: 'chronicles_event', header: 'Event' },
		{ accessorKey: 'descriptions', header: 'Descriptions' },
		{ accessorKey: 'document_availability', header: 'Document Available' },
		{
			accessorKey: 'attached_document',
			header: 'Attached Document',
			cell: ({ row }) => (
				<a target="_blank" id="view_attached_document" href={row.original.attached_document}>
					view
				</a>
			),
		},
		{
			accessorKey: 'image_f',
			header: 'Image 1',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.image_f} height={40} width={40} className="rounded-full" />
			),
		},
		{
			accessorKey: 'image_s',
			header: 'Image 2',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.image_s} height={40} width={40} className="rounded-full" />
			),
		},
		{
			accessorKey: 'image_t',
			header: 'Image 3',
			cell: ({ row }) => (
				<AdminDefaultImage src={row.original.image_t} height={40} width={40} className="rounded-full" />
			),
		},
		{ accessorKey: 'event_no', header: 'Event No' },
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

const useMarriageRegisterAsParishColumns = (tableKey: string): ColumnDef<MarriageRegisterMemberAsParishType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MarriageRegisterMemberAsParishType>(handleSelectRow, handleEditRow, tableKey),

		{ accessorKey: 'marriage_type', header: 'Marriage Type' },
		{ accessorKey: 'bridegroom_name', header: 'Bridegroom Name' },
		{ accessorKey: 'bride_name', header: 'Bride Name' },
		{ accessorKey: 'marriage_date', header: 'Marriage Date' },
		{ accessorKey: 'marriage_at', header: 'Marriage At' },
		{ accessorKey: 'marriage_in', header: 'Marriage In' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'priest_name', header: 'Priest Name' },
		{ accessorKey: 'bg_witness_1', header: 'Bridegroom Witness' },
		{ accessorKey: 'bg_address', header: 'Bridegroom Address' },
		{ accessorKey: 'b_witness_1', header: 'Bride Witness' },
		{ accessorKey: 'b_address', header: 'Bride Address' },
		{ accessorKey: 'record_no', header: 'Record Number' },
		{ accessorKey: 'register_no', header: 'Register Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};
const useMarriageRegisterColumns = (tableKey: string): ColumnDef<MarriageRegisterMemberType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MarriageRegisterMemberType>(handleSelectRow, handleEditRow, tableKey),

		{ accessorKey: 'sub_station_name', header: 'Sub Station Name' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam Name' },
		{ accessorKey: 'family_name', header: 'Family Name' },
		{ accessorKey: 'activeness_content', header: 'Activeness' },
		{ accessorKey: 'marriage_type', header: 'Marriage Type' },

		{
			accessorKey: 'bridegroom_name',
			header: 'Bridegroom Name',
		},
		{ accessorKey: 'bride_name', header: 'Bride Name' },
		{ accessorKey: 'marriage_date', header: 'Marriage Date' },
		{ accessorKey: 'marriage_at', header: 'Marriage At' },
		{ accessorKey: 'marriage_in', header: 'Marriage In' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'bg_witness_1', header: 'Bridegroom Witness' },
		{ accessorKey: 'bg_address', header: 'Bridegroom Address' },
		{ accessorKey: 'b_witness_1', header: 'Bride Witness' },
		{ accessorKey: 'b_address', header: 'Bride Address' },
		{ accessorKey: 'record_no', header: 'Record Number' },
		{ accessorKey: 'register_no', header: 'Register Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useMarriageProposalColumns = (tableKey: string): ColumnDef<MarriageProposalMemberType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MarriageProposalMemberType>(handleSelectRow, handleEditRow, tableKey),

		{
			header: 'Bride / Bridegroom Name',
			accessorKey: 'person_name',
		},
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'record_no', header: 'Record Number' },
		{ accessorKey: 'register_no', header: 'Register Number' },
	];
};

const useMarriageProposalFormColumns = (tableKey: string): ColumnDef<MarriageProposalMemberFormType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MarriageProposalMemberFormType>(handleSelectRow, handleEditRow, tableKey),

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
			accessorKey: 'member_name',
		},
		{ accessorKey: 'unique_member_id', header: 'Unique Member ID' },
		{ accessorKey: 'father_name', header: 'Father Name' },
		{ accessorKey: 'mother_name', header: 'Mother Name' },
		{ accessorKey: 'birth_date', header: 'Birth Date' },
		{ accessorKey: 'birth_place', header: 'Birth Place' },
		{ accessorKey: 'died_on', header: 'Died On' },
		{ accessorKey: 'died_at', header: 'Died At' },
		{ accessorKey: 'funeral_date', header: 'Date of Burial' },
		{ accessorKey: 'cemetery', header: 'Buried at Cemetery' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'record_no', header: 'Record Number' },
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
