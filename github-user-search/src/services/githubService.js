import axios from "axios";

function fetchUserData(username, location, repos) {
  let query = "";

  if (username) {
    query += `user:${username}`;
  }
  if (location) {
    query += `location:${location}`;
  }
  if (repos) {
    query += `repos:>${repos}`;
  }

  return (
    axios
      // .get(`https://api.github.com/users/${username}`)
      .get(`https://api.github.com/search/users?q=${query}`)
      .then((response) => {
        console.log(response.data);
        return response.data.items;
      })
      .catch((error) => {
        console.error("Looks like we cant find the user");
        throw error;
      })
  );
}

export default fetchUserData;
