import { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import Letters from '../Letters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGit, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A','b','o','u','t', '', 'M', 'e']
    const constraintRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return (
        <div className='container about'>
            <div className='text'>
                <h1 className='text-title'>
                    <Letters strArray={nameArray} letterClass={letterClass}
                    index={10}/>
                </h1>
                <div className='description'>
                <p>I'm a Full-Stack developer looking to work with you to develop
                    awesome projects.</p>
                <p>Always eager to learn more, whether is getting better at
                    the technologies I work with or learning new ones.</p>
                <p>Sports enjoyer, love to work out and go jogging.</p>
                </div>
                <a className='cv-a' rel='noreferrer' target='_blank' href='https://docs.google.com/document/d/14FCAxcNo71baaozqb5JiNUplO8Azmr6xOwgMTVbG5YE/edit?usp=sharing'><h2 className='cv-link'>Check out my CV</h2></a>
            </div>
            <div className='draggable'>
            <motion.div className='container-motion' ref={constraintRef}>
                <motion.div className='item' drag dragConstraints={constraintRef}>
                    <FontAwesomeIcon icon={faReact} className='item-icon' color='#61DBFB'/>
                </motion.div>
                <motion.div className='item' drag dragConstraints={constraintRef}>
                    <FontAwesomeIcon icon={faSquareJs} className='item-icon' color='#F0DB4F'/>
                </motion.div>
                <motion.div className='item' drag dragConstraints={constraintRef}>
                    <FontAwesomeIcon icon={faGit} className='item-icon' color='#F1502F'/>
                </motion.div>
                <motion.div className='item' drag dragConstraints={constraintRef}>
                    <FontAwesomeIcon icon={faHtml5} className='item-icon' color='red'/>
                </motion.div>
                <motion.div className='item' drag dragConstraints={constraintRef}>
                    <FontAwesomeIcon icon={faCss3} className='item-icon' color='#264de4'/>
                </motion.div>
            </motion.div>
            </div>
        </div>
    )
}


export default About