const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const comments = require("./comments");
const uuidv4 = require('uuid/v4');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipesCollection) => {
            return recipesCollection.find({}).project({ _id: 1, title: 1 }).toArray()
        })
    },
    getRecipeById(id) {
        if(!id) return Promise.reject("No id provided");
        return recipes().then((recipesCollection) => {
            return recipesCollection.findOne({ _id: id }).then((recipes) => {
                if (!recipes) throw "Recipe not found";
                return recipes;
            });
        });
    },
    addRecipe(title, ingredients, steps) {
        return recipes().then((recipesCollection) => {
            let newrecipe = {
                 title: title,
                 ingredients: ingredients,
                 steps: steps,
                 comments:[],
                 _id: uuidv4()
            };

            return recipesCollection.insertOne(newrecipe).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipeById(newId);
            });
        });
    },
    removeRecipe(id) {
           if(!id) return Promise.reject("No id provided");
        return recipes().then((recipesCollection) => {
            return recipesCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete recipes with id of ${id}`)
                } else { }
            });
        });
    },

    updateRecipe(id, updateddata) {
           if(!id && !updateddata) 
                return Promise.reject("You have to provide id and data");
            return this.getRecipeById(id).then((currentRecipe)=> {
            let recipedata = {};
            if ('title' in updateddata) {
                recipedata.title = updateddata.title;
            }
            if ('ingredients' in updateddata) {
                recipedata.ingredients = updateddata.ingredients;
            }
            if ('steps' in updateddata) {
                recipedata.steps = updateddata.steps;
            }
            if ('comments' in updateddata) {
                recipedata.comments = updateddata.comments;
            }

            let updateCommand = {
                $set: recipedata
            };
              return recipes().then((recipeCollection) => {
                return recipeCollection.updateOne({ _id: id }, updateCommand).then(() => {
                    return this.getRecipeById(id);
                });
            });
        });
    }
}

module.exports = exportedMethods;
/*
exportedMethods.addRecipe("Pasta", "HIII","Helllooo").then(function (data) {
        console.log("----Add-");
        console.log(data);
    })
 let data = {
    title: "RRRR",
    steps: ['RRRRRRR', 'RRRRR'],
    comments: [{
        _id: "22222221-27c0-4c13-a222-2c12222f2275",
        poster: "Hello",
        comment: "Hii!"
    },
    {
         _id: "22222221-27c0-4c13-a222-2c12222f2275",
        poster: "Hello",
        comment: "Hii!"
       
    }]
};
exportedMethods.updateRecipe("a763ec62-239c-4f52-8cf0-3deec8cfffde",data)
        .then(function(newrecipe){
             console.log("----Update---");
            console.log(newrecipe);
       
    })
exportedMethods.getAllRecipes()
        .then(function(all){
              console.log("----GetAll---");
            console.log(all);
        })

exportedMethods.getRecipeById("a763ec62-239c-4f52-8cf0-3deec8cfffde")
        .then(function(get){
              console.log("----GetOne---");
              console.log(get);
        })
   

exportedMethods.removeRecipe('f10fd0f0-2cba-4cc1-9ca2-7cb854aab4c9').then(() => {
    console.log("------Remove--------");
})*/