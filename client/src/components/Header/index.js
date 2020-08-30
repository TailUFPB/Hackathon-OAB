import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import { useHistory, Redirect } from 'react-router-dom';

//css
import './header.css';

function Header (){
    const pages = ['Home', "Respiradores", "Licitações","Sobre"];
    const [updateHeader, setUpdateHeader] = useState(false);
    const [show, setShow] = useState(false)

    const history = useHistory();

    function redirect(page){
        const link = '/' + page;

        history.push(link);
    }

    useEffect(() => {
        const handleScreen = setInterval(() => {
            if(window.outerWidth > 500){
                setUpdateHeader(false)
            }else{
                setUpdateHeader(true)
            }
        }, );
      }, []);

    return(
        <Navbar className='header' fixed='top'>
            <Navbar.Brand style={{color: '#FFFFEE', fontSize: 30}} onClick={() => redirect('Home')}>
                <img src={require('../../images/white_logo.png')} style={{height: 40, width: 30}}/>
                Hermes
            </Navbar.Brand>
            {
                updateHeader === false ?
                <Navbar.Collapse className='pages'>
                    {
                        pages.map(page => (
                            <Nav.Link style={{color: '#FFFFEE', fontSize: 30}} onClick={() => redirect(page)}>{page}</Nav.Link>
                        ))
                    }
                </Navbar.Collapse>
                :
                <Navbar.Collapse className='justify-content-end'>
                    <img src={require('../../images/menu.png')} style={{height: 30}} className="menu-icon" onClick={() => setShow(!show)}/>
                </Navbar.Collapse>
            }
            <Modal
                show={show}
                onHide={() => {setShow(false)}} animation={false}
            >
                <div className="phone-menu">
                    {
                        pages.map(page => (
                        <h4 onClick={() => redirect(page)}>{page}</h4>
                        ))
                    }
                </div>
            </Modal>
        </Navbar>
    )
};

export default Header;