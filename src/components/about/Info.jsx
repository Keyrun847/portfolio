import React, { useEffect, useState } from 'react'

const Info = () => {

  const [experienceMonths, setExperienceMonths] = useState(0);

  useEffect(() => {
    const calculateExperienceMonths = () => {
      const joiningDate = new Date('2022-08-01');
      const currentDate = new Date();
      const diffMonths = (currentDate.getFullYear() - joiningDate.getFullYear()) * 12 + (currentDate.getMonth() - joiningDate.getMonth());
      setExperienceMonths(diffMonths);
    };
    calculateExperienceMonths();
  }, []);

  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">{experienceMonths} Months Working</span>
        </div>
        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">15 + Projects</span>
        </div>
        <div className="about__box">
            <i className='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info