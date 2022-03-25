import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AppBar} from 'components/appbar';

//security
import {auth} from 'libs/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import { Link } from "react-router-dom";

function PageNotFound (props) {
    const [isAuth, checkIsAuth] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if(user){
            checkIsAuth(true);
        } else {
            checkIsAuth(false);
        }
    })

    return(
        <>
            <AppBar/>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col className="py-5" md="auto" style={ {fontSize: "4rem"} }><h1>404: Page Not Found</h1></Col>
                </Row>
                <Row>
                {
                    isAuth ? <Link to='/dashboard'>Back to Dashboard</Link> : <Link to='/'>Login to Start</Link>
                }
                </Row>
            </Container>
        </>
    )
}
export default PageNotFound;