var myPetsArray = [
  {
    "animalType": "Dog",
    "name": [
      "Pujdo",
      "Maca",
      "Tweety"
    ]
  },
  {
    "animalType": "Cat",
    "name": [
      "Pujdo",
      "Maca",
      "Tweety"
    ]
  },
  {
    "animalType": "Bird",
    "name": [
      "Pujdo",
      "Maca",
      "Tweety"
    ]
  }

];


function myPetsFunction(pets) {

return myPetsArray[1].name[1];

}

myPetsFunction(myPetsArray);

console.log(myPetsFunction(myPetsArray));

module.exports = myPetsFunction;

module.exports.myPets = myPetsArray;
