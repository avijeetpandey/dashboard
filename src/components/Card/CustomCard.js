import React from 'react'
import {Card , Typography,Col,Row} from 'antd'
const {Text,Title} = Typography

const CustomCard = ()=>{
    return(
        <div className="site-card-wrapper ctr c-text">
    <Row gutter={16}>
      <Col span={6}>
        <Card title="REALTIME USERS" hoverable bordered={true}>
          <Title>56</Title>
        </Card>
      </Col>
      <Col span={6}>
        <Card title="TOTAL VISITS" hoverable bordered={true}>
        <Title>54,598</Title>
        </Card>
      </Col>
      <Col span={6}>
        <Card title="BOUNCERATE" hoverable bordered={true}>
        <Title>73.67%</Title>
        </Card>
      </Col>
      <Col span={6}>
        <Card title="VISIT DURATION" hoverable bordered={true}>
        <Title>1m 4s</Title>
        </Card>
      </Col>
    </Row>
  </div>
    )
}

export default CustomCard