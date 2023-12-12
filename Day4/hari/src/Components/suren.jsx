import { useState } from "react"
import '../Assests/css/suren.css'
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
            <div className="container">
            <div className="terminal_toolbar">
                <div className="butt">
                    <button className="btn btn-color"></button>
                    <button className="btn"></button>
                    <button className="btn"></button>
                </div>
                <p className="user">johndoe@admin: ~</p>
                <div className="add_tab">
                    +
                </div>
            </div>
            <div className="terminal_body">
                <div className="terminal_promt">
                    <span className="terminal_user">johndoe@admin: </span>
                    <span className="terminal_location">~</span>
                    <span className="terminal_bling">$ Welcome to CSE</span>
                    <span className="terminal_cursor"></span>
                </div>
            </div>
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
