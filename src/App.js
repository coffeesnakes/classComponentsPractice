import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      Failure_To_Load: "",
    };
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        // setState is how you manipulate the state object
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => {
        this.setState({ Failure_To_Load: err.message });
      }
    );
  }
  render() {
    if (this.state.Failure_To_Load && !this.state.lat) {
      return <div>FAILED TO LOAD: {this.state.Failure_To_Load}</div>;
    }
    if (this.state.lat && !this.state.Failure_To_Load) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

export default App;
