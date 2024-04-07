import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";

const scheduledApi = baseApi.injectEndpoints({
    endpoints : (build) =>({
        createScheduled  : build.mutation({
            query: (data) => ({
                url: '/schedule',
                method: "POST",
                data
            }),
            invalidatesTags: [tagTypes.scheduled]
        }),
        getAllSchedules: build.query({
            query: (arg : Record<string, any>) => ({
                url: '/schedule',
                method: 'GET',
                params : arg
            }),
            transformResponse :(response : [], meta : IMeta)=>{
                return {
                    schedule : response,
                    meta,
                }
            },
            providesTags :[tagTypes.scheduled]
        }),
        deleteSchedule : build.mutation({
            query : (id)=> ({
                url : `/schedule/${id}`,
                method : "DELETE"
            }),
            invalidatesTags : [tagTypes.scheduled]
        })
    })
})

export const { useCreateScheduledMutation, useGetAllSchedulesQuery , useDeleteScheduleMutation } = scheduledApi


