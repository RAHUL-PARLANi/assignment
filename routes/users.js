var key;
const router = require('express').Router();
let User = require('../models/user.model');
let Exercise = require('../models/exercise.model');
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    //const username = req.body.username;
    //const newUser = new User({username});

    const productCategory = req.body.productCategory;
    const newUser = new User({productCategory});

    newUser.save()
        //.then(() => res.json('User added!'))
        .then(() => res.json('Category added!'))
        .catch(err => res.status(400).json('Error: '+err));
});


router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) => {
    
    User.findById(req.params.id)
    .then(users => (
        Exercise.deleteMany({ productCategory:users.productCategory }).then(function(){
            console.log("Data deleted"); // Success
        }).catch(function(error){
            console.log(error); // Failure
        })
        
        ))
    .catch(err => console.log(res.status(400).json('Error: '+err)));
        
        User.findByIdAndDelete(req.params.id)
        //.then(exercise => res.json('Exercise deleted'))
        .then(users => console.log(res.json('Product deleted')))
        .catch(err => console.log(res.status(400).json('Error: '+err)));
     
});

router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
        .then(users => {
           // exercise.username = req.body.username;
           // exercise.description = req.body.description;
           // exercise.duration = Number(req.body.duration);
            //exercise.date = Date.parse(req.body.date);

            users.productCategory = req.body.productCategory;
         //   exercise.productName = req.body.productName;
         //   exercise.productPrice = Number(req.body.productPrice);
          //  exercise.date = Date.parse(req.body.date);

            users.save()
                //.then(() => res.json('Exercise updated !'))
                .then(() => res.json('Product updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;