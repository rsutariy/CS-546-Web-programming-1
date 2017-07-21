const express = require('express');
const router = express.Router();
const data = require("../data");
const commentsData = data.comments;

router.get("/recipe/:recipeId", (req, res) => {
    commentsData.getAllCommentsFromRecipeID(req.params.recipeId).then((commentscollection) => {
       res.json(commentscollection);
        
    }).catch((error) => {
        res.status(404).json({message: "Recipe not found"});
    });
});

router.get("/:commentId", (req, res) => {
   
    commentsData.getCommentsFromCommentId(req.params.commentId).then((commentList) => {
        res.json(commentList);
    }).catch((error) => {
        res.status(404).json({message: "Comment not found"});
    }); 
});

router.post("/:recipeId", (req, res) => {
    let data=req.body;
    commentsData.addComment(req.params.recipeId,data.poster,data.comment)
    .then((addcomment)=>{
        res.json(addcomment);
    }).catch((e) => {
            res.status(500).json({ error: e });
    });
    
});

router.put("/:recipeId/:commentId", (req, res) => {
   let data=req.body;
    return commentsData.updateComment(req.params.recipeId,req.params.commentId,data)
    .then((data)=>{
        res.json(data);
    }).catch((e) => {
            res.status(500).json({ error: e });
    });
});

router.delete("/:id", (req, res) => {
    return commentsData.removeComment(req.params.id)
        .then((data)=>
        {
            res.sendStatus(200);
        }).catch((error) => {
        // Not found!
        res.status(404).json({message: "Comment not found"});
    });
});

module.exports = router;