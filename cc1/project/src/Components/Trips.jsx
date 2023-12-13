import '../Assests/css/Trips.css'
import { Link } from 'react-router-dom';
import img1 from '../Assests/images/coimbatore.jpg'
import img2 from '../Assests/images/madurai.jpg'
import img3 from '../Assests/images/ooty.jpg'
import img4 from '../Assests/images/kanyakumari.jpg'
const Trips=()=>
{
    return(
        <>
         <nav class="navbar">
        <div class="left-corner"></div>
        <div class="nav-options">
            <h1>Trips</h1>
            <Link to="/Home">
                <i className="fas fa-home"></i>
            </Link>
            <Link to="/Trips">
                <i className="fas fa-suitcase"></i>
            </Link>
            <Link to="#">
                <i class="fas fa-phone"></i>
            </Link>
            <Link to="/">
            <i class="fa fa-sign-out"></i>
            </Link>
        </div>
    </nav>
    <div class="card-container">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={img1} alt="Card 1" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div class="flip-card-back">
                    <h1>Coimbatore</h1>
                    <p>Coimbatore is a city located in the state of Tamil Nadu, India. It is often referred to as the "Manchester of South India" due to its prominent position as a major industrial and textile hub</p>
                    <p><a href="#">Click Here</a></p>
                </div>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={img2} alt="Card 2" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div class="flip-card-back">
                    <h1>Madurai</h1>
                    <p>It holds great cultural, historical, and religious significance and is one of the oldest continuously inhabited cities in the world.</p>
                    <p><a href="#">Click Here</a></p>
                </div>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={img3} alt="Card 3" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div class="flip-card-back">
                    <h1>Ooty</h1>
                    <p>Ooty, officially known as Udhagamandalam, is a picturesque hill station located in the Nilgiri Hills of the Indian state of Tamil Nadu.</p>
                    <p><a href="#">Click Here</a></p>
                </div>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={img4} alt="Card 4" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div class="flip-card-back">
                    <h1>kanyakumari</h1>
                    <p> It is in the state of Tamil Nadu, India. Renowned for its spectacular geographical location, Kanyakumari is a popular tourist destination with a rich cultural.</p>
                    <p><a href="#">Click Here</a></p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Trips