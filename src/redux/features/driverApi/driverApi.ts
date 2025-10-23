/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Get all active rides for driver
    getActiveRides: builder.query({
      query: () => ({
        url: "/rides/active",
        method: "GET",
      }),
      providesTags: ["DRIVER", "RIDE"],
    }),
// get ride history 
    getDriverRides: builder.query({
      query: ({ status, page = 1, limit = 10 }) => ({
        url: "/rides/driver",
        method: "GET",
        params: { status, page, limit },
      }),
      providesTags: ["DriverRides"],
    }),

    // ✅ Get all requested rides
    getRequestedRides: builder.query({
      query: () => ({
        url: "/rides/requested",
        method: "GET",
      }),
      providesTags: ["DRIVER", "RIDE"],
    }),

    // ✅ Get logged-in driver profile
    getDriverProfile: builder.query({
      query: () => ({
        url: "/driver/me",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
   
     // Update driver profile (PATCH) → MUTATION
    updateDriverProfile: builder.mutation({
      query: (payload: any) => ({
        url: "/driver/me",
        method: "PATCH",
        data: payload, 
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // ✅ Update online/offline status
    updateOnlineStatus: builder.mutation({
      query: ({ driverId, onlineStatus }) => ({
        url: `/driver/online-status/${driverId}`,
        method: "PATCH",
        data: { onlineStatus },
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),
    // ✅ Update online/offline status
    updateRidingStatus: builder.mutation({
      query: ({ driverId, ridingStatus }) => ({
        url: `/driver/riding-status/${driverId}`,
        method: "PATCH",
        data: { ridingStatus },
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),

    // ✅ Update driver location
    updateLocation: builder.mutation({
      query: ({ driverId, coordinates }: { driverId: string; coordinates: [number, number] }) => ({
        url: `/driver/location/${driverId}`,
        method: "PATCH",
        data: { coordinates },
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),

    // ✅ Driver Accept a ride
    acceptRide: builder.mutation({
      query: (rideId) => ({
        url: `/ride/${rideId}/accept`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),

    // ✅ Driver Reject a ride
    rejectRide: builder.mutation({
      query: (rideId) => ({
        url: `/ride/${rideId}/reject`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),

    // ✅ Mark pickup complete
    pickUpRide: builder.mutation({
      query: (rideId) => ({
        url: `/ride/${rideId}/pickup`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),

    // ✅ Mark ride as in transit
    markInTransit: builder.mutation({
      query: (rideId) => ({
        url: `/ride/${rideId}/transit`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),

    // ✅ Complete a ride
    completeRide: builder.mutation({
      query: (rideId) => ({
        url: `/ride/${rideId}/complete`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),
    // ✅ Complete a ride
    cancelRide: builder.mutation({
      query: (rideId) => ({
        url: `/ride/${rideId}/cancel`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),

      // 🔹 Get Driver Earnings
    getDriverEarnings: builder.query({
      query: () => ({
        url: "/ride/earnings/me",
        method: "GET",
      }),
      providesTags: ["EARNINGS"],
    }),
  }),
});

export const {
  useGetDriverRidesQuery,
  useGetActiveRidesQuery,
  useUpdateRidingStatusMutation,
  useGetRequestedRidesQuery,
  useGetDriverProfileQuery,
 useUpdateDriverProfileMutation,
 useCancelRideMutation,
  useUpdateOnlineStatusMutation,
  useUpdateLocationMutation,
  useAcceptRideMutation,
  useRejectRideMutation,
  usePickUpRideMutation,
  useMarkInTransitMutation,
  useCompleteRideMutation,
  useGetDriverEarningsQuery
} = driverApi;
