import axios from "axios";

async function FecthDataApi(username) {
  const URI = `https://api.github.com/users/${username}/events`;
  const activities = await axios.get(URI);
  return activities.data;
}

export default FecthDataApi;
