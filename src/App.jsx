import "./App.css";
import { useState } from "react";
import Form from "./form";
import List from "./List";
function App() {
  const [listItems, setListItems] = useState([]);
  return (
    <>
      <Form listState={[listItems, setListItems]} />
      <List listState={[listItems, setListItems]} />
    </>
  );
}

export default App;
