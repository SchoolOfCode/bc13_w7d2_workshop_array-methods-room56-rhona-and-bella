const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(function(itemOfCats) {
    console.log(itemOfCats)
  return itemOfCats.toUpperCase();

  
}

)
console.log(capitalisedCats);