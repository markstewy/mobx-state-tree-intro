import React from 'react';
import WishListItemView from './WishListItemView';
import { observer } from 'mobx-react';


const newItem = {
    name: "chronicles of narnia",
    price: 44.44,
    image: "https://images-na.ssl-images-amazon.com/images/I/71EwgGuAS9L._SY606_.jpg"
}

const WishListView = ({ wishList }) => (
  <div>
    <button onClick={() => wishList.addItem(newItem)}> add </button>
    ${wishList.totalPrice}
    <ul>
      {wishList.items.map((item, index) => {
        return (<WishListItemView
          key={index}
          item={item}
        />)
        
      })}
    </ul>
  </div>
)

export default observer(WishListView);