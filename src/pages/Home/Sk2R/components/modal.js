import { Modal, Button } from "antd";

export const modal = ({ visible, setVisible }) => {
  return (
    <Modal
      title="SK2R Beta v0.0.1"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={800}
      height={950}
      className="modal-component"
    >
      <div className="modal-container">
        <div className="row">
          <h1>How to</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <img src="https://via.placeholder.com/600x250" />
          <p>some contents...</p>
        </div>
        <div className="row">
          <h1>Render your sketch</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <img src="https://via.placeholder.com/600x250" />
          <p>some contents...</p>
        </div>
        <div className="row">
          <h1>Tips for best result</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <img src="https://via.placeholder.com/600x250" />
          <img src="https://via.placeholder.com/600x250" />
          <p>some contents...</p>
        </div>
      </div>
    </Modal>
  );
};

export default modal;
