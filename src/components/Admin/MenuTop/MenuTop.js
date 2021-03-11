import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/logo-personal.png';

import './MenuTop.scss';

export default function MenuTop(props) {
    console.log(props)

    const { menuCollapsed, setMenuCollapsed } = props

    return (
        <div className='menu-top'>
            <div className='menu-top__left'>
                <img 
                    className='menu-top__left-logo'
                    src={Logo}
                    alt='Logo'
                />
                <Button type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                </Button>
            </div>
            <div className='menu-top__right'>
                <Button type='link' onClick={() => console.log('Desconexion')}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}