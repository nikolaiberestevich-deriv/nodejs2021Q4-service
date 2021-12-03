const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');


router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) =>{try {
  console.log("req.body=",req.body);
  const {login,password,name} =req.body

   const newUserWithID =User.createUser(name,login,password)
   
    usersService.addUser({
      id:newUserWithID.id,
      name:newUserWithID.name,
      login:newUserWithID.login,
      password:newUserWithID.password
    });
   const responseUser={
     id:"underfined",
     name:newUserWithID.name,
     login:newUserWithID.login,
   }
  // map user fields to exclude secret fields like "password"
  res.writeHead(201, {
    'Content-Type': '/json/',
} )
res.end(JSON.stringify( responseUser))
}catch{
  res.writeHead(400);
  res.end(JSON.stringify({ message:" server can't add user" }));
}
});

module.exports = router;
