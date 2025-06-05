import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "next-auth";

interface AuthState {
	user: Session["user"] | null;
	isAuthenticated: boolean;
	isAuthRequired: boolean;
}

const initialState: AuthState = {
	user: null,
	isAuthenticated: false,
	isAuthRequired: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<Session["user"] | null>) => {
			state.user = action.payload;
			state.isAuthenticated = !!action.payload;
		},
		clearUser: (state) => {
			state.user = null;
			state.isAuthenticated = false;
		},
		setIsAuthRequired: (state, action: PayloadAction<boolean>) => {
			state.isAuthRequired = action.payload;
		},
	},
});

export const { setUser, clearUser, setIsAuthRequired } = authSlice.actions;
export default authSlice.reducer;
