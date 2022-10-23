const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth")


router.get("/", (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'copy', 'created_at'],
         // JOIN tables
         include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
        {
            model: User,
            attributes: ["username"],
        }
    ]

    }).then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res)=> {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'copy', 'created_at'],
         // JOIN tables
         include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
        {
            model: User,
            attributes: ["username"],
        }
    ]

    }).then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    });
    
router.post("/", withAuth, (req, res) => {
    Post.create({
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
    Post.update(
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
    Post.destroy({
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