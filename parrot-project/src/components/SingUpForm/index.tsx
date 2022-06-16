import React, { useState } from 'react';
import { useFormik } from 'formik';
import Logo from '../../assets/logo2.png';
import { postSingUp } from '../../services/singup';
import * as Yup from "yup";
import * as S from "./styled"

const validationSchema = Yup.object({
  name: Yup.string().required("Campo vazio"),
  email: Yup.string().email("E-mail inválido").required("Campo vazio"),
  password: Yup.string().required("Campo vazio"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senhas diferentes").required("Confirme sua senha"),
  address: Yup.number().required("Campo vazio"),
  photo: Yup.string().required("Campo vazio")
})

const SingUpForm: React.FC = () => {

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
      <S.FormContainer>
        <S.SingUpLogo src={Logo} alt="Parrot"/>
        <S.SingUpTittle>{"CADASTRO"}</S.SingUpTittle>
        <S.SingUpForm onSubmit={formik.handleSubmit}>
        {formik.errors.name && <span>{formik.errors.name}</span>}
          <S.FormInput
            type='text'
            name='name'
            id='name'
            placeholder='nome'
            value={formik.values.name}
            onChange={formik.handleChange}

          />
        {formik.errors.email && <span>{formik.errors.email}</span>}
          <S.FormInput
            type='email'
            name='email'
            id='email'
            placeholder='email'
            value={formik.values.email}
            onChange={formik.handleChange}

          />
        {formik.errors.password && <span>{formik.errors.password}</span>}
          <S.FormInput
            type='password'
            name='password'
            id='password'
            placeholder='senha'
            value={formik.values.password}
            onChange={formik.handleChange}
 
          />
        {formik.errors.confirmPassword && <span>{formik.errors.confirmPassword}</span>}
          <S.FormInput
            type='password'
            name='confirmPassword'
            id='password'
            placeholder='confirmar senha'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}

          />
        {formik.errors.address && <span>{formik.errors.address}</span>}
          <S.FormInput
            type='text'
            name='address'
            id='address'
            placeholder='unidade/apartamento'
            value={formik.values.address}
            onChange={formik.handleChange}

          />

          <S.FormInput
            type='link'
            name='photo'
            id='photo'
            placeholder='link da foto'
            value={formik.values.photo}
            onChange={formik.handleChange}
          />

          <S.FormButon type='submit' onSubmit={formik.handleSubmit}>entrar</S.FormButon>
        </S.SingUpForm>
      </S.FormContainer>
    </S.SingUpContainer>
  );
}

export default SingUpForm;