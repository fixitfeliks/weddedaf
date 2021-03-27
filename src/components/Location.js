import React from 'react';
import Iframe from 'react-iframe';
import locPic from './bb.jpg'

const mapStyles = {
  width: '100%',
  height: '100%',
};



class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  imgLoaded: false };
  }

  componentDidMount(){
    const img = new Image();
      img.src = locPic;
      img.onload = () => {
       this.setState({ imageLoaded: true });
      }
  }

  render() {
    const { imageLoaded } = this.state;
    return (
      <div>
        
          {imageLoaded ? (
            <div className="AF-Content">
            <div className="AF-Img-Div"> 
                <img className="AF-Img" src={locPic} />
                <div className="AF-Img-Text">
                  <p className="LText MainFont">Bacchus Bistro</p>
                  <p className="MText MainFont">409-411 Atlantic Avenue<br></br>Brooklyn, NY</p>
                  <p className="MText MainFont">5:30 PM!</p>
                </div>
              </div>
            
            <div className="AF-Stacked">
            <br/>
              <Iframe url="https://www.google.com/maps/embed/v1/place?key=AIzaSyCya1r2GK8aTVR8RFUwSc2vGNzUpcax2Io&q=40.6869639,-73.9843521"
              width="90%"
              height="450px"
              id="myId"
              className="Content"
              display="initial"
              position="relative"/>
            </div>
          </div>
          )  : (<p className="AF-Loading">Loading...</p>)}

        </div>
    );
  }
}

export default Location;