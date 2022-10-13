import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
        <section id="home" class="home flex-center">
            <div class="center">
                <p>
                    Hi there. I'm <span>Joyce Garnett</span>. <br/>
                    An aspiring web developer.
                </p>
                <a href="#about">About</a>
            </div>
        </section>

        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <section id="about" class="about">
            <div class="section-content">
                <div class="flex-center">
                    <h2 class="section-title primary-border">About</h2>
                </div>          

                <div class="flex-center">

                    <div class="about-pfp">
                        <img src="./assets/images/jcg.jpg" alt="Head shot of Joyce Garnett" />
                        <p>
                            <span>This is me</span><br/>
                            Nice to meet you!
                        </p>
                    </div>

                    <div class="about-info">
                        <div class="about-content">
                            <p>
                                Currently employed at <a href="https://www.magna.com/company/company-information/magna-groups/magna-exteriors" target="_blank">Magna Exteriors</a> as an IT Operations Technician. 
                                <br/><br/>
                                I have a passion for creating intuitive and aesthetically pleasing applications.
                            </p>
                        </div>
                        <div class="about-skills">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>C#</li>
                                <li>C++</li>
                                <li>Object Oriented Programming</li>
                                <li>UI Design</li>
                                <li>UX Design</li>
                                <li>Adobe Ps</li>
                                <li>Adobe Ai</li>
                                <li>Organization</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="projects">
            <div class="section-content">
                <div class="flex-center">
                    <h2 class="section-title primary-border">Projects</h2>
                </div>
                                   
                <div class="flex-center projects-content">
                    <div class="project">        
                        <a href="https://gentle-inlet-68782.herokuapp.com/" target="_blank">
                            <img src="./assets/images/tournament-bracket.png" alt="Preview image of Tournament Bracket website" />
                    
                            <div class="project-info">
                                <h3>Tournament Bracket</h3>
                                <p>REACT</p>
                            </div> 
                        </a>   
                    </div>
                    <div class="project">        
                        <a href="https://secret-anchorage-62343.herokuapp.com/" target="_blank">
                            <img src="./assets/images/gift-you-up.png" alt="Preview image of Gift You Up website" />
                    
                            <div class="project-info">
                                <h3>Gift You Up</h3>
                                <p>MVC</p>
                            </div> 
                        </a>   
                    </div>
                    <div class="project">        
                        <a href="https://dexzax.github.io/dnd-character-creation/index.html/" target="_blank">
                            <img src="./assets/images/dnd-character-creator.png" alt="Preview image of DnD Character Creator website" />
                    
                            <div class="project-info">
                                <h3>DnD Character Creator</h3>
                                <p>HTML/CSS/JS</p>
                            </div> 
                        </a>   
                    </div>
                    <div class="project">        
                        <a href="https://jcgcristel.github.io/work-day-scheduler/" target="_blank">
                            <img src="./assets/images/workday-scheduler.png" alt="Preview image of Work Day Scheduler website" />
                            
                            <div class="project-info">
                                <h3>work-day-scheduler</h3>
                                <p>HTML/CSS/JS</p>
                            </div> 
                        </a>   
                    </div>
                    <div class="project">        
                        <a href="https://jcgcristel.github.io/run-buddy/" target="_blank">
                            <img src="./assets/images/run-buddy.JPG" alt="Preview image of Run Buddy website" />
                            
                            <div class="project-info">
                                <h3>Run-Buddy</h3>
                                <p>HTML/CSS</p>
                            </div> 
                        </a>
                    </div>
                    <div class="project">        
                        <a href="https://jcgcristel.github.io/run-buddy/" target="_blank">
                            <img src="./assets/images/run-buddy.JPG" alt="Preview image of Run Buddy website" />
                            
                            <div class="project-info">
                                <h3>Run-Buddy</h3>
                                <p>HTML/CSS</p>
                            </div> 
                        </a>
                    </div>
                    <div class="project">        
                        <a href="https://jcgcristel.github.io/run-buddy/" target="_blank">
                            <img src="./assets/images/run-buddy.JPG" alt="Preview image of Run Buddy website" />
                        
                            <div class="project-info">
                                <h3>Run-Buddy</h3>
                                <p>HTML/CSS</p>
                            </div> 
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="section-content">
                <div class="flex-center ">
                    <h2 class="section-title secondary-border">Contact</h2>
                </div>

                <p>Got a question for me?</p>

                <div class="contact-form flex-center">                            
                    <form>
                        <input type="text" id="contact-name" placeholder="Name" />
                        <input type="email" id="contact-email" placeholder="Email" />
                        <textarea id="contact-message" placeholder="Message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>

        <footer>
            <a href="https://www.linkedin.com/in/joyce-garnett-57941615b/" target="_blank">
                <img src="./assets/images/linked-in-icon.png" alt="LinkedIn Icon" />
            </a>            
            <p>
                Copyright 2022 &copy; Joyce Garnett
            </p>
        </footer>
    </main>
  );
}

export default App;
