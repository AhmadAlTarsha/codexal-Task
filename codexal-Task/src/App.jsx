import { useEffect, useState } from 'react';
import './App.css';
import Layout from './layout/layout';
import Loader from './components/loader/loader'; 
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Layout users={users} />}
    </>
  );
}

export default App;
