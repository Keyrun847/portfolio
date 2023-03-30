import React, { useState } from 'react'
import './projects.css'

const Projects = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My work so far</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects_title">
                            My <br /> Portfolio
                        </h3>
                    </div>

                    <span className="projects__button" onClick={()=>{toggleTab(1)}}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===1?"projects__modal active-modal":"projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="projects__modal-title">My Portfolio Site</h3>
                            <p className="projects__modal-description">
                                This is the portfolio of me built using React js. Go through it to know more about me.
                            </p>

                            <div className="projects__modal-projects">
                                <a href='https://www.kiranveer.tech' target='_blank' className='project__link portfolio'><button className='project__link-button'>View Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects_title">
                            Me <br /> Tube
                        </h3>
                    </div>

                    <span className="projects__button" onClick={()=>{toggleTab(2)}}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===2?"projects__modal active-modal":"projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="projects__modal-title">Me Tube</h3>
                            <p className="projects__modal-description">
                                Clone web application of YouTube developed using react js
                            </p>

                            <div className="projects__modal-projects">
                                <a href='https://metube.kiranveer.tech' target='_blank' className='project__link metube'><button className='project__link-button'>View Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects_title">
                            Arriving <br /> Soon
                        </h3>
                    </div>

                    <span className="projects__button" onClick={()=>{toggleTab(3)}}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===3?"projects__modal active-modal":"projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="projects__modal-title">Arriving</h3>
                            <p className="projects__modal-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="projects__modal-projects">
                                <a href='https://www.kiranveer.tech' target='_blank' className='project__link metube'><button className='project__link-button'>View Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects_title">
                            Arriving <br /> Soon
                        </h3>
                    </div>

                    <span className="projects__button" onClick={()=>{toggleTab(3)}}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===3?"projects__modal active-modal":"projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="projects__modal-title">Arriving</h3>
                            <p className="projects__modal-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="projects__modal-projects">
                                <a href='https://www.kiranveer.tech' target='_blank' className='project__link metube'><button className='project__link-button'>View Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects_title">
                            Arriving <br /> Soon
                        </h3>
                    </div>

                    <span className="projects__button" onClick={()=>{toggleTab(3)}}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===3?"projects__modal active-modal":"projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="projects__modal-title">Arriving</h3>
                            <p className="projects__modal-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="projects__modal-projects">
                                <a href='https://www.kiranveer.tech' target='_blank' className='project__link metube'><button className='project__link-button'>View Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects_title">
                            Arriving <br /> Soon
                        </h3>
                    </div>

                    <span className="projects__button" onClick={()=>{toggleTab(3)}}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===3?"projects__modal active-modal":"projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="projects__modal-title">Arriving</h3>
                            <p className="projects__modal-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="projects__modal-projects">
                                <a href='https://www.kiranveer.tech' target='_blank' className='project__link metube'><button className='project__link-button'>View Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects