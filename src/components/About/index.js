import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {
    return(<>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={['A','b','o','u','t',' ','m','e','.']}
                    idx={15}
                    />
                </h1>
                <p>
                    Ingeniero Mecánico con experiencia en el rubro energético; El ámbito laboral en Petróleos de Venezuela
                    me permitió entrar al área académica de la Exploración y Producción de Hidrocarburos (EyP). Hoy, en pleno 
                    proceso de reinvención (ReSkilling) personal y profesional, la relación energía/geopolítica/informática-tecnología
                    e ingeniería, los nuevos desafíos laborales, junto a la idea de entrelazar disciplinas en pro de mejorar y/o 
                    solucionar problemas cotidianos me llevaron al mundo IT.
                </p>
                <p>
                    Buscar la eficiencia energética aplicando la programación y sus herramientas tecnológicas, la inteligencia
                     artificial, la gestión del dato; la búsqueda permanente del conocimiento, la capacitación contínua y especialización 
                    personal forma parte de mis intereses.
                </p>

                <p>
                     Desarrollador web Full Stack en proceso con proyección al desarrollo/mejora de aplicaciones multidisciplinarias.
                </p>
            </div>
        </div>
        </>
    )
};

export default About;