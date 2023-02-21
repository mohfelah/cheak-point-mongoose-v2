const Person = require("../Model/personModel")

// create and save a model
let person = new Person({
    name : "mohamed",
    age : 27,
    favoriteFoods : ["pasta", "lazania", "burritos"]
})

const createAndSavePerson = async() =>{
    try {
        await person.save()
    } catch (error) {
        console.log(error)
    }
}

//create Many Record
let arrayOfPeople = [
    {
        name : "Ali",
        age : 32,
        favoriteFoods : ["pizza", "chicken","pasta"]
    },{
        name : "Aymen",
        age : 18,
        favoriteFoods : ["pizza"]
    },{
        name : "Ahmed",
        age : 5,
        favoriteFoods : ["couscous","fish"]
    },{
        name : "yesmine",
        age : 25,
        favoriteFoods : ["burritos", "pasta","banana"]
    },{
        name : "Maryem",
        age : 21,
        favoriteFoods : ["pasta", "pizza"]
    }
]
const createManyPeople = async() => {
    try {
        await Person.create(arrayOfPeople)
    } catch (error) {
        console.log(error)
    }
}

//Use model.find to search 
const search = async(searchByName) =>{
    try {
        const data = await Person.find({name : `${searchByName}`})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//use model.findOne to return to return a single document
const searchByFood = async(searchByFood) =>{
    try {
        const data = await Person.findOne({favoriteFoods : {$all : [`${searchByFood}`]}})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//Use model.findbyid() to search 
const searchById = async(searchById) =>{
    try {
        const data = await Person.findById(`${searchById}`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//Updates by running Find , Edit , then save 
const updatePerson = async(personId) =>{
    try {
        const data = await Person.findById(`${personId}`)
        data.favoriteFoods.push("hamburger")
        data.save()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
//Perform New update using model.findOneandupdate
const newUpdatePerson = async(personName) =>{
    try {
        const data = await Person.findOneAndUpdate({name : `${personName}`},{age : 20},{new : true})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//delete one by findByIdAndDelete()
const removePerson = async(personId) =>{
    try {
        const data = await Person.findByIdAndDelete(`${personId}`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//delete Many person 
const removeManyPeople = async(personName) =>{
    try {
        const data = await Person.deleteMany({name :`${personName}`})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//chain search query helpers 
const chainSearch = async() =>{
    try {
        const data = await Person.find({favoriteFoods : {$all :["pizza"]}})
        .sort({name : 1})
        .limit(2)
        .select("-age")
        .exec()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}





module.exports ={createAndSavePerson, createManyPeople,search,searchByFood,searchById,updatePerson,newUpdatePerson,removePerson,removeManyPeople,chainSearch}