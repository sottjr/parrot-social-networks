import styled from 'styled-components';
import { Button, InputGroup, InputGroupProps } from 'react-bootstrap';
import img from '../../assets/background.png';
import Form from 'react-bootstrap/Form'

export const LoginContainer = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-image: url(${img});
    background-size: 100%;
    background-repeat: no-repeat;
`

export const FormContainer = styled.div`
    margin-top: 5%;
    margin-bottom: 2%;
    background-color: #FFFFFF;
    padding: 20px 50px 20px 50px;
`

export const LoginLogo = styled.img`
    width: 171px;
    height: 167px;
`

export const LoginTittle = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`

export const LoginForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormInput = styled.input`
    margin: 4%;
    border-radius: 5px;
    border: 1px solid #909090;
    text-align: center;
    padding: 5px 10px;
    font-size: 15px;
`

export const FormButon = styled(Button)`
    margin-top: 10%;
    padding: 4px 70px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    background-color: #76BB4C;
    line-height: 24.72px;
`

export const FormText = styled.a` 
    margin-top: 5%;
`