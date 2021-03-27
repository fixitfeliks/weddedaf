import React from 'react'
import homePic from './us.jpg';
import ContributeButtons from './ContributeButtons';

class Home extends React.Component {

  constructor(props) {
    var tweddingDate = new Date("08/29/20");
    var todaysDate = new Date();
    var timeDiff = tweddingDate.getTime() - todaysDate.getTime();
    var dateDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    super(props);

    this.state = { weddingDate: dateDiff, imgLoaded: false };
  }

  componentDidMount(){
    const img = new Image();
      img.src = homePic;
      img.onload = () => {
       this.setState({ imageLoaded: true });
      }
  }

  render() {
    const { imageLoaded } = this.state;
    return (
      <div>
        {imageLoaded ? (
          <div>
            <div className="AF-Img-Div"> 
                <img className="AF-Img" src={homePic} />
                <div className="AF-Img-Text">
                    <p className="LText MainFont">Anastasia & Feliks</p>
                    <p className="MText MainFont">August 29, 2020 • Brooklyn, NY</p>
                    <p className="SText MainFont">{this.state.weddingDate} days to go!</p>
                    <br/>
                    <ContributeButtons/>
                </div>                          
            </div>
            <br/>
            <br/>
            <div className="AF-Col"> 

            <div className="MText MainFont">Dear friends and family<br></br></div>
            <div className="SText MainFont">We're so excited that we get to share our big day with you, and we will be happy just to have your company! We decided to dedicate our registry to supporting our honeymoon. If you would like to contribute you can with as little or as much as you'd like. And if not, your presence on our big day is all we need!</div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
              ) : (<p className="AF-Loading">Loading...</p>)}
        </div>
    );
  }
}

export default Home;
