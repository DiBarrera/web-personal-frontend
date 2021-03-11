import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link,
    Redirect,
    BrowserRouter as Router
  } from 'react-router-dom';
import { Layout } from 'antd';
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';
import AdminSignin from '../pages/Admin/Signin/Signin';

import './LayoutAdmin.scss';

export default function LayoutAdmin(props) {

    console.log(props)

    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;

    const user = null

    if(!user) {
        return (
            <>
                <Route path='/admin/login' component={AdminSignin} />
                <Redirect to='/admin/login' />
            </>
        )
    }

    return (
        <Layout>
        {/* Menu Slider */}
        <MenuSider menuCollapsed={menuCollapsed}/>
            <h1>Estamos en LayoutAdmin</h1>
            <Layout className='layout-admin' 
            style={{marginLeft: menuCollapsed ? '0px' : '100px'}}>
                <h2>Menu Slider Admin</h2>
                <div>Contenido...</div>
                {/* Menu Top */}
                <Header className='layout-admin__header'>
                    <MenuTop 
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className='layout-admin__content'>
                    ...Sistema de Rutas...
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer className='layout-admin__footer'>
                    El Footer
                </Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({ routes }) {
    console.log(routes)

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )

    // return routes.map((route, index) => (
    //     <Route 
    //         key={index}
    //         path={route.path}
    //         exact={route.exact}
    //         component={route.component}
    //     />
    // ))
}