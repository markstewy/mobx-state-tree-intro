import { types } from "mobx-state-tree"

// const data = {
//   "name": "Chronicle of Narnia",
//   "price": 28.72,
//   "image": "https://images-na.ssl-images-amazon.com/images/I/51K6iSgqUqL._AC_UL160_.jpg"
// }

export const WishListItem = types.model({
  name: types.string,
  price: types.number,
  image: ""
})
.actions(self => ({
  changeName: function(newName) {
    self.name = newName;
  },
  changePrice: function(newPrice) {
    self.price = newPrice;
  },
  changeImage: function(newImage) {
    self.image = newImage;
  }
}))

export const WishList = types.model({
  items: types.optional(types.array(WishListItem), [])
})
.actions(self => ({
  addItem: function(item) {
    self.items.push(item)
  }
}))
.views(self => ({
  get totalPrice() {
    return self.items.reduce((agg, instance) => agg + instance.price, 0)
  }
}))