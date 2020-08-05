import React from 'react'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer
  } from 'recharts';
  

const CardChart=({stroke , color,data})=>{
    return(
        <div
      style={{ marginLeft: 10, textAlign: "center", width: "95%", height: 100 }}
    >
      <ResponsiveContainer>
      <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
        <Area type="monotone" dataKey="uv" stroke={stroke} fill={color} />
      </AreaChart>
      </ResponsiveContainer>
    </div>
    )
}


export default CardChart