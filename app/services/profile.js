import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://argenwines-a6d4c-default-rtdb.firebaseio.com/" }),
    tagTypes: ["userImage", "userLocation"], 
    endpoints: (builder) => ({
        putImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `/profile/${localId}.json`,
                method: "PUT",
                body: { image }
            }),
            invalidatesTags: ["userImage"]
        }),
        getImage: builder.query({
            query: (localId) => `/profile/${localId}.json`,
            providesTags: ["userImage"]
        }),
        putUserLocation: builder.mutation({
            query: ({ localId, locationFormatted }) => ({
                url: `/userLocation/${localId}.json`,
                method: "PUT",
                body: locationFormatted
            }),
            invalidatesTags: ["userLocation"] 
        }),
        getUserLocation: builder.query({
            query: (localId) => `/userLocation/${localId}.json`,
            providesTags: ["userLocation"] 
        })
    })
});

export const {  usePutImageMutation,
                useGetImageQuery,
                usePutUserLocationMutation,
                useGetUserLocationQuery
            } = profileApi