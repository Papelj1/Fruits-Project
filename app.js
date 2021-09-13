const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsB", {
    useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"]
      },
    rating:{ 
type: Number,
min: 1,
max: 10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Peach",
    rating: 9,
    review: "Decent"

});

const ananas = new Fruit({
    name: "Ananas",
    rating: 7,
    review: "Nice fruc"
});

ananas.save();
// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});


const Person = mongoose.model("Person", personSchema);


const person = new Person({
    name: "Amy",
    age: 18,
    favouriteFruit: ananas
});

person.save();


// person.save()

Fruit.find(function(err, fruits){

   fruits.forEach(function(fruit){
        console.log(fruit.name)
   });
 mongoose.connection.close();
});










