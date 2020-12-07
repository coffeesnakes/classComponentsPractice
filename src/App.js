import React  from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
    };
  }
  render() {
           window.navigator.geolocation.getCurrentPosition(
             pos => console.log(pos),
             err => console.log("failed to get location", err)
           );
           return <div> Latitude: </div>
  }
}

export default App;

