import React from "react";
import Vchart from '../Charts/Vchart';
import NavBar from '../Common/NavBar';
import SideItems from "./SideItems";
import {HomeOutlined} from "@ant-design/icons"
import { Layout, Divider } from "antd";
const { Header, Content, Sider } = Layout;


const Main = () => {
  return (
    <Layout style={{minHeight:"100vh"}}>
      <Sider theme="dark" breakpoint="lg" collapsedWidth="0" className="bg" >
        <Header className="bg ctr">
          <HomeOutlined />
        </Header>
        <Divider />
        <SideItems />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0  , height:89}}
        >
        <NavBar />
        </Header>
        <Content>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100vh" }}
          >
            <Vchart />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
