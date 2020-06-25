// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const allGuests = earlyBirds.concat(lateComers);


const printGuestOrder =(arr1, arr2 ) =>{
    let allComers = arr2.concat(arr1);
    for (let i=0; i<allComers.length; i++){
        console.log(`${i+1}.${allComers[i]}`);
    }

}

printGuestOrder(lateComers, earlyBirds);