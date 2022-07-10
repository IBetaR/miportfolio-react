import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
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
     imgCujae: 'https://cujae.edu.cu/images/sin-genrico-cuadrado.png',
     title: 'CUJAE',
   },
  
];
const itemData2 = [
  
  {
    imgAp: 'https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/sliderimage1/1657335318/banner-ok-argentina-programa.jpg',
    title: 'ARGENTINAPROGRAMA',
  },

];
const itemData3 = [
  {
  imgCenit: 'https://empleo.chaco.gob.ar/static/media/logoCapHeaderv2.2fe2a41f.png',
  title: 'CENIT',
  },
];

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

                <Grid container spacing={2}>
                    
                    <Grid item xs={1.3}>
                        <Item>
                            <ImageList sx={{ width: 400, height: 155 }} cols={3} rowHeight={154}>
                                          {itemData3.map((item) => (
                              <ImageListItem key={item.imgCenit}>
                                          <img
                                              src={`${item.imgCenit}?w=164&h=164&fit=crop&auto=format`}
                                              srcSet={`${item.imgCenit}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
                                    {/* <Avatar><img src="https://empleo.chaco.gob.ar/static/media/logoCapHeaderv2.2fe2a41f.png"  alt='Developer' /></Avatar> */}
                                
                                    Especialización en tecnologías de desarrollo
                                    <br></br>
                                    Gobierno del Chaco - Polo IT Chaco - UTN-FRRe y la UNCAUS
                                </Typography>

                                <Typography gutterBottom variant="h5" component="div">
                                  
                                    Desarrollo Web con JAVA: Introducción al desarrollo web con JAVA.
                                    Spring Framework/Spring Boot. Spring Data. Front end con React JS
                                     Introducción a React JS. Desarrollar con React JS. Componentes.
                                      Manejo de datos vía API. UI Components y Container Components.
                                       Herramientas de Testing para desarrollo: Calidad en el contexto
                                        del desarrollo de software. Principios del testing. Niveles y
                                         tipos de testing. Casos de prueba. Técnicas: predicción de errores,
                                          “fault attack”, testing exploratorio. Reporte de seguimientos.
                                           Testing unitario. TDD (Test Driven Development)
                                    
                                    Desde May 2022 - hasta Actualidad
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
                              <ImageListItem key={item.imgAp}>
                                      <img
                                          src={`${item.imgAp}?w=164&h=164&fit=crop&auto=format`}
                                          srcSet={`${item.imgAp}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
                              Desarrollador Web Full Stack Jr. 
                              <br></br>
                              <br></br>
                              Ministerio de Desarrollo Productivo, la Cámara de la Industria Argentina del Software
                              (CESSI) y el Instituto Nacional de Tecnología Industrial (INTI)
                              </Typography>
                              <Typography gutterBottom variant="h5" component="div">
                              Desarrollo Web Back End y Front End con Java/NetBeans IDE/SprintBoot/Angular CLI
                              <br></br>
                              <br></br>
                              
                              Desde Nov 2021 hasta Jul 2022
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
                              <ImageListItem key={item.imgCujae}>
                                        <img
                                            src={`${item.imgCujae}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.imgCujae}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
                            Ingeniero Mecánico
                            <br></br>
                            <br></br>
                            Universidad Tecnológica de La Habana - CUJAE
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                            Ingeniería Mecánica - Generación eléctrica con energía térmica
                            <br></br>
                            <br></br>
                            Desde Sep 2004 hasta Jul 2010
                            </Typography>
                          
                        </CardContent>

                        </Item>
                  </Grid>
             </Grid>

                  <div>
      
               </div>    
            </div>
        </div>
        </>
    )
}

export default Education;

