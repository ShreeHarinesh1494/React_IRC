import '../Assests/css/Home.css'
import vid1 from '../Assests/images/tamilnadu.mp4'
import { Link } from 'react-router-dom';
const Home=()=>
{
    return(
        <>
 <nav className="navbar">
        <div className="left-corner">
        </div>
        <div className="nav-options">
            <h1>Hello TamilNadu</h1>
            <Link to="/Home">

                <i className="fa fa-home"></i>
            </Link>
            <Link to="/Trips">
                <i className="fas fa-suitcase"></i>
            </Link>
        </div>
    </nav>

    <div className="left-panel">
            <Link to="/">
            <i class="fa fa-sign-out-alt"></i> Logout
            </Link>
    </div>
    <div className="vid">

    <video autoPlay loop muted >
            <source src={vid1} type="video/mp4"/>
    </video>
    </div>
    
        </>
    )
}

export default Home