import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = { loaded: false };
      }
    
    render() { 
        const loaded = this.state.loaded; 
        return (
            <div>
                <div className="AF-Header AF-Header-Font">
                        <link href="https://fonts.googleapis.com/css?family=Sacramento&display=swap" rel="stylesheet" onLoad={() => {
                            this.setState({ loaded: true });
				      	}}/>
                        <link href="https://fonts.googleapis.com/css?family=Oxygen&display=swap" rel="stylesheet" />
                        { loaded ? ( <div>
                            happily ever after </div>
                        ) : (
                            <div></div>
                        )}
                </div>
            </div>
        );
    }
}
export default Header;