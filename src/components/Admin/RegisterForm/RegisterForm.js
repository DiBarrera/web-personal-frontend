import React, { useState }from 'react';
import { emailValidation, minLengthValidation } from '../../../utils/formValidation';
import { signUpApi } from '../../../api/user';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './RegisterForm.scss';
import { useForm } from 'antd/lib/form/Form';

const cors = require('cors');

export default function RegisterForm() {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false
    })

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    })

    const changeForm = e => {
        console.log(e.target.value)
        console.log(e.target.name)
        if(e.target.name === 'privacyPolicy') {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            })
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    }

    const inputValidation = e => {
        console.log('validando...')
        console.log(e.target)
        const { type, name } = e.target
        if(type === 'email') {
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            })
        }
        if(type === 'password') {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 6)
            })
        }
        if(type === 'checkbox') {
            setFormValid({
                ...formValid,
                [name]: e.target.checked
            })
        }
    }

    const register = async e => {
        console.log(inputs)
        // e.preventDefault()
        console.log(formValid)
        const { email, password, repeatPassword, privacyPolicy } = formValid
        const emailVal = inputs.email
        const passwordVal = inputs.password
        const repeatPasswordVal = inputs.repeatPassword
        const privacyPolicyVal = inputs.privacyPolicy

        if(!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            notification['error']({
                message: 'Todos los campos son obligatorios'
            })
        } else {
            if(passwordVal !== repeatPasswordVal) {
                notification['error']({
                    message: 'Las contraseñas tienen que ser iguales'
                })
            } else {
                // TO DO: Conectar con el API y registrar el usuario
                console.log('Correcto...')
                notification['success']({
                    message: 'Cuenta creada...'
                })
                const result = await signUpApi(inputs)
                console.log(result)

                if(!result.ok) {
                    notification['error']({
                        message: result.message
                    })
                } else {
                    notification['success']({
                        message: result.message
                    })
                }
            }
            resetForm()
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName('input')

        for(let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('success')
            inputs[i].classList.remove('error')
        }

        setInputs({
            email: '',
            password: '',
            repeatPassword: '',
            privacyPolicy: false
        })

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        })
    }

    return (
        <Form className='register-form' onFinish={register} onChange={changeForm}>
            <Form.Item>
                <Input 
                    prefix={<UserOutlined type='user' style={{ color: 'rgba(0, 0, 0, .25)'}}/>}
                    type='email'
                    name='email'
                    placeholder='Correo electronico'
                    className='register-form__input'
                    onChange={inputValidation}
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined type='lock' style={{ color: 'rgba(0, 0, 0, .25)'}}/>}
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    className='register-form__input'
                    onChange={inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined type='lock' style={{ color: 'rgba(0, 0, 0, .25)'}}/>}
                    type='password'
                    name='repeatPassword'
                    placeholder='Repetir contraseña'
                    className='register-form__input'
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox 
                    name='privacyPolicy' 
                    onChange={inputValidation} 
                    checked={inputs.privacyPolicy}
                >
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' className='register-form__button'>
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}