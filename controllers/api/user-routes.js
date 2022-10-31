// import Router 
const router = require('express').Router();

// import models 
const { User, Post, Comment } = require('../../models');

//============================= USER API ROUTES =============================//

// GET, get all users 
router.get('/', (req, res) => {
    User.findAll({
        // PASSWORD protection
        attributes: {
            exclude: ['password']
        }
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});


// GET, get users by ID 
router.get('/:id', (req, res) => {
    User.findOne({
        // PASSWORD protection
        attributes: {
            exclude: ['password']
        },
        // get the id parameter
        where: { id: req.params.id }
    })

        .then(userData => {
            if (!userData) {
                res.status(404).res.json({ message: 'No user was found with this id !' });
                return;
            }

            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});
// route for language
router.get('/lang/:id', (req, res) => {
    User.findOne({
        // language
        attributes: {
            include: ['language']
        },
        // get the id parameter
        where: { id: req.params.id }
    })

        .then(userData => {
            if (!userData) {
                res.status(404).res.json({ message: 'No user was found with this id !' });
                return;
            }

            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// POST, create a new user 
router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        avatar: req.body.avatar,
        language: req.body.language
    })
    .then(userData => {
        req.session.save(() => {
            // session variables 
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.avatar = userData.avatar;
            req.session.language = userData.language;
            req.session.loggedIn = true;
        })
        res.json(userData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST, user login authentication
router.post('/login', (req,res) => {
    User.findOne({ where: { username: req.body.username } })
    .then(userData => {
        if(!userData) {
            res.status(400).json({ message: 'Username cannot be found! ' })
            return;
        }

        // checking to see if the user typed in correct password using checkPassword.
        const confirmedPw = userData.checkPassword(req.body.password);
        
        // if not correct, notify the user of incorrect password
        if(!confirmedPw) {
            res.status(400).json({ message: 'Incorrect Password, please try again! ' })
            return;
        }

        req.session.save(() => {
            // session variables
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.avatar = userData.avatar;
            req.session.language = userData.language;
            req.session.loggedIn = true;
      
           
        // if correct, log user in and notify the user
        res.json({ user: userData, message: 'You are now logged in! Welcome to the Tech-Blog!'});
        });
    });
});

//POST, allow user to logout 
router.post('/logout', (req,res) => {
    if (req.session.loggedIn) {
        // destroy the session of a loggedIn user 
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

// PUT, UPDATE user by ID 
router.put('/:id', (req,res) => {
    // expecting { username: 'Goat20', password: 'password' } // password is a min of 8 characters.
   
    // passing the req.body to only update what is being passed through
    const body = req.body;
    User.update(body, { 
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
        } 
        res.json(userData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// DELETE, DESTROY user by ID 
router.delete('/:id', (req,res) => {
    User.destroy({ 
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'No user found with this id' });
        } 
        res.json(userData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



// exports router 
module.exports = router;