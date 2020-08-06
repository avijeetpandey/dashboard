import React from 'react'
import {Progress,Space,Table,Tooltip} from 'antd'

const SocialMediaTable = ()=>{

    const columns=[
        {
            title:'NETWORK',
            dataIndex:'name',
            key:'name'
        },
        {
            title:'VISITORS',
            dataIndex:'visitors',
            key:'visitors',
            render:text=><div>{text.numbers+" "}  <Progress percent={Number(text.percent)} size="small" status="active" /></div>
        }
    ]

    const data = [
        {
          key: '1',
          name: `Instagram`,
          visitors: {
              percent : 85,
              numbers : '3,550'
          },
        },
        {
            key: '2',
            name: `Facebook`,
            visitors:{
                percent : 65,
                numbers : '2,236'
            }
          },{
            key: '3',
            name: `Twitter`,
            visitors: {
                percent : 50,
                numbers : '1,795'
            }
          },{
            key: '4',
            name: `LinkedIn`,
            visitors: {
                percent : 62,
                numbers : '62'
            },
          },
          {
            key: '5',
            name: `Quora`,
            visitors: {
                percent : 45,
                numbers : '3,550'
            },
          }
      ];
      
    return(
        <div >
        <Table columns={columns} dataSource={data} />
        
        </div>
    )
}

export default SocialMediaTable