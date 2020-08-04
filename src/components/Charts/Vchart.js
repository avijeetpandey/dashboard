import React from 'react'
import {BarChart,Bar,ResponsiveContainer,Tooltip,Legend,XAxis} from 'recharts'

const Vchart = ()=>{
    const data = [
        {
          
          "uv": 8040,

        },
        {
         
          "uv": 7000,

        },
        {
          
          "uv": 10000,

        },
        {
         
          "uv": 9780,

        },
        {
          
          "uv": 1890,

        },
        {
          
          "uv": 5390,

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
        },
        {
         
          "uv": 5490,
        }
        ,{
         
            "uv": 7490,
          },
          {
         
            "uv": 3490,
          }
      ]
        
    return(
        <div style={{ marginLeft:10,textAlign:'center',width:'95%',height:300}}>
        <ResponsiveContainer>
        <BarChart  data={data}>
  <XAxis dataKey="name" />
  <Tooltip />
  <Legend />
  
  <Bar dataKey="uv" fill="blue" />
</BarChart>
        </ResponsiveContainer>
         
        </div>
    )
}


export default Vchart