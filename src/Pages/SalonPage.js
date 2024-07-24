import '../App.css';
import home1 from '../assets/nail-salon/home-1.png';
import admin1 from '../assets/nail-salon/admin-1.png';
import admin2 from '../assets/nail-salon/admin-2.png';
import customer1 from '../assets/nail-salon/customer-1.png';
import customer2 from '../assets/nail-salon/customer-2.png';


function SalonPage() {
    return (
        <div>
            <p className="heading">Nail Salon Application</p>
            <p className="shadow text">2023</p>
            <br></br>
            <p className="text">A team of three, including me, created an application for the nail salon of an acquaintance. The app was designed both for customer use and also administrative purposes. This project was our final project for our Introduction to Database Management class, and as such, features a complex database and API. My primary role was creating the database and writing SQL queries in the back-end, along with developing some of the front-end functionality.</p>

            <p className="sub-heading"><strong>Technologies Used</strong></p>
            <div className="split">
                <p className="left-column sub-heading">SQLite</p>
                <p className="right-column text">For creating the database</p>
                <p className="left-column sub-heading">Java Spring Framework</p>
                <p className="right-column text">Java Framework used to map requests to the database</p>
                <p className="left-column sub-heading">CSS</p>
                <p className="right-column text">For styling the website</p>
                <p className="left-column sub-heading">Typescript</p>
                <p className="right-column text">Popular programming language similar to Javascript used to code the user interface</p>
                <p className="left-column sub-heading">GitHub</p>
                <p className="right-column text">Version control</p>
            </div>

            <h2 className="sub-heading"><strong>Gallery</strong></h2>
            <div className="split">
                <div className="half-column">
                    <img 
                        src={home1}
                        alt="A screenshot of the website"
                    />
                </div>
                <div className="spacer half"></div>
                <div className="half-column">
                    <p className="center text">The home page of the application.</p>
                </div>
                <div className="spacer"></div>
                <div className="spacer half"></div>
                <div className="half-column">
                    <img 
                        src={customer1}
                        alt="A screenshot of the website"
                    />
                </div>
                <div className="spacer half"></div>
                <div className="half-column">
                    <p className="center text">The page for a customer to create a new account.</p>
                </div>
                <div className="spacer"></div>
                <div className="half-column">
                    <img 
                        src={customer2}
                        alt="A screenshot of the website"
                    />
                </div>
                <div className="spacer half"></div>
                <div className="half-column">
                    <p className="center text">The page for a customer to schedule a new appointment. Note the table behind it displays a list of current appointments the customer has booked.</p>
                </div>
                <div className="spacer"></div>
                <div className="spacer half"></div>
                <div className="half-column">
                    <img 
                        src={admin1}
                        alt="A screenshot of the website"
                    />
                </div>
                <div className="spacer half"></div>
                <div className="half-column">
                    <p className="center text">The admin page. The admin can add other admins and employees.</p>
                </div>
                <div className="spacer"></div>
                <div className="half-column">
                    <img 
                        src={admin2}
                        alt="A screenshot of the website"
                    />
                </div>
                <div className="spacer half"></div>
                <div className="half-column">
                    <p className="center text">The admin can also see generated reports on the performance of their nail salon.</p>
                </div>
            </div>
        </div>
    )
}

export default SalonPage;