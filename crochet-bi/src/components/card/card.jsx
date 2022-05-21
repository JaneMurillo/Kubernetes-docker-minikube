import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import './card.css';

export function Card({
    img, 
    title,
    price,
    description
}){
    const [open, setOpen] = useState('closed');
    const changeOpen = () => {
        setOpen(open === 'closed' ? 'open' : 'closed')
    };

    const [cafe, setCafe] = useState('selected');
    const [blanco, setBlanco] = useState('not-selected');
    const [negro, setNegro] = useState('not-selected');
    const [rojo, setRojo] = useState('not-selected');
    const [verde, setVerde] = useState('not-selected');
    const [amarillo, setAmarillo] = useState('not-selected');
    const [azul, setAzul] = useState('not-selected');

    const changeSelectedCafe = () => {
        if(cafe !== 'selected'){
            setCafe('selected');
            setBlanco('not-selected');
            setNegro('not-selected');
            setRojo('not-selected');
            setVerde('not-selected');
            setAmarillo('not-selected');
            setAzul('not-selected');
        }
    }
    const changeSelectedBlanco = () => {
        if(blanco !== 'selected'){
            setCafe('not-selected');
            setBlanco('selected');
            setNegro('not-selected');
            setRojo('not-selected');
            setVerde('not-selected');
            setAmarillo('not-selected');
            setAzul('not-selected');
        }
    }
    const changeSelectedNegro = () => {
        if(negro !== 'selected'){
            setCafe('not-selected');
            setBlanco('not-selected');
            setNegro('selected');
            setRojo('not-selected');
            setVerde('not-selected');
            setAmarillo('not-selected');
            setAzul('not-selected');
        }
    }
    const changeSelectedRojo = () => {
        if(rojo !== 'selected'){
            setCafe('not-selected');
            setBlanco('not-selected');
            setNegro('not-selected');
            setRojo('selected');
            setVerde('not-selected');
            setAmarillo('not-selected');
            setAzul('not-selected');
        }
    }
    const changeSelectedVerde = () => {
        if(verde !== 'selected'){
            setCafe('not-selected');
            setBlanco('not-selected');
            setNegro('not-selected');
            setRojo('not-selected');
            setVerde('selected');
            setAmarillo('not-selected');
            setAzul('not-selected');
        }
    }
    const changeSelectedAmarillo = () => {
        if(amarillo !== 'selected'){
            setCafe('not-selected');
            setBlanco('not-selected');
            setNegro('not-selected');
            setRojo('not-selected');
            setVerde('not-selected');
            setAmarillo('selected');
            setAzul('not-selected');
        }
    }
    const changeSelectedAzul = () => {
        if(azul !== 'selected'){
            setCafe('not-selected');
            setBlanco('not-selected');
            setNegro('not-selected');
            setRojo('not-selected');
            setVerde('not-selected');
            setAmarillo('not-selected');
            setAzul('selected');
        }
    }

    return(
        <>
            <div className='card-cont'>
                <img
                    className='img-card'
                    src={img}
                    alt="Card foto"
                    onClick={changeOpen}
                ></img>
                <div className='align-card-info'>
                    <h3 className='h3-title'>{title}</h3>
                    <p className='p-price'>{price}</p>
                </div>

                <div className={`overlay-card ${open}`}></div>
                <div className={`card-popup ${open}`}>
                    <div className='card-popup-content'>
                        <img
                            className='img-card'
                            src={img}
                            alt="Card foto"
                            onClick={changeOpen}
                        ></img>
                        <div className='align-card-info'>
                            <h3 className='h3-title'>{title}</h3>
                            <p className='p-price'>{price}</p>
                        </div>
                        <h4>Descripción</h4>
                        <p>{description}</p>
                        <h4>Colores</h4>
                        <fieldset className='field-colors'>
                            <div className='colores-opts'>
                                <button
                                    type='button'
                                    className={`btn-opt-col ${cafe}`}
                                    onClick={changeSelectedCafe}
                                >Cafe</button>
                                <button
                                    type='button'
                                    className={`btn-opt-col ${negro}`}
                                    onClick={changeSelectedNegro}
                                >Negro</button>
                                <button
                                    type='button'
                                    className={`btn-opt-col ${blanco}`}
                                    onClick={changeSelectedBlanco}
                                >Blanco</button>
                                <button
                                    type='button'
                                    className={`btn-opt-col ${rojo}`}
                                    onClick={changeSelectedRojo}
                                >Rojo</button>
                                <button
                                    type='button'
                                    className={`btn-opt-col ${verde}`}
                                    onClick={changeSelectedVerde}
                                >Verde</button>
                                <button
                                    type='button'
                                    className={`btn-opt-col ${amarillo}`}
                                    onClick={changeSelectedAmarillo}
                                >Amarillo</button>
                                <button
                                    type='button'
                                    className={`btn-opt-col ${azul}`}
                                    onClick={changeSelectedAzul}
                                >Azul</button>
                            </div>
                        </fieldset>
                        <Link to='/home'>
                            <Button type="button-orange" text="Comprar ahora"/>
                        </Link>
                    </div>
                    <p className='close-card-popup' onClick={changeOpen}>
                        &times;
                    </p>
                </div>
                
            </div>
        </>
    )
}