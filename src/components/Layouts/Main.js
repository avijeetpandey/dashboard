import React from 'react';
import {Layout,Menu,Divider} from 'antd';
import Profile from '../Profile/Profile';

const {Sider,Header,Content,Footer} = Layout;

const Main = ()=>{
    return(
        <Layout>
            <Profile />
        </Layout>
    )
}

export default Main