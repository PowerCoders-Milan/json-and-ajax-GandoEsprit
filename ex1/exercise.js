var object = {
    id: 1,
    name: "Gando",
    title: "this is a note",
    content: "This is the amazing content of the note!"
  }

var jsonObject = JSON.stringify(object);

console.log(jsonObject);

var jsObject = JSON.parse(jsonObject);

console.log(jsObject);