import { Avatar } from '@mui/material';
import {  useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

import Stack from '@mui/material/Stack';


const Home = () => {

    const [letterClass] = useState('text-animate')

    const titleArray = ['Mi',' ','P','o','r','t','f','o','l','i','o',' ','W','e','b',' ']
    const nameArray = ['I','l','i','c','h',' ','B','e','t','a','n','c','o','u','r','t',' ','R','a','n','g','e','l',' ']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r',' ','J','r',' ']

    //  useEffect(() => {
    //     return setTimeout(() => {
    //          setLetterClass('text-animate-hover')
    //      }, 4000)
    //  }, [])

    return (

        <div className="container home-page">
            <div className="text-zone">
                    <h1>
                    <img src={LogoTitle} alt='developer' />
                    
                    <AnimatedLetters letterClass={letterClass}
                    strArray={titleArray}
                    idx={15}/> 
                     
                     <img src="https://empleo.chaco.gob.ar/static/media/logoCapHeaderv2.2fe2a41f.png" alt='Developer' /> <br/> 
                    {/* <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span> */}
                   
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={3} />
                    <br></br>
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={3}/>     
                    </h1>
                    <h2> Trainee Jr. Full Stack Developer / Mechannical Engineer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            
            <div className="a-zone">
                    
                <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={1}
                        >
                            <h2> Desarrollo de aplicaciones Web </h2>
                <Link to='/portfolio' className='flat-button'>VER PORTFOLIO</Link>
                    <Avatar
                            alt="Ilich Betancourt"
                            src="https://avatars.githubusercontent.com/u/94482314?v=4"
                            sx={{ width: 180, height: 180 }}
                            />
                            
                        <h2>
                            Desarrollador web Full Stack Jr. en proceso con proyección al desarrollo/mejora de
                             aplicaciones multidisciplinarias.
                        </h2>
                        
                        
                </Stack>
                <Stack direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={1}>
            
                  <a href='https://empleo.chaco.gob.ar/capacitaciones/Especializaci%C3%B3n-en-tecnolog%C3%ADas-de-desarrollo'><img
                            alt="CENIT"
                            src="https://empleo.chaco.gob.ar/static/media/logoCapHeaderv2.2fe2a41f.png"
                            style={{width: 150, height: 150}} 
                            /></a>
                  <a href='https://argentinaprograma.inti.gob.ar/'><img
                            alt="CENIT"
                            src="https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/logo/1657411642/APLogo-20-20.png"
                            style={{width: 190, height: 140}} 
                            /></a>                                            
                </Stack>
            </div>
        </div>
    );
}

export default Home;