import './index.scss'
import Letters from '../Letters'
import { useEffect, useState } from 'react'
import Card from './Card'
import apiBlog from '../../assets/images/apiBlog.png'
import finalP from '../../assets/images/finalProject.png'
import jwt from '../../assets/images/jwt.png'


const Projects = ({index}) => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M','y', '', 'P', 'r', 'o', 'j','e','c','t','s']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container'>
            <div className='text-div'>
            <h1>{<Letters letterClass={letterClass} strArray={nameArray} index={10}/>}</h1>
            </div>
            <div className='card-container'>
                <Card title={'API Blog'} index={index} body={'Website created fetching api data, handling that information for content creation'} image={apiBlog} glink={'https://github.com/samu1243/starwars-blog-api'}/>
                <Card title={'WoW Fan site'} index={index} body={'Full-Stack project to end my bootcamp. E-Commerce site. Provided with a database of products and users'} image={finalP} glink={'https://github.com/samu1243/final-project'}/>
                <Card title={'JWT authentication site'} index={index} body={'JWT implementation on a login form. Access to websites granted by having authentication token'} image={jwt} glink={'https://github.com/samu1243/jwt-authentication-flask'}/>
            </div>
        </div>
    )
}

export default Projects