const { model } = require('mongoose');
const router = require('express').Router();

router.get('/' , (req, res)=> {
    res.render('Login/login.html');
})

module.exports = router;