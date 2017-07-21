const express = require('express');
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;

router.get("/", (req, res) => {
    recipesData.getAllRecipes().then((recipeList) => {
        res.json(recipeList);
    }).catch((error) => {
        // Not found!
        res.status(404).json({message: "Recipe not found"});
    });
});

router.get("/:id", (req, res) => {
    recipesData.getRecipeById(req.params.id).then((recipes) => {
        res.json(recipes)
    }).catch((error) => {
        res.status(404).json({message: "Recipe not found"});
    });
});


router.post("/", (req, res) => {
    let data=req.body;
    recipesData.addRecipe(data.title,data.ingredients,data.steps)
        .then((newRecipe)=>{
             res.json(newRecipe);   
        }).catch((error)=>{
            res.status(500).send();
        });
});

router.put("/:id", (req, res) => {
    let data=req.body;
    let getrecipedata = recipesData.getRecipeById(req.params.id);
    getrecipedata.then((recipedata) => {
        if (!recipedata) {
            return res.status(404).json({ message: "Recipe not found" });
        }
    });
    return recipesData.updateRecipe(req.params.id, data)
        .then((updateddata) => {
            res.json(updateddata);
        }, () => {
            res.sendStatus(500).send();
        });
});

router.delete("/:id", (req, res) => {
    return recipesData.removeRecipe(req.params.id)
    .then(()=>{
        res.status(200).send();
    }).catch((error) => {
        res.status(404).json({message: "Recipe not found"});
    });
   
});

module.exports = router;