import Sort from './components/Sort';
import Filter from './components/Fillter';
import Map from './components/Map';
import React, { Component } from 'react';
import './main.css'


export default
  class App extends Component {

  state = {
    firstName: 'dfgdfg',
    lastName: 'dfgdd'
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    return (
      <div className="App">
        <form>
          First Name: <input type='text' name='firstName' value={this.state.firstName} onChange={() => this.handleOnChange()} /> <br></br>
          Last Name: <input type='text' name='lastName' value={this.state.lastName} onChange={() => this.handleOnChange()} />
        </form>
      </div>
    );
  }
}

