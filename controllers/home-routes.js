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
            // render data to template, single-post
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


router.get('/funforum', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('funforum');
})

router.get('/settings', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('settings');
})

router.get('/comments', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('comments');
});

router.get('/single-post', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('single-post');
});

router.get('/create-post', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('create-post');
});

router.get('/forum', (req, res) => {
    console.log(req.session);
    console.log('======================');
    Post.findAll({
      // where: {
      //   user_id: req.session.user_id
      // },
      attributes: [
        'id',
        'title',
        'copy',
        'created_at',
       
      ],
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
          const posts = dbPostData.map(post => post.get({ plain: true }));
          console.log(posts);
          res.render('forum', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete("/:id", (req, res) => {
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

  

//exports router
module.exports = router;
