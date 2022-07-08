import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Education = () =>{
    return(<>
        <div className='container education-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={['E','d','u','c','a','c','i','ó','n']}
                    idx={15}
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

export default Education;

