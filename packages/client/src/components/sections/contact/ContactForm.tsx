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
import { contact } from '@/content'
import { useSubmitContactMutation } from '@/features/contact/contactApi'
import {
  markFailed,
  markSubmitted,
  selectContactStatus,
} from '@/features/contact/contactSlice'

export function ContactForm() {
  const dispatch = useDispatch()
  const statusMessage = useSelector(selectContactStatus)
  const [submitContact, { isLoading }] = useSubmitContactMutation()
  const { form: formCopy } = contact

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
      return
    }
    dispatch(markFailed())
  })

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={onSubmit} noValidate>
        <FormFieldText
          control={form.control}
          name="name"
          label={formCopy.fields.name.label}
          placeholder={formCopy.fields.name.placeholder}
        />
        <FormFieldText
          control={form.control}
          name="email"
          label={formCopy.fields.email.label}
          placeholder={formCopy.fields.email.placeholder}
        />
        <FormFieldText
          control={form.control}
          name="company"
          label={formCopy.fields.company.label}
          placeholder={formCopy.fields.company.placeholder}
        />
        <FormFieldText
          control={form.control}
          name="message"
          label={formCopy.fields.message.label}
          placeholder={formCopy.fields.message.placeholder}
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
        <SubmitButton
          pending={isLoading}
          pendingLabel={formCopy.pendingLabel}
        >
          {formCopy.submitLabel}
        </SubmitButton>
      </form>
    </Form>
  )
}
