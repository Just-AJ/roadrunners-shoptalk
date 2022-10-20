// import Router 
const router = require('express').Router();

// import api routes and prefix
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post_routes');
const commentRoutes = require('./comment_routes');

// use api routes 
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// export router 
module.exports = router;