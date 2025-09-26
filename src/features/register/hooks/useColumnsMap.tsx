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
		table_1: useHolyCommunionMemberColumns() as ColumnDef<object>[],
		table_2: useConfirmationRegisterColumns() as ColumnDef<object>[],
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
		table_1: useMarriageRegisterColumns('table_1') as ColumnDef<object>[],
		table_2: useMarriageRegisterAsParishColumns('table_2') as ColumnDef<object>[],
	},
	marriage_proposal: {
		table_1: useMarriageProposalFormColumns('table_1') as ColumnDef<object>[],
		table_2: useMarriageProposalColumns('table_2') as ColumnDef<object>[],
	},
	death_register: {
		table_1: useDeathRegisterColumns() as ColumnDef<object>[],
		table_2: useDeathRegisterAsParishColumns() as ColumnDef<object>[],
	},
});

export default useColumnsMap;
