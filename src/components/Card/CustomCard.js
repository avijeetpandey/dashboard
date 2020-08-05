import React from "react";
import { Card, Typography, Col, Row } from "antd";
import CardChart from "./../Charts/CardChart";
import { data1, data2, data3, data4 } from "./../Charts/ChartData";
import { UpSquareOutlined, DownSquareOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

const CustomCard = () => {
  return (
    <div className="site-card-wrapper ctr c-text">
      <Row gutter={16}>
        <Col sm={6} span={24}>
          <Card
            style={{ marginTop: 16 }}
            className="g-text"
            hoverable
            bordered={true}
            className="card-c"
          >
            <Text className="t-text">REALTIME USERS</Text>
            <br />
            <Text className="title">56</Text>
            <br />
            <Text className="green-text">
              +9.8%{" "}
              <span className="green-icon">
                <UpSquareOutlined />
              </span>
            </Text>
            <CardChart stroke="#071ef0" color="#98a1f5" data={data1} />
          </Card>
        </Col>
        <Col sm={6} span={24}>
          <Card
            style={{ marginTop: 16 }}
            className="g-text"
            hoverable
            bordered={true}
            className="card-c"
          >
            <Text className="t-text">TOTAL VISITS</Text>
            <br />
            <Text className="title">54,598</Text>
            <br />
            <Text className="red-text">
              -11.9%{" "}
              <span className="red-icon">
                <DownSquareOutlined />
              </span>
            </Text>
            <CardChart stroke="green" color="greenyellow" data={data2} />
          </Card>
        </Col>
        <Col sm={6} span={24}>
          <Card
            style={{ marginTop: 16 }}
            className="g-text"
            hoverable
            bordered={true}
            className="card-c"
          >
            <Text className="t-text">BOUNCE RATE</Text>
            <br />
            <Text className="title">73.67%</Text>
            <br />
            <Text className="green-text">
              +12.2%{" "}
              <span className="green-icon">
                <UpSquareOutlined />
              </span>
            </Text>
            <CardChart stroke="#b700ff" color="#d087ed" data={data3} />
          </Card>
        </Col>
        <Col sm={6} span={24}>
          <Card
            style={{ marginTop: 16 }}
            className="g-text"
            hoverable
            bordered={true}
            className="card-c"
          >
            <Text className="t-text">VISIT DURATION</Text>
            <br />
            <Text className="title">1m 4s</Text>
            <br />
            <Text className="green-text">
              +19.6%{" "}
              <span className="green-icon">
                <UpSquareOutlined />
              </span>
            </Text>
            <CardChart stroke="#f29900" color="#fae06e" data={data4} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CustomCard;
