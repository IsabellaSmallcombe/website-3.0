import './App.css'
import twitter from './icons/icons8-twitter.svg'
import linkedIn from './icons/icons8-linkedin.svg'
import github from './icons/icons8-github.svg'

function App() {
  return (
    <div className="App">
      <body>
        <div className="title-div">
          <h1>E</h1>
          <h2 className="title-text">hello</h2>
        </div>
        <p>
          I'm Isabella! Currently I am studying computer science at the
          University of New South Wales with an expected graduation in November
          2021.
        </p>
        <br/>
        <br/>
        <a
          href="https://drive.google.com/file/d/1NtaqoTyFyCRgCXGFDPKuKOnj4t5Dpx-j/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="animate-move">Resume</button>
        </a>
        <br/>
        <br/>
        <h2>Experience</h2>
        <ul className="experience-list">
          <li>
            Software Engineering Intern at Atlassian (Nov 2020 - July 2021)
          </li>
          <li>Software Engineering Intern at Snapchat (Nov 2019 - Feb 2020)</li>
          <li>
            IT Director for Women In Engineering Society at UNSW (Dec 2019 - May
            2021)
          </li>
        </ul>
        <br/>
        <h2>University Courses</h2>
        <p>
          Programming Fundamentals, Data Structures and Algorithms, Computer
          System Fundamentals, Database Systems, Software Engineering
          Fundamentals, Introduction to Artificial Intelligence, Security
          Engineering and Cybersecurity, Software Construction, Object-Oriented
          Design and Programming, Operating Systems, Web Front-End Programming,
          and Computer Networks and Applications
        </p>
        <br/>
        <h2>Programming Languages</h2>
        <p>Python, Java, Kotlin, JavaScript / React</p>
        <br/>
        <h2>Send me a message ☺︎</h2>
        <a
          href="https://twitter.com/iismallcombe"
          target="_blank"
          rel="noreferrer"
        >
          <img className="animate-move" src={twitter} alt="Twitter icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/isabellasmallcombe/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="animate-move" src={linkedIn} alt="LinkedIn icon" />
        </a>
        <a
          href="https://github.com/IsabellaSmallcombe"
          target="_blank"
          rel="noreferrer"
        >
          <img className="animate-move" src={github} alt="Github icon" />
        </a>
      </body>
      <footer>
        Fonts from Velvetyne Type Foundry by Jean-Baptiste Morizot, Lucas Le
        Bihan, and Christophe Badani
      </footer>
    </div>
  )
}

export default App
