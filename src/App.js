import React, { Component } from 'react';
import WishListView from './components/WishListView';

class App extends Component {
  render() {
    console.log(this.props.wishList)
    return (
      <div>
        <WishListView wishList={this.props.wishList} />
      </div>
    );
  }
}

export default App;
