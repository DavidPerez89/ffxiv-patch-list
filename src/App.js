import React, { Component } from 'react';
import Herotron from './components/Herotron';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getDataFromBackend();
  }

  getDataFromBackend = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((data) => console.log(data))
      .then((data) => this.setState({ data: data }));
  };

  render() {
    return (
      <div>
        <Herotron />
     </div>
    )
  }
}

export default App;