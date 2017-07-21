const palindromecheckerRoutes = require("./palindromechecker");

const constructorMethod = (app) => {
    app.use("/", palindromecheckerRoutes);

    app.use("*", (req, res) => {
        res.redirect("/");
    })
};

module.exports = constructorMethod;