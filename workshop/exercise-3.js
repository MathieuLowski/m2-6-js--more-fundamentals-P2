// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

const orderedList = (arr) =>{
  const finalMenu = [...arr].sort(); 
  for (let i=0; i<arr.length; i++){
    console.log(`${finalMenu[i]} (${arr.indexOf(finalMenu[i])+1})`);
  }
}
orderedList(mostPopularFood);