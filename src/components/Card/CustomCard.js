import React from 'react'
import {Card , Typography,Col,Row} from 'antd'
const {Text,Title} = Typography

const CustomCard = ()=>{
    return(
        <div className="site-card-wrapper ctr c-text">
    <Row gutter={16} >
      <Col sm={6} span={24}>
        <Card   style={{ marginTop: 16 }} className="g-text" title="REALTIME USERS" hoverable bordered={true}>
          <Text className="title">56</Text>
        </Card>
      </Col>
      <Col sm={6} span={24}>
        <Card  style={{ marginTop: 16 }} className="g-text" title="TOTAL VISITS" hoverable bordered={true}>
        <Text className="title">54,598</Text>
        </Card>
      </Col>
      <Col sm={6} span={24}>
        <Card  style={{ marginTop: 16 }} className="g-text" title="BOUNCE RATE" hoverable bordered={true}>
        <Text className="title">73.67%</Text>
        </Card>
      </Col>
      <Col sm={6} span={24}>
        <Card  style={{ marginTop: 16 }} className="g-text" title="VISIT DURATION" hoverable bordered={true}>
        <Text className="title">1m 4s</Text>
        </Card>
      </Col>
    </Row>
  </div>
    )
}

export default CustomCard