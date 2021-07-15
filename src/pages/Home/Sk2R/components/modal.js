import { Modal, Button } from "antd";
import "./modal.scss";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
export const modal = ({ visible, setVisible }) => {
  return (
    <Modal
      title="SK2R Beta v0.0.1"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={800}
      style={{ margin: "5%" }}
      className="modal-component"
    >
      <div className="sk2r-modal-container">
        <div className="row">
          <h1>How to</h1>
          <p>
            Drag and drop your images (.jpg, .jpeg, .png, .gif) into the blue
            dropzone and click render to see the generated results.
          </p>
          <img src={image1} />
        </div>

        <div className="row">
          <h1>Tips for best result</h1>
          <p>
            Make sure your sketches are relatively clean and readable in order
            to receive the best results from Vizcom.
          </p>
          <img src={image2} />
          <p>
            {" "}
            You can also try overlaying your sketch over the automatic render in
            photoshop and use multiply for more visual clarity .
          </p>
          <img src={image3} />
        </div>
      </div>
    </Modal>
  );
};

export default modal;
