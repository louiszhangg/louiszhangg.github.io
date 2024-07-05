import '../App.css';

function SalonPage() {
    return (
        <div>
            <p className="heading">Nail Salon Application</p>
            <p className="shadow text">2023</p>
            <br></br>
            <p className="text">A team of three, including me, created an application for the nail salon of an acquaintance. The app was designed both for customer use and also administrative purposes. This project was our final project for our Introduction to Database Management class, and as such, features a complex database and API.</p>

            <p className="sub-heading"><strong>Technologies Used</strong></p>
            <div className="split">
                <p className="left-column sub-heading">SQLite</p>
                <p className="right-column text">For creating the database</p>
                <p className="left-column sub-heading">Java Spring Framework</p>
                <p className="right-column text">Java Framework used to map requests to the database</p>
                <p className="left-column sub-heading">Typescript</p>
                <p className="right-column text">Popular programming language similar to Javascript used to code the user interface</p>
            </div>
        </div>
    )
}

export default SalonPage;