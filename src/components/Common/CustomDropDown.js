import React from "react";
import { Dropdown, Button, Menu } from "antd";
import {
  DownOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const CustomDropDown = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        January
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        February
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        March
      </Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu>
      <Menu.Item key="1" icon={<CalendarOutlined />}>
        2019
      </Menu.Item>
      <Menu.Item key="2" icon={<CalendarOutlined />}>
        2020
      </Menu.Item>
      <Menu.Item key="3" icon={<CalendarOutlined />}>
        2021
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu}>
        <Button>
          December <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown overlay={menu2}>
        <Button>
          2018 <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default CustomDropDown;
