import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";
import { IDoctor } from "@/types/doctor";

const doctorApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDoctor: build.mutation({
            query: (data) => ({
                url: '/user/create-doctor',
                method: "POST",
                contentType: 'multipart/form-data',
                data
            }),
            invalidatesTags: [tagTypes.doctor]
        }),
        getAllDoctors: build.query({
            query: () => ({
                url: '/doctor',
                method: 'GET'
            }),
            transformResponse :(response : IDoctor, meta : IMeta)=>{
                return {
                    doctors : response,
                    meta,
                }
            }
        })
    })
})

export const { useCreateDoctorMutation } = doctorApi