import React from "react";
import { Menu } from "antd";
import {
  AppstoreAddOutlined,
  CalendarOutlined,
  SwitcherOutlined,
  HddOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const SideItems = () => {
  return (
    <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
      <Menu.Item
        key="1"
        icon={<AppstoreAddOutlined style={{ fontSize: 18 }} />}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item key="2" icon={<CalendarOutlined style={{ fontSize: 18 }} />}>
        Calendar
      </Menu.Item>
      <Menu.Item key="3" icon={<InboxOutlined style={{ fontSize: 18 }} />}>
        Inbox
      </Menu.Item>
      <Menu.Item key="4" icon={<SwitcherOutlined style={{ fontSize: 18 }} />}>
        Invoicing
      </Menu.Item>
      <Menu.Item key="5" icon={<HddOutlined style={{ fontSize: 18 }} />}>
        Lab / Experimental
      </Menu.Item>
    </Menu>
  );
};

export default SideItems;
