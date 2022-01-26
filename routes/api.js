const express = require('express')
const router = express.Router()

router.get('/:coll/:id', async (req, res) => {
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
