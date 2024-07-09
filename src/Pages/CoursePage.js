import '../App.css';
import teaching from '../assets/course/teaching.jpg'

function CoursePage() {
    return (
        <div>
            <p className="heading">Intro to CS Course</p>
            <p className="shadow text">2022</p>
            <br></br>

            <p className="text">I taught a short Introduction to Computer Science course for free to those who were interested at my local church. The course included a lecture, a coding activity, a Q&A, and instructions on further learning. The course was taught as the volunteering portion of a class.</p>

            <p className="sub-heading"><strong>Additional Information</strong></p>
            <div className="split">
                <p className="left-column sub-heading">Audience</p>
                <p className="right-column text">High schoolers to young adults</p>
                <p className="left-column sub-heading">Information Taught</p>
                <p className="right-column text">Low-level vs. high-level languages, hello world, variable types and initialization, and if/else statements</p>
                <p className="left-column sub-heading">Language Used</p>
                <p className="right-column text">Java</p>
                <p className="left-column sub-heading">Duration</p>
                <p className="right-column text">~4 hours, we also had ice cream after class :)</p>
            </div>
            <br></br>

            <h2 className="sub-heading"><strong>Gallery</strong></h2>
            <img 
                src={teaching}
                alt="A picture of me teaching"
            />
            <p className="center text">Me teaching the class! Unfortunately I didn't take pictures of my students :(</p>
            <br></br><br></br>
        </div>
    )
}

export default CoursePage;