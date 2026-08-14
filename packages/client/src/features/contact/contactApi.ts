import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ContactFormValues } from '@/components/form/schemas/contactSchema'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    submitContact: builder.mutation<
      { ok: true },
      ContactFormValues
    >({
      async queryFn(body) {
        await new Promise((resolve) => setTimeout(resolve, 600))
        if (import.meta.env.DEV) {
          console.info('[contactApi] submitted', body)
        }
        return { data: { ok: true as const } }
      },
    }),
  }),
})

export const { useSubmitContactMutation } = contactApi
