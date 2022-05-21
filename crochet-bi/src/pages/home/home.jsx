import React from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/card';
import './home.css';

import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpeg';
import img4 from '../../images/img4.jpeg';
import img5 from '../../images/img5.jpeg';
import img6 from '../../images/img6.jpeg';

export function Home(){
    return(
        <>
            <Header />
            <div className='card-container'>
                <Card 
                    img={img2}
                    title='Pug crochet'
                    price='$60'
                    description="Bonito perro pug elaborado en crochet de tamaño 10 cm x 10 cm, muy bueno para regalos o eventos. Existencia en colores en distintos colores pero los más recomendados son cafe claro, cafe oscuro, blanco y negro."
                />
                <Card 
                    img={img3}
                    title='Pato crochet'
                    price='$50'
                    description="Bonito patito elaborado en crochet de tamaño 15 cm x 15 cm, muy bueno para regalos o eventos. Existencia en colores en distintos colores pero los más recomendados son verde, amarillo y azul."
                />
                <Card 
                    img={img4}
                    title='Planta crochet'
                    price='$60'
                    description="Bonito plantita elaborada en crochet de tamaño 6 cm x 8 cm, muy bueno para regalos o eventos. Existencia en colores en distintos colores pero el más recomendado es verde."
                />
                <Card 
                    img={img5}
                    title='Pulpo crochet'
                    price='$60'
                    description="Bonito pulpo elaborado en crochet de tamaño 10cm x 10 cm, muy bueno para regalos o eventos. Existencia en colores en distintos colores pero los más recomendados son azul, blanco, rojo y amarillo."
                />
                <Card 
                    img={img6}
                    title='Pato asesino crochet'
                    price='$80'
                    description="Bonito patito con cuchillo elaborado en crochet de tamaño 12 cm x 8 cm, muy bueno para regalos o eventos. Existencia en colores en distintos colores pero los más recomendados son amarillo con cuchillo de distinto color."
                />
                <Card 
                    img={img1}
                    title='Corazón crochet'
                    price='$30'
                    description="Bonito corazón elaborado en crochet de tamaño 5 cm x 5 cm, muy bueno para regalos o eventos. Existencia en colores en distintos colores pero los más recomendados son rojo, amarillo y azul."
                />
            </div>
            
            <Footer />
        </>
    )
}