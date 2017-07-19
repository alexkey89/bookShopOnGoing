import React, {Component} from 'react';
import {Well, Col, Row} from 'react-bootstrap';

export default class About extends Component{
    render(){
        return(
           <Well>
                <Row>
                    <Col xs={12} className="text-center">
                        <h1>About us</h1>
                    </Col>
                </Row>
           </Well>
        )
    }
}
