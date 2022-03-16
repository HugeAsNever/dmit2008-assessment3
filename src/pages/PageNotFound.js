import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AppBar} from './../components/appbar';
function PageNotFound (props) {
    return(
        <>
            <AppBar/>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col className="py-5" md="auto" style={ {fontSize: "4rem"} }><h1>404: Page Not Found</h1></Col>
                </Row>
            </Container>
        </>
    )
}
export default PageNotFound;