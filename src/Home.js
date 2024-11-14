import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./Preloader";
import { Firebase } from "./firebase/FirebaseConfig.js";
import Aos from "aos";
import "aos/dist/aos.css";
import icon1 from "./media/icon1.jpg";
import icon2 from "./media/icon2.png";
import icon3 from "./media/icon3.png";
import Form from './Form';

function Home() {
  const [mobileview, setMobileview] = useState(false);
  const [about, setAbout] = useState("");
  const [project, setProject] = useState([]);
  const ref = Firebase.firestore().collection("Projects");
  useEffect(() => {
    Aos.init({ duration: 1500 });

    // mousetracker();
    Firebase.firestore()
      .collection("About")
      .get()
      .then((snapshot) => {
        snapshot.forEach((ele) => {
          setAbout(ele.data());
        });
      });
    ref
      .orderBy("no", "desc")
      .get()
      .then((item) => {
        const pro = item.docs.map((doc) => doc.data());
        setProject(pro);
      });
  }, []);

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
    <div className="App">
      {!about && project.length === 0 ? (
        <div className="preloader">
          <Preloader />
        </div>
      ) : (
       
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
                          <a href="mailto:libinluvis10@gmail.com">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDQwIDMwIj4KICA8ZyBpZD0iZ21haWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTY0KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA2NCkiIGZpbGw9IiNlY2VmZjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjU2LDE2MC4yMTJsMTUsMTEuODQ1VjE0OC42NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2IC03OC4wNTcpIiBmaWxsPSIjY2ZkOGRjIi8+CiAgICA8cGF0aCBpZD0iUGF0aF81IiBkYXRhLW5hbWU9IlBhdGggNSIgZD0iTTM2LjI1LDY0SDM1TDIwLDc1Ljg0NSw1LDY0SDMuNzVBMy43NTEsMy43NTEsMCwwLDAsMCw2Ny43NXYyMi41QTMuNzUxLDMuNzUxLDAsMCwwLDMuNzUsOTRINVY3MC42MTVMMjAsODIuMTUybDE1LTExLjU0Vjk0aDEuMjVBMy43NTEsMy43NTEsMCwwLDAsNDAsOTAuMjVWNjcuNzVBMy43NTEsMy43NTEsMCwwLDAsMzYuMjUsNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZjQ0MzM2Ii8+CiAgPC9nPgo8L3N2Zz4K"
                              alt=""
                              height="40px"
                              width="40px"
                            ></img>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/libin2020/" target='_blank' rel="noopener noreferrer">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBpZD0ibGlua2VkaW4iIGQ9Ik0zNC4xNDEsMEg1Ljg1OUE1Ljg2Niw1Ljg2NiwwLDAsMCwwLDUuODU5VjM0LjE0MUE1Ljg2Niw1Ljg2NiwwLDAsMCw1Ljg1OSw0MEgzNC4xNDFBNS44NjYsNS44NjYsMCwwLDAsNDAsMzQuMTQxVjUuODU5QTUuODY2LDUuODY2LDAsMCwwLDM0LjE0MSwwWm0tMjAsMzEuNzE5SDkuNDUzVjE1LjMxM2g0LjY4OFptMC0xOC43NUg5LjQ1M1Y4LjI4MWg0LjY4OFptMTYuNDA2LDE4Ljc1SDI1Ljg1OVYyMi4zNDRhMi4zNDQsMi4zNDQsMCwwLDAtNC42ODcsMHY5LjM3NUgxNi40ODRWMTUuMzEzaDQuNjg4VjE2LjJhMTAuMTYxLDEwLjE2MSwwLDAsMSwzLjUxNi0uODgzLDYuMTM1LDYuMTM1LDAsMCwxLDUuODU5LDYuMjI2Wm0wLDAiIGZpbGw9IiMwMDdhYjkiLz4KPC9zdmc+Cg=="
                              alt=""
                              height="40px"
                              width="40px"
                            ></img>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/LIBINLUVIS" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-2x fa-github"></i>
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
                        <span>Connect <i class="fas fa-caret-down"></i></span>
                        <div className="dropdown-links">
                          <a href="mailto:libinluvis10@gmail.com" >
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDQwIDMwIj4KICA8ZyBpZD0iZ21haWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTY0KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA2NCkiIGZpbGw9IiNlY2VmZjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjU2LDE2MC4yMTJsMTUsMTEuODQ1VjE0OC42NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2IC03OC4wNTcpIiBmaWxsPSIjY2ZkOGRjIi8+CiAgICA8cGF0aCBpZD0iUGF0aF81IiBkYXRhLW5hbWU9IlBhdGggNSIgZD0iTTM2LjI1LDY0SDM1TDIwLDc1Ljg0NSw1LDY0SDMuNzVBMy43NTEsMy43NTEsMCwwLDAsMCw2Ny43NXYyMi41QTMuNzUxLDMuNzUxLDAsMCwwLDMuNzUsOTRINVY3MC42MTVMMjAsODIuMTUybDE1LTExLjU0Vjk0aDEuMjVBMy43NTEsMy43NTEsMCwwLDAsNDAsOTAuMjVWNjcuNzVBMy43NTEsMy43NTEsMCwwLDAsMzYuMjUsNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZjQ0MzM2Ii8+CiAgPC9nPgo8L3N2Zz4K"
                              alt=""
                              style={{ paddingRight: "20px" }}
                              height="40px"
                              width="40px"
                            ></img>
                            Gmail
                          </a>
                          <a href="https://www.linkedin.com/in/libin2020/" target="_blank" rel="noopener noreferrer">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBpZD0ibGlua2VkaW4iIGQ9Ik0zNC4xNDEsMEg1Ljg1OUE1Ljg2Niw1Ljg2NiwwLDAsMCwwLDUuODU5VjM0LjE0MUE1Ljg2Niw1Ljg2NiwwLDAsMCw1Ljg1OSw0MEgzNC4xNDFBNS44NjYsNS44NjYsMCwwLDAsNDAsMzQuMTQxVjUuODU5QTUuODY2LDUuODY2LDAsMCwwLDM0LjE0MSwwWm0tMjAsMzEuNzE5SDkuNDUzVjE1LjMxM2g0LjY4OFptMC0xOC43NUg5LjQ1M1Y4LjI4MWg0LjY4OFptMTYuNDA2LDE4Ljc1SDI1Ljg1OVYyMi4zNDRhMi4zNDQsMi4zNDQsMCwwLDAtNC42ODcsMHY5LjM3NUgxNi40ODRWMTUuMzEzaDQuNjg4VjE2LjJhMTAuMTYxLDEwLjE2MSwwLDAsMSwzLjUxNi0uODgzLDYuMTM1LDYuMTM1LDAsMCwxLDUuODU5LDYuMjI2Wm0wLDAiIGZpbGw9IiMwMDdhYjkiLz4KPC9zdmc+Cg=="
                              alt=""
                              style={{ paddingRight: "20px" }}
                              height="40px"
                              width="40px"
                            ></img>
                            Linkedin
                          </a>

                          <a href="https://github.com/LIBINLUVIS" target="_blank" rel="noopener noreferrer">
                            <i
                              class="fab  fa-github"
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
         
          <section>
            <div className="container">
              <div className="title-head">
                <h4 style={{ opacity: "1", transform: "translate(0px, 0px)" }}>
                  {about.Name}
                </h4>
              </div>
              <div className="title-head1">
                <span className="mainn-head">{about.Passion}</span>
              </div>

              <div className="floating-icons">
                <a href="https://www.linkedin.com/in/libin2020/">
                  <span className="floating-linkedn" id="linkedin">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBpZD0ibGlua2VkaW4iIGQ9Ik0zNC4xNDEsMEg1Ljg1OUE1Ljg2Niw1Ljg2NiwwLDAsMCwwLDUuODU5VjM0LjE0MUE1Ljg2Niw1Ljg2NiwwLDAsMCw1Ljg1OSw0MEgzNC4xNDFBNS44NjYsNS44NjYsMCwwLDAsNDAsMzQuMTQxVjUuODU5QTUuODY2LDUuODY2LDAsMCwwLDM0LjE0MSwwWm0tMjAsMzEuNzE5SDkuNDUzVjE1LjMxM2g0LjY4OFptMC0xOC43NUg5LjQ1M1Y4LjI4MWg0LjY4OFptMTYuNDA2LDE4Ljc1SDI1Ljg1OVYyMi4zNDRhMi4zNDQsMi4zNDQsMCwwLDAtNC42ODcsMHY5LjM3NUgxNi40ODRWMTUuMzEzaDQuNjg4VjE2LjJhMTAuMTYxLDEwLjE2MSwwLDAsMSwzLjUxNi0uODgzLDYuMTM1LDYuMTM1LDAsMCwxLDUuODU5LDYuMjI2Wm0wLDAiIGZpbGw9IiMwMDdhYjkiLz4KPC9zdmc+Cg=="
                      alt=""
                      style={{ opacity: 1 }}
                      height="40px"
                      width="40px"
                    ></img>
                  </span>
                </a>
                <a href="mailto:libinluvis10@gmail.com">
                  <span className="floating-gmail" id="gmail">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDQwIDMwIj4KICA8ZyBpZD0iZ21haWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTY0KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA2NCkiIGZpbGw9IiNlY2VmZjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjU2LDE2MC4yMTJsMTUsMTEuODQ1VjE0OC42NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2IC03OC4wNTcpIiBmaWxsPSIjY2ZkOGRjIi8+CiAgICA8cGF0aCBpZD0iUGF0aF81IiBkYXRhLW5hbWU9IlBhdGggNSIgZD0iTTM2LjI1LDY0SDM1TDIwLDc1Ljg0NSw1LDY0SDMuNzVBMy43NTEsMy43NTEsMCwwLDAsMCw2Ny43NXYyMi41QTMuNzUxLDMuNzUxLDAsMCwwLDMuNzUsOTRINVY3MC42MTVMMjAsODIuMTUybDE1LTExLjU0Vjk0aDEuMjVBMy43NTEsMy43NTEsMCwwLDAsNDAsOTAuMjVWNjcuNzVBMy43NTEsMy43NTEsMCwwLDAsMzYuMjUsNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZjQ0MzM2Ii8+CiAgPC9nPgo8L3N2Zz4K"
                      alt=""
                      height="40px"
                      width="40px"
                    ></img>
                  </span>
                </a>

                <a href="https://github.com/LIBINLUVIS">
                  <span className="floating-github" id="github">
                    <i
                      class="fa fa-2x fa-github"
                      style={{ color: "black" }}
                    ></i>
                  </span>
                </a>
              </div>
              
              <div className="profile-sec" style={{ marginTop: "150px" }}>
                <div className="profile-pics">
                  <img
                    src={icon1}
                    alt=""
                    height="200px"
                    width="200px"
                    id="pic-1"
                    className="img-1"
                    data-aos="fade-up"
                  ></img>

                  <div className="content">
                    <p className="content-text">
                      I am passionate about technology & innovations,<br></br>
                      Mainly focusing on latest<br></br> hardware and software
                      technologies.
                    </p>
                    <a className="about-circle" href="/About" id="about-me">
                      About me
                    </a>
                  </div>

                  <img
                    src={icon3}
                    alt=""
                    height="200px"
                    width="200px"
                    id="pic-2"
                    data-aos="fade-up"
                  ></img>
                </div>
                <img
                  src={icon2}
                  alt=""
                  height="200px"
                  width="200px"
                  id="pic-3"
                  data-aos="fade-right"
                ></img>
              </div>
            </div>

            <div className="project">
              <div className="container">
                <h1 className="project-title">Projects</h1>
                <div className="row">
                  {project.map((pro) => (
                    <div className="col-12 col-md-6">
                      <div className="pro-box">
                        <a
                          href={pro.link}
                          style={{ textDecoration: "none" }}
                          className="pro-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="work-1 mt-5">
                            <img
                              src={pro.image}
                              height="500px"
                              width="500px"
                              data-aos="fade-up"
                              alt="project_pic"
                            ></img>
                          </div>
                          <div className="work-1-content">
                            <span className="pro-title">{pro.title}</span>
                            <img
                              className="arrow"
                              src="data:image/svg+xml;base64,PHN2ZyBpZD0iYXJyb3ctbmFycm93LXJpZ2h0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBpZD0iUGF0aF8xMyIgZGF0YS1uYW1lPSJQYXRoIDEzIiBkPSJNMCwwSDQwVjQwSDBaIiBmaWxsPSJub25lIi8+CiAgPHBhdGggaWQ9IlBhdGhfMTQiIGRhdGEtbmFtZT0iUGF0aCAxNCIgZD0iTTUsMTJIMjguMzMzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjMzMyA4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTExIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwYXRoIGlkPSJQYXRoXzE1IiBkYXRhLW5hbWU9IlBhdGggMTUiIGQ9Ik0xNSwxOC42NjcsMjEuNjY3LDEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCA4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTExIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwYXRoIGlkPSJQYXRoXzE2IiBkYXRhLW5hbWU9IlBhdGggMTYiIGQ9Ik0xNSw4bDYuNjY3LDYuNjY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCA1LjMzMykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzExMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg=="
                              alt="project_pic"
                            ></img>
                          </div>
                          <p className="pro-type">{pro.about}</p>
                        </a>
                      </div>
                    </div>
                  ))};
                  
                </div>
              </div>
            </div>
          </section>
          <Form/>
          
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
         
          </main>
         
       
      )}
    </div>
  );
}

export default Home;
