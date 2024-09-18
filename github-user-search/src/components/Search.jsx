import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setData(null);

    fetchUserData(username)
      .then((response) => {
        setData(response);
      })
      .catch(() => setError("Looks like we cant find the user."))
      .finally(() => setLoading(false));

    setUsername("");
  };

  return (
    <div className="bg-dustGray h-screen font-mono">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto max-w-md bg-lightestGreen p-5 gap-5 rounded-md shadow-md translate-y-1/2"
      >
        <h1 className="font-bold text-darkestGreen text-center text-3xl">
          GitHub Username Search Engine
        </h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-dustGray text-darkestGreen rounded-md w-4/5 mx-auto p-2"
        />
        <button
          type="submit"
          className="text-dustGray bg-darkestGreen hover:bg-darkGreen transition duration-200 ease-in-out rounded-lg w-1/3 mx-auto h-10 font-semibold"
        >
          Search
        </button>
      </form>
      <div className="flex flex-col mx-auto max-w-md p-5 gap-5 rounded-md mt-36">
        {error && (
          <p className="text-red-800 font-bold text-xl text-center">{error}</p>
        )}
        {loading && (
          <p className="text-darkestGreen font-bold text-xl text-center">
            Loading...
          </p>
        )}
        {data && (
          <div>
            <div className="bg-darkestGreen w-28 h-28 mx-auto rounded-md flex flex-col justify-center items-center mb-4">
              <img src={data.avatar_url} className="h-24 w-24" />
            </div>
            <h2 className="text-darkestGreen font-bold text-xl text-center mb-4">
              {data.login}
            </h2>
            <a href={data.html_url} target="_blank">
              <button
                className="text-darkestGreen border-darkestGreen border-2 border-dashed hover:text-dustGray hover:bg-darkestGreen 
              transition duration-150 ease-in-out
              rounded-lg w-1/3 h-10 font-semibold translate-x-full"
              >
                Visit Profile
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
