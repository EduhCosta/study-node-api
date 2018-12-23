'use strict';

// Authentication
import jwt from 'jsonwebtoken';
import Users from 'models/users';
// Utils
import bcrypt from 'bcrypt';

export const login = (req, res, next) => {
  let status = 500, response = '';
  Users.find({ where: { nickName: req.body.login } }).then(user => {
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      status = 403;
      response = {
        statusCode: '403',
        success: false,
        message: 'User/Password is not exists or is incorrect!'
      };
    } else {
      const id = user.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      status = 200;
      response = { 
        auth: true, 
        name: user.name,
        token: token
      };
    }
    return  res.status(status).send(response);
  })
  .catch(e => {
    res.status(400).send({
      message: e.parent.sqlMessage,
      data: e
    });
  });
};  


export const logout = (req, res) => {
  res.status(200).send({ auth: false, token: null });
}