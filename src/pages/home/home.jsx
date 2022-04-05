import React from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/card';
import './home.css';

export function Home(){
    return(
        <>
            <Header />
            <div className='card-container'>
                <Card />
            </div>
            
            <Footer />
        </>
    )
}