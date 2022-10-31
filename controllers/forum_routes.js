const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment,  } = require('../models');
const withAuth = require('../utils/auth')

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
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

      order: [['created_at', 'ASC']],

      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username', 'avatar','language']
          }
        },
        {
          model: User,
          attributes: ['username','avatar','language']
        }
      ]
    })
      .then(dbPostData => {
        console.log(dbPostData);
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('forum', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
//   router.delete("/:id", (req, res) => {
//     console.log("id", req.params.id);
//     Post.destroy({
//         where: {
//             id: req.params.id,
//         },
//     })
//         .then((postData) => {
//             if (!postData) {
//                 res.status(404).json({ message: "No post found with this id" });
//                 return;
//             }
//             res.json(postData);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


// GET, to render the edit-post data 
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
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
      if(dbPostData) {
          // serialize data
          const post = dbPostData.get({ plain: true });
          // render homepage handlebars to display html
          res.render('edit-post', { 
              post,
              loggedIn: true 
          });
      } else {
          res.status(404).end();
      }
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
  
});

  module.exports = router;
  