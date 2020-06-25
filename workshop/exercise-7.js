// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function
const createRecommendations = (pairing) => {
  return Object.keys(pairing).map((food) => {
    return `With ${food} it is best to have ${pairing[food]}.`;
  });
};
// printRecommendations function
const printRecommendations = (recomendation)=>{
  recomendation.forEach((recomendation)=>{
    console.log(`${recomendation}`);
  });
}


// function call (done)
printRecommendations(createRecommendations(foodPairings));
