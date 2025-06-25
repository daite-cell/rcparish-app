import type { StateCreator } from 'zustand';
import type { AppState } from '@/store/types';

export interface UISlice {
	isSidebarOpen: boolean;
	isLoading: boolean;
	theme: 'light' | 'dark';

	toggleSidebar: () => void;
	setLoading: (loading: boolean) => void;
	setTheme: (theme: 'light' | 'dark') => void;
}

/**
 * Zustand slice for managing UI-related state.
 *
 * This includes:
 * - Sidebar open/close state
 * - Global loading indicator
 * - Theme preference (light or dark)
 *
 * @returns {UISlice} The UI-related state and its corresponding state updater actions.
 *
 * @property {boolean} isSidebarOpen - Whether the sidebar is currently open.
 * @property {boolean} isLoading - Whether a global loading operation is in progress.
 * @property {'light' | 'dark'} theme - The current theme of the application.
 *
 * @property {() => void} toggleSidebar - Toggles the sidebar's visibility.
 * @property {(loading: boolean) => void} setLoading - Updates the global loading state.
 * @property {(theme: 'light' | 'dark') => void} setTheme - Sets the current theme.
 */
export const createUISlice: StateCreator<AppState, [], [], UISlice> = (set) => ({
	isSidebarOpen: false,
	isLoading: false,
	theme: 'light',

	toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
	setLoading: (loading) => set({ isLoading: loading }),
	setTheme: (theme) => set({ theme }),
});
