import type { StateCreator } from 'zustand';
import type { AppState } from '@/store/types';

export interface TableSlice<RowType = unknown> {
	selectRow: RowType | null;
	selectFamilyCardRow: RowType | null;
	selectPriorRow: RowType | null;
	selectUploadedFileRow: RowType | null;
	handleSelectRow: (row: RowType) => void;
	handleSelectFamilyCardRow: (row: RowType) => void;
	handleSelectPriorRow: (row: RowType) => void;
	handleSelectUploadedFileRow: (row: RowType) => void;
	handleCloseRow: () => void;
	handleCloseFamilyCardRow: () => void;
	handleClosePriorRow: () => void;
	handleCloseUploadedFileRow: () => void;
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
	handleSelectPriorRow: (row) => set({ selectPriorRow: row }),
	handleSelectRow: (row) => set({ selectRow: row }),
	handleSelectFamilyCardRow: (row) => set({ selectFamilyCardRow: row }),
	handleSelectUploadedFileRow: (row) => set({ selectUploadedFileRow: row }),
	handleCloseRow: () => set({ selectRow: null }),
	handleCloseFamilyCardRow: () => set({ selectFamilyCardRow: null }),
	handleClosePriorRow: () => set({ selectPriorRow: null }),
	handleCloseUploadedFileRow: () => set({ selectUploadedFileRow: null }),
});
