import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import loadPayPalLogo from '../public/pp-logo-150px.png';

import loadVenmoLogo from '../public/venmo_logo_blue.png';

class ContributeButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = { button1:
            <Button variant="light" onClick={this.button1Clicked}>
                <p className="RegText MainFont">Donate to our Honeymoon Fund</p>
            </Button>,
            button2:
            <Button variant="light"  onClick={this.button2Clicked}>
                <div className="RegText MainFont">Our Wedding Registry</div>
            </Button>,
            buttonLoaded: false,
      }
    }

    componentDidMount() {
        this.setState( { button1:
            <Button variant="light"  onClick={this.loadPayPal}>
                <div className="RegText MainFont">Donate to our Honeymoon Fund</div>
            </Button>,
            button2:
            <Button variant="light"  onClick={this.registryClicked}>
                <div className="RegText MainFont">Our Wedding Registry</div>
            </Button>,
        });
    }

    componentDidUpdate() {
        if (this.state.buttonLoaded) { this.newData.scrollIntoView({ behavior: "smooth" })}
    } 

    loadPayPal = () => {
        window.open('https://paypal.me/weddedaf', "_blank");
    }

    registryClicked = () => {
        window.open('https://www.amazon.com/wedding/anastasia-hardin-feliks-peysakhov--august-2020/registry/2UBVY6LA888CR', "_blank");
    }

    render() {
        const {button1,button2} = this.state;
        return (
            <div>
            <p className="RegText">{button1}</p>
            <br></br>
            <p className="RegText">{button2}</p>
            </div>
        );
    }
};

export default ContributeButtons;