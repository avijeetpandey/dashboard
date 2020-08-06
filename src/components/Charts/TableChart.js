import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const TableChart = ({stroke , color, data})=>{
    return(
        <div
        style={{ marginLeft: 10, textAlign: "center", width: "85%", height: 80 }}
      >
        <ResponsiveContainer>
          <AreaChart
            width={50}
            height={60}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area type="monotone" dataKey="uv" stroke={stroke} fill={color} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
}

export default TableChart