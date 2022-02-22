import React, { useState } from 'react';
import { Modal, Button ,Row, Col ,Form, Input} from 'antd';
import 'antd/dist/antd.css';

const Model = () => {

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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        New Visit
      </Button>
      <Modal footer={[
          
            <Button key="submit"   onClick={handleOk}>
              Submit
            </Button>,
              <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
           
          ]} width={600} visible={isModalVisible} onOk={handleOk}>
                  <Form
      name="basic"
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
        <Row>
    <Col span={12}>
        
    
    <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
<Input />
     

        
      </Form.Item>
     
    
    </Col>
    <Col span={12}> <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item></Col>
  </Row>

</Form>
        
      </Modal>
    </>
  );
};

export default Model;