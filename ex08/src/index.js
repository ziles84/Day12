var contact = [{
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"]
  },

  {
    "firstName": "Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python", "Swift", "R"]
  },

  {
    "firstName": "Richard",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React", "Angular", "Vue"]
  },

  {
    "firstName": "Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["JavaScript", "Node", "HTML & CSS"]
  }

];


function lookUpProfile(name, prop) {

    for (var i = 0; i < contact.length; i++) {
      if (contact[i].firstName === name) {
        return contact[i][prop] || "No such property";
      }
    }
    return "No such contact";

}


console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("John", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "numbers"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));




module.exports = lookUpProfile;
