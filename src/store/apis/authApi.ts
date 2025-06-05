import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/axios";

export interface RegisterCredentials {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface AuthResponse {
	user: {
		id: string;
		email: string;
		firstName: string;
		lastName: string;
	};
	token?: string;
	message?: string;
}

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: axiosBaseQuery({ baseUrl: "/api" }),
	endpoints: (builder) => ({
		register: builder.mutation<AuthResponse, RegisterCredentials>({
			query: (credentials) => ({
				url: "/auth/signup",
				method: "POST",
				body: credentials,
			}),
		}),
		login: builder.mutation<AuthResponse, LoginCredentials>({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
