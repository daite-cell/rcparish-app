import {
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
} from '../columns';

import type { ColumnDef } from '@tanstack/react-table';

const useColumnsMap = (): Record<string, Record<string, ColumnDef<object>[]>> => ({
	holy_communion: {
		main: useHolyCommunionMemberColumns() as ColumnDef<object>[],
	},
	chronicles: {
		main: useChronicleMemberColumns() as ColumnDef<object>[],
	},
	baptism: {
		table_1: useBaptismMemberColumns() as ColumnDef<object>[],
		table_2: useConfirmationRegisterColumns() as ColumnDef<object>[],
	},
	confirmations: {
		table_1: useMemberFromFamiliesColumns() as ColumnDef<object>[],
		table_2: useConfirmationRegisterColumns() as ColumnDef<object>[],
	},
	marriage_registration: {
		table_1: useMarriageRegisterColumns() as ColumnDef<object>[],
		table_2: useMarriageRegisterAsParishColumns() as ColumnDef<object>[],
	},
	marriage_proposal: {
		table_1: useMarriageProposalFormColumns() as ColumnDef<object>[],
		table_2: useMarriageProposalColumns() as ColumnDef<object>[],
	},
	death_register: {
		table_1: useDeathRegisterColumns() as ColumnDef<object>[],
		table_2: useDeathRegisterAsParishColumns() as ColumnDef<object>[],
	},
});

export default useColumnsMap;
