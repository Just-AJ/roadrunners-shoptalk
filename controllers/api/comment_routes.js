const router = require('express').Router();
const { Comment } = require('../../models')
const withAuth = require('../../utils/auth');

// find all comments
router.get('/', (req, res)=> {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// post a comment route
router.post('/', (req,res)=> {
    Comment.create(
        {
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        }
    ).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});


// delete a comment route
router.delete('/:id', (req,res)=> {
    Comment.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbCommentData => {
        if(!dbCommentData){
            res.status(404).json({message: ' No comment found with this ID !'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// edit comment
router.put('/:id', (req, res) =>{
    Comment.update(
        {
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        },
        
        {
            where: {
            id: req.params.id
        }
    }
    )
    .then((dbCommentData) => {
            if (!dbCommentData) {
                res.status(404).json({ message: "No dbComment found with this id" });
                return;
            }
            res.json(dbCommentData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})



// export routes
module.exports = router;