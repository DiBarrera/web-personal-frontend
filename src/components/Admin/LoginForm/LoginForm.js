import React, { useState } from 'react';
import { signInApi } from '../../../api/user';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../utils/constants';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



import './LoginForm.scss';

export default function LoginForm() {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const changeForm = e => {
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(inputs)
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const login = async e => {
        console.log('Login...')
        console.log(inputs)
        // e.preventDefault();
        signInApi(inputs)

        const result = await signInApi(inputs)

        if(result.message) {
            notification['error']({
                message: result.message
            })
        } else {
            const { accessToken, refreshToken } = result
            localStorage.setItem(ACCESS_TOKEN, accessToken)
            localStorage.setItem(REFRESH_TOKEN, refreshToken)

            notification['success']({
                message: 'Login correcto'
            })

            // window.location.href = '/admin'
        }
        console.log(result)
    }

    return (
        <Form className='login-form' onChange={changeForm} onFinish={login}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined type='user' style={{ color: 'rgba(0, 0, 0, .25)'}}/>}
                    type='email'
                    name='email'
                    placeholder='Correo electronico'
                    className='login-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined type='user' style={{ color: 'rgba(0, 0, 0, .25)'}}/>}
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    className='login-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' className='login-form__button'>
                    Ingresar
                </Button>
            </Form.Item>
        </Form>
    )
}