import './index.scss'
import Letters from '../Letters'
import { useEffect, useState } from 'react'
import Card from './Card'


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
                <Card className={'card'} title={'API Blog'} index={index} body={'Website created fetching api data, with custom cards.'} glink={'https://github.com/samu1243/starwars-blog-api'}/>
                <Card className={'card1'}title={'WoW Fan site'} index={index} body={'Full-Stack project to end my bootcamp. E-Commerce site.'}/>
            </div>
        </div>
    )
}

export default Projects