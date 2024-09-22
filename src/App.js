import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <h1>Jordan Micko Deloria</h1>
          <h2>Future Front-End Developer</h2>
        </div>
  
        <div className="Content">
          <div className="Contact">
            <h1>CONTACT</h1>
           <section> <a href="mailto:deloriamicko@gmail.com">deloriamicko@gmail.com
            <span className="material-icons gray-icon">email</span></a></section>

          <section> <a href="tel:+63 956 506 6990">+63 956 506 6990
            <span className="material-icons gray-icon">call</span></a></section>

          <section><span className="contact-text"></span>
          <a href="https://www.google.com/maps/place/San+Fernando,+Pampanga" target="_blank" rel="noopener noreferrer">San Fernando, Pampanga, Philippines</a>
          <i className="fas fa-map-marker-alt gray-icon"></i></section>
          <section><a href="https://www.facebook.com/qmickou/" target="_blank" rel="noopener noreferrer">Facebook<i class="fa-brands fa-facebook gray-icon"></i></a> </section>          
          <section><a href="https://www.instagram.com/mixck_/" target="_blank" rel="noopener noreferrer">Instagram <i class="fa-brands fa-instagram gray-icon"></i></a> </section>
          <section><a href="https://github.com/mixck20" target="_blank" rel="noopener noreferrer">Github <i class="fa-brands fa-github gray-icon"></i></a> </section>          

            <h1>Education</h1>
            <p>Bachelor of Science Information Technology</p>
            <p>University of the Assumption</p>
            <p>2022 - Ongoing</p>
            <p>San Fernando, Pampanga, Philippines</p>
            <h1>Skills</h1>
                <p>Python</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Figma</p>
                <p>Adobe After Effects</p>
                <p>Adobe Photoshop</p>
                <p>DaVinci Resolve</p>
                     </div>
                   <div className="Experience">
                       <h1>College Experience</h1>
                       <h2>Freshman Year (1st Year College)</h2>
                       <h4>2022 - 2023</h4>
                   <ul>
                         <h3>Python (Codechum, Ubuntu, Tkinter, Rasberry Pi)</h3>
              <li>Gained a basic understanding of programming with Python, including how to use simple operators and control flow statements.</li>
              <li>Created a Text color brain game using Python in Tkinter.</li>
              <li>Created a motion sensor detector using Raspberry Pi.</li>
              </ul>
          
            <ul>
            <h3>Wireframe, Mockup (Figma)</h3>
              <li>Introduced to Figma, improving our understanding of user interaction and experience design.</li>
                <li>Created a wireframe and mockup Personal Blog Website And Re-design the University of Assumption website using Figma.</li>
                </ul>

            <h2>Sophomore College (2nd Year College)</h2>
            <h4>2023 - 2024</h4>
            <ul>
            <h3>HTML, CSS, JavaScript (Codepen)</h3>
              </ul>
            <ul>
                <li>Learned the basics of HTML, CSS, JavaScript, and Java for web development</li>
                <li>Built an order system with HTML, CSS, and JavaScript on Codepen.</li>
                <li>Built a payroll system with HTML, CSS, and JavaScript on Codepen.</li>
                <li>Built a TDEE Calculator using HTML, CSS, and JavaScript in Codepen.</li>
              </ul>
            <ul>
              <h3>MySQL (phpMyAdmin)</h3>
              </ul>
              <ul>
                <li>Learned the basics of MySQL with phpMyAdmin for creating databases, running queries, and managing data.</li>
                <li>Created boracay hotel management database.</li>
              </ul>

            <h2>Junior College (3rd Year College)</h2>
            <h4>2024 - 2025 (current) </h4>
            <ul>
            <h3>HTML, CSS, JavaScript, Bootstrap (NextJS, React)</h3>
              <li>Learned to use Bootstrap for building responsive websites, while improving my HTML, CSS, and JavaScript skills.</li>
              <li>Built a responsive developer portfolio using HTML, CSS, and Bootstrap.</li>
              <li>Introduced and Started learning NextJS and React.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

