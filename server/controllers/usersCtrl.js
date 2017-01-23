var  app = require('../server.js');

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import validateInput from '../shared/validations/signup';


module.exports = {


    create: (req, res) => {
      var  db = app.get('db');
      let { errors, isValid } = validateInput(req.body);
      console.log(req.body);
        if (isValid) {
          // db.create_user(req.body)
          res.json({ success: true });
        } else {
          res.status(400).json(errors);
        }
      }
};
