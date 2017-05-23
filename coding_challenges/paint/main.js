const Math = require('math')

const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000
  setTimeout( () => {
    const foundItem = warehouse.find((obj) => obj.item === item);

    if (foundItem) {
      callback(foundItem);
    }

  }, deliveryTime )
}


let paintMixed = false;
let brush = null;
orderSupplies('paint', (delivery) => {
  console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)
  paintMixed = true;
  if (brush){
    console.log(`${brush.item} delivered! Time to ${brush.action()}`)
  }
});

orderSupplies('brush', (delivery) => {
  if (paintMixed)
    console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)
  else
    brush = delivery
});
