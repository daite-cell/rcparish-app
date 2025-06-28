import type { StateCreator } from 'zustand';
import type { AppState } from '@/store/types';

export interface TableSlice {
	rowId: number | null;
	handleSelectRow: (rowId: number) => void;
	handleCloseRow: () => void;
}

/**
 * Zustand slice for managing dynamic table state.
 *
 * @returns {TableSlice} The dynamic table state and its corresponding state updater actions.
 *
 * @property {number | null} rowId - The currently selected row ID.
 * @property {(rowId: number) => void} handleSelectRow - Updates the rowId when a row is clicked.
 * @property {() => void} handleCloseRow - Resets the rowId to null when the row is closed.
 */
export const createDynamicTableSlice: StateCreator<Partial<AppState>, [], [], TableSlice> = (set) => ({
	rowId: 1,
	handleSelectRow: (rowId) => set({ rowId }),
	handleCloseRow: () => set({ rowId: null }),
});
