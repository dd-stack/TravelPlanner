import { useState } from 'react'
import { PasswordProps } from '../../types/signUpTypes'
import styles from './Form.module.scss'
import ShowPasswordButton from './ShowPasswordButton'

const passwordReg =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*(),.?`'":{}|<>_+\-=\[\]])[a-zA-Z0-9~!@#$%^&*(),.?`'":{}|<>_+\-=\[\]]+$/

function Password({ register, dirtyFields, errors, isEdit = '' }: PasswordProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleShow = () => {
    setShowPassword(pre => !pre)
  }

  const {
    onChange: passwordOnChange,
    onBlur: passwordOnBlur,
    name: passwordName,
    ref: passwordRef,
  } = register('password', {
    pattern: {
      value: passwordReg,
      message: '영소문자, 숫자, 특수문자가 각각 한 개 이상 포함되어야 합니다.',
    },
    minLength: {
      value: 8,
      message: '비밀번호는 총 8자 이상이어야 합니다.',
    },
    maxLength: {
      value: 15,
      message: '비밀번호는 총 15자 이하여야 합니다.',
    },
    required: '비밀번호는 필수값입니다.',
  })

  return (
    <label className={styles.label} htmlFor='password'>
      {`${isEdit}비밀번호`}
      <div className={styles.inputErrorBox}>
        <input
          id='password'
          type={showPassword ? 'text' : 'password'}
          name={passwordName}
          onChange={passwordOnChange}
          onBlur={passwordOnBlur}
          ref={passwordRef}
          placeholder='8~15자 이하 영문, 숫자, 특수문자 조합'
          required
        />
        <ShowPasswordButton show={showPassword} handleShow={handleShow} />
        <span className={styles.errorMessage}>
          {dirtyFields.password && errors.password && errors.password.message}
        </span>
      </div>
    </label>
  )
}

export default Password
