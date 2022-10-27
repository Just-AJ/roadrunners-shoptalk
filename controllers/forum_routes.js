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
        console.log(dbPostData);
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('forum', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  
  module.exports = router;
  