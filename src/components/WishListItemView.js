import React from 'react';


const WishListItemView = ({ item }) => (
  <li>
    {item.image && <img src={item.image} alt=''/>}
    <h3>{item.name}</h3>
    <span>{item.price}</span>
  </li>
)

export default WishListItemView;