import React from 'react'
import {Row,Col,Typography,Card} from 'antd'
import SocialMediaTable from './../Table/SocialMediaTable'
import StatsTable from './../Table/StatsTable'
const {Text} = Typography

const Stats = ()=>{
    return(
        <div>
            <Row gutter={24}>
        <Col sm={16} span={24}>
          <Card
            style={{ marginTop: 16 }}
            bordered={true}
            className="card"
            title="Most visited pages"
          >
            <StatsTable />
          </Card>
        </Col>
        <Col sm={8} span={24}>
          <Card
            style={{ marginTop: 16 }}
            bordered={true}
            className="card"
            title="Social media traffic"
          >
           <SocialMediaTable />
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default Stats