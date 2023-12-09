import './Assets/css/style.css'
import Nav from './Components/Nav'

import './Assets/css/nav.css'
function App()
{
    return(
        <div className="sharon">
        <Nav/>
        <form className="hari" >
                <label>Name</label>
                <input type="text" name="" id="name"  placeholder="UserName"/>
                <label>Password</label>
                <input type="password" name="" id="pass" placeholder="Password"/>
                <button>Submit</button>
            
        </form>
    </div>
    
    )
}

export default App;