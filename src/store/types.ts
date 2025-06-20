import type { AuthSlice } from './slices/authSlice';
import type { UISlice } from './slices/uiSlice';
// import other slices and types...

// Expand this type as you add more slices
// EXAMPLE: type AppState = AuthSlice & ParishSlice;
export type AppState = AuthSlice & UISlice;
