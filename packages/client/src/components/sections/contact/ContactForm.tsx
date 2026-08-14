import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import {
  contactSchema,
  type ContactFormValues,
} from '@/components/form/schemas/contactSchema'
import { FormFieldText } from '@/components/form/FormField'
import { SubmitButton } from '@/components/form/SubmitButton'
import { Form } from '@/components/ui/form'
import { useSubmitContactMutation } from '@/features/contact/contactApi'
import {
  markSubmitted,
  selectContactStatus,
} from '@/features/contact/contactSlice'

export function ContactForm() {
  const dispatch = useDispatch()
  const statusMessage = useSelector(selectContactStatus)
  const [submitContact, { isLoading }] = useSubmitContactMutation()

  const form = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    const result = await submitContact(values)
    if ('data' in result) {
      dispatch(markSubmitted(new Date().toISOString()))
      form.reset()
    }
  })

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={onSubmit} noValidate>
        <FormFieldText
          control={form.control}
          name="name"
          label="Name"
          placeholder="Ada Voss"
        />
        <FormFieldText
          control={form.control}
          name="email"
          label="Email"
          placeholder="ada@example.com"
        />
        <FormFieldText
          control={form.control}
          name="company"
          label="Company"
          placeholder="Optional"
        />
        <FormFieldText
          control={form.control}
          name="message"
          label="Project notes"
          placeholder="What are you building, and what is in the way?"
          multiline
        />
        {statusMessage ? (
          <p
            className="rounded-md border bg-muted px-4 py-3 text-sm"
            role="status"
          >
            {statusMessage}
          </p>
        ) : null}
        <SubmitButton pending={isLoading} />
      </form>
    </Form>
  )
}
