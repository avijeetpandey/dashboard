import React from "react";
import Vchart from "../Charts/Vchart";
import NavBar from "../Common/NavBar";
import SideItems from "./SideItems";
import { HomeOutlined } from "@ant-design/icons";
import { Layout, Divider, Card, DropDown } from "antd";
import CustomDropDown from "../Common/CustomDropDown";
import CustomCard from "./../Card/CustomCard";
import Stats from "./../Card/Stats";
const { Header, Content, Sider } = Layout;

const Main = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider theme="dark" breakpoint="lg" collapsedWidth="0" className="bg">
        <Header className="bg ctr">
          <HomeOutlined className="icon" />
        </Header>
        <SideItems />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, height: 89 }}
        >
          <NavBar />
          <Divider />
        </Header>
        <Content style={{border:'none'}}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100vh" }}
          >
            <Card
              title="Daily Visitors"
              bordered={true}
              style={{ width: "100%", height: "40%" }}
              extra={<CustomDropDown />}
              className="card"
              hoverable
            >
              <Vchart />
            </Card>
            <Card className="card">
              <CustomCard />
            </Card>
            <Card className="card">
              <Stats />
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
