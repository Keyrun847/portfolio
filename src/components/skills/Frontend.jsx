import React from 'react'
import { frontend1,frontend2 } from './skillList'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Development</h3>

        <div className="skills__box">
          <div className="skills__group">
            {frontend1.map((skill)=>(
                <div className="skills__data" key={skill.name}>  
                  <i className={skill.icon}></i>
                  <div>
                      <h3 className="skills__name">{skill.name}</h3>
                  </div>
                </div>
            ))}
          </div>
          <div className="skills__group">
            {frontend2.map((skill)=>(
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

export default Frontend