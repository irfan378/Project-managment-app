import React from "react";
import { useState } from "react";
const AddClientModal = () => {
  const [open, setOpen] = useState(false);
  const openModel = () => {
    setOpen(true);
  };
  const closeModel=()=>{
    setOpen(false)
  }
  return (
    <div>
      {open ? (
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span onClick={closeModel} class="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      ) : (
        <button onClick={openModel} id="myBtn">
          Open Modal
        </button>
      )}
    </div>
  );
};

export default AddClientModal;
