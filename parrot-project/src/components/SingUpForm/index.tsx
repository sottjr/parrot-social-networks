import React from 'react';
import { useFormik } from 'formik';
import Logo from '../../assets/logo2.png';
import { postSingUp } from '../../services/sing';
import * as Yup from "yup";
import * as S from "./styled"

const SingUpForm: React.FC = () => {
  const ValidationSchema = Yup.object({
    name: Yup.string().required("Campo vazio"),
    email: Yup.string().email("E-mail inválido").required("Campo vazio"),
    password: Yup.string().min(6, 'Mínimo 6').required("Campo vazio"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senhas diferentes").required("Confirme sua senga"),
    address: Yup.number().required("Campo vazio"),
    photo: Yup.string().required("Campo vazio")
  })

  const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        photo: ""
    },

    validationSchema,
    onSubmit: async values => {
        await postSingUp(values)
        alert("Cadastro realizado, Seja bem-vindo!")
    }
})

  return (
    <S.SingUpContainer>
      <S.SingUpForm>
        <S.SingUpLogo src={Logo} alt="Parrot"/>
        <S.SingUpTittle>{"CADASTRO"}</S.SingUpTittle>
        <S.Form onSubmit={formik.handleSubmit}>
        {formik.errors.name && <small>{formik.errors.name}</small>}
          <S.FormInput
            type='text'
            name='name'
            id='name'
            placeholder='nome'
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        {formik.errors.email && <small>{formik.errors.email}</small>}
          <S.FormInput
            type='email'
            name='email'
            id='email'
            placeholder='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        {formik.errors.password && <small>{formik.errors.password}</small>}
          <S.FormInput
            type='password'
            name='password'
            id='password'
            placeholder='senha'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        {formik.errors.confirmPassword && <small>{formik.errors.confirmPassword}</small>}
          <S.FormInput
            type='password'
            name='confirmPassword'
            id='password'
            placeholder='confirmar senha'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.address && <small>{formik.errors.address}</small>}
          <S.FormInput
            type='text'
            name='address'
            id='address'
            placeholder='unidade/apartamento'
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.photo && <small>{formik.errors.photo}</small>}
          <S.FormInput
            type='link'
            name='photo'
            id='photo'
            placeholder='link da foto'
            value={formik.values.photo}
            onChange={formik.handleChange}
          />

          <S.FormButon type='submit'>entrar</S.FormButon>
        </S.Form>
      </S.SingUpForm>
    </S.SingUpContainer>
  );
}

export default SingUpForm;