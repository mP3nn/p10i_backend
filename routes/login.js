const express = require('express')
const router = express.Router()
const cors = require('cors')

router.post('/', cors(), (req, res) => {
    let db = req.app.locals.db

    const {User, Pass} = req.body

    if(User == 'marco' && Pass == 'test'){
        res.send('Ehy!')
    }else{
        res.status(403)
        res.send('Unauthorized')
    }
})

module.exports = router