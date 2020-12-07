import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
    };
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        // setState is how you manipulate the state object
        this.setState({lat: pos.coords.latitude});
      },
      (err) => console.log("failed to get location", err)
    );
  }
  render() {
    return <div> Latitude: {this.state.lat} </div>;
  }
}

export default App;

