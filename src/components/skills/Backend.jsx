import React from 'react'
import { backend1, backend2 } from './skillList'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Development</h3>

        <div className="skills__box">
          <div className="skills__group">
              {backend1.map((skill)=>(
                  <div className="skills__data" key={skill.name}>  
                    <i className={skill.icon}></i>
                    <div>
                        <h3 className="skills__name">{skill.name}</h3>
                    </div>
                  </div>
              ))}
          </div>
          <div className="skills__group">
            {backend2.map((skill)=>(
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

export default Backend