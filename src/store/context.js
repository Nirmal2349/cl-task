import React, { useState } from "react";

export const PageContext = React.createContext({
  currentSchemaState: [],
  isActive: "",
});

export const ProviderAPI = (props) => {
  const [currentSchemaState, setCurrentSchemaState] = useState("");
  const [schemaList, setSchemaList] = useState([]);

  return (
    <PageContext.Provider
      value={{
        currentSchemaState,
        schemaList,
        setSchemaList,
        setCurrentSchemaState,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};
