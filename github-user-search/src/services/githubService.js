import axios from "axios";

async function fetchUserData(username, location, repos) {
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

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Looks like we cant find the user");
    throw error;
  }
  //     axios
  //       // .get(`https://api.github.com/users/${username}`)
  //       .get(`https://api.github.com/search/users?q=${query}`)
  //       .then((response) => {
  //         console.log(response.data);
  //         return response.data.items;
  //       })
  //       .catch((error) => {
  //         console.error("Looks like we cant find the user");
  //         throw error;
  //       })
  //   );
}

export default fetchUserData;
