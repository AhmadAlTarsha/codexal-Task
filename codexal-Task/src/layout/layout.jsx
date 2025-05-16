import axios from 'axios';
import React, { useEffect } from 'react'








const Layout = () => {



    const getUsers= async () => {
    
        try {
          const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    
          if (res.data?.length > 0) {
            // setPosts(res?.data);
            // getPostComments();
            // setLoader(false)

            console.log(res.data);
            
          }
        } catch (error) {
          console.log(error);
        }
      };






useEffect(() => {
    getUsers()
  }, []);


  return (
    <div>Layout</div>
  )
}

export default Layout