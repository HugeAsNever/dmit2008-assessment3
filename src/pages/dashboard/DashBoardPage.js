import React from 'react';
import {AppBar} from 'components/appbar';
import {SideBar} from 'components/sidebar';
import {Panels} from 'components/panels';
import {DashBoardPageStyles} from "./styles";




function DashBoardPage  (props){

    return(
        <>
            <AppBar/>
            <DashBoardPageStyles>
                <SideBar />
            <Panels />
            </DashBoardPageStyles>

        </> 
    )
}

export default DashBoardPage; 