'user strict';

// Model
import Users, { ShowUser } from 'models/users';
// Utils
import bcrypt from 'bcrypt';

export const createUser = (req, res, next) => {
  const { body } = req;
  const pass = bcrypt.hashSync(body.password, 10);
  Object.assign(body, { password: pass });
  Users.create(body)
    .then(() => {
      res.status(201).send({
        message: 'Usuário criado com sucesso',
        data: body
      });
    })
    .catch(e => {
      res.status(400).send({
        message: e.parent.sqlMessage,
        data: e
      });
    });
};

export const allUsers = (req, res, next) => {
  ShowUser.findAll().then( users => {
    return res.status(200).send({
      message: 'Usuários listados com sucesso',
      data: users
    });
  })
  .catch(e => {
    res.status(400).send({
      message: e.parent.sqlMessage,
      data: e
    });
  });
};

export const user = (req, res, next) => {
  ShowUser.findAll({ where: { id: req.params.id } }).then( user => {
    return res.status(200).send({
      message: 'Usuários listados com sucesso',
      data: user
    });
  })
  .catch(e => {
    res.status(400).send({
      message: e.parent.sqlMessage,
      data: e
    });
  });
};

export const refreshUser = (req, res, next) => {
  ShowUser.update(req.body, { where: { id: req.params.id } }).then( user => {
    return res.status(201).send({
      message: 'Usuário atualizado com sucesso',
      data: user
    });
  })
  .catch(e => {
    res.status(400).send({
      message: e.parent.sqlMessage,
      data: e
    });
  });
};

export const deleteUser = (req, res, next) => {
  Users.destroy({ where: { id: req.params.id } }).then( user => {
    return res.status(200).send({
      message: 'Usuário deletado com sucesso',
      data: user
    });
  })
  .catch(e => {
    res.status(400).send({
      message: e.parent.sqlMessage,
      data: e
    });
  });
};