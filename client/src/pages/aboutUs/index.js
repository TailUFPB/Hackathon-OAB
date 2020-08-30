import React from 'react';

//components
import Header from '../../components/Header';

//css
import './about-us.css';

function AboutUs(){
    return(
        <div style={{backgroundColor: '#f0f0f0'}}>
            <Header />
            <div className="container">
                <h1 className='title'>Quem somos?</h1>
                <div className='info-block'>
                    <div className='title-block'>
                        <h1>A Plataforma</h1>
                    </div>
                    <p className='text-block'>Hermes não é nosso nome à toa. O deus grego é considerado um dos mais irreverentes, sendo o mensageiro dos deuses. O cajado, seu maior símbolo, é utilizado para representar a Medicina nos dias atuais. Assim, somos uma plataforma que facilita o acesso e transparência das informações relacionadas aos gastos públicos na área de Saúde, com enfoque no período de pandemia da COVID-19.  </p>
                </div>
                <div className='info-block'>
                <div className='title-block'>
                        <h1> Nossa visão </h1>
                    </div>
                    <p className='text-block'>Nós acreditamos que a gestão pública deve ser transparente com os gastos do dinheiro que é recebido através dos impostos, não apenas cumprindo a Lei de Acesso à Informação ao fornecer dados à população, mas também garantindo a sua compreensão.</p>
                </div>
                <div className='info-block'>
                    <div className='title-block'>
                        <h1>Nossa meta</h1>
                    </div>
                    <p className='text-block'>Nós temos como objetivo levar os dados a você, de forma mais fácil, rápida e acessível, promovendo uma maior fiscalização dos investimentos públicos pela população - a maior interessada - durante a pandemia. Assim, pode-se validar a eficiência e economicidade das compras públicas em um simples clique. </p>
                </div>
                <div className='info-block'>
                    <div className='title-block'>
                        <h1>Como funcionamos</h1>
                    </div>
                    <p className='text-block'>Utilizamos toda a base de dados oficial disponibilizada pelos órgãos públicos e transformamos em formatos mais acessíveis à população, através do uso de gráficos e técnicas de design thinking.</p>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;