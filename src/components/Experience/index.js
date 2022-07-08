import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
const Experience = () =>{
    return(<>
        <div className='container experience-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={['E','x','p','e','r','i','e','n','c','i','a',' ','L','a','b','o','r','a','l']}
                    idx={15}
                    />
                </h1>
                <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={3}
                        >
                    <Avatar
                            alt="Ilich Betancourt"
                            src="https://ilichb3.sg-host.com/wp-content/uploads/2021/12/Logo-Waflessur_.jpg"
                            sx={{ width: 150, height: 150 }}
                            />
                            
                        <p>
                        WaflesSur® Patagonia
                        </p>
                        <p>
                        Organización,gestión y Control general de operaciones, logística y personal
                        </p>
                        <p>
                        Desde: 2019 - 2022
                        <br></br>
                        Trabajo por temporada 
                        </p>
                        
                </Stack>
                <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={3}
                        >
                    <Avatar
                            alt="Ilich Betancourt"
                            src="https://ilichb.sg-host.com/wp-content/uploads/2021/12/IMG_20200916_153215726-scaled.jpg"
                            sx={{ width: 150, height: 150 }}
                            />
                            
                        <p>
                        Gasista - Electricista / Freelance 
                        </p>

                        <p>
                        Proyección, diseño y ejecución de obras en instalaciones de gas/eléctricas 
                        <br></br>
                        domésticas/comerciales, conexión de artefactos
                        </p>
                        <p>
                        Desde: Nov 2019 - Hasta: actualidad
                        </p>
                        
                </Stack>
                <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={3}
                        >
                    <Avatar
                            alt="Ilich Betancourt"
                            src="http://www.minpet.gob.ve/images/entes_adscritos/pdvsa.png"
                            sx={{ width: 150, height: 150 }}
                            />
                            
                        <p>
                        Ingeniero Inspector 
                        <br></br>
                        - Gerencia de de Construcción - Pipelines/Piping
                        </p>
                        <p>
                        Inspección mecánica en obras de construcción Piping/Pipelines,
                        <br></br>
                        conexión de pozos, estaciones de bombeo y facilidades de superficie
                         <br></br>
                        en peraciones de producción y perforación, liberación y aprobación
                        <br></br>
                        de testigos de obra
                        </p>
                        <p>
                        Desde: Nov 2011 - Hasta: Jul 2017
                        </p>
                        
                </Stack>
            </div>
        </div>
        </>
    )
}

export default Experience;