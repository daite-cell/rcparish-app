import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createAuthSlice } from '@/store/slices/authSlice';
import { createUISlice } from '@/store/slices/uiSlice';
import type { AppState } from '@/store/types';

// INFO: later if needed, can use persist to preserve data in browser storage
export const useStore = create<AppState>()(
	devtools(
		(set, get, store) => ({
			...createAuthSlice(set, get, store),
			...createUISlice(set, get, store),
			// ...other slices here
		}),
		{ name: 'RCParishStore' } // Name shows in DevTools
	)
);
