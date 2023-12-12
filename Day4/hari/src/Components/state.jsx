import { useState } from "react"
import '../Assests/css/state.css'
const State=()=>
{
    const[visible,setvisible] = useState(true);

    const toggle=()=>
    {
        setvisible(!visible)
    }

    setTimeout(()=>
    {
        setvisible(false)
    },5000)

    return(
        <>
        {visible?(
           <div class="cookieCard">
           <p class="cookieHeading">Cookies.</p>
           <p class="cookieDescription">By using this website you automatically accept that we use cookies. </p>
            <button onClick={toggle} class="acceptButton">Understood</button>
         </div>
        ):(
            <button onClick={toggle}>
                Manage Cookies
            </button>
        )}
        </>
    )
}

export default State;