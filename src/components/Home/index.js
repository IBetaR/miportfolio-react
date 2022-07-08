import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Logo from './Logo';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I','l','i','c','h',' ','B','e','t','a','n','c','o','u','r','t',' ']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

    //  useEffect(() => {
    //     return setTimeout(() => {
    //          setLetterClass('text-animate-hover')
    //      }, 4000)
    //  }, [])

    return (

        <div className="container home-page">
            <div className="text-zone">
                    <h1> <img src={LogoTitle} alt='developer' /> Portfolio Web <img src="https://empleo.chaco.gob.ar/static/media/logoCapHeaderv2.2fe2a41f.png" alt='Developer' /> <br/> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _13`}>I'm</span>
                    <br/> 
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                        
                              Rangel
                            <br/>
                            <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={32}/>
                       
                    </h1>
                    <h2> Trainee Jr. Full Stack Developer / Mechannical Engineer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <div className="a-zone">
                    
                    <h2> Trainee Jr. Full Stack Developer / Mechannical Engineer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                
                {/* <Stack direction="row" spacing={5}>
                <br></br>
                    <Avatar

                        alt="Ilich Betancourt"
                        src="https://avatars.githubusercontent.com/u/94482314?v=4"
                        sx={{ width: 106, height: 106 }}
                    />
                    <Avatar

                        alt="Ilich Betancourt"
                        src="https://avatars.githubusercontent.com/u/94482314?v=4"
                        sx={{ width: 106, height: 106 }}
                    />
                </Stack> */}

                <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={1}
                        >
                    <Avatar
                            alt="Ilich Betancourt"
                            src="https://avatars.githubusercontent.com/u/94482314?v=4"
                            sx={{ width: 106, height: 106 }}
                            />
                            
                        <h2>
                            Desarrollador web Full Stack en proceso con proyección al desarrollo/mejora de
                             aplicaciones multidisciplinarias.
                        </h2>
                        
                </Stack>

            </div>
            
        </div>

    )
}

export default Home;