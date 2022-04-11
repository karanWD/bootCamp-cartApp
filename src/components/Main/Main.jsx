import React, {useState} from "react"
import {Layout} from "antd";
import Panel from "../Panel/Panel";
import List from "../List/List"

const {Content,Sider} = Layout
const Main = () =>{
    const [formData,setFormData] = useState([])
    return(
        <Layout className={`layout-container`}>
            <Sider width={500} className={`side-container`} >
                <Panel setFormData={setFormData}/>
            </Sider>
            <Content>
                <List data={formData}/>
            </Content>
        </Layout>
    )
}

export default Main