import React from "react";
import {Avatar,Typography, Divider } from "antd";
import dp from "../../assets/dp.jpg";

const { Text, Title } = Typography;

const Profile = () => {
  return (
    <div style={{textAlign:'center'}}>
        <Avatar src={dp} className="dp" />
        <Title level={4}>
        Martha Blair <span className="online">.</span>
        </Title>
        <Text disabled>Developer</Text>
        <Divider />
    </div>
  );
};

export default Profile;
