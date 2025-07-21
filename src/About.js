import React, { useState, useEffect } from "react";
import "./App.css";
import "./About.css";
import Preloader from "./Preloader";
import { Firebase } from "./firebase/FirebaseConfig.js";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  const [about, setAbout] = useState("");
  const [mobileview, setMobileview] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Firebase.firestore()
      .collection("About")
      .get()
      .then((snapshot) => {
        snapshot.forEach((ele) => {
          setAbout(ele.data());
        });
      });
  });

  const mobilemenu = () => {
    console.log("cliked");
    setMobileview(true);
  };

  function blankhome() {
    const homelink = document.querySelector(".home-link");
    homelink.classList.add("mobile-menu");
    const ullinks = document.querySelector(".ul-links");
    ullinks.classList.add("mobile-menu");
  }
  function back() {
    setMobileview(false);
  }
  return (
    <div className="main-sec">
      {!about ? (
        <>
          <div className="preloader">
            <Preloader />
          </div>
        </>
      ) : (
          <>
        <main>
          <header>
            <div className="container">
              <nav className="navbar">
                <ul className="home-link">
                  <li>
                    <a href="/">Home</a>
                  </li>
                </ul>
                {mobileview ? (
                  <>
                    {blankhome}
                    <div className="mobilelinks">
                      <div className="menu-btn" onClick={back}>
                        <div className="c-1"></div>
                        <div className="c-2"></div>
                      </div>

                      <ul className="mobileView-list">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/About">About me</a>
                        </li>
                        <li>
                          <a href="/">Connect</a>
                        </li>
                      </ul>
                      <ul className="mobilemenu-icons">
                        <li>
                          <a href="/">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDQwIDMwIj4KICA8ZyBpZD0iZ21haWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTY0KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA2NCkiIGZpbGw9IiNlY2VmZjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjU2LDE2MC4yMTJsMTUsMTEuODQ1VjE0OC42NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2IC03OC4wNTcpIiBmaWxsPSIjY2ZkOGRjIi8+CiAgICA8cGF0aCBpZD0iUGF0aF81IiBkYXRhLW5hbWU9IlBhdGggNSIgZD0iTTM2LjI1LDY0SDM1TDIwLDc1Ljg0NSw1LDY0SDMuNzVBMy43NTEsMy43NTEsMCwwLDAsMCw2Ny43NXYyMi41QTMuNzUxLDMuNzUxLDAsMCwwLDMuNzUsOTRINVY3MC42MTVMMjAsODIuMTUybDE1LTExLjU0Vjk0aDEuMjVBMy43NTEsMy43NTEsMCwwLDAsNDAsOTAuMjVWNjcuNzVBMy43NTEsMy43NTEsMCwwLDAsMzYuMjUsNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZjQ0MzM2Ii8+CiAgPC9nPgo8L3N2Zz4K"
                              alt=""
                              height="40px"
                              width="40px"
                            ></img>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBpZD0ibGlua2VkaW4iIGQ9Ik0zNC4xNDEsMEg1Ljg1OUE1Ljg2Niw1Ljg2NiwwLDAsMCwwLDUuODU5VjM0LjE0MUE1Ljg2Niw1Ljg2NiwwLDAsMCw1Ljg1OSw0MEgzNC4xNDFBNS44NjYsNS44NjYsMCwwLDAsNDAsMzQuMTQxVjUuODU5QTUuODY2LDUuODY2LDAsMCwwLDM0LjE0MSwwWm0tMjAsMzEuNzE5SDkuNDUzVjE1LjMxM2g0LjY4OFptMC0xOC43NUg5LjQ1M1Y4LjI4MWg0LjY4OFptMTYuNDA2LDE4Ljc1SDI1Ljg1OVYyMi4zNDRhMi4zNDQsMi4zNDQsMCwwLDAtNC42ODcsMHY5LjM3NUgxNi40ODRWMTUuMzEzaDQuNjg4VjE2LjJhMTAuMTYxLDEwLjE2MSwwLDAsMSwzLjUxNi0uODgzLDYuMTM1LDYuMTM1LDAsMCwxLDUuODU5LDYuMjI2Wm0wLDAiIGZpbGw9IiMwMDdhYjkiLz4KPC9zdmc+Cg=="
                              alt=""
                              height="40px"
                              width="40px"
                            ></img>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i class="fab fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <ul className="ul-links">
                      <li>
                        <a href="/About">About me</a>
                      </li>

                      <li className="dropdown">
                        <span>Connect</span>
                        <div className="dropdown-links">
                          <a href="/">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDQwIDMwIj4KICA8ZyBpZD0iZ21haWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTY0KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA2NCkiIGZpbGw9IiNlY2VmZjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjU2LDE2MC4yMTJsMTUsMTEuODQ1VjE0OC42NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2IC03OC4wNTcpIiBmaWxsPSIjY2ZkOGRjIi8+CiAgICA8cGF0aCBpZD0iUGF0aF81IiBkYXRhLW5hbWU9IlBhdGggNSIgZD0iTTM2LjI1LDY0SDM1TDIwLDc1Ljg0NSw1LDY0SDMuNzVBMy43NTEsMy43NTEsMCwwLDAsMCw2Ny43NXYyMi41QTMuNzUxLDMuNzUxLDAsMCwwLDMuNzUsOTRINVY3MC42MTVMMjAsODIuMTUybDE1LTExLjU0Vjk0aDEuMjVBMy43NTEsMy43NTEsMCwwLDAsNDAsOTAuMjVWNjcuNzVBMy43NTEsMy43NTEsMCwwLDAsMzYuMjUsNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZjQ0MzM2Ii8+CiAgPC9nPgo8L3N2Zz4K"
                              alt=""
                              style={{ paddingRight: "20px" }}
                              height="40px"
                              width="40px"
                            ></img>
                            Gmail
                          </a>
                          <a href="/">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBpZD0ibGlua2VkaW4iIGQ9Ik0zNC4xNDEsMEg1Ljg1OUE1Ljg2Niw1Ljg2NiwwLDAsMCwwLDUuODU5VjM0LjE0MUE1Ljg2Niw1Ljg2NiwwLDAsMCw1Ljg1OSw0MEgzNC4xNDFBNS44NjYsNS44NjYsMCwwLDAsNDAsMzQuMTQxVjUuODU5QTUuODY2LDUuODY2LDAsMCwwLDM0LjE0MSwwWm0tMjAsMzEuNzE5SDkuNDUzVjE1LjMxM2g0LjY4OFptMC0xOC43NUg5LjQ1M1Y4LjI4MWg0LjY4OFptMTYuNDA2LDE4Ljc1SDI1Ljg1OVYyMi4zNDRhMi4zNDQsMi4zNDQsMCwwLDAtNC42ODcsMHY5LjM3NUgxNi40ODRWMTUuMzEzaDQuNjg4VjE2LjJhMTAuMTYxLDEwLjE2MSwwLDAsMSwzLjUxNi0uODgzLDYuMTM1LDYuMTM1LDAsMCwxLDUuODU5LDYuMjI2Wm0wLDAiIGZpbGw9IiMwMDdhYjkiLz4KPC9zdmc+Cg=="
                              alt=""
                              style={{ paddingRight: "20px" }}
                              height="40px"
                              width="40px"
                            ></img>
                            Linkedin
                          </a>

                          <a href="/">
                            <i
                              class="fab fa-github"
                              style={{ paddingRight: "20px" }}
                            ></i>
                            Github
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="mobile-bar" onClick={mobilemenu}>
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </>
                )}
              </nav>
            </div>
          </header>
          <setion>
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <h1 className="about-title" data-aos="fade-up">
                    LIBIN LUVIS
                  </h1>
                </div>

                <div className="col-md-12 col-12">
                  <div className="about-intro">
                    <h data-aos="fade-up">{about.intro}</h>
                  </div>
                </div>
              </div>
            </div>
          </setion>
          <section className="skills">
            <div className="container">
              <div className="row">
                <div className="col-md-6  col-12">
                  <h className="skill-title">Tools & Techs</h>
                </div>
                <div className="col-md-6  col-12">
                  <div className="skill-table" data-aos="fade-up">
                    <div>Python</div>
                    <div>C</div>
                    <div>JavaScript</div>
                    <div>C++</div>
                    <div>C#</div>
                    <div>django</div>
                    <div>Full Stack Dev</div>
                    <div>HTML5</div>
                    <div>CSS</div>
                    <div>Bootstrap</div>
                    <div>Node.js</div>
                    <div>React.js</div>
                    <div>Turbo C++</div>
                    <div>git github</div>
                    <div>Figma</div>
                    <div>docker</div>
                    <div>Azure</div>
                    <div>Azure DevOps</div>
                    <div>.Net Core .Net MVC</div>
                    <div>SQL Server</div>
                    <div>MySQL</div>
                    <div>MongoDB</div>
                    
                    <div>Angular.js</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </main>
          <section className="fotter-box">
            <div className="container">
              <div className="fotter">
                <h1>Let's Work together</h1>
                <div className="email-box">
                  <a className="email-text" href='mailto:libinluvis10@gmail.com'>Write an Email</a>
                </div>
              </div>
              <div className="row"> 
                <div className="col-md-12 col-12">
                  <p className="ftext">
                  <hr></hr>
                   Portfolio 2021 Designed and developed by Libin Luvis
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
        
      )}
    </div>
  );
}

export default About;
