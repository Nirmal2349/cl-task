import React from "react";
import "./popup.css";
import SchemaList from "./schemalist";
import Newschema from "./newschema";
import { PageContext } from "../store/context";
import options from "./options";
function Popup({ setOpenModal }) {
  const { schemaList, setSchemaList, setCurrentSchemaState } =
    React.useContext(PageContext);
  async function saveSegementHandler() {
    const schemaName = document.getElementById("schemaName").value;
    const addedSegement = document.querySelectorAll(".addedDropDown");
    let selectedSegments = [];
    addedSegement.forEach((segement) => {
      if (segement.innerText) selectedSegments.push(segement.innerText);
    });
    selectedSegments = [...new Set(selectedSegments)];
    const schema = selectedSegments.map((segment) => {
      return options.find((option) => option.label === segment);
    });
    const body = {
      schema_name: schemaName,
      schema,
    };

    console.log(body);
    setSchemaList([]);
    setCurrentSchemaState("");
    setOpenModal(false);
    const response = await fetch(
      "https://webhook.site/8b0c7b20-bcdc-42cc-9433-a74c516c6d4a",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log(response);
  }
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
          <input id="schemaName" />
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
          <button onClick={saveSegementHandler} id="saveBtn">
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

// {label: ''}
