import React from 'react'
import {Typography} from 'antd'

const {Text,Title}=Typography

const style = {
    marginTop:25,
    marginLeft :20
}

const NavBar = ()=>{
    return(
        <div>
            <Title level={4} style={style}>DashBoard</Title>
        </div>
    )
}

export default NavBar