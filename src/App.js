
import './App.css';
import twitter from './icons/icons8-twitter.svg';
import linkedIn from './icons/icons8-linkedin.svg';
import github from './icons/icons8-github.svg';

function App() {
  return (
    <div className="App">
      <body>
        <h2>Hello!</h2>
        <p>
        I'm Isabella! Currently I am studying computer science at the University of New South Wales with an expected graduation in November 2021.
        </p>
        <a href='https://drive.google.com/file/d/1E80qAJX-V9Gyl4QT4lxQRbalxeQODX5G/view?usp=sharing' target='_blank' rel='noreferrer' >
          <button className='animate-move'>Resume</button>
        </a>
        <h2>Experience</h2>
        <ul className='experience-list'>
          <li>
            Software Engineering Intern at Atlassian (Nov 2020 - July 2021)
          </li>
          <li>
            Software Engineering Intern at Snapchat (Nov 2019 - Feb 2020)
          </li>
          <li>
            IT Director for Women In Engineering Society at UNSW (Dec 2019 - May 2021)
          </li>
        </ul>
        
        
        <h2>University Courses</h2>
        <p>Introduction to Programming, Computer Systems Fundamentals, Data Structures and Algorithms, Database Systems, Software Engineering Fundamentals, Introduction to Artificial Intelligence, Security Engineering and Cybersecurity, Software Construction, Object-Oriented Design and Programming, and Operating Systems</p>
        <h2>Programming Languages</h2>
        <p>Python, Java, Kotlin, Javascript / React</p>
        <h2>Send me a message ☺︎</h2>
        <a href='https://twitter.com/iismallcombe' target='_blank' rel='noreferrer'>
          <img className='animate-move' src={twitter} alt='Twitter icon'/>
        </a>
        <a href='https://www.linkedin.com/in/isabellasmallcombe/' target='_blank' rel='noreferrer'>
          <img className='animate-move' src={linkedIn} alt='LinkedIn icon'/>
        </a>
        <a href='https://github.com/IsabellaSmallcombe' target='_blank' rel='noreferrer'>
          <img className='animate-move' src={github} alt='Github icon'/>
        </a>
      </body>
    </div>
  );
}

export default App;
