import React, { useState } from "react";
import "./App.css";
import Popup from "./component/popup";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hai, click on the button to open the popup</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Save segment
      </button>

      {modalOpen && <Popup setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
