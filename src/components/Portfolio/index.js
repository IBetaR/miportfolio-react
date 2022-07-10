import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        component="img"
                        height="360"
                        image="http://www.minpet.gob.ve/images/entes_adscritos/pdvsa.png"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
            </div>
        </div>
        </>
    )
}

export default Portfolio;