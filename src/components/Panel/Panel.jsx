import React, {useState} from "react";
import {Slider, Form, Input, InputNumber, Col, Button, Space} from "antd";

const Panel = ({editData, setFormData,finishHandler,submitText}) => {
    const [price, setPrice] = useState(editData ? editData.price : 0)
    const [disc, setDisc] = useState(editData ? editData.discount : 0)
    const [count, setCount] = useState(editData ? editData.count : 1)

    return (
        <>
            <Form onFinish={finishHandler} initialValues={editData ? editData : {discount:0}}>
                <Form.Item label="name" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="name" rules={[{required: true, message: "Name is Required"}]}>
                        <Input size={"large"} placeholder="enter your product name" />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="price" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="price" rules={[{required: true, message: "Price is Required"}]}>
                        <InputNumber onChange={value => setPrice(value)} size={"large"} style={{width: "100%"}}  controls={false} min={0}
                                     placeholder="enter your product name"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Count of product" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="count" rules={[{required: true, message: "Count is Required"}]}>
                        <InputNumber onChange={value => setCount(value)} size={"large"} style={{width: "100%"}} min={1} placeholder="enter your product count"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="discount" name={"discount"} labelAlign={"left"} labelCol={{span: 24}}>
                    <Slider tipFormatter={(value)=>`${value}%`} onChange={value => setDisc(value)} min={0} max={100}/>
                </Form.Item>
                <Form.Item name={"finalPrice"}>
                    <span>Final Price :</span>
                    <span style={{padding: "0 5px", fontWeight: "bold", fontSize: "24px"}}>
                        {count * (price - (price * disc / 100))} $
                    </span>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={"submit"} shape={"round"} type="primary" block style={{marginTop: "30px", height: "50px"}} size={"large"}>
                        {submitText}
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Panel
