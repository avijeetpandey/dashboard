import React from 'react'
import { Table, Button, Space} from 'antd'
import {data0} from "./../Charts/ChartData"
import TableChart from './../Charts/TableChart'
import {FundOutlined} from '@ant-design/icons'


const StatsTable = ()=>{
    const columns = [
        {
          title: 'NAME',
          dataIndex: 'name',
          key: 'name',
        }
        ,
        {
          title:' ',
          key:'icon',
          dataIndex:'icon',
          responsive:['md'],
          render : name => <Button className="btn table-icon">
            <FundOutlined /> 
          </Button>
        },
        {
          title: 'VISITORS',
          dataIndex: 'visitors',
          key: 'visitors',
          responsive:['lg']
          
        },
        {
          title: 'UNIQUE VISITS',
          dataIndex: 'unique',
          key: 'unique',
        },
        {
          title: 'BOUNCE RATE',
          key: 'bounce',
          dataIndex:'bounce',
          responsive: ['xl'],
          render:text=><Space>
            {text+"  "} <TableChart color="#071ef0" stroke="#98a1f5" data={data0} />  
          </Space>

        }
      ];
      
      const data = [
        {
          key: '1',
          name: `/store/`,
          visitors: '4,890',
          unique: '3,985',
          bounce:'81.56%',
          icon:'name'
        },
        {
          key: '2',
          name: '/store/symbols-styleguides/',
          visitors:'3,785',
          unique:'3,182',
          bounce:'62.56%'
        },
        {
          key: '3',
          name: '/store/dashboard-ui-kit',
          visitors: '2,985',
          unique: '2,115',
          bounce:'58.76%'
        },
        {
          key: '4',
          name: '/store/webflow-cards.html',
          visitors: '2,440',
          unique: '1,789',
          bounce:'39.59%'
        }
      ];
      
      
    return(
        <div>
        <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default StatsTable