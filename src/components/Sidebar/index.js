import './index.scss'
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faEnvelope, faHome,  faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    return (
        <>
        <div className='nav-bar'>
            <Link className='logo' to='/' style={{textDecoration:'none'}}>
                <img src={logo} alt='logo'/>
                <span>Samuel Djekki</span>
            </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='project-link' to='/project'>
                <FontAwesomeIcon icon={faDiagramProject} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/samuel-djekki/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a rel='noreferrer' target='_blank' href='https://github.com/samu1243'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a rel='noreferrer' target='_blank' href='https://discord.com/users/258830033026547713'>
                    <FontAwesomeIcon icon={faDiscord} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
        </div>
        </>
    )
}


export default Sidebar
