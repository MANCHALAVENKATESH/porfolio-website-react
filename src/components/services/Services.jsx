import React, { useState } from 'react';
import './services.css';
const Services = () => {
    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
    return( 
        <section className="services section" id='services'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Web Development Projects</h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(1)} >View More  <i className="uil uil-arrow-right services__button-icon"></i> </span>
            <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">Web Development Projects</h3>
                <p className="services__modal-description">
                Create robust web solutions with Node.js, PHP, and Laravel. Tailored to your specific needs.                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Specialization in developing web applications using Node.js, PHP (including core PHP), and Laravel framework.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Create robust and scalable solutions tailored to your specific needs, whether it's a dynamic website, e-commerce platform, or custom web application.                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Focus on delivering high-quality code and optimal performance for a seamless user experience.                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Frontend Development</h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(2)} >View More  <i className="uil uil-arrow-right services__button-icon"></i> </span>
            <div className={toggleState === 2 ? "services__modal active-modal":"services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">Frontend Development</h3>
                <p className="services__modal-description">
                Craft engaging user interfaces with React.js, HTML, and JavaScript. Focus on user experience.                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Proficiency in building engaging user interfaces and interactive web experiences using React.js, HTML, and JavaScript.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Emphasis on user experience, responsiveness, and modern design principles.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Craft intuitive interfaces that captivate your target audience and provide a delightful browsing experience.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Problem Solving (DSA)</h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(3)} >View More  <i className="uil uil-arrow-right services__button-icon"></i> </span>
            <div className={toggleState === 3 ? "services__modal active-modal":"services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">Problem Solving (DSA)</h3>
                <p className="services__modal-description">
                Solve coding challenges with efficient Python solutions. Algorithms, data structures, and more
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Offer coding services in Python for solving algorithms, data structures, and coding challenges.                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Provide efficient and optimized Python solutions to overcome complex problems.                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Leverage the power of Python's versatility and flexibility to tackle coding challenges effectively.                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Bug Fixing and Debugging</h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(4)} >View More  <i className="uil uil-arrow-right services__button-icon"></i> </span>
            <div className={toggleState === 4 ? "services__modal active-modal":"services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">Problem Solving (DSA)</h3>
                <p className="services__modal-description">
                Expert bug fixing services for web applications. Identify and resolve issues for seamless operation.                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Dedicated bug fixing services to identify and resolve issues in existing web applications.               </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Expertise in debugging and troubleshooting to address bugs, errors, and performance issues.                 </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Ensure smooth and seamless operation of your software by resolving critical issues promptly.                  </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Automated Testing with Selenium</h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(4)} >View More  <i className="uil uil-arrow-right services__button-icon"></i> </span>
            <div className={toggleState === 4 ? "services__modal active-modal":"services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">Automated Testing with Selenium</h3>
                <p className="services__modal-description">
                Streamline testing process with Selenium. Ensure quality and reliability of web applications.                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Expertise in Selenium, a powerful testing framework, to ensure the quality and reliability of your web applications.               </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Streamline the testing process from test case creation to execution and reporting.                 </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Comprehensive testing solutions that help identify and resolve issues, ensuring smooth functionality.                 </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}
export default Services