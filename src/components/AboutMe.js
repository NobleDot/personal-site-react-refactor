import chicago from './chicago.jpg';

const AboutMe = () => {
    return (
        <section className="about-me-section">
            <div id="about-me">
                <div>
                    <h3>My name's Emanuel.</h3>
                    <p>
                        I'm from Chicago, Illinois, USA. 
                    </p>

                    <p>
                        I enjoy spending lots of time gaming, browsing the internet, and listening to music.
                    </p>

                    <p>
                        I started programming a tiny bit of JavaScript in High School. Then, I went to a university to study Software Engineering.
                    </p>

                    <p>
                        I always found myself drawn to computers and technology. I believe they're empowering
                        and have the ability to improve the lives of all people regardless of who they are or where they're from.
                    </p>
                </div>
                
            </div>

            <img id="chicago" src={chicago}/>
        </section>
    )
}

export default AboutMe;