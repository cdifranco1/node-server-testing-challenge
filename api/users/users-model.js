const db = require('../../database/db-config')

module.exports = {
  getByID,
  getUsers,
  addUser,
  remove
}

function getByID(id){
  return (
    db('users')
      .where({ id })
      .first()
  )
}

async function remove(id){
  const deletedUser = await getByID(id)

  return db('users')
          .del()
          .where({ id })
          .then(count => {
            if (count){
              console.log(count)
              return deletedUser
            }
          })  
}
   

function getUsers(){
  return db('users')
}

function addUser(user){
  return (
    db('users')
      .insert(user)
      .then(([id]) => {
        console.log(id)
        return getByID(id)
      })
  )
}
