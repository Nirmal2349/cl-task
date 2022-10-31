
// import "bootstrap/dist/css/bootstrap.min.css";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";



// function Dropdown1({ handleSelect }) {
//   return (
//     <div className="Dropdown-container">
//       <DropdownButton
//         title="Add schema to segment"
//         id="dropdown-menu-align-right"
//         onSelect={handleSelect}
//       >
//         <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
//         <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
//         <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
//         <Dropdown.Divider />
//         <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
//       </DropdownButton>
//       <div>
//         <Schemanew />
//       </div>
//     </div>
//   );
// }


function SchemaList() {
    const options = [
      { value: "first_name", label: "First Name" },
      { value: "last_name", label: "Last Name" },
      { value: "gender", label: "Gender" },
      { value: "age", label: "Age" },
      { value: "account_name", label: "Account Name" },
      { value: "city", label: "City" },
      { value: "state", label: "State" },
    ];
  return (
    <div>
      <Dropdown
        placeholder="Add schema to segment"
        // options={["First Name", "Last Name", "Gender","Age","Account Name","City","State"]}
        // value={["first_name","last_name","gender","age","account_name","city","state"]}
         options = {options}
        onChange={(value) => console.log("change!", value)}
        onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
        onClose={(closedBySelection) =>
          console.log("closedBySelection?:", closedBySelection)
        }
        onOpen={() => console.log("open!")}
      />
      {/* <Selection
        options={["one", "two", "three"]}
        value="one"
        onChange={(value) => console.log("change!", value)}
      /> */}
    </div>
  );
}




export default SchemaList;