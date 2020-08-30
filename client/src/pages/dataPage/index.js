import React from 'react';
import Iframe from 'react-iframe';

//components
import Header from'../../components/Header';

function DataPage(props){
    return(
        <div style={{height: window.innerHeight, backgroundColor: '#f0f0f0'}}>
            <Header />
            <Iframe url="https://covid-visbrasil.herokuapp.com/"
                loading='Acessando dados'
                width="100%"
                height="100%"
                id="dataPage"
                display="initial"
                position="relative"/>
        </div>
    )
};

export default DataPage;