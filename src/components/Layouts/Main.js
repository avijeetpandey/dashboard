import React from "react";
import SideItems from "./SideItems";
import {HomeOutlined} from "@ant-design/icons"
import { Layout, Divider } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  return (
    <Layout>
      <Sider theme="dark" breakpoint="lg" collapsedWidth="0" className="bg">
        <Header className="bg ctr">
          <HomeOutlined />
        </Header>
        <Divider />
        <div className="logo" />
        <SideItems />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
