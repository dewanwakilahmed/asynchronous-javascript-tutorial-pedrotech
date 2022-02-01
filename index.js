var name = "Pedro";
console.log(name);

name = "John";
console.log(name); // works instantly

var listOfMovies = fetch("url.com/movies"); // does not work instantly
console.log(listOfMovies); // will return nothing

const event = new Promise((resolve, reject) => {
  var name = "Tech";
  if (name == "Pedro") {
    resolve(name);
  } else {
    reject("Name was not Pedro, name was " + name);
  }
});

event
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("PROMISED FINISHED!");
  });

const axios = require("axios");

const data = axios.get("https://cat-fact.herokuapp.com/facts");

console.log(data); // Promise { <pending> }

data
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise resolved!");
  });

// async function fetchData () {}

const fetchData = async () => {
  try {
    const data = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(data.data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("FETCHDATA RESOLVED!");
  }
};

fetchData();
