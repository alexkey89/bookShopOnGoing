import React, {Component} from 'react';
import {Row, Col, Well, FormGroup, Button, Panel, FormControl, ControlLabel, InputGroup, DropdownButton, Image, MenuItem} from 'react-bootstrap';
import {postContactMessage, resetButton, fetchMessage} from '../../actions/ContactActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';

class ContactForm extends Component{
    componentDidMount(){
        this.props.fetchMessage()
    }
    handleSubmit(e){
        e.preventDefault();
        const contactForm = [{
            firstName: findDOMNode(this.refs.firstName).value,
            bookRequest: findDOMNode(this.refs.bookRequest).value,
            price: findDOMNode(this.refs.price).value
        }]
        this.props.postContactMessage(contactForm)
        
    }

    resetForm(e){
        this.props.resetButton();
        findDOMNode(this.refs.firstName).value = '';
        findDOMNode(this.refs.bookRequest).value = '';
        findDOMNode(this.refs.price).value = '';
    }
    
    render(){
        const contactMsg = this.props.contacts.map(function(i){
            return <div key={i._id}>
                        <p>Requested book:{i.bookRequest}</p>
                        <p>Requested by: {i.firstName}</p>
                        <p>Price requested: {i.price}</p>
                    </div>
        })
        return(
           <Well>
            <Row>
            <Col>
            {contactMsg}
                <Panel>
                    <Col xs={12} sm={6}>
                     <Panel>
                    <FormGroup controlId="firstName" validationState={this.props.validation}>
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter First Name"
                            ref="firstName"
                         />
                         <FormControl.Feedback />
                    </FormGroup>
                   <FormGroup controlId="bookRequest" validationState={this.props.validation}>
                        <ControlLabel>Book Name</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter Book request"
                            ref="bookRequest"
                         />
                         <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="price" validationState={this.props.validation}>
                        <ControlLabel>Price Range</ControlLabel>
                        <FormControl 
                            type="number"
                            placeholder="Set price range"
                            ref="price"
                         />
                         <FormControl.Feedback />
                    </FormGroup>
                    <Button 
                        onClick={!this.props.msg ? this.handleSubmit.bind(this):this.resetForm.bind(this)}
                        bsStyle={!this.props.style ? 'primary': this.props.style}>
                        {!this.props.msg ? ('Submit request') : this.props.msg}
                    </Button>
                </Panel>
            </Col>        
                </Panel>
            </Col>
            </Row>
           </Well>
        )
    }
}

function mapStateToProps(state){
    return{
        contacts: state.contact.contact,
        msg: state.contact.msg,
        style: state.contact.style,
        validation: state.contact.validation
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {postContactMessage, resetButton, fetchMessage}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
