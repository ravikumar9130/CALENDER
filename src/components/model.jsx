import React, { useState } from 'react';
import { Modal, Button ,Row, Col ,Form, Input, Select, Switch } from 'antd';
import 'antd/dist/antd.css';

import moment from 'moment';
import { DatePicker, Space } from 'antd';





const Model = () => {

const [show,setShow] = useState(false)
  
const { Option} = Select;

   //form 
   const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
// model
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
  
  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  const divStyle={
    overflowY: 'scroll',
    width:'496px',
    visible:'hidden',
    height:'400px',
    position:'relative'
  };
 
  return (
    <>
      <Button type="primary" onClick={showModal}>
        New Visit
      </Button>
      <Modal  footer={[
          
            <Button key="submit"   onClick={handleOk}>
              Submit
            </Button>,
              <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
           
          ]}  style={{ top: 50 }} visible={isModalVisible} onOk={handleOk}>
                  <Form
    
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      
    >
      <div style={ divStyle}>
        <Row >

    
        
        <Col span={12}>
    <Form.Item name=" Select Patient"
        rules={[
          {
            required: true,
            message: 'Select Patient!',
          },
        ]}
      >
        
        Select Patient <span className='col'>*</span>
        
        <Input placeholder='Select Patient..'/>
        
      </Form.Item>
     
      </Col>
    
    <Col span={12}> <Form.Item
        
        name="Episode"
        rules={[
          {
            required: true,
            message: 'Please input your Episode!',
          },
        ]}
      >
        Episode <span className='col'>*</span>
        <Input placeholder='Episode..'/>
      </Form.Item>
      </Col>
      </Row>


      <Row>

     
    <Col span={12}>
       <Form.Item
        
        name="From Time "
        rules={[
          {
            required: true,
            message: 'Please input your From Time !',
          },
        ]}
      >
        From Time <span className='col'>*</span>
        <Space direction="vertical" size={12}>

        <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
    /></Space>
      </Form.Item>
      </Col>
 
<Col span={12}>
<Form.Item
        
        name="From Time "
        rules={[
          {
            required: true,
            message: 'Please input your From Time !',
          },
        ]}
      >
        Duration <span className='col'>*</span>
       
        <Select defaultValue="Select .." style={{ width: 200 }} onChange={handleChange}>
   
      <Option value="15">15 minutes</Option>
      <Option value="30">30 minutes</Option>
      <Option value="45">45 minutes</Option>
      <Option value="60">1 hour</Option>
      <Option value="75">75 minutes</Option>
   
      <Option value="90">90 minutes</Option>
   
      <Option value="105">105 minutes</Option>
   
      <Option value="120">2 hour</Option>
   
    </Select>

      </Form.Item>
</Col>

      </Row>

        <Row>
          <Col span={12}>
          <Form.Item
        
        name="Visit Type "
        rules={[
          {
            required: true,
            message: 'Please input your Visit Type !',
          },
        ]}
      >
        Visit Type <span className='col'>*</span>
       
        <Select defaultValue="Select .." style={{ width: 200 }} onChange={handleChange}>
   
      <Option value="Check-up">Check Up</Option>
      <Option value="Emergency">Emergency</Option>
      <Option value="Follow-up">Follow Up</Option>
      <Option value="Routine">Routine</Option>
      <Option value="Walk-in">Walk in</Option>
   
      <Option value="Other">Other</Option>
   
    </Select>

      </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
        
        name="Status "
        rules={[
          {
            required: true,
            message: 'Please input your Status !',
          },
        ]}
      >
        Status <span className='col'>*</span>
       
        <Select defaultValue="Select .." style={{ width: 200 }} onChange={handleChange}>
   
      <Option value="Pre">Pre-Operation</Option>
      <Option value="Post">Post Operation</Option>
      <Option value="Trauma">Trauma</Option>
      <Option value="Corporate">Corporate</Option>
      <Option value="Wellness">Wellness</Option>
   
   
    </Select>

      </Form.Item>
          </Col>
        </Row>


        <Row>
          <Col span={12}>
          <Form.Item
        
        name="Location"
        rules={[
          {
            required: true,
            message: 'Please input your Location !',
          },
        ]}
      >
       Location <span className='col'>*</span>
       
        <Select defaultValue="Select .." style={{ width: 200 }} onChange={handleChange}>
   
      <Option value="Clinic">Clinic</Option>
      <Option value="Home">Home</Option>
      <Option value="Visit">Visit</Option>
      <Option value="Vedio-confrence">Vedio Confrence</Option>
     
   
    </Select>

      </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
        
        name="Status "
        rules={[
          {
            required: true,
            
          },
        ]}
      >
        Add Video Confrences
        <Input placeholder='https://drive.in/..'/>
      </Form.Item>
          </Col>
        </Row>
        <Row>
  <Col  span={24}>
    Notes
    <Input size="large"/>
  </Col>
</Row>
<br />
<Row>
<Col span={24}>
  <Switch checkedChildren="on" unCheckedChildren="off" 
  onChange={() => setShow(!show)}/>
   <span style={{paddingLeft:8,}}>Repeat</span>
   
</Col>
</Row>
{show && <Row>
  <br />
 <p> Recurrence Rule</p>
  <Col span={24}>
   

        Repeat
        <br />
        <center>
        <Select defaultValue="Hourly" style={{ width: 470 }} onChange={handleChange}>
   
   <Option value="Hourly">Hourly</Option>
   <Option value="Daily">Daily</Option>
   <Option value="Weekly">Weekly</Option>
   <Option value="Monthly">Monthly</Option>
   <Option value="Yearly">Yearly</Option>
  

 </Select>
 </center>
  </Col>
</Row> }

</div>


</Form>

        
      </Modal>
    </>
  );
};

export default Model;