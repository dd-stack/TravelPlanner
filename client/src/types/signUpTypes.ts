import { FieldErrors, UseFormRegister, UseFormGetValues } from 'react-hook-form'

export type FormValueType = {
  email: string
  userNickname: string
  password: string
  passwordCheck: string
}

type DirtyFields = {
  email: boolean | undefined
  userNickname: boolean | undefined
  password: boolean | undefined
  passwordCheck: boolean | undefined
}

export interface ReactHookFormProps {
  register: UseFormRegister<FormValueType>
  dirtyFields: Partial<DirtyFields>
  errors: FieldErrors<FormValueType>
}

export interface PasswordProps extends ReactHookFormProps {
  isEdit?: string
}

export interface PasswordCheckProps extends ReactHookFormProps {
  getValues: UseFormGetValues<FormValueType>
  isEdit?: string
}

export interface SignUpViewProps extends PasswordCheckProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  isSubmitting: boolean
}
