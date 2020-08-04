import React from 'react'
import {BarChart,Bar,ResponsiveContainer,Tooltip,Legend,XAxis} from 'recharts'

const Vchart = ()=>{
    const data = [
        {
          
          "uv": 4000,
          "pv": 2400
        },
        {
         
          "uv": 3000,
          "pv": 1398
        },
        {
          
          "uv": 2000,
          "pv": 9800
        },
        {
         
          "uv": 2780,
          "pv": 3908
        },
        {
          
          "uv": 1890,
          "pv": 4800
        },
        {
          
          "uv": 2390,
          "pv": 3800
        },
        {
         
          "uv": 3490,
          "pv": 4300
        },
        {
         
            "uv": 3490,
            "pv": 4300
          }
          ,
          {
         
            "uv": 3490,
            "pv": 4300
          },
          {
         
            "uv": 3490,
            "pv": 4300
          },
          {
         
          "uv": 5490,
          "pv": 4300
        },
        {
         
          "uv": 5490,
          "pv": 4300
        }
        ,{
         
            "uv": 7490,
            "pv": 4300
          },
          {
         
            "uv": 3490,
            "pv": 4300
          }
      ]
        
    return(
        <div style={{ marginLeft:10,textAlign:'center',width:'95%',height:300}}>
        <ResponsiveContainer>
        <BarChart  data={data}>
  <XAxis dataKey="name" />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="blue" />
  <Bar dataKey="uv" fill="blue" />
</BarChart>
        </ResponsiveContainer>
         
        </div>
    )
}


export default Vchart