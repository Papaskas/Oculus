import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import BootstrapContainer from 'react-bootstrap/Container';


function Index() {
  return (
    <>
      <Header/>
      <BootstrapContainer>
        <Outlet/>
      </BootstrapContainer>
    </>
  );
}

export default Index;
