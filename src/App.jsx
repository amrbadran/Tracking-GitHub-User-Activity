import "./App.css";

import { useState } from "react";
import Form from "./form";
import List from "./List";
function App() {
  const [listItems, setListItems] = useState([]);
  return (
    <div className="main-div">
      <h1 className="text-white">GitHub User Activity</h1>
      <Form listState={[listItems, setListItems]} />
      {listItems.length > 0 && <List listState={[listItems, setListItems]} />}
    </div>
  );
}

export default App;
