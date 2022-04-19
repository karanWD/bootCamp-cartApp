import React, {useState} from "react";
import {List, Row, Col, Typography, Tag, Button, Space, Modal, Layout} from "antd"
import {DeleteOutlined,EditOutlined} from "@ant-design/icons"
import Panel from "../Panel/Panel";
const {Title,Text} =Typography


const ListContainer = ({data,setData}) => {
    const [editData,setEditData] = useState()
    const editHandler = (id)=>{
        let tempData = data.find(item=>item.id === id)
        setEditData(tempData)
    }
    const deleteHandler = (id)=>{
        let finalData = data.filter(item=>item.id !== id)
        setData(finalData)
    }
    return (
        <>
                <List
                    className={`list-container`}
                    bordered
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item className={`list-items`}>
                            <Row gutter={4} >
                                <Col span={4}>
                                    <Text type={"secondary"}>Name:</Text>
                                    <Title level={3}>{item?.name}</Title>
                                </Col>
                                <Col span={4}>
                                    <Text type={"secondary"}>Price:</Text>
                                    <Title level={3}>{(item?.price)*item?.count}$</Title>
                                </Col>
                                <Col span={4}>
                                    <Text type={"secondary"}>Count:</Text>
                                    <Title level={3}>{item?.count}x</Title>
                                </Col>
                                <Col span={4}>
                                    <Text type={"secondary"} >Discount:</Text>
                                    <Tag color={"#108ee9"} className={`tag`}>{item?.discount}%</Tag>
                                </Col>
                                <Col span={4}>
                                    <Text type={"secondary"}>Final Price:</Text>
                                    <Title className={"final-price"} level={3}>{item?.count*(item?.price - (item?.price * item?.discount / 100))} $</Title>
                                </Col>
                                <Col span={4}>
                                    <Text type={"secondary"}>Actions:</Text>
                                    <Col>
                                        <Space>
                                            <Button size={"middle"} type={"text"} danger icon={<DeleteOutlined />} onClick={()=>deleteHandler(item?.id)}/>
                                            <Button size={"middle"} type={"text"} icon={<EditOutlined />} onClick={()=>editHandler(item?.id)}/>
                                        </Space>
                                    </Col>
                                </Col>
                            </Row>
                        </List.Item>
                    )}
                />
            <Modal title={"Edit Products"} visible={editData} onCancel={()=>setEditData(null)} footer={null}>
                <Panel setFormData={setData} editData={editData} setEditData={setEditData}/>
            </Modal>
        </>

    )
}

export default ListContainer
