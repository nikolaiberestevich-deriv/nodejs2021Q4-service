const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const addUser = 
({id,name,login,password}) =>  usersRepo.addUser({id,name,login,password})
;

module.exports = { getAll,addUser };
