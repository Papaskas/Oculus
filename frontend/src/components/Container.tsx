import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from '@/components/Header';
import BootstrapContainer from 'react-bootstrap/Container';
import {Badge} from 'react-bootstrap';

function Container() {
    const pathName = useLocation().pathname;
    return (
        <>
            <Header/>
            <BootstrapContainer>
                <header className="d-flex justify-content-end mb-5">
                    <h1><Badge bg="success">{ pathName.slice(1) }</Badge></h1>
                </header>
                <Outlet/>
            </BootstrapContainer>
        </>
    );
}

export default Container;
