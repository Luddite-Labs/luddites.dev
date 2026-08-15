import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ContactFormValues } from '@/components/form/schemas/contactSchema'
import { getWeb3FormsAccessKey, getWeb3FormsEndpoint } from '@/lib/env'
import { SITE } from '@/lib/constants'

type SubmitOk = { ok: true }
type SubmitErr = { status: number | 'FETCH_ERROR'; error: string }
type SubmitResult = { data: SubmitOk } | { error: SubmitErr }

async function postJson(
  url: string,
  body: Record<string, unknown>,
): Promise<SubmitResult> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })

    const text = await response.text()
    let payload: unknown = null
    if (text) {
      try {
        payload = JSON.parse(text) as unknown
      } catch {
        payload = text
      }
    }

    if (!response.ok) {
      return {
        error: {
          status: response.status,
          error: typeof payload === 'string' ? payload : text || response.statusText,
        },
      }
    }

    // Web3Forms returns HTTP 200 with { success: false } on some failures
    if (
      payload &&
      typeof payload === 'object' &&
      'success' in payload &&
      (payload as { success: unknown }).success === false
    ) {
      const message =
        'message' in payload && typeof (payload as { message: unknown }).message === 'string'
          ? (payload as { message: string }).message
          : 'Form provider rejected the submission'
      return { error: { status: response.status, error: message } }
    }

    return { data: { ok: true as const } }
  } catch (error) {
    return {
      error: {
        status: 'FETCH_ERROR',
        error: error instanceof Error ? error.message : String(error),
      },
    }
  }
}

async function submitViaWeb3Forms(
  accessKey: string,
  body: ContactFormValues,
): Promise<SubmitResult> {
  return postJson(getWeb3FormsEndpoint(), {
    access_key: accessKey,
    subject: `Contact · ${SITE.name}`,
    from_name: SITE.name,
    name: body.name,
    email: body.email,
    company: body.company ?? '',
    message: body.message,
  })
}

async function submitFake(body: ContactFormValues): Promise<SubmitResult> {
  await new Promise((resolve) => setTimeout(resolve, 600))
  if (import.meta.env.DEV) {
    console.info(
      '[contactApi] fake submit — set VITE_WEB3FORMS_ACCESS_KEY to receive email',
      body,
    )
  }
  return { data: { ok: true as const } }
}

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    submitContact: builder.mutation<SubmitOk, ContactFormValues>({
      async queryFn(body) {
        const web3Key = getWeb3FormsAccessKey()
        if (web3Key) {
          return submitViaWeb3Forms(web3Key, body)
        }
        return submitFake(body)
      },
    }),
  }),
})

export const { useSubmitContactMutation } = contactApi
