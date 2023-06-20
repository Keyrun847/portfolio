import React, { useState } from 'react'
import projects from './allprojects'
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
                
                {projects.map((item)=>(
                    <div key={item.id} className="projects__content">
                        <div>
                            <i className="uil uil-arrow projects__icon"></i>
                            <h3 className="projects_title">
                                {item.name1} <br /> {item.name2}
                            </h3>
                        </div>

                        <span className="projects__button" onClick={()=>{toggleTab(item.id)}}>View More
                            <i className="uil uil-arrow-right projects__button-icon"></i>
                        </span>

                        <div className={toggleState===item.id?"projects__modal active-modal":"projects__modal"}>
                            <div className="projects__modal-content">
                                <i className="uil uil-times projects__modal-close" onClick={()=>toggleTab(0)}></i>

                                <h3 className="projects__modal-title">{item.modalTitle}</h3>
                                <p className="projects__modal-description">
                                    {item.modalDescription}
                                </p>

                                <div className="projects__modal-projects">
                                    <a href={item.link} rel="noreferrer" target='_blank' className={item.className}><button className='project__link-button'>View Site</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Projects