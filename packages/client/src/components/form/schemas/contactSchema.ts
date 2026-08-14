import * as Yup from 'yup'

export const contactSchema = Yup.object({
  name: Yup.string().trim().required('Name is required').min(2, 'Too short'),
  email: Yup.string().trim().email('Enter a valid email').required('Email is required'),
  company: Yup.string().trim().optional(),
  message: Yup.string()
    .trim()
    .required('Tell us a little about the work')
    .min(20, 'A bit more detail helps'),
})

export type ContactFormValues = Yup.InferType<typeof contactSchema>
