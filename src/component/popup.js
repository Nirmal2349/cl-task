import React from "react";
import "./popup.css";
import SchemaList from "./schemalist";
import Newschema from "./newschema";
import { PageContext } from "../store/context";
function Popup({ setOpenModal }) {
  const { schemaList } = React.useContext(PageContext);
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
        {schemaList.map((value, index) => {
          return <SchemaList value={value} key={index} />;
        })}
        <div id="schema_box">
          <SchemaList isDefault={true} />
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
