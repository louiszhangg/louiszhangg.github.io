import '../App.css';
import './MinecraftPage.css';

function MinecraftPage() {
    return (
        <div>
            <p className="heading">Minecraft AI</p>
            <p className="shadow text">2023</p>
            <br></br>
            <p className="text">MinecraftAI is a machine learning model that allows people to play Minecraft using real-life motions. It recognizes human motions through a webcam and attaches it to in-game movements. For this project, we focused on fundamental movements such as walking, sneaking, and breaking blocks. This project was done for our Intro to AI course's final project. The professor gave us a distinction for having the best project of the day.</p>
            <p className="sub-heading"><strong>Technologies Used</strong></p>
            <div className="split">
                <p className="left-column sub-heading">Roboflow</p>
                <p className="right-column text">For annotating the data set (videos of people doing the motions)</p>
            </div>
        </div>
    )
}

export default MinecraftPage;