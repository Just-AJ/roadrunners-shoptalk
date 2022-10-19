const router = require('express').Router();

const commentRoutes = require('./comment_routes');

router.use('/comments', commentRoutes)

module.exports = router;