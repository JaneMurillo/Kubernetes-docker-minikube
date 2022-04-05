import React from 'react'
import './footer.css'

export function Footer () {
    return(

        <>
            <footer>
                <div className='footer-blue-div'>
                    <div className='foot-nav'>
                        <ul className='foot-nav-ul'>
                            <li className='foot-nav-li'>Kubernetes y Docker</li>
                        </ul>
                    </div>
                    <div className='footer-line-div'><hr></hr></div>
                    <div className='footer-warning-div'>
                        <p className='foot-warning-p'>Computación Tolerante a Fallas</p>
                    </div>
                </div>
            </footer>
        </>
    )
}