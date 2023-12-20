import React, { useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { editUser, getUserId } from '../Services/api'
import { useState } from 'react'

export const Edituser = () => {
  const{id}=useParams()
  const navigate = useNavigate();
    const[data,setData]= useState({
        username:'',
        password:''
    })
  const fetchUser = async()=>
  {
    try
    {

      const res = await getUserId(id)
      setData(res.data)

    }
    catch(e)
    {
      console.log(e)
    }
  }
  

    const handleChange=(e)=>
    {
        setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        try{
              const res2 = await editUser(id,data)
              console.log(res2.status)
              if(res2.status===200)
              {
                alert('user updated')
                navigate('/')
              }
        }
        catch(e)
        {
          console.log(e)
        }
      
        }
     useEffect(()=>
     {
      fetchUser()
     },[])   
     console.log(data)
  return (
    <>
         <form onSubmit={handleSubmit}>
            <input type='text' value={data.username} id='username' placeholder='username' onClick={handleChange}/>
            <input type='password' value={data.password} id='password' placeholder='password' onClick={handleChange}/>
            <button type='submit'>Save</button>
        </form>
    </>
  )
}

export default Edituser
