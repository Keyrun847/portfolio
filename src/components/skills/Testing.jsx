import React from 'react'
import { testing1, testing2 } from './skillList'

const Testing = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Testing</h3>

        <div className="skills__box">
          <div className="skills__group">
              {testing1.map((skill)=>(
                  <div className="skills__data" key={skill.name}>  
                    <i className={skill.icon}></i>
                    <div>
                        <h3 className="skills__name">{skill.name}</h3>
                    </div>
                  </div>
              ))}
          </div>
          <div className="skills__group">
            {testing2.map((skill)=>(
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

export default Testing