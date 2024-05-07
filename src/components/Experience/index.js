import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  return (
    <div className="container experience-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
            idx={15}
          />
        </h1>
        <div className="experience-section">
          <div className="experience full-time">
            <h3 className="company-name">Aurigo Software Technologies</h3>
            <span>August 2021 - July 2023</span>
            <div className="job-description">
              <p>
                In my role as a Software Engineer from August 2021 to January
                2023, I achieved significant milestones by optimizing site-wide
                load times through the revamping of more than 30 stored
                procedures in under three sprints, resulting in an impressive
                25% reduction in web application performance latency.
                Additionally, I successfully launched a high-impact dashboard
                page utilizing SQL Server Reporting Services (SSRS), realizing a
                remarkable 33% reduction in load time and directly contributing
                to a substantial 27% growth in user retention. My
                responsibilities extended to orchestrating the end-to-end life
                cycle of features, showcasing proficiency from initial
                requirement analysis through deployment and post-production
                processes. Spearheading the development of over 100 web
                application features using a stack encompassing C#, .NET
                Framework, JavaScript (ES6+), and SQL, I managed end-to-end
                post-production processes. I demonstrated a sharp
                problem-solving acumen by actively identifying and addressing
                product and system issues, resulting in an impressive 20%
                improvement in product quality. Collaborating effectively with
                the Team Lead and fellow developers, I contributed to
                implementing design patterns, adhering to coding standards, and
                precise resource capacity planning, leading to a 20% improvement
                in project efficiency. Providing mentorship and guidance to
                newcomers, I empowered them to produce clean, modular code
                aligned with established coding standards and architectural
                principles, resulting in a 15% reduction in code review
                iterations. My contributions were recognized with the 'SPOT'
                award in April 2022 for strong technical design skills, playing
                a pivotal role in resolving complex scenarios for the quarterly
                product release program. Additionally, I received another 'SPOT'
                award in February 2023 for significant contributions to the
                product upgrade in the 'Essentials' project.
              </p>
            </div>
          </div>
          {/* <div className="experience internship">
            <h3 className="company-name">Aurigo Software Technologies</h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Experience
