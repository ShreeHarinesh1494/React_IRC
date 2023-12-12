// import img1 from "../Assessts/images/book-stack.png"
import '../Assests/css/Home.css'
import { useState } from 'react';
const Nav = () => {

    const[data,setdata] = useState(false)
    const toggle=()=>
    {
        setdata(true)
    }
    return (
      <div>
        <nav className="navbar">
        <div className="left-corner">
          {/* <img src={img1} alt="Logo" /> */}
        </div>
        <div className="nav-center">
          {/* <p className="nav-text"><u>BookStore</u>📖</p> */}
        </div>
        <div className="nav-options">
          {/* Your existing navigation links go here */}
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">Store</a>
          <a href="#">Contact</a>
          <a onClick={toggle} className='login' href="#">Login</a>
        </div>
      </nav>

      {data ?(
        <div class="sharon">
            <form class="hari" onsubmit="register()">
                <label>Name</label>
                <input type="text" name="" id="name"  placeholder="UserName" />
                <label>Password</label>
                <input type="password" name="" id="pass" placeholder="Password" />
                <button>Submit</button>
            </form>
        </div>
      ):(
        ''
      )}
      </div>
    );
  };
  
  export default Nav;