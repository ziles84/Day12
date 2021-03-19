var collection = {

  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },

  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },

  1245: {

    artist: "Robert Palmer",
    tracks: []
  },

  5439: {

    album: "ABBA Gold",

  }

};


var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {

  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && object[id].hasOwnProperty("tracks") === false) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}


updateRecords(collection, 5349, "artist", "ABBA");


console.log(updateRecords(collection, 5349, "artist", "ABBA"));

console.log(updateRecords(collection, 5349, "tracks", "Take a Chance on Me"));

console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));

module.exports = updateRecords;
