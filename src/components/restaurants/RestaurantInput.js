import React, { Component } from 'react';

class RestaurantInput extends Component {

  // constructor(props) {
  //   super(props);

    state = {
      name: ''
    };
  // };

  handleOnChange = event => {
    this.setState ({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        Enter New Restaurant:
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange}>Restaurant Name:</input>
          <input type='submit' />  
        </form>      
      </div>
    );
  }
};

export default RestaurantInput;
