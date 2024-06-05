import { PROJECT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const projectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getprojects: builder.query({
      query: ({ keyword }) => ({
        url: `${PROJECT_URL}`,
        params: { keyword },
      }),
      keepUnusedDataFor: 5,
      providesTags: ["projects"],
    }),

    getprojectById: builder.query({
      query: (projectId) => `${PROJECT_URL}/${projectId}`,
      providesTags: (result, error, projectId) => [
        { type: "project", id: projectId },
      ],
    }),

    allprojects: builder.query({
      query: () => `${PROJECT_URL}/allprojects`,
    }),

    getprojectDetails: builder.query({
      query: (projectId) => ({
        url: `${PROJECT_URL}/${projectId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createproject: builder.mutation({
      query: (projectData) => ({
        url: `${PROJECT_URL}`,
        method: "POST",
        body: projectData,
      }),
      invalidatesTags: ["project"],
    }),

    updateproject: builder.mutation({
      query: ({ projectId, formData }) => ({
        url: `${PROJECT_URL}/${projectId}`,
        method: "PUT",
        body: formData,
      }),
    }),

   
    deleteproject: builder.mutation({
      query: (projectId) => ({
        url: `${PROJECT_URL}/${projectId}`,
        method: "DELETE",
      }),
      providesTags: ["project"],
    }),

    

    getFilteredprojects: builder.query({
      query: ({ checked, radio }) => ({
        url: `${PROJECT_URL}/filtered-projects`,
        method: "POST",
        body: { checked, radio },
      }),
    }),
  }),
});

export const {
  useGetprojectByIdQuery,
  useGetprojectsQuery,
  useGetprojectDetailsQuery,
  useAllprojectsQuery,
  useCreateprojectMutation,
  useUpdateprojectMutation,
  useDeleteprojectMutation,
  
  useGetFilteredprojectsQuery,
} = projectApiSlice;
