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
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
       
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }))
        // render homepage handlebars to display html
        res.render('homepage', { 
            posts,
            loggedIn: req.session.loggedIn 
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});


// GET , create a single-post 
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 
            'title',
            'copy',
            'created_at' 
        ],

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
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            // console.log("singlepost", singlePostData);
            // serialize data
            const post = dbPostData.get({ plain: true })
            // render data to template, single-psot
            res.render('single-post', { 
                post,
                loggedIn: req.session.loggedIn 
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });

});


// GET , get and render login handlebars page 
router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
});


// GET , get and render signup handlebars page 
router.get('/signup', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('signup');
})


router.get('/forum', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('forum');
})
//exports router
module.exports = router;
