import express from 'express'

const router = express.Router()

router.get('/all', (req, res) => {
    res.send("All Teachers")
})
router.post('/create', (req, res) => {
    res.send("Sign in Teacher")
})
router.put('/update', (req, res) => {
    res.send("Update Teacher")
})
router.delete('/delete', (req, res) => {
    res.send("Remove Teachers")
})

export default router

