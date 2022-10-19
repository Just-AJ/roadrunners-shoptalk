// import express router 
const router = require('express').Router();

// import models 
const { Post, User, Comment } = require('../models');


//============================= HOMEPAGE ROUTES =============================//
router.get('/', (req,res) => {
    console.log('======================');

    // find all posts by a user 
    Post.findAll({
        attributes: ['id', 'title', 'copy', 'created_at'],

        // JOIN tables
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id']
            }
        ]
    })
})


//exports router
module.exports = router;
