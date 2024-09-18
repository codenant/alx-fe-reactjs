import axios from "axios";

function fetchUserData(username) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Looks like we cant find the user");
      throw error;
    });
}

export default fetchUserData;
