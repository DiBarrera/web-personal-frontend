import React from 'react';
import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router
  } from 'react-router-dom';
import {Layout} from 'antd';

import './LayoutBasic.scss';

export default function LayoutBasic(props) {

    console.log(props)

    const { routes } = props

    console.log(routes)

    const { Content, Footer } = Layout

    return (
        <Layout>
            <h2>Menu Slider......</h2>
            <Layout>
                <Content>
                    Este es el Content
                    <LoadRouters routes={routes} />
                </Content>
                <Footer>
                    Este es el Footer
                </Footer>
            </Layout>
        </Layout>
    )
}

function LoadRouters({ routes }) {

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