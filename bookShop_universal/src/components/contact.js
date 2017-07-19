import React, {Component} from 'react';
import {Carousel, Grid, Col, Row, Button} from 'react-bootstrap';
import ContactForm from './pages/contactForm';

class Contact extends Component{
    render(){
        return(
            <Grid>
                <Row style={{margin: '15px'}}>
                <Col xs={12} sm={6}>
                    <ContactForm />
                </Col>
                </Row>
            </Grid>
        )
    }
}

export default Contact;