import type { StateCreator } from 'zustand';
import type { AppState } from '@/store/types';

export interface TableSlice<RowType = unknown> {
	selectRow: RowType | null;
	selectFamilyCardRow: RowType | null;
	selectPriorRow: RowType | null;
	selectUploadedFileRow: RowType | null;
	selectPriestsRow: RowType | null;
	selectAssociationRow: RowType | null;
	selectFamilyMembersRow: RowType | null;
	selectAccountingNameRow: RowType | null;

	editRow: RowType | null;
	editPriestsRow: RowType | null;
	editAccountingNameRow: RowType | null;

	handleSelectRow: (row: RowType) => void;
	handleSelectFamilyCardRow: (row: RowType) => void;
	handleSelectPriorRow: (row: RowType) => void;
	handleSelectUploadedFileRow: (row: RowType) => void;
	handleSelectPriestsRow: (row: RowType) => void;

	handleSelectAssociationRow: (row: RowType) => void;
	handleSelectFamilyMembersRow: (row: RowType) => void;
	handleSelectAccountingNameRow: (row: RowType) => void;

	handleEditRow: (row: RowType) => void;
	handleEditPriestsRow: (row: RowType) => void;
	handleEditAccountingName: (row: RowType) => void;

	handleCloseRow: () => void;
	handleCloseFamilyCardRow: () => void;
	handleClosePriorRow: () => void;
	handleCloseUploadedFileRow: () => void;
	handleCloseEditRow: () => void;
	handleClosePriestsRow: () => void;
	handleCloseEditPriestsRow: () => void;
	handleCloseAssociationRow: () => void;
	handleCloseFamilyMembersRow: () => void;
	handleCloseAccountingNameRow: () => void;
}
/**
 * Zustand slice for managing dynamic table state.
 *
 * This includes:
 * - currently selected row in the table
 * - state updater actions for selecting a row and closing the currently selected row
 *
 * @returns {TableSlice} The table-related state and its corresponding state updater actions.
 * @property {object | null} selectRow - The currently selected row in the table.
 * @property {(row: object) => void} handleSelectRow - Sets the currently selected row to the row passed as argument.
 * @property {() => void} handleCloseRow - Sets the currently selected row to null.
 * @property {object | null} selectFamilyCardRow - The currently selected row in the family card table.
 * @property {(row: object) => void} handleSelectFamilyCardRow - Sets the currently selected row in the family card table to the row passed as argument.
 * @property {() => void} handleCloseFamilyCardRow - Sets the currently selected row in the family card table to null.
 *
 */
export const createDynamicTableSlice: StateCreator<Partial<AppState> & TableSlice, [], [], TableSlice> = (set) => ({
	selectRow: null,
	selectFamilyCardRow: null,
	selectPriorRow: null,
	selectUploadedFileRow: null,
	selectAssociationRow: null,
	selectPriestsRow: null,
	selectFamilyMembersRow: null,
	selectAccountingNameRow: null,

	editRow: null,
	editPriestsRow: null,
	editAccountingNameRow: null,

	handleSelectRow: (row) => set({ selectRow: row, editRow: null }),
	handleSelectFamilyCardRow: (row) => set({ selectFamilyCardRow: row }),
	handleSelectPriorRow: (row) => set({ selectPriorRow: row }),
	handleSelectUploadedFileRow: (row) => set({ selectUploadedFileRow: row }),
	handleSelectAssociationRow: (row) => set({ selectAssociationRow: row }),
	handleSelectPriestsRow: (row) => set({ selectPriestsRow: row, editPriestsRow: null }),
	handleSelectFamilyMembersRow: (row) => set({ selectFamilyMembersRow: row }),
	handleSelectAccountingNameRow: (row) => set({ selectAccountingNameRow: row, editAccountingNameRow: null }),

	handleEditRow: (row) => set({ editRow: row }),
	handleEditPriestsRow: (row) => set({ editPriestsRow: row }),
	handleEditAccountingName: (row) => set({ editAccountingNameRow: row }),

	handleCloseRow: () => set({ selectRow: null, editRow: null }),
	handleCloseFamilyCardRow: () => set({ selectFamilyCardRow: null }),
	handleClosePriorRow: () => set({ selectPriorRow: null }),
	handleCloseUploadedFileRow: () => set({ selectUploadedFileRow: null }),
	handleCloseEditRow: () => set({ editRow: null }),
	handleClosePriestsRow: () => set({ selectPriestsRow: null, editPriestsRow: null }),
	handleCloseEditPriestsRow: () => set({ editPriestsRow: null }),
	handleCloseAssociationRow: () => set({ selectAssociationRow: null }),
	handleCloseFamilyMembersRow: () => set({ selectFamilyMembersRow: null }),
	handleCloseAccountingNameRow: () =>
		set({ selectAccountingNameRow: null, editAccountingNameRow: null, selectRow: null }),
});
