import React from 'react';
import { useFormik } from 'formik';
import Logo from '../../assets/logo2.png';
import { postSingUp } from '../../services/sing';
import * as Yup from "yup";
import * as S from "./styled"

const SingUpForm: React.FC = () => {
//   const ValidationSchema = Yup.object({
//     name: Yup.string().required("Campo vazio"),
//     email: Yup.string().email("E-mail inválido").required("Campo vazio"),
//     password: Yup.string().required("Campo vazio"),
//     confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senhas diferentes").required("Confirme sua senha"),
//     address: Yup.number().required("Campo vazio"),
//     photo: Yup.string().required("Campo vazio")
//   })

//   const formik = useFormik({
//     initialValues: {
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         address: "",
//         photo: ""
//     },

//     validationSchema,
//     onSubmit: async values => {
//         await postSingUp(values)
//         alert("Cadastro realizado, Seja bem-vindo!")
//     }
// })

  return (
    <S.SingUpContainer>
      <S.SingUpForm>
        <S.SingUpLogo src={Logo} alt="Parrot"/>
        <S.SingUpTittle>{"CADASTRO"}</S.SingUpTittle>
        <S.Form >

          <S.FormInput
            type='text'
            name='name'
            id='name'
            placeholder='nome'

          />
 
          <S.FormInput
            type='email'
            name='email'
            id='email'
            placeholder='email'

          />

          <S.FormInput
            type='password'
            name='password'
            id='password'
            placeholder='senha'
 
          />

          <S.FormInput
            type='password'
            name='confirmPassword'
            id='password'
            placeholder='confirmar senha'

          />

          <S.FormInput
            type='text'
            name='address'
            id='address'
            placeholder='unidade/apartamento'

          />

          <S.FormInput
            type='link'
            name='photo'
            id='photo'
            placeholder='link da foto'
          />

          <S.FormButon type='submit'>entrar</S.FormButon>
        </S.Form>
      </S.SingUpForm>
    </S.SingUpContainer>
  );
}

export default SingUpForm;