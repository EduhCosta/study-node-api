'use strict';

import jwt from 'jsonwebtoken';

export default (req, res, next) => {

  const token = req.headers['authorization'];
  
  if (!token) return res.status(401).send({ 
    auth: false, 
    message: 'No token provided.' 
  });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) 
      return res.status(500).send({ 
        auth: false, 
        message: 'Failed to authenticate token.' 
      });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}