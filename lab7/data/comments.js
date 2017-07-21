const mongoCollections = require("../config/mongoCollections");

const uuidv4 = require('uuid/v4');
const recipe = mongoCollections.recipes;


let exportedMethods = {
    getAllCommentsFromRecipeID(id) {
        if (id === undefined) return Promise.reject("You must provide an ID");
        return recipe().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((data) => {
                if (data === 'undefined') throw "Recipe not found from RecipeID";
                let recipedata = data.comments;
                recipedata.forEach(function (recipe) {
                    recipe.recipeId = data._id;
                    recipe.recipeTitle = data.title;
                    return recipe;
                });
                return recipedata;
            });
        });
    },

    getCommentsFromCommentId(commentid) {
        if (commentid === undefined) return Promise.reject("You must provide an CommentID");
        return recipe().then((recipeCollection) => {
            return recipeCollection.findOne({ $where: "this.comments.id = '" + commentid + "'" }).then((data) => {
                if (data === 'undefined') throw "Recipe not found from CommentID";
                let recipedata = data.comments.filter(function (comments) {
                    return comments._id == commentid;
                })[0];
                recipedata.recipeId = data._id;
                recipedata.reciipeTitle = data.title;
                return recipedata;
            });
        });
    },
    addComment(id, poster, comment) {
        if (poster === undefined || comment === undefined) return Promise.reject("You must provide an poster and comment");
        return recipe().then((commentCollection) => {
            commentid = uuidv4()
            let addComment = {
                _id: commentid,
                poster: poster,
                comment: comment
            };
            return commentCollection.updateOne({ _id: id }, { $push: { "comments": addComment } }).then(function () {
                return exportedMethods.getCommentsFromCommentId(commentid).then((commentdata) => {
                    return commentdata;
                }, (err) => {
                    return Promise.reject("Cannot add this comment");
                });
            });
        });
    },
    removeComment(commentId) {
        return recipe().then((recipeCollection) => {
            return recipeCollection.updateOne(
                { "comments._id": commentId },
                { $unset: { "comments.$._id": commentId } }
            ).then((deletionInfo) => {
                if (deletionInfo.updatedCount === 0) {
                    throw (`Could not comment with id of ${commentId}`)
                }
            });
        });
    },
    updateComment(recipeId, commentId, updateddata) {
        return this.getCommentsFromCommentId(commentId).then((currentComment) => {
            if (!currentComment) throw "Comment is not found";

            let commentInfo = currentComment;
            if ('poster' in updateddata) {
                commentInfo.poster = updateddata.poster;
            }
            if ('comment' in updateddata) {
                commentInfo.comment = updateddata.comment;
            }
            delete commentInfo['recipeId'];
            delete commentInfo['reciipeTitle'];
            let updateCommentdata = {
                $set: { "comments.$": commentInfo }
            };
            return recipe().then((recipeCollection) => {
                return recipeCollection.updateOne({ "comments._id": commentId }, updateCommentdata).then(() => {
                    return this.getCommentsFromCommentId(commentId);
                });
            });
        });
    }

}

module.exports = exportedMethods;

/*exportedMethods.addComment("a763ec62-239c-4f52-8cf0-3deec8cfffde", "hhhhhh", "hhhhhhh")
    .then(function (get) {
        console.log("----AddOne---");
        console.log(get);
    })

/*exportedMethods.getAllComments("a763ec62-239c-4f52-8cf0-3deec8cfffde")
        .then(function(get){
              console.log("----AllComments---");
              console.log(get);
        })
   
exportedMethods.removeComment("a763ec62-239c-4f52-8cf0-3deec8cfffde")
        .then(function(get){
              console.log("----RemoveComment---");
              console.log(get);
        })
   
exportedMethods.getCommentByCommentId("")
        .then(function(get){
              console.log("----GetComment---");
              console.log(get);
        })
   */
