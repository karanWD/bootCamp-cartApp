import React from "react";
import {List, Row, Col,Typography,Tag} from "antd"
const {Title,Text} =Typography


const ListContainer = ({data}) => {
    console.log(data)
    return (
        <List
            className={`list-container`}
            bordered
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item className={`list-items`}>
                    <Row gutter={16} >
                        <Col span={6}>
                            <Text type={"secondary"}>Name:</Text>
                            <Title level={3}>{item?.name}</Title>
                        </Col>
                        <Col span={5}>
                            <Text type={"secondary"}>Price:</Text>
                            <Title level={3}>{(item?.price)*item?.count}$</Title>
                        </Col>
                        <Col span={3}>
                            <Text type={"secondary"}>Count:</Text>
                            <Title level={3}>{item?.count}x</Title>
                        </Col>
                        <Col span={5}>
                            <Text type={"secondary"} >Discount:</Text>
                            <Tag color={"#108ee9"} className={`tag`}>{item?.discount}%</Tag>
                        </Col>
                        <Col span={5}>
                            <Text type={"secondary"}>Final Price:</Text>
                            <Title className={"final-price"} level={3}>{item?.count*(item?.price - (item?.price * item?.discount / 100))} $</Title>
                        </Col>
                    </Row>
                </List.Item>
            )}
        />
    )
}

export default ListContainer
