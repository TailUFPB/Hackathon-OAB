import React, { useState } from 'react';
import {  Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

//components
import Header from '../../components/Header';

//css
import './home.css';

function Home(){
    const [updateImage, setUpdateLogo] = useState(false)
    const history = useHistory();

    return(
        <div style={{backgroundColor: '#f0f0f0', height: window.outerrHeight}}>
            <Header />
            <div className='home'>
                <div className="main">
                    <img src={require('../../images/logo.png')} className='logo'/>
                    <div className="content">
                        <h2>Veja onde foi parar o seu dinheiro</h2>
                        <h1>Durante a pandemia do COVID-19</h1>
                        <div className='btn-row'>
                            <Button onClick={() => history.push('/respiradores')}>Respiradores</Button>
                            <Button onClick={() => history.push('/licitações')}>Licitações</Button>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', padding: 20, marginTop: 40}}>
                    <div className='graphics-row'>
                        <div className='graphic'>
                            <h2>Total de mortos no município da Paraíba</h2>
                            <iframe src='https://flo.uri.sh/visualisation/3604832/embed' frameborder='0' scrolling='no' />
                        </div>
                        <div className='graphic'>
                            <h2>Total de casos por município</h2>
                            <iframe src='https://flo.uri.sh/visualisation/3604796/embed' frameborder='0' scrolling='no'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;