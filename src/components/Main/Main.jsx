import React, {useEffect, useState} from "react"
import {Layout} from "antd";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer"

const {Content,Sider} = Layout
const Main = () =>{
    const [formData,setFormData] = useState(()=>{
        const local = localStorage.getItem("cart")
        return local ? JSON.parse(local) : []
    })
    return(
        <Layout className={`layout-container`}>
                <Sider width={500} className={`side-container`} >
                    <Panel data={formData} setFormData={setFormData}/>
                </Sider>
                <Content>
                    <ListContainer data={formData} />
                </Content>
        </Layout>
    )
}

export default Main
