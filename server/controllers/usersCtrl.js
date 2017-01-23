import dom from './../server.js';
// import massive from 'massive';
// import config from '../../config';
// var  massiveInstance = massive.connectSync({connectionString: config.connectionString
// });
//
// app.set('db', massiveInstance);
// var db = app.get('db');

// import Validator from 'validator';
// import isEmpty from 'lodash/isEmpty';
//
// import validateInput from '../shared/validations/signup';
import express from 'express';
let router = express.Router();

router.post('/', (req, res) => {
  const {username, password, timezone, email} = req.body;
  dom.create_user([username, password, timezone, email], function (err, result) {
    if (err) {
      res.status(500).send(err)
    }else {
      res.json({ success: true });
    }
})
})

// module.exports = {


    // Create: (req, res) => {
    //
    //   // let { errors, isValid } = validateInput(req.body);
    //
    //   const {username, password, timezone, email} = req.body;
    //   db.create_user([username, password, timezone, email], function (err, result) {
    //     if (err) {
    //       res.status(500).send(err)
    //     }else {
    //       res.json({ success: true });
    //     }
    //
    //   })
        // if (isValid) {
        //
        //
        // }
        // else {
        //   res.status(400).json(errors);
        // }
      // }
      //
export default router;
