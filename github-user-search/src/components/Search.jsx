import { useState } from "react";
import { fetchAdvancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchAdvancedUserSearch(username, location, minRepos);
      setUsers(data.items || []); // GitHub search API returns items[]
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-gray-700">GitHub User Search</h2>

        {/* Username input */}
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-md p-2 w-full focus:ring focus:ring-blue-300"
        />

        {/* Location input */}
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-md p-2 w-full focus:ring focus:ring-blue-300"
        />

        {/* Min repos input */}
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded-md p-2 w-full focus:ring focus:ring-blue-300"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <ul className="grid gap-4 mt-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;

