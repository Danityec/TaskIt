const Session = require('../models/session');

const checkAuthenticated = (req, res, next) => {
    console.log("dddd")
    console.log(req.headers.user)

    Session.findOne({ id: req.headers.user })
        .then(docs => {
            console.log('checkAuthenticated = good!!')
            console.log(docs)
            if (docs !== [])
                next()
            else
                res.status(401).send('user is unauthenticated')
        })
        .catch(err => console.log(err))
}

module.exports = {
    checkAuthenticated
}