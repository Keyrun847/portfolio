import React,{ useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [qual, setQual] = useState(0)

    return (
        <section className="qualification section"  id='experience'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personel Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={()=>setQual(0)} className={qual===0?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        &nbsp;Education
                    </div>
                    <div style={{
                        marginTop:'10px',
                        color:'black',
                        textDecoration: 'bold',
                        fontSize: '1.2rem'
                    }}>&nbsp;/&nbsp;</div>
                    <div onClick={()=>setQual(1)} className={qual===1?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        &nbsp;Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={qual===0?"qualification__content qualification__content-active":"qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B. Engineering</h3>
                                <span className="qualification__subtitle">KLEMSSCET Belagavi</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>&nbsp;2018 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">PUC</h3>
                                <span className="qualification__subtitle">R L PU College of Science, Belagavi</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>&nbsp;2016 - 2018
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Secondary</h3>
                                <span className="qualification__subtitle">B K Model High School, Belagavi</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>&nbsp;2013 - 2016
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={qual===1?"qualification__content qualification__content-active":"qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Persistent Systems Ltd.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    &nbsp;Aug 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Flying Brains Innovations Pvt Ltd</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    &nbsp;Oct 2020 - Dec 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Life Advisor</h3>
                                <span className="qualification__subtitle">Kotak Life Insurance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    &nbsp;Jan 2019 - Mar 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification