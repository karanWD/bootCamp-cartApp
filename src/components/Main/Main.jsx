import React, {useEffect, useState} from "react"
import {Layout,Modal,Divider} from "antd";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer"
import TotalPrice from "../TotalPrice/TotalPrice";
const {Content,Sider} = Layout

const Main = () =>{
    const [formData,setFormData] = useState([])

    return(
        <Layout className={`layout-container `}>
                <Sider width={500} className={`side-container`} >
                    <Panel formData={formData} setFormData={setFormData} editData={null}/>
                </Sider>
                <Content>
                    <ListContainer data={formData} setData={setFormData}/>
                    <Divider />
                    <TotalPrice data={formData}/>
                </Content>

        </Layout>
    )
}

export default Main
