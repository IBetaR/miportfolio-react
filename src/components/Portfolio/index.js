import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () =>{
    return(<>
        <div className='container experience-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['P','o','r','t','f','o','l','i','o']}
                    idx={5}
                    />
                </h1>
                <p>Soy</p>
                <p>Ilich</p>
                <p>Ingeniero Mecánico</p>
            </div>
        </div>
        </>
    )
}

export default Portfolio;