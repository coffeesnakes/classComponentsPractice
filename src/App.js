import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      Failure_To_Load: '',

    };
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        // setState is how you manipulate the state object
        this.setState({lat: pos.coords.latitude});
      },
      (err) => {
        this.setState({ Failure_To_Load: err.message });
      }
    );
  }
  render() {
    return <div> Latitude: {this.state.lat}
    <br />
  <div>Failed to load: {this.state.Failure_To_Load}</div>
    </div>
  }
}

export default App;

