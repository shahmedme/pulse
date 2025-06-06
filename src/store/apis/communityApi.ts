import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Community } from "@prisma/client";

export const communityApi = createApi({
	reducerPath: "communityApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
	keepUnusedDataFor: 60 * 60,
	tagTypes: ["Community"],
	endpoints: (builder) => ({
		getCommunities: builder.query<Community[], void>({
			query: () => "communities",
			providesTags: ["Community"],
		}),
	}),
});

export const { useGetCommunitiesQuery } = communityApi;
