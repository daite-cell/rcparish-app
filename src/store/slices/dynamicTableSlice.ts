import type { StateCreator } from 'zustand';
import type { AppState } from '@/store/types';

export interface TableSlice<RowType = unknown> {
	selectRow: RowType | null;
	handleSelectRow: (row: RowType) => void;
	handleCloseRow: () => void;
}
/**
 * Zustand slice for managing dynamic table state.
 *
 * This includes:
 * - currently selected row in the table
 * - state updater actions for selecting a row and closing the currently selected row
 *
 * @returns {TableSlice} The table-related state and its corresponding state updater actions.
 *
 * @property {object | null} selectRow - The currently selected row in the table.
 * @property {(row: object) => void} handleSelectRow - Sets the currently selected row to the row passed as argument.
 * @property {() => void} handleCloseRow - Sets the currently selected row to null.
 */
export const createDynamicTableSlice: StateCreator<Partial<AppState> & TableSlice, [], [], TableSlice> = (set) => ({
	selectRow: null,
	handleSelectRow: (row) => set({ selectRow: row }),
	handleCloseRow: () => set({ selectRow: null }),
});
