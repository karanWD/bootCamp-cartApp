import React, {useState} from "react"
import {Layout, Modal, Divider, Form} from "antd";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer"
import TotalPrice from "../TotalPrice/TotalPrice";
import {uid} from "uid";
const {Content,Sider} = Layout

const Main = () =>{
    const [formData,setFormData] = useState([])
    const [editData,setEditData] = useState()
    const finishAddHandler = (values) =>{
        setFormData(
            (prev)=>[
                ...prev,
                {
                    ...values,
                    id:uid()
                }
            ])
    }
    const finishEditHandler = (values) => {
        let temp = formData.filter (item => item.id !== editData.id)
        temp = [...temp,{
            ...values,
            id:editData.id
        }]
        setEditData(null)
        setFormData(temp)
    }
    return(
        <Layout className={`layout-container `}>
                <Sider width={500} className={`side-container`} >
                    <Panel editData={editData} setFormData={setFormData} finishHandler={finishAddHandler} submitText={"Add"}/>
                </Sider>
                <Content>
                    <ListContainer data={formData} setData={setFormData} setEditData={setEditData}/>
                    <Divider />
                    <TotalPrice data={formData}/>
                </Content>
                <Modal  destroyOnClose={true} title={"Edit Products"} visible={editData} onCancel={()=>setEditData(null)} footer={null}>
                    <Panel editData={editData} setFormData={setFormData} finishHandler={finishEditHandler} submitText={"Save"}/>
                </Modal>
        </Layout>
    )
}

export default Main
