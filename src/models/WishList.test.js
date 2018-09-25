import { getSnapshot, onPatch } from 'mobx-state-tree'
import { WishListItem, WishList } from './WishList'
import { reaction } from 'mobx';

// NOTES:
// The flow of data is shared as it changes from one test to the next
// (ie: the list and items declared at the top are changed so that the bottom test state refelcts the actions of all prior tests)
// Snapshots capture entire tree
// Patches capture single value


const list = WishList.create({
  items: [
    {
      name: "chronicles of narnia",
      price: 33.33
    }
  ]
})
const item = WishListItem.create({
  "name": "Chronicle of Narnia",
  "price": 28.72,
})

it("can create an instance of a item", () => {
  expect(item.price).toBe(28.72)
  expect(item.image).toBe("")
})

it("can change item name", () => {
  item.changeName("Inception");

  expect(item.name).toBe("Inception")
})

it("can create a wishlist", () => {


  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(33.33)

})

it("can add an item to wishList", () => {
  list.addItem({
    name: "the haunting",
    price: 44.44
  })

  //VALIDATE ENTIRE OBJECT ALL AT ONCE IN SNAPSHOT
  expect(getSnapshot(list)).toEqual({
    items: [
      {
        name: "chronicles of narnia",
        price: 33.33,
        image: ""
      },
      {
        name: "the haunting",
        price: 44.44,
        image: ""
      }
    ]
  })
  //VALIDATE SINGLE PROPERTY IN SNAPSHOT
  expect(getSnapshot(list).items[1].name).toEqual('the haunting')
})

it("can calculate total price view", () => {
  const list = WishList.create({
    items: [
      {
        name: "chronicles of narnia",
        price: 33.33,
        image: ""
      },
      {
        name: "chronicles of narnia",
        price: 44.44,
        image: ""
      }
    ]
  })
  expect(list.totalPrice).toEqual(77.77)
//REACTIONS
  let changed = 0;
  reaction(() => list.totalPrice, () => changed++)

  expect(changed).toBe(0);
  console.log(list.totalPrice)
  list.items[0].changeName("TEST");
  expect(changed).toBe(0);
  list.items[0].changePrice(12.34);
  expect(changed).toBe(1);
})