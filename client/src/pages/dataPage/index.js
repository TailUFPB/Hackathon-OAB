import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { Modal, Button, ModalTitle } from 'react-bootstrap';

//components
import Header from'../../components/Header';

//css
import './data-page.css';

function DataPage(props){
    const [show, setShow] = useState();

    return(
        <div style={{height: window.innerHeight}}>
            <Header />
            {
                props.type === 'respiradores' ?
                <Iframe url="https://covid-visbrasil.herokuapp.com/"
                loading='Acessando dados'
                width="100%"
                height="100%"
                id="dataPage"
                display="initial"
                position="relative"/>
                :
                <div className="content-data">
                    <p>
                    Para a análise de licitações foram retiradas todas as licitações disonibilizadas pelo TCE-PB (https://tce.pb.gov.br/servicos/dados-abertos-do-sagres-tce-pb). O banco de dados referentes às licitações  
                    é formado pelas licitações do estado da Paraíba como modalidade COVID. Os dados referentes às populações de cada município foram retirados do IBGE (https://sidra.ibge.gov.br/tabela/6579). As bases de
                    dados dos casos e óbitos da COVID-19 foram retiradas do (https://covid.saude.gov.br/).
                    </p>
                    <p>
                    Os 3 bancos de dados foram relacionados de acordo com os municípios da Paraíba e então, foram realizadas as seguintes análises:
                    </p>
                    <p>
                    Gráfico 1: Foi observado o valor total da propostas de licitações aprovadas de acordo com o tipo de administração (direta ou indireta). Por exemplo, direta são recursos provenientes das prefeituras e indireta são capitais de fundos.
                    </p>
                    <p>
                    Gráficos 2 e 3 um ao lado do outro: Foi extraída a informação relacionada ao valor total (R$) recebido e quantidade de licitações vencidas por cada um dos licitantes cuja propostas foram aprovadas em certames relacionadas ao COVID-19.
                    </p>
                    <p>
                    Grafico 4: Foram visualizados os valores médios (R$) das licitações aprovadas por cada município de acordo com todos os casos acumulados de COVID-19 registrados na base de dados do covid-saude até o dia 28/08/2020. Na construção desse gráfico foi utilizado o valor acumulado das licitações dividido pelo número de casos registrados em cada município. Esse mesmo estudo foi proposto utilizando o número de óbitos, porém alguns municípios não apresentavam óbitos, o que não tornou possível a realização dessa análise. Sendo assim, nesse gráfico pode-se observar que municípios do interior gastam em média mais que cidades maiores como João Pessoa e Campina Grande.
                    </p>
                    <p>
                    Grafico 5: Foi mostrado o valor médio das licitações vencidas em relação ao número de habitantes em cada município, ou seja, valor total (R$) das licitações dividido pela população de cada município. Assim, podemos observar o valor médio de recursos públicos por habitante dentro de um determinado município.
                    </p>
                    <Modal
                        size={'xl'} scrollable={true} onHide={() => {setShow(false)}} animation={false}
                        show={show}
                        style
                    >
                        <ModalTitle className='header-modal' style={{margin: 20}}>
                            <img src={require('../../images/botao.png')} style={{height: 20}} onClick={() => setShow(false)}/>
                        </ModalTitle>
                        <Iframe
                        width="100%"
                        height='800'
                    src="https://app.powerbi.com/view?r=eyJrIjoiOGU0Nzk5YzMtYTViYS00MzNkLWE0MjgtNmEzNDllNWM0OTNmIiwidCI6ImRjYmYyYTFmLTk1MzItNGQ1Ni1hYzQxLTU2MTVlMzhlNTBiNyJ9&pageName=ReportSection" 
                    frameborder="0" allowFullScreen="true"/>
                    </Modal>
                    <Button onClick={() => setShow(true)}>Visualizar gráficos</Button>
                </div>
            }
        </div>
    )
};

export default DataPage;