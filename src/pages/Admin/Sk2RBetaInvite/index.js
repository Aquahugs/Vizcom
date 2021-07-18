import { Input, Button, Alert, InputNumber, Form } from "antd";
import { useState, useEffect } from "react";
import sk2rService from "../../../common/services/sk2r-service";
import userService from "../../../common/services/user-service";

const Sk2RBeta = () => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, [alert]);

  const onFinish = (values) => {
    userService
      .getUserByEmail(values.email)
      .then((user) => {
        const req = {
          invites: values.invites,
          uid: user.data.uuid,
        };
        sk2rService
          .addInvites(req)
          .then((res) => {
            setAlert({
              message: "Success",
              type: "success",
              description: res.data,
            });
          })
          .catch((err) => {
            setAlert({
              message: "Error",
              type: "error",
              description: `Failed to add invites. ${err}`,
            });
          });
      })
      .catch((err) => {
        setAlert({
          message: "Error",
          description: `Something happened. ${err}`,
          type: "error",
        });
      });
  };
  const onFinishFailed = () => {};

  return (
    <div style={{ paddingTop: "4rem" }}>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        initialValues={{ size: "small" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="user email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Invites" name="invites" rules={[{ required: true }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>

      {alert && (
        <Alert
          message={alert.message}
          description={alert.description}
          type={alert.type}
          showIcon
        />
      )}
    </div>
  );
};

export default Sk2RBeta;
