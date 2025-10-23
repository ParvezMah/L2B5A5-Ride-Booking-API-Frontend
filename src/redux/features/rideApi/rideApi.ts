import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Apply as driver
    applyAsDriver: builder.mutation({
      query: (formData: FormData) => ({
        url: "/driver/apply-driver",
        method: "POST",
        data: formData,
      }),
      invalidatesTags: ["DRIVER"],
    }),
    // Ride request
    requestRide: builder.mutation({
      query: (rideData) => ({
        url: "/ride/request",
        method: "POST",
        data: rideData,
      }),
      invalidatesTags: ["RIDE"],
    }),

    // Get my rides
    getMyRides: builder.query({
      query: () => ({
        url: "/ride/me",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),

    updateRideStatus: builder.mutation({
      query: ({ rideId, status }) => ({
        url: `/ride/${rideId}/status`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["RIDE"],
    }),

    // Get ride history (with pagination and status)
    getRideHistory: builder.query({
      query: ({
        page = 1,
        limit = 10,
        status,
        startDate,
        endDate,
        minFare,
        maxFare,
      }) => ({
        url: "/ride/me",
        method: "GET",
        params: { page, limit, status, startDate, endDate, minFare, maxFare },
      }),
      providesTags: ["RIDE"],
    }),
    // getRideHistory: builder.query({
    //   query: () => ({
    //     url: "/rides/me",
    //     method: "GET",
       
    //   }),
    //   providesTags: ["RIDE"],
    // }),

    // Get single ride details
    // Ride API
    getRideDetails: builder.query({
      query: (rideId: string) => ({
        url: `/ride/${rideId}`,
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),

    // change Password
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data,
      }),
    }),

    getRidesOversight: builder.query({
      query: ({
        rideStatus,
        driverId,
        riderId,
        startDate,
        endDate,
        page = 1,
        limit = 20,
      }) => ({
        url: "/ride/oversight",
        method: "GET",
        params: {
          rideStatus,
          driverId,
          riderId,
          startDate,
          endDate,
          page,
          limit,
        },
      }),
      providesTags: ["RIDE_OVERSIGHT"],
    }),
  }),
});

// hooks export
export const {
  useApplyAsDriverMutation,
  useGetRidesOversightQuery,
  useRequestRideMutation,
  useGetMyRidesQuery,
  useGetRideHistoryQuery,
  useGetRideDetailsQuery,
  useChangePasswordMutation,

  useUpdateRideStatusMutation,
} = rideApi;
