import app from '../server.js'
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import express from 'express';
import validateInput from '../shared/validations/signup';

module.exports = {


    create: (req, res) => {
      let { errors, isValid } = validateInput(req.body);

        if (isValid) {
          res.json({ success: true });
        } else {
          res.status(400).json(errors);
        }
      }
};
