import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelopeCircleCheck, faFileCode, faGraduationCap, faHomeUser, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as React from 'react';


const Sidebar = () => (
    
    <div className='nav-bar'>
        <Link className='logo' to= '/'>

            {/* <img src = {LogoS} alt= 'Logo'/> */}
            <img className='sub-logo' src = {LogoSubtitle} alt= 'LogoDos'/>
         
        </Link>
        
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHomeUser} color = '#4d4d4e' />

            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUserAstronaut} color = '#4d4d4e' />

            </NavLink>

            <NavLink exact='true' activeclassname='active' className='exp-link' to='/experience'>
                <FontAwesomeIcon icon={faBriefcase} color = '#4d4d4e' />

            </NavLink>

            <NavLink exact='true' activeclassname='active' className='edu-link' to='/education'>
                <FontAwesomeIcon icon={faGraduationCap} color = '#4d4d4e' />

            </NavLink>

            <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                <FontAwesomeIcon icon={faFileCode} color = '#4d4d4e' />

            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} color = '#4d4d4e' />

            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blanck' rel='noreferrer' href='https://www.linkedin.com/in/ilichbetancourtr/'>
                    <FontAwesomeIcon icon={faLinkedin} color = '#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blanck' rel='noreferrer' href='https://github.com/IBetaR'>
                    <FontAwesomeIcon icon={faGithub} color = '#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blanck' rel='noreferrer' href='#'>
                    <FontAwesomeIcon icon={faInstagram} color = '#4d4d4e' />
                </a>
            </li>
        </ul>

    </div>
);

export default Sidebar;