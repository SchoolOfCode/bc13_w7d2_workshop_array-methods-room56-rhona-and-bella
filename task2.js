let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter( function(animal) {
  console.log(animal.charAt(0))
  if (animal.charAt(0) == 'b') {
    return true
  } else {
    return false
  }
})

console.log(bListAnimals)
