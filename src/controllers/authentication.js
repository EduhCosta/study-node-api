'use strict';

// Authentication
import jwt from 'jsonwebtoken';
// Database connection
import connection from 'config/connectionDatabase';

export const login = (req, res, next) => {
  let status = 500, response = '';

  connection.query(`SELECT * FROM users u WHERE u.user = '${req.body.login}'`, 
    (err, results, fields) => {
      if (err) throw err;
      if (results.length <= 0 || results[0].password !== req.body.password) {
        status = 500;
        response = {
          statusCode: '500',
          success: false,
          message: 'User/Password is not exists or is incorrect!'
        };
      } else {
        const id = results[0].id;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300 // expires in 5min
        });
        status = 200;
        response = { 
          auth: true, 
          name: results[0].name,
          token: token
        };
      }
      res.status(status).send(response);
    }
  );
  
};  


export const logout = (req, res) => {
  res.status(200).send({ auth: false, token: null });
}