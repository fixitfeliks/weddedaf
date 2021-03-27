import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {home: false, accommodations: false, registry: false};
    }
    render() {
        const {home, accommodations, registry } = this.state;
        return (
            <div className="AF-Nav-Div">
            <div className="AF-Nav-Bar">
            <Navbar  >
                <Nav className="mr-auto AF-Nav-Item">
                <Switch>
                    <Route exact path="/">
                        <Nav.Link as={Link} to="/" className="NavText MainFont">Our Wedding</Nav.Link>
                        <Nav.Link as={Link} to="/accommodations" className="NavText MainFont">Accommodations</Nav.Link>
                    </Route>
                    <Route exact path="/accommodations">
                    <Nav.Link as={Link} to="/" className="NavText MainFont">Our Wedding</Nav.Link>
                        <Nav.Link as={Link} to="/accommodations" className="NavText MainFont">Accommodations</Nav.Link>
                    </Route>
                </Switch>
                   
                       
                    </Nav>
            </Navbar>
            </div>
            </div>
        );
    }
}
export default Navigation;