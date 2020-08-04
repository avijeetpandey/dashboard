import React from "react";
import { Menu } from "antd";
import {
  AppstoreAddOutlined,
  CalendarOutlined,
  SwitcherOutlined,
  HddOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const SideItems = () => {
  return (
    <Menu theme="light" mode="inline">
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
  );
};

export default SideItems;
