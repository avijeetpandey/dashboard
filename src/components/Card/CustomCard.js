import React from 'react'
import {Card , Typography,Col,Row} from 'antd'
import {UpSquareOutlined,DownSquareOutlined} from '@ant-design/icons';
const {Text,Title} = Typography

const CustomCard = ()=>{
    return(
        <div className="site-card-wrapper ctr c-text">
    <Row gutter={16} >
      <Col sm={6} span={24}>
        <Card   style={{ marginTop: 16 }} className="g-text"  hoverable bordered={true}>
          <Text className="t-text" >REALTIME USERS</Text><br/>
          <Text className="title">56</Text><br/>
          <Text className="green-text">+9.8% <span className="green-icon"><UpSquareOutlined /></span></Text>
        </Card>
      </Col>
      <Col sm={6} span={24}>
        <Card  style={{ marginTop: 16 }} className="g-text"  hoverable bordered={true}>
        <Text className="t-text" >TOTAL VISITS</Text><br/>
        <Text className="title">54,598</Text><br />
        <Text className="red-text">-11.9% <span className="red-icon"><DownSquareOutlined /></span></Text>
        </Card>
      </Col>
      <Col sm={6} span={24}>
        <Card  style={{ marginTop: 16 }} className="g-text"  hoverable bordered={true}>
        <Text className="t-text" >BOUNCE RATE</Text><br/>
        <Text className="title">73.67%</Text><br />
        <Text className="green-text">+12.2% <span className="green-icon"><UpSquareOutlined /></span></Text>
        </Card>
      </Col>
      <Col sm={6} span={24}>
        <Card  style={{ marginTop: 16 }} className="g-text"  hoverable bordered={true}>
        <Text className="t-text" >VISIT DURATION</Text><br/>
        <Text className="title">1m 4s</Text><br />
        <Text className="green-text">+19.6% <span className="green-icon"><UpSquareOutlined /></span></Text>
        </Card>
      </Col>
    </Row>
  </div>
    )
}

export default CustomCard