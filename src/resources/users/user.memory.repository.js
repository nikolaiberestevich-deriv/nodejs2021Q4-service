const users=[]

const getAll=()=>users
;
const getById = async (id) => 
  users.filter(user=>user.id===id)
  
const addUser = async ({id,name,password,login}) => 
 {
  users.push({id,name,login,password})
   Promise.resolve({id,name,login,password})
  }
;

module.exports = { getAll,getById,addUser };
