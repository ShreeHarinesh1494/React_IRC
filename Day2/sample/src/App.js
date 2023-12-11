import './Assets/css/style.css'
import Nav from './Components/Nav'
import Homenav from "./Components/Homenav"
import './Assets/css/nav.css'
function App()
{
    return(
        <div>

            {/* <Nav/>
            <div className="sharon">
            <form className="hari" >
                    <label>Name</label>
                    <input type="text" name="" id="name"  placeholder="UserName"/>
                    <label>Password</label>
                    <input type="password" name="" id="pass" placeholder="Password"/>
                    <button>Submit</button>
                
            </form>
            </div> */}
            <Homenav/>

        </div>
    
    )
}

export default App;