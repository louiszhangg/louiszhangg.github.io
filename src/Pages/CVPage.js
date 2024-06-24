import '../App.css';

function CVPage() {
    return (
        <div>
            <p className="heading">CV</p>
            <br></br>

            <div className="space-between">
                <p className="text"><strong>Virginia Tech</strong></p>
                <p className="shadow text">2020 - 2023</p>
            </div>
            <p className="shadow text">Bachelor's of Science in Computer Science (BSCS) </p>
            <br></br>

            <div className="space-between">
                <p className="text"><strong>Groupsource Travel</strong></p>
                <p className="shadow text">2023</p>
            </div>
            <p className="shadow text">Software Engineering Intern</p>
            <br></br>

            <div className="space-between">
                <p className="text"><strong>Exelaration</strong></p>
                <p className="shadow text">2021 - 2022</p>
            </div>
            <p className="shadow text">Full-Stack Software Engineering Intern</p>
        </div>
    )
}

export default CVPage;