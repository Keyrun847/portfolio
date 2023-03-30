import React from 'react'
import { others1, others2 } from "./skillList"

const Others = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Others</h3>

        <div className="skills__box">
          <div className="skills__group">
            {others1.map((skill)=>(
                <div className="skills__data" key={skill.name}>  
                  <i className={skill.icon}></i>
                  <div>
                      <h3 className="skills__name">{skill.name}</h3>
                  </div>
                </div>
            ))}
          </div>
          <div className="skills__group">
            {others2.map((skill)=>(
              <div className="skills__data" key={skill.name}>  
                <i className={skill.icon}></i>
                <div>
                    <h3 className="skills__name">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Others