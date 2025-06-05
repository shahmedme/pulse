import axios from "axios";
import { AxiosError } from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
});

export interface ApiError {
	status?: number;
	data: any;
}

export const axiosBaseQuery =
	({ baseUrl } = { baseUrl: "" }) =>
	async ({
		url,
		method,
		body,
		params,
	}: {
		url: string;
		method: string;
		body?: any;
		params?: any;
	}) => {
		try {
			const result = await axiosInstance({
				url: baseUrl + url,
				method,
				data: body,
				params,
			});
			return { data: result.data };
		} catch (error) {
			const axiosError = error as AxiosError;
			return {
				error: {
					status: axiosError.response?.status,
					data: axiosError.response?.data || axiosError.message,
				} as ApiError,
			};
		}
	};
