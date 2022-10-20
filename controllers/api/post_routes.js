const router = require("express").Router();
const { User, post } = require("../../models");
const withAuth = require("../../utils/auth")


router.get("/", (req, res) => {
    post.findAll({
        include: [{
            model: User,
            attributes: ["username"],
        }]

    }).then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.post("/", (req, res) => {
    post.create({
        title: req.body.title,
        copy: req.body.copy,
        user_id: req.session.user_id,
    })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put("/:id", withAuth, (req, res) => {
    console.log(req.body.copy)
    post.update(
        {
            title: req.body.title,
            copy: req.body.copy,
            user_id: req.session.user_id,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((postData) => {
            if (!postData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.delete("/:id", withAuth, (req, res) => {
    console.log("id", req.params.id);
    post.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;