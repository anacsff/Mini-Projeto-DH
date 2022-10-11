const indexController = {
    index: (req, res) =>{
        return res.render("landing-page", {title: "Apollo Tech"});
    },
};

module.exports = indexController;