function myNes() {
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      "outside": {
        "trunk": "jasck"
      }
    }
  };

  var gloveBoxContents = myStorage.car.inside["glove box"];

  return gloveBoxContents;


}

myNes();


console.log(myNes());

module.exports = myNes;
