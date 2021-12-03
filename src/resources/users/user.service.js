const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserById = (id) => usersRepo.getById(id);

const addUser = ({id,name,login,password}) =>  usersRepo.addUser({id,name,login,password})
;


module.exports = { getAll,addUser,getUserById};
