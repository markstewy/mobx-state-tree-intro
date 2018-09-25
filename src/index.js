import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { WishList } from './models/WishList';

const wishList = WishList.create({
  items: [
    {
      name: "chronicles of narnia",
      price: 33.33,
      image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
    },
    {
      name: "chronicles of narnia",
      price: 44.44,
      image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
    }
  ]
})

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
registerServiceWorker();
