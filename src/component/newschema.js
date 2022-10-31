import React from "react";
import SchemaList from "./schemalist";



function Newschema() {
  const addInputbox = () => {
    const schema_box = document.getElementById("schema_box");
    schema_box.appendChild(SchemaList);
    console.log("");
  };
  return (
    <div>
      <button className="add-new" onClick={addInputbox}>
        + Add new schema
      </button>
    </div>
  );
}

export default Newschema;
