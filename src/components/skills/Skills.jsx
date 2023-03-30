import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Others from './Others'
import "./skill.css"
import Testing from './Testing'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Testing />
            <Others />
        </div>
    </section>
  )
}

export default Skills