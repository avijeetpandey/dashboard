import React from 'react'
import {Button,Space,Typography} from 'antd'
import {FundOutlined} from '@ant-design/icons'

const {Text} = Typography

const TableColumn = ({name})=>{
    return(
        <Space >
        <Text>{name+"  "}</Text>
            <Button className="btn">
                <FundOutlined className="table-icon" />
            </Button>
        </Space>
    )
}

export default TableColumn