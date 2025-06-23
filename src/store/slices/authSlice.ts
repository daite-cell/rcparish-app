import type { StateCreator } from 'zustand';
import type { AppState } from '@/store/types';

export interface AuthUser {
	id: string;
	name: string;
	email: string;
	role?: string;
}

export interface AuthSlice {
	user: AuthUser | null;
	token: string | null;
	isAuthenticated: boolean;

	initializeAuth: () => Promise<void>;
	logout: () => void;
	setAuthData: (user: AuthUser, token: string) => void;
}

export const createAuthSlice: StateCreator<
	AppState, // current slice state
	[], // middleware used (none here)
	[], // slice extensions (none)
	AuthSlice // return value (same as input)
> = (set) => ({
	user: null,
	token: null,
	isAuthenticated: false,

	initializeAuth: async () => {
		const token = localStorage.getItem('token');
		if (!token) return;

		try {
			const res = await fetch('/api/profile', {
				headers: { Authorization: `Bearer ${token}` },
			});
			if (!res.ok) throw new Error('Failed to fetch profile');

			const user: AuthUser = await res.json();
			set({ user, token, isAuthenticated: true });
		} catch (error) {
			console.error('Auth init failed:', error);
			localStorage.removeItem('token');
			set({ user: null, token: null, isAuthenticated: false });
		}
	},

	logout: () => {
		localStorage.removeItem('token');
		set({ user: null, token: null, isAuthenticated: false });
	},

	setAuthData: (user: AuthUser, token: string) => {
		localStorage.setItem('token', token);
		set({ user, token, isAuthenticated: true });
	},
});
