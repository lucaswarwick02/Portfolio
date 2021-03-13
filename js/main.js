var id = 0;

const sectionTitles = [
    (<h1 id="pageTitle">About Me</h1>),
    (<h1 id="pageTitle">Projects</h1>),
    (<h1 id="pageTitle">Education</h1>)
]

const sectionContents = [
    ( // About Me
        <div>
            <div>
                <p>Introduction Paragraph...</p>
            </div>
            <div>
                <h2>Skills</h2>
                <ul>
                    <li>Languages/Frameworks: Python, C#, C++, C, Java, HTML/CSS/JS, React</li>
                    <li>Driving License </li>
                    <li>National Pool Lifeguard Qualification</li>
                    <li>Tools/IDEs: Visual Studio Code, Unity, Eclipse, CodePen</li>
                </ul>
            </div>
            <div>
            <h2>Activites and Interests</h2>
                <ol>
                    <li>Hackathons: Working with other programmers and aiming to develop software with others helps build my teamwork skills as well as programming abilities. </li>
                    <li>Swimming Clubs: Being a member of the Mid Sussex Marlins swimming club required dedication and constant training. I engaged in multiple swimming galas with my fellow swimmers</li>
                    <li>Programming Projects: I enjoy having small, personal projects to do whilst in between work as it keeps my skills up to date, such as designing my own games using Unity. Planning projects allows me to tackle problems in different ways and testing my own them strengthens my abilities. </li>
                </ol>
            </div>
        </div>
    ),
    ( // Projects
        <div>
            <div>
                <h2>GeoChat</h2>
                <p>Winner for "Most Social Application" for the Highfield Hack 2021 hackatho.</p>
                <p>GeoChat uses location to provide group-chats of your closest location, allowing for the organisation of local events, advertising for local business, and being able to ask for recommendations etc. We used android studio to make it into an android app, with Google Firebase as the back-end, taking care of database issues. We consulted our friends at university the full length of the project about what features they would like to see. GeoChat was created using Android Studio and encorporated Firebase.</p>
                <a href="https://devpost.com/software/geochat-r25ixj">Link to the GeoChat Devpost website</a>
            </div>
        </div>
    ),
    ( // Education
        <div>
            <div>
                <h2>Warden Park Academy, GCSEs (August 2018)</h2>
                <ul>
                    <li>Computer Science: Grade 9</li>
                    <li>Mathematics: Grade 8</li>
                    <li>Physics: Grade 7</li>
                    <li>Chemistry: Grade 7</li>
                    <li>Biology: Grade 7</li>
                    <li>History: Grade 7</li>
                    <li>English Language: Grade 5</li>
                    <li>English Literature: Grade 5</li>
                    <li>Spanish: Grade 4</li>
                </ul>
            </div>
            <div>
                <h2>Brighton Hove & Sussex Sixth Form College, A-Levels (August 2020)</h2>
                <p>A-Levels: </p>
                <ul>
                    <li>Computer Science: A*</li>
                    <li>Mathematics: A*</li>
                    <li>Physics: A</li>
                    <li>Further Mathematics (AS-Level): A</li>
                </ul>
                <p>Activities: </p>
                <ul>
                    <li>Developed my own (not published) ‘hack and slash’ mobile game for Android, as my Computer Science Coursework.</li>
                    <li>Joint started the Game Development Society in my second year, where we planned the development of games and experimented with techniques used for them, using the Unity platform.</li>
                </ul>
            </div>
            <div>
                <h2>University of Southampton, A-Levels (August 2020)</h2>
                <p>Degree: </p>
                <ul>
                    <li>Computer Science (BSc)</li>
                </ul>
                <p>Activites: </p>
                <ul>
                    <li>Developed a ‘battle arena’ simulation, which involved arrays of teams and object orientated programming, for my Programming 1 module</li>
                </ul>
            </div>
        </div>
    )
]

function updatePage (element) {
    if (element.id != null) {
        id = element.id;
    }
    else {
        id = 0;
    }
    updateSectionTitle();
    updateSectionContents();
}

function updateSectionTitle () {
    console.log("Updating Section Title");
    ReactDOM.render(sectionTitles[id], document.getElementById("sectionTitle"));
}

function updateSectionContents () {
    console.log("Updating Section Contents");
    ReactDOM.render(sectionContents[id], document.getElementById("sectionContents"));
}

window.onload = updatePage;