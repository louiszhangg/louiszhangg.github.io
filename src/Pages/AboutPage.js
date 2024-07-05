import '../App.css';
import captoss from "../assets/captoss.jpg";

function AboutPage() {
    return (
        <div className="split">
            <img 
                src={captoss} 
                alt="An image of me" 
                style={{ 
                    width: '40%', 
                    height: '100%', 
                    borderRadius: '15px',
                    objectFit: 'contain',
                }}
            />
            <div 
                style={{
                    width: '54%',
                    margin: '0 0 0 2%'
                }}
            >
                <h3 className="heading">Hey! &#128075;</h3>
                <p className="text">My name is Haoan Zhang, but I usually go by Louis.</p>
                <br></br>
                <p className="text">I am a recent computer science graduate from Virginia Tech. My passion for coding started at the age of 13, driven by its ability to bring any idea to life.</p>
                <br></br>
                <p className="text">I believe computer science is far from boring. Things like web development, for instance, can stir hearts and minds, inspiring creativity and innovations in others.</p>
                <br></br>
                <p className="text">Outside of tech, I express my creativity through photography and music, and I find inspiration by travelling and hiking. I'm also passionate about advocating for more livable and sustainable cities.</p>
                <br></br>
                <p className="text">I aspire to work as a software engineer, creating products that enhance lives and spark inspiration.</p>
                <br></br>
                <p className="text"><em>Think I could be a good fit for your company? Feel free to contact me below!</em></p>
            </div>
        </div>
    )
}

export default AboutPage;