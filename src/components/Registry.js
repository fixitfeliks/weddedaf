import React from 'react';
import Iframe from 'react-iframe';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContributeButtons from './ContributeButtons';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  imageLoaded: false }
    }
    
    componentDidMount() {
      const img = new Image();
      img.src = this.props.regPic;
      img.onload = () => {
       this.setState({ imageLoaded: true });
      }
    }
    
    render() {
        const {imageLoaded, buttonLoaded, buttonClicked, button, buttons} = this.state;
        return (
            <div className="AF-Content">
                <Col>
                <Row>
                <div className="AF-Img-Div"> 
                    
                    {imageLoaded ? (
                        <div>
                            <img className="AF-Img" src={this.props.regPic} />
                            <div className="AF-Img-Text">
                                        <p className="MText MainFont">Dear friends and family<br></br></p>
                                        <p className="SText MainFont">We're so excited that we get to share our big day with you, and we will be happy just to have your company! We decided to dedicate our registry to supporting our honeymoon. If you would like to contribute you can with as little or as much as you'd like. And if not, your presence on our big day is all we need!</p>
                                        <br/>
                                        <ContributeButtons/>
                            </div>
                        </div>
                    ) : (<p className="AF-Loading">Loading...</p>)}
                </div>
                </Row>
            </Col>
            </div>
        );
    }
};

export default Navigation;