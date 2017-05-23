const Math = require('math')

const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random() * 3000 + 1000;


  return new Promise((resolve, reject) => {
    setTimeout( () => {
        const foundItem = warehouse.find((obj) => obj.item === item);

        if (foundItem) {
            resolve(foundItem);
        }

    }, deliveryTime );
  })
}

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)

let brush = orderSupplies('brush')
let paint = orderSupplies('paint')

paint.then((thing)=>{
  printItem(thing)
  brush.then((thing)=>{
    printItem(thing)
  })
})




// let brush = null
// let paint = null

//const orderSupplies = new Promise((resolve, rject)=>{
  

// orderSupplies('paint', (delivery) => {
//   paint = delivery
//   console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)
//   if (brush){
//     console.log(`${brush.item} delivered! Time to ${brush.action()}`)
//   }
// });
// orderSupplies('brush', (delivery) => {
//   if (paint){
//     console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)
//   } else {
//     brush = delivery
//   }
// });


// const receiptA = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve();
//   }, Math.random() * 1000)
// });
// const receiptB = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve();
//   }, Math.random() * 1000)
// });

// receiptA.then(()=>{
//   console.log('A has resolved')
// }).then(()=>{
//   receiptB.then(()=>{
//     console.log('B has resolved')
//   })
// })
