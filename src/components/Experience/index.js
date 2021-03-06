import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const itemData1 = [

    {
        imgPdvsa: 'http://www.minpet.gob.ve/images/entes_adscritos/pdvsa.png',
        title: 'PDVSA',
    },

];
const itemData2 = [

    {
        imgGas: 'https://ilcloudbet.com/wp-content/uploads/2021/12/IMG_20200916_153215726-scaled.jpg',
        title: 'GASISTA',
    },

];
const itemData3 = [
    {
        imgWs: 'https://ilichb3.sg-host.com/wp-content/uploads/2021/12/Logo-Waflessur_.jpg',
        title: 'WAFLESSUR',
    },
];

const Experience = () => {
    return (<>
        <div className='container experience-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'i', 'a', ' ', 'L', 'a', 'b', 'o', 'r', 'a', 'l']}
                        idx={15}
                    />
                </h1>

                <Grid container spacing={2}>

                    <Grid item xs={1.3}>
                        <Item>
                            <ImageList sx={{ width: 400, height: 155 }} cols={3} rowHeight={154}>
                                {itemData3.map((item) => (
                                    <ImageListItem key={item.imgWs}>
                                        <img
                                            src={`${item.imgWs}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.imgWs}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Item>
                    </Grid>

                    <Grid item xs={9.8}>
                        <Item>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Encargado General - Jefe de personal
                                    <br></br>
                                    <br></br>
                                    WaflesSur ?? Patagonia
                                </Typography>

                                <Typography gutterBottom variant="h5" component="div">

                                    Organizaci??n,gesti??n y Control general de operaciones, log??stica y personal
                                    <br></br>
                                    
                                    Desde Dic 2019 - hasta Apr 2022
                                    <br></br>
                                    Trabajo por temporadas
                                </Typography>

                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container spacing={2}>

                    <Grid item xs={1.3}>
                        <Item>
                            <ImageList sx={{ width: 400, height: 155 }} cols={3} rowHeight={154}>
                                {itemData2.map((item) => (
                                    <ImageListItem key={item.imgGas}>
                                        <img
                                            src={`${item.imgGas}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.imgGas}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Item>
                    </Grid>

                    <Grid item xs={9.8}>
                        <Item>

                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    Gasista 2?? segunda Categor??a/Electricista Instalador
                                    <br></br>
                                    <br></br>
                                    Aut??nomo - Independiente
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Proyecci??n, dise??o y ejecuci??n de obras en instalaciones de gas/el??ctricas dom??sticas/comerciales,
                                    conexi??n de artefactos
                                    <br></br>
                                    <br></br>
                                    Desde Sep 2019 hasta Actualidad
                                </Typography>

                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container spacing={2}>

                    <Grid item xs={1.3}>
                        <Item>
                            <ImageList sx={{ width: 400, height: 155 }} cols={3} rowHeight={154}>
                                {itemData1.map((item) => (
                                    <ImageListItem key={item.imgPdvsa}>
                                        <img
                                            src={`${item.imgPdvsa}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.imgPdvsa}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Item>
                    </Grid>

                    <Grid item xs={9.8}>
                        <Item>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Ingeniero Inspector de Construcci??n - Gerencia de de Construcci??n - Pipelines/Piping
                                    <br></br>
                                    
                                    Petr??leos de Venezuela S.A - PDVSA
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Inspecci??n mec??nica en obras de construcci??n Piping/Pipelines,
                                    conexi??n de pozos, estaciones de bombeo y facilidades de superficie
                                    en peraciones de producci??n y perforaci??n, liberaci??n y aprobaci??n
                                    de testigos de obra
                                    <br></br>
                                    <br></br>
                                    Desde Nov 2011 hasta Jul 2017
                                </Typography>

                            </CardContent>

                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    </>
    )
}

export default Experience;