import React from 'react';
import {Container} from "react-bootstrap";
import {AppBar} from './../components/appbar';
import {SideBar} from './../components/sidebar';
import {Panels} from './../components/panels';




function DashBoardPage  (props){

    return(
        <>
      
        <AppBar/>
        <Container className='d-flex'>
            <SideBar />
            <Panels />

        </Container>
        </> 
    )
}

export default DashBoardPage; 