import '../App.css';
import './Pages.css';
import ai_demo from '../assets/ai_demo.gif'

function MinecraftPage() {
    return (
        <div>
            <p className="heading">Minecraft AI</p>
            <p className="shadow text">2023</p>
            <br></br>

            <p className="text">MinecraftAI is a machine learning model that allows people to play Minecraft using real-life motions. It recognizes human motions through a webcam and attaches it to in-game movements. For this project, we focused on fundamental movements such as walking, sneaking, and breaking blocks. This project was done for our Intro to AI course's final project. The professor gave us a distinction for having the best project of the day. My primary role was data collection.</p>

            <p className="sub-heading"><strong>Technologies Used</strong></p>
            <div className="split">
                <p className="left-column sub-heading">Roboflow</p>
                <p className="right-column text">For annotating the data set (videos of people doing the motions)</p>
                <p className="left-column sub-heading">Yolo</p>
                <p className="right-column text">Object-detection model that matches gestures from the data set to in-game movements.</p>
                <p className="left-column sub-heading">Mineflayer by PrismarineJS</p>
                <p className="right-column text">Provided the functions for in-game movement of a player. Based on what Yolo detected, we would call Mineflayer functions.</p>
            </div>

            <br></br>
            <h2 className="sub-heading"><strong>Gallery</strong></h2>
            <img 
                src={ai_demo}
                alt="A GIF demonstration of the Minecraft AI"
                style={{ 
                    width: '100%', 
                    borderRadius: '15px',
                    objectFit: 'contain',
                }}
            />
            <p className="text">A demonstration of the Minecraft AI. Note Yolo's confidence in the action detection in the webcam window. The footage is slightly slowed down and the person demonstrating is one of my partners.</p>
        </div>
    )
}

export default MinecraftPage;