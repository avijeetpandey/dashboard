import React from "react";
import { Menu, Divider,Typography, Space} from "antd";

import Profile from "./../Profile/Profile";
import {
  AppstoreAddOutlined,
  CalendarOutlined,
  SwitcherOutlined,
  HddOutlined,
  InboxOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const {Text,Title} = Typography



const SideItems = () => {
  return (
    <div>
    <Menu theme="light" mode="inline">
     <Profile />
      <SubMenu
        icon={<AppstoreAddOutlined style={{ fontSize: 18 }} />}
        title="Dashboard"
      >
        <Menu.Item>Page Visitors</Menu.Item>
        <Menu.Item>Post Performance</Menu.Item>
        <Menu.Item>Team Overall</Menu.Item>
      </SubMenu>
      <Menu.Item icon={<CalendarOutlined style={{ fontSize: 18 }} />}>
        Calendar
      </Menu.Item>
      <Menu.Item icon={<InboxOutlined style={{ fontSize: 18 }} />}>
        Inbox
      </Menu.Item>
      <Menu.Item icon={<SwitcherOutlined style={{ fontSize: 18 }} />}>
        Invoicing
      </Menu.Item>
      <Menu.Item icon={<HddOutlined style={{ fontSize: 18 }} />}>
        Lab / Experimental
      </Menu.Item>
      </Menu>
      <Divider />
      <Text disabled style={{fontWeight:500 , marginLeft:10}}>RECENTLY VIEWED</Text>
      <Space direction="vertical"  style={{marginTop:5}}>
      <Text  style={{fontWeight:600 , marginLeft:10}}>Overall Performance &#8594;</Text>
      <Text  style={{fontWeight:600 , marginLeft:10}}>Invoice #940 &#8594;</Text>
      <Text  style={{fontWeight:600 , marginLeft:10}}>Customer Minerva Viewer &#8594;</Text>
      </Space>
    </div>
  );
};

export default SideItems;
