import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Layout from "./layout/layout";
import Loader from "./components/loader/loader";
import ErrorModal from "./components/errorModal/errorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {error ? (
        <ErrorModal message="server error" onRetry={getUsers} />
      ) : (
        <Layout users={users} />
      )}
    </>
  );
}

export default App;