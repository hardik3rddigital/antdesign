import React from "react";
import "../CSS/FormAntDesign.css";
import { Button, Checkbox, Form, Input } from "antd";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function FormAntDesign() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div className="FormAntDesign" style={{ margin: "30px 0" }}>
      <div className="container-fluid">
        <div className="" style={{ padding: "30px 0" }}>
          <div className="titleHolder">
            <h2>Contact Us</h2>
          </div>
          <div className="maxWidth">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="firstname"
                rules={[
                  { required: true, message: "Please input your Firstname!" },
                ]}
              >
                <Input placeholder="Firstname" />
              </Form.Item>
              <Form.Item
                name="lastname"
                rules={[
                  { required: true, message: "Please input your Lastname!" },
                ]}
              >
                <Input placeholder="Lastname" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input type="email" placeholder="E-Mail" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Input
                  //   prefix={<LockOutlined className="site-form-item-icon" />}
                  type="phone"
                  placeholder="Phone Number"
                />
              </Form.Item>
              <Form.Item
                name="subject"
                rules={[{ message: "Please input your Subject!" }]}
              >
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item name="message">
                <TextArea
                //   showCount
                //   maxLength={100}
                  style={{ height: 120 }}
                  onChange={onChange}
                  placeholder="Message"
                />
              </Form.Item>
              {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item> */}
              <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="/">agreement</a>
        </Checkbox>
      </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAntDesign;
