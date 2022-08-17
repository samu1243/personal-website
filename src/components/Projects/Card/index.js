import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'


const Card = ({title, body, glink, index, image}) => {

    const [show, setShow] = useState(false)

    return (
        <div className='card' key={index} style={{backgroundImage: `url(${image})`}}>
            <div className='card-content'>
            <h2 className='card-title'>
                {title}
            </h2>
            <p className='card-body'>
                {body}
            </p>
            <a className='card-link' target='_blank' href={glink} rel='noreferrer'>Github <FontAwesomeIcon icon={faGithub}/></a>
            <button className='card-button' onClick={()=>{setShow(!show)}}>{ show === true ? 'Go Back' : 'Learn More'}</button>
            </div>
        </div>
    )
}

export default Card