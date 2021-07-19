import { Input, Button, Alert, InputNumber, Form, Upload, message } from "antd";

import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import sk2rService from "../../../common/services/sk2r-service";

const Sk2RBeta = () => {
  const [alert, setAlert] = useState(null);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, [alert]);

  // parse csv and add to array
  const parseCSV = (str) => {
    const string = str.replace(/\r\n/g, "\n"); // Normalize line endings.
    const arr = string.split("\n");
    return arr;
  };

  // parse csv of emails and send to service
  const bulkInvite = async (emails, invites) => {
    const req = { emails, invites };
    try {
      const response = await sk2rService.addBulkInvites(req);
      if (response.status === 200) {
        message.success("Email(s) sent!");
      } else {
        message.error("Email(s) not sent!");
      }
    } catch (e) {
      message.error("Email(s) not sent!" + e);
    }
  };

  const onFinish = (values) => {
    if (emails.length !== 0) {
      bulkInvite(emails, values.invites);
    } else {
      setAlert({
        message: "Error",
        description: "Please select a csv file to upload.",
        type: "error",
      });
    }
  };
  const onFinishFailed = () => {};

  const props = {
    name: "file",
    accept: ".csv",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log("yo", info, info.file, info.fileList);
        let reader = new FileReader();
        reader.onload = (e) => {
          const emails = parseCSV(e.target.result);
          setEmails(emails);
        };
        reader.readAsText(info.file.originFileObj);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        initialValues={{ size: "small" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Invites" name="invites" rules={[{ required: true }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={emails.length === 0}
          >
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
