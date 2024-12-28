import { useState } from "react";
import FecthDataApi from "./helper/Fetch";
function Form(props) {
  const [formData, setFormData] = useState({ username: "" });
  const [listItems, setListItems] = props.listState;

  async function submitForm(event) {
    event.preventDefault();
    const activities = await FecthDataApi(formData.username);

    const result_list_activities = activities.slice(0, 20).map((activity) => {
      return {
        key: activity.id,
        value: activity.type + " to " + activity.repo.name,
      };
    });

    setListItems([...result_list_activities]);
  }

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={formData.username}
        placeholder="Enter The username"
        onChange={(event) => {
          setFormData({ ...formData, username: event.target.value });
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
