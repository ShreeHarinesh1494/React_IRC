import { useState } from "react"
const TempComp=()=>
{
    const[data,setdata] = useState({
        username:'',
        password:''
    })
    const handlechange=(e)=>
    {
        setdata({...data,[e.target.id]:e.target.value})
        console.log(data)
    }

    const handlesubmit=(e)=>
    {
        e.preventDefault();
        console.log("FinalData")
        console.log(data)
        alert("submiteed")
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <input type="text" id="username" onChange={handlechange}/>
            <input type="password" id="password" onChange={handlechange}/>
            <input type="submit" value="Login"/>
        </form>
        </>
    )
    
}
export default TempComp