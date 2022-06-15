import styled from 'styled-components';
import { Button, InputGroupProps } from 'react-bootstrap';
import img from '../../assets/background.jpeg';

export const SingUpContainer = styled.main`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-image: url(${img});
`

export const SingUpForm = styled.div`
    background-color: coral;
    padding: 20px 50px 20px 50px;
`

export const SingUpLogo = styled.img`
    width: 171px;
    height: 167px;
`

export const SingUpTittle = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormInput = styled.input`
    margin: 5%;
    border-radius: 5px;
    border: 1px solid #909090;
    text-align: center;
`

export const FormButon = styled.button`
    margin-top: 15%;
    padding: 4px 66px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    background-color: #76BB4C;
`