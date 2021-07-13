import { Input, Button, Alert } from "antd";
import { UserOutlined } from "@ant-design/icons";
import userService from "../../../common/services/user-service";
import { useState } from "react";

const Sk2RBeta = () => {
  const [userEmail, setUserEmail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const onSubmit = async () => {
    setIsLoading(true);
    const req = { email: userEmail };
    userService
      .sk2rBetaAccess(req)
      .then(() => {
        const success = {
          message: "Success!",
          description: "Users record successfully updated!",
          type: "success",
        };
        setAlert(success);
        setIsLoading(false);
        setIsLoading(false);
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      })
      .catch((e) => {
        const error = {
          message: "Error",
          description: "user does not exist in our records",
          type: "error",
        };
        setAlert(error);
        setIsLoading(false);
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      });
  };

  return (
    <div>
      <Input
        style={{ padding: "5px" }}
        onChange={(e) => setUserEmail(e.target.value)}
        size="large"
        placeholder="Insert User Email to give access"
        prefix={<UserOutlined />}
      />
      <Button loading={isLoading} onClick={() => onSubmit()} type="primary">
        Give Access
      </Button>
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
