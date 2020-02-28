import React, { Component } from 'react';
import Herotron from './components/Herotron';
import SearchTable from './components/SearchTable';

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
      .then((data) => this.setState({ data: data }))
  };

  render() {
    return (
      <div>
        <Herotron />
        <SearchTable data={this.state.data} />
     </div>
    )
  }
}

export default App;