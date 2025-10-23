import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get current logged-in user
    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER", "RIDER"],
    }),


    updateProfile: builder.mutation({
      query: ({ id, userData }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        data: userData,
      }),
      invalidatesTags: ["USER","RIDER"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateProfileMutation } = userApi;
