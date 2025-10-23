import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1️⃣ User Management
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/user/all-users",
        method: "GET",
        params,
      }),
      providesTags: ["ADMIN_USERS"],
    }),

    blockUnblockUser: builder.mutation({
      query: ({ id, status }) => ({
        url: `/user/block/${id}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["ADMIN_USERS"],
    }),
    approveDriver: builder.mutation({
      query: (id: string) => ({
        url: `/driver/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["ADMIN_DRIVERS"],
    }),
    suspendDriver: builder.mutation({
      query: (id: string) => ({
        url: `/driver/suspend/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["ADMIN_DRIVERS"],
    }),
    // Postman e Kono Route Nai
    getAnalytics: builder.query({
      query: () => ({
        url: "/users/admin",
        method: "GET",
      }),
      providesTags: ["ADMIN_ANALYTICS"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useBlockUnblockUserMutation,
  //   useGetAllDriversQuery,
  useApproveDriverMutation,
  useSuspendDriverMutation,
  useGetAnalyticsQuery, // Postman e Kono Route Nai
  //   useGetAllRidesQuery,
  //   useUpdateRideStatusMutation,
  //   useGetAnalyticsQuery,
  //   useGetAdminProfileQuery,
  //   useUpdateAdminProfileMutation,
} = adminApi;
