// Exercise 4
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

const converter = (obj) => {
  let foodList = Object.keys(foodPairings);
  let drinkList =Object.values(foodPairings);
  let splitPairing = [[foodList], [drinkList]];
  return splitPairing;
  // do something
};

console.log(converter(foodPairings));
