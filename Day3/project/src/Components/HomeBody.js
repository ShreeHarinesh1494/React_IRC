import '../Assests/css/HomeBody.css'
import Img1 from "../Assests/images/Friends.jpg"
import Img2 from "../Assests/images/Life.jpg"
import Img3 from "../Assests/images/door.jpg"
const HomeBody=()=>
{
    return(
        <div>
            <main>
        <section className="book-list">
            <div className="book">
                <div className="card">
                    <img src={Img1} alt="Book One" />
                </div>
                <p className="description">Book Name: Friends{'\n'}Author Name: Suren S{'\n'}Price: 500</p>
            </div>

            <div className="book">
                <div className="card">
                    <img src={Img2} alt="Book Two" />
                </div>
                <p className="description">Book Name : Life {'\n'}Author Name : Vikram  P{'\n'} Price : 500</p>
            </div>

            <div className="book">
                <div className="card">
                    <img src={Img3} alt="Book Three"/>

                </div>
                <p className="description">Book Name : The Thirteenth Door {'\n'}Author Name : Karen Greety V {'\n'} Price : 1500</p>
            </div>
        </section>
    </main>
        </div>
    )
}

export default HomeBody