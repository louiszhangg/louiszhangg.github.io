import '../App.css';
import './Pages.css';
import home1 from '../assets/hacks/home-1.gif';
import ai1 from '../assets/hacks/ai-1.gif';
import ai2 from '../assets/hacks/ai-2.png';

function HacksPage() {
    return (
        <div>
            <p className="heading">VTHacks Connect4 AI</p>
            <p className="shadow text">2023</p>
            <br></br>

            <p className="text">VTHacks is one of the largest collegiate hackathons on the East Coast and ranked the #10 MLH Hackathon. For the 11th VTHacks, my team and I decided to build a game agent that would play against other players in the popular game Connect4. In the end, we were able to create a Connect4 AI that was able to beat most beginner to intermediate players, all hosted on a website that would professional enough to be hosted online. I was the lead designer for the website, but I also provided assistance with the AI part of the project at times.</p>

            <p className="sub-heading"><strong>Technologies Used</strong></p>
            <div className="split">
                <p className="left-column sub-heading">Python</p>
                <p className="right-column text">For creating the game agent AI</p>
                <p className="left-column sub-heading">CSS</p>
                <p className="right-column text">For styling the website</p>
                <p className="left-column sub-heading">Javascript</p>
                <p className="right-column text">For creating most of the logic within the website</p>
                <p className="left-column sub-heading">GitHub</p>
                <p className="right-column text">For version control</p>
            </div>
            <br></br>

            <h2 className="sub-heading"><strong>Gallery</strong></h2>
            <img 
                src={home1}
                alt="A GIF demonstration of the application's home page"
            />
            <p className="center text">Going from the home page into one of the sub-pages.</p>
            <br></br><br></br>

            <img 
                src={ai1}
                alt="A GIF demonstration of playing against the AI"
            />
            <p className="center text">Playing against the AI.</p>
            <br></br><br></br>

            <img 
                src={ai2}
                alt="A picture of the end of a game"
            />
            <p className="center text">The end of the game.</p>
        </div>
    )
}

export default HacksPage;