import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Card = ({title, body, glink, index, className, image}) => {
    return (
        <div className={className} key={index}>
            <div className='card-content'>
            <h2 className='card-title'>
                {title}
            </h2>
            <p className='card-body'>
                {body}
            </p>
            <a className='card-link' target='_blank' href={glink} rel='noreferrer'>Github <FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div>
    )
}

export default Card