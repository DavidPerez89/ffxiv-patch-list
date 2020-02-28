import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../styles/Herotron.scss';

class Herotron extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Final Fantasy XIV Patch List</h1>
                <p>
                    A simple app that gathers up a list of patches for Final Fantasy XIV and 
                    displays it in a handy list below. <br />
                    Try clicking the Patch Name or Expansion 
                    columns for sorting or even typing in the search bar for filtered results!
                </p>
            </Jumbotron>
        );
    }
}

export default Herotron;