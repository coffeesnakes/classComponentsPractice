import React from "react";
import SeasonDisplay from "./Seasons.js"

class App extends React.Component {

  state = {
    lat: null,
    Failure_To_Load: "",
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ Failure_To_Load: err.message })
    );
  }

  componentDidUpdate() {
    console.log("log on update");
  }

  render() {
    if (this.state.Failure_To_Load && !this.state.lat) {
      return <div>FAILED TO LOAD: {this.state.Failure_To_Load}</div>;
    }
    if (this.state.lat && !this.state.Failure_To_Load) {
      return < SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading...</div>;
  }
}

export default App;
