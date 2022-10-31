import React from "react";
import "./popup.css";
import SchemaList from "./schemalist";
import Newschema from "./newschema";

function Popup({ setOpenModal }) {
  const handleSelect = (e) => {
    console.log(e);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <p>Enter the Name of the Segment</p>
          <input />
        </div>
        <div className="body">
          <p>
            To save your segment, you need to add the schemas to build the query
          </p>
        </div>
        <div id="schema_box">
          <SchemaList handleSelect={handleSelect} />
          <Newschema />
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="saveBtn"
          >
            Save segment
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
