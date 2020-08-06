import React from "react";
import { Typography ,Dropdown,Button,Menu, Space} from "antd";
import {
  DownOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const style = {
  marginTop: 25,
  marginLeft: 20,
};

const NavBar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        ENG
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        FRENCH
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        RUSSIAN
      </Menu.Item>
    </Menu>
  );
  return (
    <Space style={{display:'flex',justifyContent:'space-between'}}>
      <Title level={4} style={style}>
        DashBoard
      </Title>
      <Dropdown overlay={menu} className="dropdown">
        <Button>
          ENG <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
};

export default NavBar;
