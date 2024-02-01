import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
const About = () => {
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
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a passionate Software Engineer looking for roles as a Full Stack
          Developer, where I can work on latest tech stack which can help me to
          grow as a developer and contribute to the organization.
        </p>
        <p>
          I am pursuing my Masters in Computer Science, at Indiana University,
          Bloomington where I am improving one design problem at a time and
          being naturally curious about it.
        </p>
        <p>
          I am a self taught developer, I have worked on various projects
          including Web Development, Machine Learning and Data Science. I am
          always looking for new opportunities to learn.
        </p>
      </div>

      <div className="skills-container">
        <div>
          <FontAwesomeIcon
            icon={faHtml5}
            color="#F06529"
            className="html animation _12"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCss3}
            color="#28A4D9"
            className="css animation _13"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faJsSquare}
            color="#EFD81D"
            className="js animation _14"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faReact}
            color="#5ED4F4"
            className="react animation _15"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPython}
            color="#EFD81D"
            className="python animation _16"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faJava}
            color="#F06529"
            className="java animation _16"
          />
        </div>
      </div>
    </div>
  )
}

export default About
