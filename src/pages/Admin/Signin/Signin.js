import React from 'react';
import { Layout, Tabs } from 'antd';
import {
    Switch,
    Route,
    Link,
    Redirect,
    BrowserRouter as Router
  } from 'react-router-dom';
import Logo from '../../../assets/img/png/logo-personal.png';
import RegisterForm from '../../../components/Admin/RegisterForm';
import clienteAxios from '../../../config/axios';
import tokenAuth from '../../../config/token';
import LoginForm from '../../../components/Admin/LoginForm';

import './Signin.scss';

export default function Signin() {
    const { Content } = Layout;
    const { TabPane } = Tabs;
    return (
        <Layout className='signin'>
            <Content className='signin__content'>
                Estamos en Signin
                <h1 className='signin__content-logo'>
                    <img src={Logo} alt='Logo' />
                </h1>
                <div className='signin__content-tabs'>
                    <Tabs type='card'>
                        <TabPane tab={<span>Entrar</span>} key='1'>
                            <LoginForm />
                        </TabPane>
                        <TabPane tab={<span>Nuevo usuario</span>} key='2'>
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}