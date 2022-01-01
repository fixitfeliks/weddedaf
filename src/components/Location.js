import React from "react";
import Iframe from "react-iframe";
import locPic from "../assets/bb.jpg";
import { GMAPS_API_KEY } from "../.env.js";

const gMapsURL = `https://www.google.com/maps/embed/v1/place?key=${GMAPS_API_KEY}&q=40.6869639,-73.9843521`;

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgLoaded: false };
  }

  componentDidMount() {
    const img = new Image();
    img.src = locPic;
    img.onload = () => {
      this.setState({ imageLoaded: true });
    };
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
                <p className="MText MainFont">
                  409-411 Atlantic Avenue<br></br>Brooklyn, NY
                </p>
                <p className="MText MainFont">5:30 PM!</p>
              </div>
            </div>

            <div className="AF-Stacked">
              <br />
              <Iframe
                url={gMapsURL}
                width="90%"
                height="450px"
                id="myId"
                className="Content"
                display="initial"
                position="relative"
              />
            </div>
          </div>
        ) : (
          <p className="AF-Loading">Loading...</p>
        )}
      </div>
    );
  }
}

export default Location;
