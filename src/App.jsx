import React, { useState } from 'react'
import { usePostUserMutation } from './redux/userSlice';
import { toast } from 'react-toastify';

const App = () => {


  

  const [user, setUser] = useState({})


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };


    const [postUser] = usePostUserMutation()


  const submitHandle = async() => {
    // console.log(user);
    const resp =await postUser(user)

    if(resp.data){
      setshowUser(resp.data)
      // alert(resp.data.email,resp.data.password)
    }


  };


  const [showUser,setshowUser] =useState({})


  return (
    <header>

        <form>
          <input type="text" onChange={handleChange} name='email' />
          <input type="text" onChange={handleChange} name='password' />
        </form>

        <button onClick={submitHandle}   > Register User</button>
      {JSON.stringify(showUser  )}
      </header>
  )
}

export default App