const express = require('express')
const router = express.Router()
const cors = require('cors')

router.get('/:coll/:id', cors(), async (req, res) => {
    let db = req.app.locals.db
    let result = await db.db('personal-website').collection(req.params.coll).findOne({'_id': req.params.id})
    if (result){
        res.send(result)
    }else{
        res.status(404)
        res.send('No results found.')
    }
})

module.exports = router
