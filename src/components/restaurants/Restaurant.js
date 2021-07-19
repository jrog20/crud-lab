import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleOnClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleOnClick()}> X </button>
          {/* ReviewsContainer should be nested within the Restaurant component so reviews 
          are displayed underneath the restaurant they belong to */}
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
