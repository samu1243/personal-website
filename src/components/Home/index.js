import './index.scss'
import { Link }  from 'react-router-dom'
import { useState, useEffect } from 'react'
import Letters from '../Letters'
import Logo from './Logo/index'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S', 'a', 'm', 'u', 'e', 'l', "", 'D', 'j', 'e', 'k', 'k', 'i']
    const jobArray = ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
         setTimeout(() => {
         return  setLetterClass('text-animate-hover')
        }, 5000)
      }, [])
    

    return (
        <div className='container home'>
            <div className='title-text'>
                <h1>Hi there, I am <br/> 
                <Letters letterClass={letterClass} strArray={nameArray} index={10}/></h1>
            </div>
            <div className ='full-stack'>
                <h1><Letters letterClass={letterClass} strArray={jobArray} index={23}/></h1>
                <h2>Web Developer | React enthusiast</h2>
                <Link to='/contact'>
                <h3>Work with me</h3>
                </Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home