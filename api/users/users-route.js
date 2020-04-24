const express = require('express')
const Users = require('./users-model')

const router = express.Router()


router.get('/', async (req, res) => {
  console.log("hitting endpoint")

  try{
    const users = await Users.getUsers()
  
    res.status(200).json(users)

  } catch(err){

    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try{
    const users = await Users.getByID()
  
    res.status(200).json(users)

  } catch(err){
    res.status(500).json({ error: err.message })
  }
})

router.post('/', async (req, res) => {
  try{
    const addedUser = await Users.addUser(req.body)
  
    res.status(200).json(addedUser)

  } catch(err){
    res.status(500).json({ error: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try{

    const removedUser = Users.remove(id)
  
    res.status(200).json(user)

  } catch(err){
    res.status(500).json({ error: err.message })
  }
})


module.exports = router