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

const useHolyCommunionMemberColumns = (): ColumnDef<HolyCommunionMemberType>[] => {
	const { handleSelectRow } = useStore();
	return [
		...getCommonActionColumns<HolyCommunionMemberType>(handleSelectRow),
		{
			header: 'Member Name',
			accessorKey: 'memberName',
			cell: ({ row }) => (
				<Link to="" className="underline text-[#0d73c4]">
					{row.original.memberName}
				</Link>
			),
		},
		{ accessorKey: 'memberId', header: 'Unique Member ID' },
		{ accessorKey: 'familyName', header: 'Family Name' },
		{ accessorKey: 'familyId', header: 'Unique Family ID' },
		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'subStationId', header: 'Sub-Station ID' },
		{ accessorKey: 'anbiam', header: 'Anbiam' },
		{ accessorKey: 'anbiamId', header: 'Anbiam ID' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'familyHead', header: 'Family Head' },
		{ accessorKey: 'fatherName', header: 'Father Name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'godFatherName', header: 'God Father Name' },
		{ accessorKey: 'godMotherName', header: 'God Mother Name' },
		{ accessorKey: 'baptismDate', header: 'Date of Baptism' },
		{ accessorKey: 'fhcDate', header: 'FHC Date' },
		{ accessorKey: 'fhcReceived', header: 'FHC Received' },
		{ accessorKey: 'fhcAt', header: 'FHC At' },
		{ accessorKey: 'fhcIn', header: 'FHC In' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useChronicleMemberColumns = (): ColumnDef<ChronicleMemberProps>[] => {
	const { handleSelectRow } = useStore();
	return [
		...getCommonActionColumns<ChronicleMemberProps>(handleSelectRow),
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
	const { handleSelectRow } = useStore();
	return [
		...getCommonActionColumns<BaptismMemberType>(handleSelectRow),

		{
			header: 'Member Name (Baptism Name)',
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
		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'subStationId', header: 'Sub-Station Id' },
		{ accessorKey: 'anbiam', header: 'Anbiam' },
		{ accessorKey: 'anbiamId', header: 'Anbiam Id' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'familyHead', header: 'Family Head' },
		{ accessorKey: 'fatherName', header: 'Father Name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'godFatherName', header: 'God Father Name' },
		{ accessorKey: 'godMotherName', header: 'God Mother Name' },
		{ accessorKey: 'dateOfBirth', header: 'Date of Birth' },
		{ accessorKey: 'baptistDate', header: 'Baptist Date' },
		{ accessorKey: 'baptistAt', header: 'Baptist at' },
		{ accessorKey: 'baptistIn', header: 'Baptist in' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useMemberFromFamiliesColumns = (): ColumnDef<ConfirmationFromFamilyMemberType>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<ConfirmationFromFamilyMemberType>(handleSelectRow),

		{
			header: 'Member Name ',
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
		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'subStationId', header: 'Sub-Station Id' },
		{ accessorKey: 'anbiam', header: 'Anbiam' },
		{ accessorKey: 'anbiamId', header: 'Anbiam Id' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'familyHead', header: 'Family Head' },
		{ accessorKey: 'fatherName', header: 'Father Name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'godFatherName', header: 'God Father Name' },
		{ accessorKey: 'godMotherName', header: 'God Mother Name' },
		{ accessorKey: 'baptismDate', header: 'Date of Baptism' },
		{ accessorKey: 'confirmationDate', header: 'Confirmation Date' },
		{ accessorKey: 'confirmationReceived', header: 'Confirmation Received' },
		{ accessorKey: 'confirmationAt', header: 'Confirmation at' },
		{ accessorKey: 'confirmationIn', header: 'Confirmation in' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useConfirmationRegisterColumns = (): ColumnDef<ConfirmationRegisteredMemberType>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<ConfirmationRegisteredMemberType>(handleSelectRow),

		{
			header: 'Member Name',
			accessorKey: 'memberName',
			cell: ({ row }) => (
				<Link to="" className="underline text-[#0d73c4]">
					{row.original.memberName}
				</Link>
			),
		},
		{ accessorKey: 'memberId', header: 'Unique Member Id' },
		{ accessorKey: 'isMemberInParish', header: 'If Member in Parish' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'fatherName', header: 'Father Name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'domicileName', header: 'Domicile Name' },
		{ accessorKey: 'godFatherName', header: 'God Father Name' },
		{ accessorKey: 'godMotherName', header: 'God Mother Name' },
		{ accessorKey: 'baptismDate', header: 'Date of Baptism' },
		{ accessorKey: 'confirmationDate', header: 'Confirmation Date' },
		{ accessorKey: 'confirmationAt', header: 'Confirmation at' },
		{ accessorKey: 'confirmationIn', header: 'Confirmation in' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};
const useMarriageRegisterAsParishColumns = (): ColumnDef<MarriageRegisterMemberAsParishType>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<MarriageRegisterMemberAsParishType>(handleSelectRow),

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
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<MarriageRegisterMemberType>(handleSelectRow),

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
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<MarriageProposalMemberType>(handleSelectRow),

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
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<MarriageProposalMemberFormType>(handleSelectRow),

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
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<DeathRegisterMemberType>(handleSelectRow),

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
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<DeathRegisterMemberAsParishType>(handleSelectRow),

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
