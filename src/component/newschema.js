import React from "react";
import { PageContext } from "../store/context";

function Newschema() {
  const { setSchemaList, currentSchemaState, setCurrentSchemaState } =
    React.useContext(PageContext);
  const addInputbox = () => {
    if (currentSchemaState) {
      setSchemaList((prev) => [...prev, currentSchemaState]);
      setCurrentSchemaState("");
    }
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
