import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { PageContext } from "../store/context";
import React from "react";
import options from "./options";

function SchemaList({ value, isDefault = false }) {
  React.useEffect(() => {});
  const { currentSchemaState, setCurrentSchemaState } =
    React.useContext(PageContext);
  function onSelectHandler({ value }) {
    if (isDefault) {
      setCurrentSchemaState(value);
    }
  }
  return (
    <div className="dropDown">
      <Dropdown
        placeholder="Add schema to segment"
        className={isDefault ? "defaultDropDown" : "addedDropDown"}
        options={options}
        onSelect={onSelectHandler} // always fires once a selection happens even if there is no change
        value={isDefault ? currentSchemaState : value}
      />
    </div>
  );
}

export default SchemaList;
