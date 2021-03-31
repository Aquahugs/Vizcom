import React, { Component } from "react";
import M from "materialize-css";
import plus from "../../assets/plus.png";
import "./modal.scss";

import StyledDropzone from "./Dropzone";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a className=" modal-trigger" data-target="modal1">
          <button className="new-bucket btn-flat btn ">
            <img alt="plus" src={plus} />
            <br />
            start new bucket
          </button>
        </a>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
          bottom-sheet class to the "modal" div
          If you want Fixed Footer Modal then add
          modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4>New bucket</h4>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  id="autocomplete-input"
                  className="autocomplete"
                />
                <label for="autocomplete-input">Bucket name </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  id="autocomplete-input"
                  className="autocomplete"
                />
                <label for="autocomplete-input">Description</label>
              </div>
            </div>
            <div className="row ">
              <StyledDropzone />
            </div>
          </div>

          <div className="modal-footer ">
            <a className="waves-effect waves btn-flat bucket-btn">
              Create bucket
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
